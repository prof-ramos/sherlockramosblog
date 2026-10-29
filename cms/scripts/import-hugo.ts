import { createHash } from 'node:crypto'
import { readdir, readFile, realpath } from 'node:fs/promises'
import path from 'node:path'
import { getPayload } from 'payload'
import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import config from '../src/payload.config'
import { localImagePath, parseHugo } from '../src/migration'
import { closePayload } from '../src/shutdown'

const sourceDir = path.resolve(process.argv.find(a => a.startsWith('--source='))?.slice(9) || '../content/posts')
const staticDir = path.resolve(process.argv.find(a => a.startsWith('--static='))?.slice(9) || '../static')
const apply = process.argv.includes('--apply')
const files = (await readdir(sourceDir, { withFileTypes: true })).filter(f => f.isFile() && f.name.endsWith('.md'))
const unexpected = (await readdir(sourceDir, { withFileTypes: true })).filter(f => f.isDirectory())
if (unexpected.length) throw new Error('Pastas de posts/bundles exigem revisão antes da importação.')
// Valide o lote inteiro antes de iniciar gravações.
const input = await Promise.all(files.map(async file => {
  const raw = await readFile(path.join(sourceDir, file.name), 'utf8')
  const post = parseHugo(raw, file.name)
  const images = [...post.markdown.matchAll(/^!\[([^\]]*)\]\(([^\s)]+)\)\s*$/gm)]
  const remaining = post.markdown.replace(/^!\[([^\]]*)\]\(([^\s)]+)\)\s*$/gm, '')
  if (/!\[/.test(remaining)) throw new Error(`Imagem inline ou sintaxe não suportada: ${file.name}`)
  const resolvedImages = await Promise.all(images.map(async image => {
    const location = localImagePath(image[2], staticDir)
    const real = await realpath(location)
    const base = await realpath(staticDir)
    if (!real.startsWith(base + path.sep)) throw new Error('Imagem fora da pasta static.')
    const buffer = await readFile(real)
    const sharp = (await import('sharp')).default
    const metadata = await sharp(buffer).metadata()
    if (!['jpeg', 'png', 'webp'].includes(metadata.format || '') || buffer.length > 3 * 1024 * 1024) throw new Error('Imagem não suportada ou maior que 3 MB.')
    return { location: real, alt: image[1], match: image[0] }
  }))
  return { post, images: resolvedImages, hash: createHash('sha256').update(raw).digest('hex') }
}))
if (new Set(input.map(p => p.post.slug)).size !== input.length) throw new Error('Slugs duplicados no lote.')
console.log(`Prévia: ${input.length} postagem(ns), ${input.filter(p => p.post.draft).length} rascunho(s), ${input.reduce((n, p) => n + p.images.length, 0)} imagem(ns).`)
if (!apply) {
  console.log('Nenhuma gravação. Use --apply para importar.')
} else {
  const payload = await getPayload({ config })
  try {
    const editorConfig = await editorConfigFactory.default({ config: payload.config })
    // Evite sobrescrever edições do CMS e conflitos de slug antes de importar.
    for (const item of input) {
      const existing = (await payload.find({ collection: 'posts', draft: true, where: { slug: { equals: item.post.slug } }, limit: 1 })).docs[0]
      if (existing && existing.importHash !== item.hash) throw new Error(`Postagem já existe ou fonte alterada: ${item.post.slug}. Revise no CMS.`)
    }
    let imported = 0
    for (const { post, images, hash } of input) {
      if ((await payload.find({ collection: 'posts', draft: true, where: { slug: { equals: post.slug } }, limit: 1 })).totalDocs) continue
      const tags: number[] = []
      for (const name of post.tags) {
        const slug = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        if (!slug) throw new Error('Tag sem endereço válido.')
        const existing = (await payload.find({ collection: 'tags', where: { name: { equals: name } }, limit: 1 })).docs[0]
        const tag = existing || await payload.create({ collection: 'tags', data: { name, slug } })
        tags.push(tag.id)
      }
      const content = convertMarkdownToLexical({ editorConfig, markdown: post.markdown })
      if (images.length) {
        const children: typeof content.root.children = []
        let rest = post.markdown
        for (const image of images) {
          const index = rest.indexOf(image.match)
          children.push(...convertMarkdownToLexical({ editorConfig, markdown: rest.slice(0, index) }).root.children)
          const media = await payload.create({ collection: 'media', filePath: image.location, data: { alt: image.alt || 'Imagem da postagem' } })
          children.push({ type: 'upload', version: 3, relationTo: 'media', value: media.id, fields: {} } as (typeof children)[number])
          rest = rest.slice(index + image.match.length)
        }
        children.push(...convertMarkdownToLexical({ editorConfig, markdown: rest }).root.children)
        content.root.children = children
      }
      await payload.create({ collection: 'posts', data: {
        title: post.title, slug: post.slug, description: post.description, content, tags,
        publishedAt: post.publishedAt, _status: post.draft ? 'draft' : 'published', importHash: hash,
      } })
      imported++
    }
    console.log(`Importadas: ${imported}. Já presentes: ${input.length - imported}.`)
  } finally { await closePayload(payload) }
}
