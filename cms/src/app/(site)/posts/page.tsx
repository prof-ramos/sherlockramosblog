import Link from 'next/link'
import { publicPosts } from '@/content'
import { PostList } from '@/components/PostList'

export const metadata = { title: 'Postagens' }
export default async function Posts({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const input = (await searchParams).page
  const page = input && /^\d+$/.test(input) ? Math.max(1, Math.min(Number(input), 10000)) : 1
  const posts = await publicPosts({ page })
  return <><div className="page-heading"><span className="eyebrow">O arquivo</span><h1>Postagens</h1></div><PostList posts={posts.docs} />
    <nav className="pagination" aria-label="Páginas de postagens">
      {posts.hasPrevPage && <Link href={`/posts/?page=${page - 1}`}>← Mais recentes</Link>}
      {posts.hasNextPage && <Link href={`/posts/?page=${page + 1}`}>Mais antigas →</Link>}
    </nav></>
}
