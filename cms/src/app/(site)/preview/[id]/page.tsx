import { headers } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isAdmin } from '@/access'
import { PostBody } from '@/components/PostBody'

export const metadata = { title: 'Prévia privada', robots: { index: false, follow: false } }
export default async function Preview({ params }: { params: Promise<{ id: string }> }) {
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: await headers() })
  if (!isAdmin({ user })) redirect('/admin/login/')
  const id = Number((await params).id)
  if (!Number.isSafeInteger(id) || id < 1) notFound()
  const post = await payload.findByID({ collection: 'posts', id, draft: true, depth: 1, overrideAccess: false, user }).catch(() => null)
  if (!post) notFound()
  return <><aside className="preview-banner">Prévia privada — alterações ainda podem não estar publicadas.</aside><PostBody post={post} /></>
}
