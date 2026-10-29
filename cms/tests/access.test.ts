import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isAdmin, publishedOnly } from '../src/access.ts'

test('only the configured owner can administer content', () => {
  process.env.ADMIN_EMAIL = 'owner@example.test'
  assert.equal(isAdmin({ user: null }), false)
  assert.equal(isAdmin({ user: { collection: 'users', email: 'other@example.test' } }), false)
  assert.equal(isAdmin({ user: { collection: 'users', email: 'owner@example.test' } }), true)
  assert.equal(isAdmin({ user: { collection: 'other', email: 'owner@example.test' } }), false)
})

test('public reads always constrain published status and publication date', () => {
  const now = new Date('2026-10-26T12:00:00Z')
  assert.deepEqual(publishedOnly(now), {
    and: [{ _status: { equals: 'published' } }, { publishedAt: { less_than_equal: now.toISOString() } }],
  })
})
