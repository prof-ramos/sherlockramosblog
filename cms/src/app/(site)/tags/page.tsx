import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { publicPosts } from '@/content'

export const metadata = { title: 'Tags' }
export default async function Tags() {
  const payload = await getPayload({ config })
  const tags = await payload.find({ collection: 'tags', overrideAccess: false, limit: 1000, sort: 'name' })
  const visible = (await Promise.all(tags.docs.map(async tag =>
    (await publicPosts({ tag: tag.id })).totalDocs ? tag : null))).filter(Boolean)
  return <><div className="page-heading"><span className="eyebrow">Pontos de encontro</span><h1>Tags</h1><p>Encontre postagens por assunto.</p></div>
    <div className="tag-list">{visible.length ? visible.map(tag => tag && <Link key={tag.id} href={`/tags/${tag.slug}/`}>{tag.name}</Link>) : <p className="empty">Os assuntos aparecem aqui conforme as postagens são publicadas.</p>}</div></>
}
