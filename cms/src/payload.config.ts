import { config as loadEnv } from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor, FixedToolbarFeature, UploadFeature, LinkFeature } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { pt } from '@payloadcms/translations/languages/pt'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Posts } from './collections/Posts'
import { Media } from './collections/Media'
import { Tags } from './collections/Tags'
import { siteURL } from './site'

loadEnv({ path: '.env.local' })
const dirname = path.dirname(fileURLToPath(import.meta.url))
if (!process.env.PAYLOAD_SECRET) throw new Error('PAYLOAD_SECRET é obrigatório.')
if (process.env.PAYLOAD_SECRET.startsWith('op://')) throw new Error('Resolva a referência com op run --env-file=.env.local -- antes do comando.')
if (!process.env.ADMIN_EMAIL) throw new Error('ADMIN_EMAIL é obrigatório.')
const databaseURL = process.env.DATABASE_URL || process.env.TURSO_DATABASE_URL
if (!databaseURL) throw new Error('DATABASE_URL ou TURSO_DATABASE_URL é obrigatório.')
if (process.env.VERCEL && !process.env.BLOB_READ_WRITE_TOKEN) throw new Error('Blob é obrigatório na Vercel.')

export default buildConfig({
  serverURL: siteURL(),
  secret: process.env.PAYLOAD_SECRET,
  email: () => ({ name: 'recovery-cli', defaultFromAddress: 'no-reply@example.invalid', defaultFromName: 'Sherlock Ramos',
    sendEmail: async () => { throw new Error('Recuperação de acesso disponível pelo comando administrativo.') } }),
  admin: { user: 'users', importMap: { baseDir: dirname }, meta: { titleSuffix: ' | Sherlock Ramos' } },
  i18n: { supportedLanguages: { pt }, fallbackLanguage: 'pt' },
  editor: lexicalEditor({ features: ({ defaultFeatures }) => [
    ...defaultFeatures.filter(f => !['relationship', 'link', 'upload'].includes(f.key)),
    LinkFeature({ enabledCollections: ['posts'] }), FixedToolbarFeature(), UploadFeature({ collections: { media: { fields: [] } } }),
  ] }),
  db: sqliteAdapter({ client: { url: databaseURL, authToken: process.env.TURSO_AUTH_TOKEN },
    push: process.env.NODE_ENV === 'development' && databaseURL.startsWith('file:'),
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
  collections: [Users, Posts, Media, Tags],
  sharp,
  upload: { limits: { fileSize: 3 * 1024 * 1024 }, abortOnLimit: true },
  graphQL: { disable: true },
  // A coleção já permite leitura pública. Entregue o arquivo diretamente pelo
  // Blob para evitar tráfego de imagem passando pelas Functions do CMS.
  plugins: [vercelBlobStorage({ collections: { media: { disablePayloadAccessControl: true } },
    token: process.env.BLOB_READ_WRITE_TOKEN, alwaysInsertFields: true, addRandomSuffix: false })],
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
})
