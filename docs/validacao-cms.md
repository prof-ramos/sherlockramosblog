# Validação do CMS — 26/10/2026

Implementação em `cms/`, a partir do template oficial Payload v3.92.0. O Hugo,
seu tema e o conteúdo original foram preservados. Consulte [operação](../cms/README.md)
e [origem/licença](../cms/UPSTREAM.md).

## Evidências executadas

- `pnpm test`: 9 testes aprovados. SQLite real, bootstrap, login, autorização,
  versões privadas, publicação/revisão/despublicação, data futura e mídia.
- A recuperação executa migrações em bancos temporários, importa o mesmo lote
  duas vezes sem duplicar, exporta imagens/checksums e restaura a versão pública,
  uma revisão privada e um rascunho incompleto. IDs de uploads, relacionamentos
  e links internos têm remapeamento testado.
- `pnpm typecheck`: geração dos tipos de rotas e TypeScript sem erros.
- Build otimizado local e build Linux na Vercel concluídos, com Payload 3.92.0
  e Next.js 16.4.3.
- Pelo Ego Browser: login, criação/edição de post, texto no Lexical, upload de
  imagem com descrição e publicação. A imagem carregou com texto alternativo.
  Em viewport de 390 px, o documento também mediu 390 px, sem transbordamento.
- Pelo HTTP no Preview: login, identificação de sessão, upload para Blob e
  resposta WebP direta; rascunho e post despublicado retornaram 404. Prévia sem
  sessão redirecionou para login; autenticada retornou 200. Histórico anônimo
  retornou 403. Publicação retornou 200, revisão privada não mudou a versão
  pública e despublicação voltou a 404.
- Dados sintéticos de posts e imagens foram removidos depois dos testes locais
  e remotos. A sessão de teste remota foi encerrada.
- O post Hugo `primeiro-post.md` foi importado no Preview como rascunho. Segunda
  importação criou zero posts; exportação do Turso confirmou um post, zero tags
  e zero imagens, com título, slug e estado preservados.

## Revisão e correções

Uma revisão independente leu o código e as dependências instaladas. As correções
incluíram impedir exclusão de imagens ainda usadas no documento atual mesmo
após expirar a retenção de versões, restaurar rascunhos incompletos, remapear
referências internas, renderizar links internos e recusar construções Markdown
sem conversão suportada. Recursos de relacionamento arbitrário foram retirados
do editor; links internos de posts e uploads continuam disponíveis.

O adaptador Drizzle não fecha o cliente libSQL no `destroy` genérico. Os comandos
e testes agora fecham explicitamente a conexão, com verificação de encerramento.
O comando de migração também usa esse procedimento, sem aumentar timeouts.

O teste real do Blob encontrou outra condição: `addRandomSuffix` do adaptador
3.92.0 modifica o nome do documento ao enviar as miniaturas em paralelo. A
aplicação agora atribui um UUID antes de gerar os tamanhos e usa o sufixo do Blob
desativado. Nome e dimensões da imagem principal são verificados separadamente
da miniatura. Objetos públicos recém-criados também podem levar alguns segundos
para estar disponíveis no CDN; os testes remotos conferem a entrega efetiva.

Não foram enviados e-mails nem contratados planos pagos. Recursos Turso Starter
e Blob de Preview/produção são separados. Segredos e senhas ficam no 1Password;
arquivos temporários e dados de teste não são versionados.

## Imagens da validação visual

As capturas mostram somente conteúdo sintético de teste, já removido do banco:

- [Desktop](screenshots/cms-desktop.png)
- [Celular](screenshots/cms-mobile.png)

## Limites

Esta verificação não equivale a aceite humano editorial ou teste com leitor de
tela. O e-mail transacional não foi configurado: recuperação de senha usa comando
administrativo. Exportação cobre registro atual e última revisão, não todo o
histórico de versões. Imagens são públicas por URL. Domínio personalizado não foi
configurado; a entrada no endereço padrão da Vercel é verificada separadamente
no registro do deploy/PR.
