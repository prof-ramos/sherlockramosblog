# CMS — Sherlock Ramos Blog

Payload 3.92.0, Next.js 16.4.3 e TypeScript. O painel usa a autenticação nativa,
Lexical e português. O banco local é SQLite; o remoto usa Turso pelo adaptador
SQLite/libSQL. Imagens remotas ficam no Vercel Blob. Origem/licença: [UPSTREAM.md](UPSTREAM.md).

## Escrever e publicar

1. Entre em `/admin/` com a credencial correspondente no 1Password.
2. Abra **Postagens → Criar novo**. Preencha título, endereço (letras minúsculas
   e hífens), texto, resumo opcional e tags.
3. Use a biblioteca **Imagens** para enviar um JPG, PNG ou WebP de até 3 MB.
   Preencha a descrição para leitores de tela. Fotos são convertidas para WebP,
   com largura máxima de 1600 pixels; uma miniatura é gerada para o painel.
4. Salve o rascunho e abra a prévia privada. O autosave guarda alterações a cada
   três segundos; confira a indicação de salvamento antes de sair.
5. Publique quando estiver pronto. Para editar um texto publicado sem trocar
   imediatamente a versão pública, salve a revisão como rascunho. Para retirar
   o texto do site, use a ação **Despublicar** do Payload.

A data futura impede exibição pública até esse horário. Não há tarefa de
publicação agendada; as páginas consultam o estado e a data a cada requisição.
As imagens do Blob são públicas por URL, inclusive as usadas em rascunhos.
Excluir uma imagem referenciada por um post ou versão é bloqueado. Uploads
abandonados podem ser excluídos na biblioteca se não estiverem referenciados;
não há limpeza automática destrutiva.

## Executar localmente

Use Node >=24.22.1 e pnpm 12.15.0, com comandos dentro de `cms/`:

```sh
pnpm install --frozen-lockfile
cp .env.example .env.local
```

Configure `ADMIN_EMAIL`, um `PAYLOAD_SECRET` aleatório e o banco em `.env.local`.
No ambiente do proprietário, prefira referências `op://` e `op run` para
entregar segredos ao processo, sem gravar valores reais em arquivos ou argumentos.
O arquivo de exemplo não contém credenciais funcionais.

```sh
mkdir -p .data
op run --env-file=.env.local -- pnpm db:migrate
# Entregue a senha inicial (mínimo 16 caracteres) via stdin ou ADMIN_PASSWORD.
op run --env-file=.env.local -- pnpm admin:create
op run --env-file=.env.local -- pnpm dev
```

O painel fica em <http://localhost:3000/admin/>. A conta inicial só pode ser criada
pelo comando administrativo; a primeira pessoa a visitar o site não consegue
se cadastrar. `ADMIN_EMAIL` deve corresponder ao proprietário e não pode ser
alterado casualmente depois da criação.

Para usar as credenciais já guardadas no 1Password deste ambiente:

```sh
op run --env-file=.env.local --env-file=.env.admin.local -- pnpm admin:create --reset-password
```

`.env.admin.local` é privado e contém somente a referência da senha. A recuperação
é feita por esse comando; não foi contratado um provedor de e-mail. Depois de
redefinir uma senha, atualize o item correspondente no 1Password. Não use a senha
local no Preview ou na produção.

## Importar os textos Hugo

O Hugo continua na raiz do repositório. Esta operação não altera os arquivos dele:

```sh
pnpm content:import
pnpm content:import --apply
```

O primeiro comando mostra uma prévia, sem gravações. O segundo importa o lote.
Título, data, rascunho, tags e slug são preservados; Markdown é convertido em
Lexical. Imagens em linhas separadas, com caminho `/images/arquivo.ext`, são
importadas de `../static/images/` para a biblioteca.

Repetir o mesmo lote não duplica posts. Slugs já existentes ou fontes alteradas
são recusados em vez de sobrescrever edições do CMS. Campos Hugo desconhecidos,
shortcodes, HTML, tabelas, blocos de código, notas de rodapé, links de referência,
imagens inline/remotas e bundles exigem revisão e
são recusados explicitamente. Não se presume que toda extensão Hugo tenha uma
conversão equivalente. Caso uma gravação falhe no meio do lote, revise a biblioteca
para uploads ainda não referenciados antes de tentar novamente.

## Exportação e recuperação

```sh
pnpm content:export
# Banco DESTINO vazio, com schema migrado, e MEDIA_DIR separado:
pnpm content:restore --source=/caminho/da/exportacao --apply
```

A exportação cria uma pasta privada com `content.json` e os arquivos das imagens,
com checksums SHA-256. Inclui tags, a versão pública/registro atual e a revisão
mais recente de cada post. Não inclui contas, senhas, sessões ou o histórico
completo de versões. Para uma cópia integral do banco, use também os mecanismos
do provedor/SQLite, fora do repositório.

A restauração recusa um destino com posts, tags ou imagens existentes, valida
checksums e remapeia relações para os novos IDs. Não apaga o banco de destino.
Ela pode falhar durante a gravação; não reutilize parcialmente o destino sem
conferência. Teste a recuperação em banco isolado antes de precisar dela.

## Vercel e Turso

Projeto separado: `sherlockramosblog-cms`, equipe ProfRamos. O deploy usa `cms/`
como diretório da aplicação. Não conecte o projeto aos bancos de outros sites.

Variáveis exigidas no Preview e futuramente na produção:

| Variável | Finalidade |
| --- | --- |
| `PAYLOAD_SECRET` | Segredo independente de cada ambiente. |
| `ADMIN_EMAIL` | Identidade do único administrador. |
| `TURSO_DATABASE_URL` | Banco exclusivo daquele ambiente. |
| `TURSO_AUTH_TOKEN` | Token do banco. |
| `BLOB_READ_WRITE_TOKEN` | Token do Blob exclusivo daquele ambiente. |
| `NEXT_PUBLIC_SITE_URL` | Opcional no Preview, obrigatório ao definir domínio público definitivo. |

Na Vercel, não configure `DATABASE_URL` com caminho local. O Blob é obrigatório
nesse ambiente, evitando usar disco efêmero para uploads. Não use `db push` no
Turso remoto: migrações SQL ficam em `src/migrations/` e são executadas antes do
deploy, em processo administrativo com o ambiente correto. O build não migra
bancos automaticamente. Para mudar o schema, gere e revise uma nova migração.

```sh
pnpm db:migration nome-da-alteracao
pnpm db:migrate
pnpm typecheck
pnpm test
pnpm build
vercel deploy
```

O primeiro deploy de um projeto Vercel pode ser tratado como produção. Por isso,
um placeholder sem banco foi usado para inicializar o projeto antes do CMS em
Preview. Confira sempre o ambiente em `vercel inspect`; o flag sozinho não basta.
Preview tem `robots` bloqueado e a proteção de acesso da Vercel conforme o projeto.

## Limites e entrada em produção

Turso foi provisionado no plano Starter de $0 do Marketplace; Vercel está no
Hobby. Reconfira franquias atuais e uso compartilhado na conta antes de promover.
Blob Hobby inclui 1 GB armazenado, 10 GB de transferência e 2.000 operações
avançadas/mês, além dos limites de operações simples/CDN. Exceder a franquia pode
interromper a entrega de imagens; não há upgrade automático configurado aqui.

Produção precisa de banco, Blob, segredo e administrador próprios. Importar os
textos, conferir URLs/rascunhos/imagens, testar exportação/recuperação e só então
trocar o endereço público após aceite. Não promover o Preview reutilizando banco
ou credenciais dele. O Hugo segue recuperável na raiz e pode continuar sendo
compilado com `hugo`; não remova o tema/conteúdo durante o aceite.

Referências: [Payload](https://payloadcms.com/docs), [SQLite/Turso](https://payloadcms.com/docs/database/sqlite),
[Blob e franquias](https://vercel.com/docs/vercel-blob/usage-and-pricing).
