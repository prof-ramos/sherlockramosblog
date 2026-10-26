import type { Access, Where } from 'payload'

type Identity = { collection?: string; email?: string } | null | undefined
export function isAdmin({ user }: { user?: Identity }): boolean {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  return Boolean(email && user?.collection === 'users' && user.email?.toLowerCase() === email)
}
export const ownerOnly: Access = ({ req }) => isAdmin(req)
export function publishedOnly(now = new Date()): Where {
  return { and: [
    { _status: { equals: 'published' } },
    { publishedAt: { less_than_equal: now.toISOString() } },
  ] }
}
export const ownerOrPublished: Access = ({ req }) => isAdmin(req) || publishedOnly()
