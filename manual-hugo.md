# Manual do Hugo — Sherlock Ramos Blog

Guia para executar o blog, criar postagens e inserir imagens. Os exemplos usam a estrutura deste projeto, com o tema PaperMod e a configuração em `hugo.yaml`.

## 1. Abrir o projeto no terminal

Execute os comandos deste manual dentro da pasta do blog:

```bash
cd /Users/gabrielramos/Developer/personal/sherlockramosblog
```

Para conferir se o Hugo está instalado:

```bash
hugo version
```

## 2. Preparar o tema e iniciar o blog

Na primeira execução depois de clonar o repositório, baixe o tema:

```bash
git submodule update --init --recursive
```

Depois, inicie o servidor incluindo os rascunhos:

```bash
hugo server -D
```

Abra <http://localhost:1313/>. Deixe esse terminal aberto enquanto escreve: o Hugo acompanha os arquivos e atualiza o site quando você salva alterações. Para executar outros comandos, abra uma segunda aba do terminal na pasta do projeto.

Para encerrar o servidor, pressione **Ctrl+C** no terminal em que ele está rodando.

## 3. Criar uma postagem

Por exemplo, para escrever sobre paralisia por análise:

```bash
hugo new content posts/analysisparalysis.md
```

O Hugo cria `content/posts/analysisparalysis.md`. Abra esse arquivo no seu editor.

Use sempre o prefixo `posts/` para colocar o texto na seção de postagens. O comando `hugo new content analysisparalysis.md` cria o arquivo diretamente em `content/`, fora dessa seção.

Prefira nomes de arquivo em letras minúsculas, sem espaços ou acentos, com hífens separando palavras. Exemplo: `paralisia-por-analise.md`. O nome do arquivo pode ser diferente do título que aparece na página.

O arquivo começa com um cabeçalho YAML entre duas linhas `---`. O modelo do projeto preenche a data atual, um título inicial e `draft: true`.

Exemplo de postagem completa:

```markdown
---
date: '2026-10-26T12:00:00-03:00'
draft: true
title: 'Paralisia por análise'
tags: ['reflexões', 'cotidiano']
---

Às vezes, pensar demais nos impede de começar.

## Quando a pesquisa vira adiamento

Aqui entra o desenvolvimento do texto.

![Pessoa diante de várias opções em um quadro](/images/analysis-paralysis.jpg)

## Um primeiro passo possível

Aqui entra a conclusão.
```

No exemplo, substitua o texto e a imagem pelos seus. Preserve a data gerada pelo Hugo ou ajuste-a para a data desejada.

| Campo | Para que serve |
| --- | --- |
| `title` | Título exibido na postagem. |
| `date` | Data e hora do texto, incluindo o fuso horário. |
| `draft` | `true` mantém o texto como rascunho; `false` permite incluí-lo na compilação normal. |
| `tags` | Lista opcional de assuntos para organizar as postagens. |

Escreva o corpo do texto **depois do segundo `---`**. Preserve a indentação e use `true` ou `false` sem aspas.

## 4. Formatar o texto com Markdown

```markdown
## Subtítulo

### Subdivisão

Um parágrafo de texto. Deixe uma linha em branco entre os parágrafos.

**Texto em negrito** e *texto em itálico*.

[Texto do link](https://example.com)

- Primeiro item de uma lista
- Segundo item

1. Primeiro passo
2. Segundo passo

> Uma citação ou um trecho em destaque.
```

O tema já exibe o título do cabeçalho. Comece as divisões do corpo com `##`, sem precisar repetir o título com `#`.

## 5. Inserir uma imagem no texto

Crie a pasta de imagens, se ainda não existir:

```bash
mkdir -p static/images
```

Copie sua imagem para essa pasta pelo Finder ou pelo editor. Por exemplo:

```text
static/images/analysis-paralysis.jpg
```

No ponto do texto em que a imagem deve aparecer, escreva:

```markdown
![Descrição breve da imagem](/images/analysis-paralysis.jpg)
```

O caminho no Markdown começa em `/images/`, **sem `static`**. O Hugo copia o conteúdo de `static/` para a raiz do site ao compilar.

A descrição entre colchetes é o texto alternativo, usado por leitores de tela e quando a imagem não carrega. Descreva o que é relevante para compreender o texto; ela não é uma legenda visível.

Confira o nome completo e a extensão do arquivo: `.jpg`, `.jpeg`, `.png` e `.webp` são nomes diferentes. Prefira nomes sem espaços ou acentos e respeite letras maiúsculas e minúsculas.

## 6. Revisar a postagem

Com `hugo server -D` rodando, abra:

- Lista de postagens: <http://localhost:1313/posts/>.
- Postagem do exemplo: <http://localhost:1313/posts/analysisparalysis/>.
- Lista de tags: <http://localhost:1313/tags/>.

Salve o arquivo no editor e confira o resultado no navegador, incluindo títulos, links e imagens.

O `-D` inclui rascunhos na visualização. Uma data futura também pode impedir que o texto apareça; para conferir conteúdo futuro localmente, use `hugo server -D -F` após encerrar o servidor anterior.

## 7. Marcar o texto como pronto

Quando terminar a revisão, altere o cabeçalho:

```yaml
draft: false
```

Para conferir o site sem os rascunhos, encerre o servidor com **Ctrl+C** e execute:

```bash
hugo server
```

Para gerar os arquivos do site:

```bash
hugo build
```

Por padrão, a saída fica em `public/`. Rascunhos e postagens com data futura ficam de fora da compilação normal.

**Gerar o site não o coloca na internet.** O envio à hospedagem é uma etapa separada. Não versione `public/`, `resources/_gen/` nem `.hugo_build.lock`; esses caminhos já estão no `.gitignore` do projeto.

## 8. Resolver problemas comuns

### A página inicial mostra “Page Not Found”

Se o Hugo também avisar que não encontrou layouts, confira o tema:

```bash
git submodule update --init --recursive
```

Depois, reinicie `hugo server -D`. Esse foi o problema encontrado neste projeto: `themes/PaperMod/` estava vazio porque o submódulo não havia sido inicializado.

### A postagem não aparece

Confira se o arquivo está em `content/posts/`, se foi salvo e se o cabeçalho está entre duas linhas `---`. Para rascunhos, execute o servidor com `-D`. Confira também se a data está no futuro.

### A imagem não aparece

Confira se o arquivo existe em `static/images/` e se o Markdown usa `/images/nome-do-arquivo.extensao`. Verifique a extensão e as letras maiúsculas e minúsculas. Você pode abrir a imagem diretamente, por exemplo: `http://localhost:1313/images/analysis-paralysis.jpg`.

### O terminal informa que a porta 1313 está ocupada

Confira se outro servidor do Hugo já está aberto. Use o endereço informado por ele ou encerre o servidor anterior com **Ctrl+C** antes de iniciar outro.

## Referências

Documentação oficial consultada pelo plugin Context7 para este manual:

- [Criar conteúdo com archetypes](https://gohugo.io/content-management/archetypes/).
- [Uso básico, servidor, compilação e rascunhos](https://gohugo.io/getting-started/usage/).
- [Início rápido do Hugo](https://gohugo.io/getting-started/quick-start/).
- [Sintaxe e renderização de imagens](https://gohugo.io/render-hooks/images/).
- [Arquivos estáticos](https://gohugo.io/content-management/static-files/).
