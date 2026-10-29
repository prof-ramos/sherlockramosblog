import path from 'node:path'
import { randomUUID } from 'node:crypto'
import type { CollectionConfig } from 'payload'
import { ownerOnly } from '../access'

function references(value: unknown, id: number | string): boolean {
  if (Array.isArray(value)) return value.some(v => references(v, id))
  if (!value || typeof value !== 'object') return false
  const node = value as Record<string, unknown>
  const relationID = typeof node.value === 'object' && node.value ? (node.value as { id?: unknown }).id : node.value
  if (node.type === 'upload' && node.relationTo === 'media' && String(relationID) === String(id)) return true
  return Object.values(node).some(v => references(v, id))
}

export const Media: CollectionConfig = {
  slug: 'media', labels: { singular: 'Imagem', plural: 'Imagens' },
  access: { read: () => true, create: ownerOnly, update: ownerOnly, delete: ownerOnly },
  admin: { description: 'Imagens são públicas por endereço, mesmo quando usadas em rascunhos.' },
  fields: [{ name: 'alt', label: 'Descrição da imagem', type: 'text', required: true },
    { name: 'caption', label: 'Legenda', type: 'text' }],
  hooks: {
    beforeOperation: [({ args, operation, req }) => {
      // Defina o nome antes de gerar os tamanhos. O adaptador Blob, com
      // addRandomSuffix, altera data.filename em uploads paralelos de miniaturas.
      if ((operation === 'create' || operation === 'update') && req.file) {
        req.file.name = `${randomUUID()}${path.extname(req.file.name).toLowerCase()}`
      }
      return args
    }],
    beforeDelete: [async ({ id, req }) => {
    let page = 1
    while (true) {
      const current = await req.payload.find({ collection: 'posts', depth: 0, overrideAccess: true, page, limit: 50, req })
      for (const doc of current.docs) {
        if (String(doc.cover) === String(id) || references(doc.content, id)) throw new Error('Imagem referenciada por uma postagem. Remova a referência antes de excluir.')
      }
      if (!current.hasNextPage) break
      page++
    }
    page = 1
    while (true) {
      const versions = await req.payload.findVersions({ collection: 'posts', depth: 0, overrideAccess: true, page, limit: 50, req })
      for (const doc of versions.docs) {
        if (String(doc.version.cover) === String(id) || references(doc.version.content, id)) throw new Error('Imagem referenciada por uma postagem ou versão. Remova a referência antes de excluir.')
      }
      if (!versions.hasNextPage) break
      page++
    }
  }] },
  upload: {
    staticDir: process.env.MEDIA_DIR || path.resolve('.data/media'),
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
    resizeOptions: { width: 1600, withoutEnlargement: true },
    formatOptions: { format: 'webp', options: { quality: 82 } },
    adminThumbnail: 'thumbnail',
    imageSizes: [{ name: 'thumbnail', width: 320, formatOptions: { format: 'webp', options: { quality: 75 } } }],
  },
}
