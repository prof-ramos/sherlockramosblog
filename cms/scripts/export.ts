import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { closePayload } from '../src/shutdown'

const target = path.resolve(process.argv.find(a => a.startsWith('--output='))?.slice(9) || `exports/${new Date().toISOString().replace(/[:.]/g, '-')}`)
await mkdir(path.join(target, 'media'), { recursive: true, mode: 0o700 })
const payload = await getPayload({ config })
try {
  const posts = await payload.find({ collection: 'posts', pagination: false, depth: 0 })
  const drafts = await payload.find({ collection: 'posts', pagination: false, depth: 0, draft: true })
  const tags = await payload.find({ collection: 'tags', pagination: false, depth: 0 })
  const media = await payload.find({ collection: 'media', pagination: false, depth: 0 })
  const files = []
  for (const doc of media.docs) {
    if (!doc.filename || path.basename(doc.filename) !== doc.filename) throw new Error('Nome de mídia inválido.')
    let buffer: Buffer
    if (doc.url?.startsWith('https://')) {
      const url = new URL(doc.url)
      if (!url.hostname.endsWith('.blob.vercel-storage.com')) throw new Error('Origem de mídia não autorizada.')
      const response = await fetch(url, { redirect: 'error' })
      if (!response.ok) throw new Error(`Falha ao exportar imagem ${doc.id}: HTTP ${response.status}`)
      buffer = Buffer.from(await response.arrayBuffer())
    } else {
      buffer = await readFile(path.join(process.env.MEDIA_DIR || '.data/media', doc.filename))
    }
    const filename = `${doc.id}-${doc.filename}`
    await writeFile(path.join(target, 'media', filename), buffer, { mode: 0o600, flag: 'wx' })
    files.push({ id: doc.id, file: filename, alt: doc.alt, caption: doc.caption,
      sha256: createHash('sha256').update(buffer).digest('hex') })
  }
  await writeFile(path.join(target, 'content.json'), JSON.stringify({ format: 'sherlock-cms-1',
    exportedAt: new Date().toISOString(), posts: posts.docs, drafts: drafts.docs, tags: tags.docs, media: files,
  }, null, 2), { mode: 0o600, flag: 'wx' })
  console.log(`Exportação concluída: ${posts.totalDocs} posts, ${tags.totalDocs} tags, ${files.length} imagens em ${target}`)
} finally { await closePayload(payload) }
