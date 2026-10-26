import { getPayload } from 'payload'
import config from '@payload-config'
import { publishedOnly } from './access'

export async function publicPosts(options: { slug?: string; tag?: number; page?: number } = {}) {
  const payload = await getPayload({ config })
  return payload.find({ collection: 'posts', overrideAccess: false, depth: 1,
    sort: '-publishedAt', limit: 10, page: options.page || 1,
    where: { and: [publishedOnly(),
      ...(options.slug ? [{ slug: { equals: options.slug } }] : []),
      ...(options.tag ? [{ tags: { in: [options.tag] } }] : []),
    ] },
  })
}
