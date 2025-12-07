# Repository Guidelines

Guia rápido para contribuir com o blog estático construído em Hugo v0.146.0. Priorize mudanças pequenas, verificáveis e com descrição clara.

## Estrutura do projeto
- `content/`: posts em Markdown (`content/posts/<slug>.md`) com front matter em TOML/YAML.
- `archetypes/`: modelos para novos conteúdos; o padrão é usado por `hugo new`.
- `layouts/` e `themes/`: templates e parciais (PaperMod) que definem a UI.
- `assets/` e `static/`: CSS/JS/imagens; tudo em `static/` é servido como está.
- `public/`: saída gerada; só atualize se estiver publicando resultados de build.
- `hugo.yaml`: configuração do site (baseURL, tema, params).

## Comandos de build, teste e desenvolvimento
- `./build.sh`: baixa/usa Hugo 0.146.0 em `~/.local/bin` (binário Linux) e gera o site em `public/` com `--gc`.
- `hugo server -D`: servidor local com rascunhos; recarrega ao salvar.
- `hugo new posts/meu-post.md`: cria post com front matter básico no padrão do repositório.
- macOS/ARM: instale Hugo 0.146.0 nativamente (`brew install hugo` ou binário oficial correspondente) em vez do script, que baixa binário Linux.

## Estilo de código e convenções
- Conteúdo em Markdown simples; use títulos hierárquicos e blocos de código com info string.
- Slugs e nomes de arquivos em `kebab-case`; datas no front matter em ISO (`2024-01-31T12:00:00Z`).
- Parciais/templates em HTML usam indentação de 2 espaços; evite tabs.
- CSS/SCSS segue organização existente em `assets/`; prefira variáveis e classes reutilizáveis do tema.

## Diretrizes de testes
- Não há suíte automatizada; valide sempre com `./build.sh`.
- Antes de abrir PR, navegue pelo site via `hugo server -D` e cheque páginas tocadas (links, imagens e metadados).
- Se alterar layouts ou CSS, teste em desktop e mobile (viewport responsivo do navegador).

## Commits e pull requests
- Mensagens curtas e no imperativo, alinhadas ao histórico (`Initial commit - ...`); ex.: `Add post about caching` ou `Adjust header spacing`.
- Um assunto por commit; evite misturar conteúdo e refactors grandes.
- PRs devem incluir resumo do impacto, passos de teste manual e, se houver mudanças visuais, screenshots.
- Relacione issues e certifique-se de que o build Hugo passa antes de pedir review.

## Revisão, CI e CMS
- Não há CI configurado; o build deve ser validado manualmente antes do merge.
- Se precisar de review, inclua o que foi testado e pontos a observar (navegação, desempenho, acessibilidade).
- PagesCMS está configurado em `.pages.yml`; uploads vão para `static/images` e posts em `content/posts`.
