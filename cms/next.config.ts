import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'node:path'

const config: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: { root: path.resolve('.') },
  sassOptions: { loadPaths: ['./node_modules/@payloadcms/ui/dist/scss/'] },
}
export default withPayload(config, { devBundleServerPackages: false })
