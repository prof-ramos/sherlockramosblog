# Sherlock Ramos Blog

Blog pessoal desenvolvido com [Hugo](https://gohugo.io/) e o tema [PaperMod](https://github.com/adityatelange/hugo-PaperMod/).

---

## Executar Localmente

Para rodar o servidor de desenvolvimento com recarregamento automático (live reload) e visualização de rascunhos:

```bash
hugo server -D
```

O site estará acessível em `http://localhost:1313/`.

---

## Como Adicionar uma Nova Publicação

### Passo 1: Criar o arquivo do post

Você pode criar o post de duas formas:

#### Opção A: Post simples (arquivo `.md` avulso)
Ideal para posts apenas de texto ou que usam imagens globais/externas:

```bash
hugo new posts/meu-novo-post.md
```

O arquivo será criado em `content/posts/meu-novo-post.md`.

#### Opção B: Page Bundle (pasta com `index.md` — **Recomendado para imagens**)
Ideal se o post tiver imagens ou arquivos próprios, mantendo tudo agrupado em uma só pasta:

```bash
hugo new posts/meu-novo-post/index.md
```

O arquivo será criado em `content/posts/meu-novo-post/index.md`.

---

### Passo 2: Configurar o Cabeçalho (Front Matter)

No início de todo arquivo `.md` existe um bloco delimitado por `---` com metadados em formato YAML.

Exemplo de cabeçalho completo suportado pelo tema PaperMod:

```yaml
---
title: "Título da Minha Publicação"
date: 2026-10-16T10:30:00-03:00
draft: true
description: "Uma breve descrição do post para SEO e exibição nos resumos."
tags:
  - "tutorial"
  - "hugo"
categories:
  - "Desenvolvimento"
cover:
  image: "capa.jpg" # Caminho da imagem de destaque
  alt: "Texto alternativo da imagem de capa"
  caption: "Legenda exibida abaixo da capa"
  relative: true # 'true' para Page Bundle; 'false' se usar URL ou /static/
---
```

#### Principais campos do cabeçalho:
- `title`: Título exibido na página e nas listagens.
- `date`: Data de publicação (gerada automaticamente pelo comando `hugo new`).
- `draft`: `true` mantém como rascunho (não vai para o ar em produção). Mude para `false` quando quiser publicar.
- `description`: Resumo do artigo exibido nos cards da listagem de posts e metatags sociais.
- `tags` e `categories`: Listas para categorização e navegação por termos.
- `cover`: Bloco para imagem em destaque no topo da publicação e nos cards.

---

### Passo 3: Inserir Imagens na Publicação

Existem três formas práticas de trabalhar com imagens:

#### 1. Page Bundle (Recomendado)
Coloque o arquivo de imagem diretamente dentro da pasta do post:

```text
content/posts/meu-novo-post/
├── index.md
└── ilustracao.png
```

No conteúdo do `index.md`, referencie diretamente pelo nome do arquivo:

```markdown
![Descrição da ilustração](ilustracao.png)
```

E para a imagem de capa no Front Matter:
```yaml
cover:
  image: "ilustracao.png"
  relative: true
```

#### 2. Pasta Global `static/`
Coloque imagens compartilhadas ou estáticas na pasta `static/images/`:

```text
static/images/minha-imagem.jpg
```

No markdown, use o caminho a partir da raiz `/`:

```markdown
![Descrição da imagem](/images/minha-imagem.jpg)
```

E na capa do Front Matter:
```yaml
cover:
  image: "/images/minha-imagem.jpg"
  relative: false
```

#### 3. Imagens Externas (URL)
Basta usar o link público:

```markdown
![Logotipo da Ferramenta](https://exemplo.com/imagem.png)
```

---

### Passo 4: Sintaxe de Conteúdo (Markdown)

Abaixo do Front Matter, escreva o conteúdo usando Markdown padrão:

```markdown
## Subtítulo da Seção

Este é um parágrafo com texto em **negrito**, *itálico* e um [link externo](https://gohugo.io).

### Lista de itens
- Primeiro item
- Segundo item
- Terceiro item

### Bloco de Código
```bash
echo "Hello, Sherlock Ramos Blog!"
```

> "Citação inspiradora ou destaque de texto."
```

---

### Passo 5: Publicar

1. Altere no cabeçalho do post:
   ```yaml
   draft: false
   ```
2. Salve o arquivo e verifique o resultado localmente em `http://localhost:1313/posts/`.
3. Faça commit e push das alterações para o repositório Git:
   ```bash
   git add content/
   git commit -m "feat(post): adiciona novo post sobre ..."
   git push origin main
   ```
