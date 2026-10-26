import Link from 'next/link'
import { publicPosts } from '@/content'
import { PostList } from '@/components/PostList'

export default async function Home() {
  const posts = await publicPosts()
  return <>
    <section className="intro"><span className="eyebrow">Um espaço para pensar em voz alta</span>
      <h1>Curiosidade como<br />ponto de partida.</h1>
      <p>Sou Sherlock Ramos. Aqui compartilho reflexões, descobertas e ideias que merecem mais do que uma postagem passageira.</p>
      <Link className="button" href="/posts/">Explorar postagens <span aria-hidden="true">↗</span></Link>
    </section>
    <section aria-labelledby="recentes"><div className="section-heading"><h2 id="recentes">Últimas postagens</h2><Link href="/tags/">Explorar por assunto →</Link></div><PostList posts={posts.docs} /></section>
  </>
}
