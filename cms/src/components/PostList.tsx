import Link from 'next/link'
import type { Post } from '@/payload-types'

export function PostList({ posts }: { posts: Post[] }) {
  return <div className="post-list">{posts.length ? posts.map(post => <article className="post-card" key={post.id}>
    <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Sao_Paulo' })}</time>
    <h2><Link href={`/posts/${post.slug}/`}>{post.title}</Link></h2>
    {post.description && <p>{post.description}</p>}
    <Link className="read" href={`/posts/${post.slug}/`}>Ler postagem <span aria-hidden="true">↗</span></Link>
  </article>) : <p className="empty">As primeiras postagens estão a caminho.</p>}</div>
}
