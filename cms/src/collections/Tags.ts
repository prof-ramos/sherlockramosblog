import type { CollectionConfig } from 'payload'
import { ownerOnly } from '../access'

export const Tags: CollectionConfig = {
  slug: 'tags', labels: { singular: 'Tag', plural: 'Tags' }, admin: { useAsTitle: 'name' },
  access: { read: () => true, create: ownerOnly, update: ownerOnly, delete: ownerOnly },
  fields: [
    { name: 'name', label: 'Nome', type: 'text', required: true, unique: true },
    { name: 'slug', label: 'Endereço', type: 'text', required: true, unique: true,
      validate: (value: string | null | undefined) => !value || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) || 'Use letras minúsculas, números e hífens.' },
  ],
}
