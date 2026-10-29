import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { publicPosts } from '@/content'
import { PostBody } from '@/components/PostBody'
import { siteURL } from '@/site'

type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = (await publicPosts({ slug })).docs[0]
  if (!post) return { title: 'Postagem não encontrada' }
  const image = post.cover && typeof post.cover === 'object' ? post.cover.url : null
  return { title: post.title, description: post.description || undefined,
    alternates: { canonical: `${siteURL()}/posts/${post.slug}/` },
    openGraph: { type: 'article', title: post.title, description: post.description || undefined,
      publishedTime: post.publishedAt, images: image ? [image] : [] },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: post.title },
  }
}
export default async function Post({ params }: Props) {
  const { slug } = await params
  const post = (await publicPosts({ slug })).docs[0]
  if (!post) notFound()
  return <PostBody post={post} />
}
