import type { MetadataRoute } from 'next'
import { siteURL } from '@/site'
export default function robots(): MetadataRoute.Robots {
  const preview = process.env.VERCEL_ENV === 'preview'
  return { rules: { userAgent: '*', allow: preview ? undefined : '/', disallow: preview ? '/' : ['/admin/', '/api/', '/preview/'] }, sitemap: siteURL() + '/sitemap.xml' }
}
