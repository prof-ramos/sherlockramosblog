import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { PostBody } from '../src/components/PostBody'
import type { Post } from '../src/payload-types'

test('internal post links render a working public URL', () => {
  const post: Post = { id: 1, title: 'Test', slug: 'test', publishedAt: '2020-01-01', createdAt: '2020-01-01', updatedAt: '2020-01-01',
    content: { root: { type: 'root', version: 1, format: '', indent: 0, direction: null, children: [
      { type: 'paragraph', version: 1, format: '', indent: 0, direction: null, children: [
        { type: 'link', version: 3, format: '', indent: 0, direction: null,
          fields: { linkType: 'internal', doc: { relationTo: 'posts', value: { id: 27, slug: 'target-post' } } },
          children: [{ type: 'text', version: 1, text: 'Leia também', detail: 0, format: 0, mode: 'normal', style: '' }] },
      ] },
    ] } },
  }
  const html = renderToStaticMarkup(createElement(PostBody, { post }))
  assert.match(html, /href="\/posts\/target-post\/"/)
})
