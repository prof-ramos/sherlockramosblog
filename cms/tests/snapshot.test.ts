import { test } from 'node:test'
import assert from 'node:assert/strict'
import { remapReferences } from '../src/snapshot.ts'

test('restoration remaps upload, relationship and internal link IDs, including ID gaps', () => {
  const maps = { media: new Map([[9, 1]]), posts: new Map([[27, 3]]), tags: new Map([[14, 2]]) }
  const source = { children: [
    { type: 'upload', relationTo: 'media', value: 9 },
    { type: 'link', fields: { linkType: 'internal', doc: { relationTo: 'posts', value: 27 } } },
    { type: 'relationship', relationTo: 'tags', value: { id: 14, name: 'Tag' } },
  ] }
  const result = remapReferences(source, maps) as typeof source
  assert.equal(result.children[0].value, 1)
  assert.equal(result.children[1].fields?.doc.value, 3)
  assert.equal(result.children[2].value, 2)
  assert.throws(() => remapReferences({ type: 'upload', relationTo: 'media', value: 99 }, maps), /ausente/)
  assert.equal(source.children[0].value, 9)
})
