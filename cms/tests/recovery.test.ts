import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import sharp from 'sharp'

test('CLI imports idempotently, exports files and restores published text plus a private revision', async () => {
  const dir = await mkdtemp(path.join(tmpdir(), 'sherlock-recovery-'))
  const env = { ...process.env, PAYLOAD_SECRET: 'recovery-test-only-secret-at-least-32-characters', ADMIN_EMAIL: 'owner@example.test',
    DATABASE_URL: `file:${dir}/source.db`, MEDIA_DIR: `${dir}/source-media`, NODE_ENV: 'production' as const, BLOB_READ_WRITE_TOKEN: '' }
  const run = (args: string[], overrides: Record<string, string> = {}) => {
    const result = spawnSync(process.execPath, ['--import', 'tsx', ...args], { env: { ...env, ...overrides }, encoding: 'utf8', timeout: 60000 })
    assert.equal(result.status, 0, result.stdout + result.stderr)
    return result.stdout
  }
  try {
    await mkdir(`${dir}/posts`)
    await mkdir(`${dir}/static/images`, { recursive: true })
    await writeFile(`${dir}/static/images/test.png`, await sharp({ create: { width: 100, height: 80, channels: 3, background: '#112233' } }).png().toBuffer())
    await writeFile(`${dir}/posts/teste.md`, `---\ntitle: Texto publicado\ndate: '2020-01-01T12:00:00Z'\ndraft: false\ntags: ['Reflexões']\n---\n\n**Texto original**\n\n![Uma imagem de teste](/images/test.png)\n`)
    run(['scripts/migrate.ts'])
    const args = ['scripts/import-hugo.ts', `--source=${dir}/posts`, `--static=${dir}/static`, '--apply']
    assert.match(run(args), /Importadas: 1/)
    assert.match(run(args), /Importadas: 0/)
    run(['--input-type=module', '-e', `import { getPayload } from 'payload';import config from './src/payload.config.ts';const p=await getPayload({config});const post=(await p.find({collection:'posts'})).docs[0];const media=(await p.find({collection:'media'})).docs[0];await p.update({collection:'posts',id:post.id,data:{cover:media.id}});await p.update({collection:'posts',id:post.id,draft:true,data:{title:'Revisão privada',cover:null,_status:'draft'}});await p.destroy();p.db.client.close();`])
    run(['--input-type=module', '-e', `import { getPayload } from 'payload';import config from './src/payload.config.ts';const p=await getPayload({config});await p.create({collection:'posts',draft:true,data:{title:'Rascunho incompleto',_status:'draft'}});await p.destroy();p.db.client.close();`])
    run(['scripts/export.ts', `--output=${dir}/snapshot`])
    const snapshot = JSON.parse(await readFile(`${dir}/snapshot/content.json`, 'utf8'))
    assert.equal(snapshot.posts.length, 2)
    assert.equal(snapshot.media.length, 1)
    assert.equal(snapshot.tags.length, 1)
    const original = snapshot.posts.find((p: { slug: string }) => p.slug === 'teste')
    assert.equal(original.title, 'Texto publicado')
    assert.equal(original.cover, snapshot.media[0].id)
    assert.equal(snapshot.drafts.find((p: { slug: string }) => p.slug === 'teste').title, 'Revisão privada')
    assert.equal(snapshot.drafts.find((p: { slug: string }) => p.slug === 'teste').cover, null)
    const restoredEnv = { DATABASE_URL: `file:${dir}/restored.db`, MEDIA_DIR: `${dir}/restored-media` }
    run(['scripts/migrate.ts'], restoredEnv)
    run(['scripts/restore.ts', `--source=${dir}/snapshot`, '--apply'], restoredEnv)
    run(['scripts/export.ts', `--output=${dir}/restored-snapshot`], restoredEnv)
    const restored = JSON.parse(await readFile(`${dir}/restored-snapshot/content.json`, 'utf8'))
    const restoredPost = restored.posts.find((p: { slug: string }) => p.slug === 'teste')
    assert.equal(restoredPost.title, 'Texto publicado')
    assert.equal(restoredPost.cover, restored.media[0].id)
    assert.equal(restored.drafts.find((p: { slug: string }) => p.slug === 'teste').title, 'Revisão privada')
    assert.equal(restored.drafts.find((p: { slug: string }) => p.slug === 'teste').cover, null)
    assert.equal(restored.posts.find((p: { title: string }) => p.title === 'Rascunho incompleto')._status, 'draft')
    assert.equal(restoredPost.publishedAt, original.publishedAt)
    assert.deepEqual(restoredPost.content, original.content)
    assert.equal(restored.media[0].alt, 'Uma imagem de teste')
    assert.equal(restored.tags[0].name, 'Reflexões')
    const mediaNode = restoredPost.content.root.children.find((n: { type: string }) => n.type === 'upload')
    assert.equal(mediaNode.value, restored.media[0].id)
  } finally { await rm(dir, { recursive: true, force: true }) }
})
