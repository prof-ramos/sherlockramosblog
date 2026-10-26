import { readFile, realpath } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import type { Post } from '../src/payload-types'
import { remapReferences } from '../src/snapshot'
import { closePayload } from '../src/shutdown'

const source = process.argv.find(a => a.startsWith('--source='))?.slice(9)
if (!source || !process.argv.includes('--apply')) throw new Error('Use --source=pasta-da-exportacao --apply em um banco vazio.')
const base = await realpath(source)
const snapshot = JSON.parse(await readFile(path.join(base, 'content.json'), 'utf8'))
if (snapshot.format !== 'sherlock-cms-1' || !Array.isArray(snapshot.posts) || !Array.isArray(snapshot.tags) || !Array.isArray(snapshot.media) || !Array.isArray(snapshot.drafts)) throw new Error('Formato de exportação inválido.')
// Confira todos os arquivos antes de escrever no banco de destino.
for (const image of snapshot.media) {
  if (typeof image.file !== 'string' || path.basename(image.file) !== image.file) throw new Error('Caminho inválido.')
  const file = await realpath(path.join(base, 'media', image.file))
  if (!file.startsWith(base + path.sep)) throw new Error('Arquivo fora da exportação.')
  const buffer = await readFile(file)
  if (createHash('sha256').update(buffer).digest('hex') !== image.sha256) throw new Error('Imagem com checksum divergente.')
}
const payload = await getPayload({ config })
try {
  for (const collection of ['posts', 'tags', 'media'] as const) if ((await payload.count({ collection })).totalDocs) throw new Error(`Destino não vazio: ${collection}. Nenhum conteúdo foi removido.`)
  const tagMap = new Map<number, number>()
  const imageMap = new Map<number, number>()
  const postMap = new Map<number, number>()
  for (const tag of snapshot.tags) {
    const doc = await payload.create({ collection: 'tags', data: { name: tag.name, slug: tag.slug } })
    tagMap.set(tag.id, doc.id)
  }
  for (const image of snapshot.media) {
    const doc = await payload.create({ collection: 'media', filePath: path.join(base, 'media', image.file), data: { alt: image.alt, caption: image.caption } })
    imageMap.set(image.id, doc.id)
  }
  function data(post: Post) {
    const cover = post.cover ? imageMap.get(Number(post.cover)) : undefined
    if (post.cover && !cover) throw new Error('Capa ausente na exportação.')
    return { title: post.title, slug: post.slug, description: post.description,
      content: remapReferences(post.content, { media: imageMap, tags: tagMap, posts: postMap }) as Post['content'], publishedAt: post.publishedAt,
      _status: post._status, importHash: post.importHash,
      cover,
      tags: post.tags?.map(id => { const mapped = tagMap.get(Number(id)); if (!mapped) throw new Error('Tag ausente.'); return mapped }),
    }
  }
  // Primeiro aloque todos os IDs, inclusive para rascunhos incompletos. Nenhum
  // placeholder fica público enquanto relações e conteúdo são restaurados.
  for (const post of snapshot.posts as Post[]) {
    const doc = await payload.create({ collection: 'posts', draft: true, data: {
      title: post.title, slug: post.slug, _status: 'draft', publishedAt: post.publishedAt,
    } })
    postMap.set(post.id, doc.id)
  }
  for (const post of snapshot.posts as Post[]) {
    const id = postMap.get(post.id)!
    await payload.update({ collection: 'posts', id, draft: post._status !== 'published', data: data(post) })
    const draft = (snapshot.drafts as Post[]).find(d => d.id === post.id)
    if (draft && JSON.stringify(data(draft)) !== JSON.stringify(data(post))) await payload.update({ collection: 'posts', id, draft: true, data: data(draft) })
  }
  console.log(`Restauração concluída: ${snapshot.posts.length} posts, ${snapshot.tags.length} tags, ${snapshot.media.length} imagens.`)
} finally { await closePayload(payload) }
