import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { publicPosts } from '@/content'
import { PostList } from '@/components/PostList'
import Link from 'next/link'

export default async function Tag({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }) {
  const payload = await getPayload({ config })
  const tag = (await payload.find({ collection: 'tags', overrideAccess: false, where: { slug: { equals: (await params).slug } }, limit: 1 })).docs[0]
  if (!tag) notFound()
  const page = Math.max(1, Math.min(Number((await searchParams).page) || 1, 10000))
  const posts = await publicPosts({ tag: tag.id, page })
  if (!posts.totalDocs) notFound()
  return <><div className="page-heading"><span className="eyebrow">Assunto</span><h1>{tag.name}</h1></div><PostList posts={posts.docs} />
    <nav className="pagination" aria-label="Páginas da tag">
      {posts.hasPrevPage && <Link href={`/tags/${tag.slug}/?page=${page - 1}`}>← Mais recentes</Link>}
      {posts.hasNextPage && <Link href={`/tags/${tag.slug}/?page=${page + 1}`}>Mais antigas →</Link>}
    </nav></>
}
