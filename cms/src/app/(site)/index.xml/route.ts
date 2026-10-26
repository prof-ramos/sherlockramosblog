import { getPayload } from 'payload'
import config from '@payload-config'
import { publishedOnly } from '@/access'
import { site, siteURL } from '@/site'

function xml(s: string) { return s.replace(/[<>&"']/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c]!) }
export async function GET() {
  const payload = await getPayload({ config })
  const posts = await payload.find({ collection: 'posts', overrideAccess: false, depth: 0, where: publishedOnly(), limit: 30, sort: '-publishedAt' })
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${xml(site.title)}</title><link>${xml(siteURL())}</link><description>${xml(site.description)}</description>${posts.docs.map(post => `<item><title>${xml(post.title)}</title><link>${xml(siteURL() + '/posts/' + post.slug + '/')}</link><guid>${xml(siteURL() + '/posts/' + post.slug + '/')}</guid><pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate><description>${xml(post.description || '')}</description></item>`).join('')}</channel></rss>`
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'no-store' } })
}
