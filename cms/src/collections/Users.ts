import type { CollectionConfig } from 'payload'
import { isAdmin, ownerOnly } from '../access'

export const Users: CollectionConfig = {
  slug: 'users', labels: { singular: 'Administrador', plural: 'Administrador' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'email'] },
  auth: { tokenExpiration: 7200, maxLoginAttempts: 5, lockTime: 600000 },
  access: { admin: ({ req }) => isAdmin(req), create: () => false, delete: () => false, read: ownerOnly, update: ownerOnly },
  fields: [{ name: 'name', label: 'Nome', type: 'text', required: true }],
  hooks: { beforeChange: [async ({ operation, data, req }) => {
    const owner = process.env.ADMIN_EMAIL?.trim().toLowerCase()
    if (!owner || data.email && data.email.toLowerCase() !== owner) throw new Error('Conta não autorizada.')
    if (operation === 'create') {
      if (req.context.bootstrap !== true) throw new Error('Use o comando administrativo para criar a conta inicial.')
      const count = await req.payload.count({ collection: 'users', overrideAccess: true, req })
      if (count.totalDocs !== 0) throw new Error('O administrador já existe.')
    }
    return data
  }] },
}
