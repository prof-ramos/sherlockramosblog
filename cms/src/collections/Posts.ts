import type { CollectionConfig } from 'payload'
import { isAdmin, ownerOnly, ownerOrPublished } from '../access'

export const Posts: CollectionConfig = {
  slug: 'posts', labels: { singular: 'Postagem', plural: 'Postagens' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', '_status', 'publishedAt'],
    preview: (doc) => `/preview/${doc.id}`,
    livePreview: { url: ({ data }) => `/preview/${data.id}` },
  },
  access: { create: ownerOnly, update: ownerOnly, delete: ownerOnly,
    read: ownerOrPublished, readVersions: ownerOnly },
  versions: { drafts: { autosave: { interval: 3000 } }, maxPerDoc: 30 },
  fields: [
    { name: 'title', label: 'Título', type: 'text', required: true },
    { name: 'slug', label: 'Endereço', type: 'text', required: true, unique: true,
      validate: (value: string | null | undefined) => !value || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) || 'Use letras minúsculas, números e hífens.' },
    { name: 'description', label: 'Resumo', type: 'textarea', maxLength: 300 },
    { name: 'cover', label: 'Imagem de capa', type: 'upload', relationTo: 'media' },
    { name: 'content', label: 'Texto', type: 'richText', required: true },
    { name: 'tags', label: 'Tags', type: 'relationship', relationTo: 'tags', hasMany: true },
    { name: 'publishedAt', label: 'Data da publicação', type: 'date', required: true,
      defaultValue: () => new Date().toISOString(), admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } } },
    { name: 'importHash', type: 'text', admin: { hidden: true }, access: { read: ({ req }) => isAdmin(req) } },
  ],
}
