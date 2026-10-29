import type { Metadata } from 'next'
import Link from 'next/link'
import { site, siteURL } from '@/site'
import './style.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteURL()), title: { default: site.title, template: `%s | ${site.title}` },
  description: site.description,
  alternates: { types: { 'application/rss+xml': '/index.xml' } },
  openGraph: { type: 'website', locale: 'pt_BR', siteName: site.title },
}
export const dynamic = 'force-dynamic'
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header className="header"><Link className="brand" href="/">Sherlock Ramos<span>Blog pessoal</span></Link>
      <nav aria-label="Principal"><Link href="/posts/">Posts</Link><Link href="/tags/">Tags</Link><a href={site.twitter} rel="me">X</a></nav>
    </header>
    <main id="conteudo">{children}</main>
    <footer>© {new Date().getFullYear()} Sherlock Ramos <span><a href="/index.xml">RSS</a> · <Link href="/admin/">Entrar</Link></span></footer>
  </body></html>
}
