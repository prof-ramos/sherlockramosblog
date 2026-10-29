# Implementação do CMS Payload

**Objetivo:** publicar textos e imagens pelo navegador, preservando rascunhos e o Hugo até validar a substituição.

**Especificação:** issues #2–#7 do prof-ramos/sherlockramosblog, aprovadas nesta conversa. Execução nesta sessão, com decisões de engenharia delegadas pelo usuário.

**Arquitetura:** adaptar as rotas de administração, autenticação, posts e mídia do template oficial `with-vercel-website` do Payload v3.92.0 (commit `e6f7db8b71facd9ee5ef67feb3b065b2684370d2`). Remover páginas de demonstração, formulários, busca e tarefas agendadas. Manter um frontend pequeno que preserve `/posts/` e `/tags/`.

**Stack:** Payload/Next.js/TypeScript, SQLite local e Turso remoto pelo adaptador oficial, Lexical, Sharp e Vercel Blob.

## Restrições

- `cms/` contém a nova aplicação; o Hugo e alterações locais anteriores são preservados.
- Segredos e bancos locais fora do Git; dados locais, Preview e produção separados.
- Somente planos gratuitos; sem alteração de domínio nesta implementação.
- Criação inicial do administrador somente por comando local autorizado, nunca por cadastro público.
- Leituras públicas respeitam acesso e estado publicado; histórico e prévias são privados.

## Etapas e verificação

1. Base e acesso (`cms/src/payload.config.ts`, `cms/src/collections`, `cms/tests`): escrever testes de acesso primeiro; usar banco real temporário para bootstrap, login, posts e versões. Rodar antes/depois da implementação.
2. Editor e imagens: usar UI nativa do Payload, aceitar somente imagens com tamanho limitado, texto alternativo e formatos otimizados; verificar upload real e persistência.
3. Frontend (`cms/src/app/(site)`): home, posts, tags, RSS/sitemap e prévia privada; verificar HTTP e navegação no navegador.
4. Migração (`cms/scripts`): converter Markdown para Lexical, manter datas/rascunhos/slugs, importação idempotente e exportação/recuperação verificáveis. Rejeitar construções não suportadas.
5. Operação: migrações SQL versionadas, bootstrap/exportação/importação documentados, build/TypeScript/testes e Preview Vercel com dados isolados.
6. Revisão: rever controles de acesso, persistência, imagens públicas, conteúdo não publicado e recuperação. Publicar código em branch/PR e registrar evidências nas issues sem declarar concluído o que depender de integração externa.

## Foco de revisão

- Banco vazio não pode permitir tomada do primeiro administrador por visitantes.
- Versões e APIs não podem revelar rascunhos.
- Salvar revisão não pode substituir texto publicado antes de publicar.
- Importação repetida não pode duplicar posts e imagens.
- Falha de upload ou banco não pode aparecer como publicação bem-sucedida.
