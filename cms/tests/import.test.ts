import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseHugo, localImagePath } from '../src/migration.ts'

test('Hugo front matter preserves draft, date, tags, title and URL slug', () => {
  const post = parseHugo(`---\ntitle: 'Paralisia por análise'\ndate: '2026-10-16T10:21:50-03:00'\ndraft: true\ntags: ['reflexões']\n---\n\n**Olá**`, 'analysisparalysis.md')
  assert.equal(post.title, 'Paralisia por análise')
  assert.equal(post.slug, 'analysisparalysis')
  assert.equal(post.publishedAt, '2026-10-16T13:21:50.000Z')
  assert.equal(post.draft, true)
  assert.deepEqual(post.tags, ['reflexões'])
  assert.equal(post.markdown, '**Olá**')
})

test('unsupported Hugo or raw HTML never silently loses content', () => {
  const head = '---\ntitle: Test\ndate: 2026-01-01\n---\n'
  assert.throws(() => parseHugo(head + '{{< youtube abc >}}', 'test.md'), /suportado/)
  assert.throws(() => parseHugo(head + '<script>alert(1)</script>', 'test.md'), /suportado/)
  assert.throws(() => parseHugo(head + '```js\nconsole.log(1)\n```', 'test.md'), /suportado/)
  assert.throws(() => parseHugo(head + 'Nota[^1]\n\n[^1]: Texto', 'test.md'), /suportado/)
  assert.throws(() => parseHugo('---\ntitle: Test\ndate: wrong\n---\nText', 'test.md'), /Data/)
  assert.throws(() => parseHugo(head + 'Text', '../bad.md'), /arquivo/)
})

test('image resolution accepts static image paths and blocks traversal and remote fetches', () => {
  assert.equal(localImagePath('/images/test.png', '/blog/static'), '/blog/static/images/test.png')
  assert.throws(() => localImagePath('/images/../../private.png', '/blog/static'), /imagem/)
  assert.throws(() => localImagePath('https://example.com/image.png', '/blog/static'), /imagem/)
})
