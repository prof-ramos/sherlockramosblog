import Link from 'next/link'
export default function NotFound() {
  return <div className="page-heading"><span className="eyebrow">404</span><h1>Página não encontrada</h1><Link href="/">Voltar ao início →</Link></div>
}
