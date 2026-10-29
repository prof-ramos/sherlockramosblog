export type ReferenceMaps = Record<string, Map<number, number>>

export function remapReferences(value: unknown, maps: ReferenceMaps): unknown {
  if (Array.isArray(value)) return value.map(v => remapReferences(v, maps))
  if (!value || typeof value !== 'object') return value
  const obj = value as Record<string, unknown>
  if (typeof obj.relationTo === 'string' && obj.value != null) {
    const oldID = typeof obj.value === 'object' ? (obj.value as { id?: unknown }).id : obj.value
    const id = maps[obj.relationTo]?.get(Number(oldID))
    if (id === undefined) throw new Error(`Referência ausente na exportação: ${obj.relationTo}.`)
    return { ...obj, value: id }
  }
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, remapReferences(v, maps)]))
}
