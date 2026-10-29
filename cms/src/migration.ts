import path from 'node:path'
import { parse } from 'yaml'

export function parseHugo(source: string, filename: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(filename)) throw new Error(`Nome de arquivo não suportado: ${filename}`)
  const match = source.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) throw new Error(`Cabeçalho YAML ausente: ${filename}`)
  const meta = parse(match[1])
  if (!meta || typeof meta.title !== 'string' || !meta.title.trim()) throw new Error(`Título ausente: ${filename}`)
  const date = new Date(meta.date)
  if (!meta.date || Number.isNaN(date.getTime())) throw new Error(`Data inválida: ${filename}`)
  const markdown = match[2].trim()
  if (/\{\{[<%]|<\/?[a-z][^>]*>|^\s*\|.*\|\s*$|^ {0,3}(?:`{3,}|~{3,})|\[\^[^\]]+\]|^\s*\[[^\]]+\]:/im.test(markdown)) throw new Error(`Conteúdo não suportado sem revisão: ${filename}`)
  const allowed = ['title', 'date', 'draft', 'tags', 'description', 'slug']
  for (const key of Object.keys(meta)) if (!allowed.includes(key)) throw new Error(`Campo não suportado (${key}): ${filename}`)
  const slug = meta.slug || filename.replace(/\.md$/, '')
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error('Endereço não suportado.')
  if (meta.draft !== undefined && typeof meta.draft !== 'boolean') throw new Error('draft deve ser booleano.')
  if (meta.tags !== undefined && (!Array.isArray(meta.tags) || meta.tags.some((t: unknown) => typeof t !== 'string'))) throw new Error('Tags inválidas.')
  return { title: meta.title.trim(), slug, publishedAt: date.toISOString(),
    draft: meta.draft === true, tags: (meta.tags || []) as string[],
    description: typeof meta.description === 'string' ? meta.description : '', markdown }
}

export function localImagePath(url: string, staticDir: string) {
  const decoded = decodeURIComponent(url)
  if (!decoded.startsWith('/images/') || decoded.includes('..') || /[?#\\]/.test(decoded)) throw new Error(`Caminho de imagem não suportado: ${url}`)
  const base = path.resolve(staticDir)
  const result = path.resolve(base, '.' + decoded)
  if (!result.startsWith(base + path.sep)) throw new Error('Caminho de imagem inválido.')
  return result
}
