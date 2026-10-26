import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { test } from 'node:test'

test('real SQLite: owner bootstrap, drafts, revisions, authorization and media', async () => {
  const dir = await mkdtemp(path.join(tmpdir(), 'sherlock-cms-test-'))
  process.env.DATABASE_URL = `file:${dir}/test.db`
  process.env.PAYLOAD_SECRET = 'test-only-secret-at-least-32-characters-long'
  process.env.ADMIN_EMAIL = 'owner@example.test'
  process.env.MEDIA_DIR = `${dir}/media`
  Object.assign(process.env, { NODE_ENV: 'development' })
  delete process.env.BLOB_READ_WRITE_TOKEN
  const { getPayload } = await import('payload')
  const config = (await import('../src/payload.config.ts')).default
  const payload = await getPayload({ config })
  try {
    await assert.rejects(payload.create({ collection: 'users', data: {
      email: 'intruder@example.test', password: 'long-enough-test-password', name: 'Intruder',
    } }))
    const owner = await payload.create({ collection: 'users', context: { bootstrap: true }, data: {
      email: 'owner@example.test', password: 'long-enough-test-password', name: 'Sherlock Ramos',
    } })
    await assert.rejects(payload.create({ collection: 'users', context: { bootstrap: true }, data: {
      email: 'owner@example.test', password: 'another-long-test-password', name: 'Duplicate',
    } }))
    const login = await payload.login({ collection: 'users', data: {
      email: 'owner@example.test', password: 'long-enough-test-password',
    } })
    assert.ok(login.token)
    const richtext = { root: { type: 'root', version: 1, direction: null, format: '' as const,
      indent: 0, children: [{ type: 'paragraph', version: 1, direction: null,
        format: '', indent: 0, children: [{ type: 'text', version: 1, text: 'Original', format: 0, detail: 0, mode: 'normal', style: '' }] }] } }
    const post = await payload.create({ collection: 'posts', data: {
      title: 'Original', slug: 'original', content: richtext, publishedAt: '2026-01-01T12:00:00Z', _status: 'draft',
    } })
    assert.equal((await payload.find({ collection: 'posts', overrideAccess: false })).totalDocs, 0)
    await assert.rejects(payload.findVersions({ collection: 'posts', overrideAccess: false }))
    await assert.rejects(payload.update({ collection: 'posts', id: post.id, overrideAccess: false, data: { title: 'Intruder' } }))
    await payload.update({ collection: 'posts', id: post.id, data: { _status: 'published' } })
    assert.equal((await payload.find({ collection: 'posts', overrideAccess: false })).docs[0]?.title, 'Original')
    await payload.update({ collection: 'posts', id: post.id, draft: true, data: { title: 'Unpublished revision', _status: 'draft' } })
    assert.equal((await payload.find({ collection: 'posts', overrideAccess: false })).docs[0]?.title, 'Original')
    assert.equal((await payload.find({ collection: 'posts', draft: true, overrideAccess: false, user: owner })).docs[0]?.title, 'Unpublished revision')
    await payload.update({ collection: 'posts', id: post.id, data: { _status: 'draft' } })
    assert.equal((await payload.find({ collection: 'posts', overrideAccess: false })).totalDocs, 0)
    await payload.update({ collection: 'posts', id: post.id, data: { _status: 'published', publishedAt: '2099-01-01T12:00:00Z' } })
    assert.equal((await payload.find({ collection: 'posts', overrideAccess: false })).totalDocs, 0)
    const sharp = (await import('sharp')).default
    const buffer = await sharp({ create: { width: 1600, height: 900, channels: 3, background: '#abcdef' } }).png().toBuffer()
    await assert.rejects(payload.create({ collection: 'media', overrideAccess: false, data: { alt: 'Blocked' }, file: {
      data: buffer, mimetype: 'image/png', name: 'blocked.png', size: buffer.length,
    } }))
    const media = await payload.create({ collection: 'media', data: { alt: 'Test image' }, file: {
      data: buffer, mimetype: 'image/png', name: 'test.png', size: buffer.length,
    } })
    assert.equal(media.alt, 'Test image')
    assert.equal(media.mimeType, 'image/webp')
    assert.ok(media.url)
    await payload.update({ collection: 'posts', id: post.id, data: { cover: media.id } })
    await assert.rejects(payload.delete({ collection: 'media', id: media.id }), /referenciada/)
    // A publicação pode sobreviver à retenção das versões antigas.
    await payload.db.deleteVersions({ collection: 'posts', where: { parent: { equals: post.id } } })
    await assert.rejects(payload.delete({ collection: 'media', id: media.id }), /referenciada/)
    await assert.rejects(payload.create({ collection: 'media', data: { alt: 'Invalid' }, file: {
      data: Buffer.from('<svg onload="alert(1)"></svg>'), mimetype: 'image/svg+xml', name: 'bad.svg', size: 30,
    } }))
  } finally {
    const { closePayload } = await import('../src/shutdown')
    await closePayload(payload)
    assert.ok('closed' in payload.db.client && payload.db.client.closed === true)
    await rm(dir, { recursive: true, force: true })
  }
})
