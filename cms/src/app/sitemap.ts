import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { publishedOnly } from '@/access'
import { siteURL } from '@/site'

export const dynamic = 'force-dynamic'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })
  const posts = await payload.find({ collection: 'posts', overrideAccess: false, depth: 0, where: publishedOnly(), pagination: false })
  return [{ url: siteURL() + '/' }, { url: siteURL() + '/posts/' }, { url: siteURL() + '/tags/' },
    ...posts.docs.map(p => ({ url: `${siteURL()}/posts/${p.slug}/`, lastModified: p.updatedAt }))]
}
