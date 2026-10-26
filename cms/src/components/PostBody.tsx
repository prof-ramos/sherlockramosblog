import { RichText, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import type { Post } from '@/payload-types'

export function PostBody({ post }: { post: Post }) {
  return <article className="article">
    <Link className="back" href="/posts/">← Todas as postagens</Link>
    <header><time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('pt-BR', { dateStyle: 'long', timeZone: 'America/Sao_Paulo' })}</time>
      <h1>{post.title || 'Sem título'}</h1>{post.description && <p className="lead">{post.description}</p>}
    </header>
    {post.cover && typeof post.cover === 'object' && post.cover.url && <figure>
      {/* Imagens já são dimensionadas e comprimidas no upload. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={post.cover.url} alt={post.cover.alt} width={post.cover.width || undefined} height={post.cover.height || undefined} />
      {post.cover.caption && <figcaption>{post.cover.caption}</figcaption>}
    </figure>}
    <div className="prose">{post.content?.root ? <RichText data={post.content} converters={({ defaultConverters }) => ({
      ...defaultConverters,
      ...LinkJSXConverter({ internalDocToHref: ({ linkNode }) => {
        const doc = linkNode.fields.doc
        const value = doc?.value
        return doc?.relationTo === 'posts' && value && typeof value === 'object' && 'slug' in value && typeof value.slug === 'string'
          ? `/posts/${encodeURIComponent(value.slug)}/` : '#'
      } }),
    })} /> : <p>Texto ainda não preenchido.</p>}</div>
    <nav className="tag-list" aria-label="Tags da postagem">{post.tags?.map(tag => typeof tag === 'object' && <Link key={tag.id} href={`/tags/${tag.slug}/`}>{tag.name}</Link>)}</nav>
  </article>
}
