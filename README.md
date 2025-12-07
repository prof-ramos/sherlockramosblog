# HUGO

Hugo is a static site generator that makes it easy to setup your own blog or personal website.

## Adding content

You can manually create content files (for example as `content/<CATEGORY>/<FILE>.<FORMAT>`) and provide metadata in them, however you can use the `new` command to do a few things for you (like add title and date):

```sh
$ hugo new posts/my-post.md
```

by default, this template creates a `posts/hello.md` for you, feel free to remove / rename it if you want.

## Dicas para Criação de Conteúdo

Para criar uma nova publicação no blog, você pode usar o comando `hugo new`:

```sh
$ hugo new posts/meu-novo-post.md
```

Isto irá criar um novo arquivo Markdown em `content/posts/meu-novo-post.md` com metadados predefinidos.

### Metadados Essenciais

Certifique-se de preencher os seguintes metadados no cabeçalho (front matter) do seu arquivo Markdown:

-   `title`: O título do seu post.
-   `date`: A data de publicação (gerado automaticamente).
-   `tags`: Uma lista de tags relevantes para o seu post.
-   `categories`: As categorias às quais seu post pertence.
-   `description`: Uma breve descrição que será usada em previews e SEO.

Exemplo:

```yaml
---
title: "Meu Novo Post Incrível"
date: 2025-12-06T10:00:00-03:00
tags: ["tecnologia", "programação", "blog"]
categories: ["Desenvolvimento"]
description: "Uma descrição curta e interessante sobre o conteúdo do meu post."
---
```

### Escrevendo o Conteúdo

Escreva o corpo do seu post usando a sintaxe Markdown.

### Inserindo Imagens WebP

Para otimizar o desempenho do site, utilize imagens no formato WebP. Você pode usar o shortcode `webp-image` para isso:

```html
{{< webp-image src="caminho/para/sua/imagem.png" alt="Descrição da Imagem" >}}
```

Certifique-se de que o caminho para a imagem esteja correto e que o atributo `alt` forneça uma descrição acessível da imagem.

## Changing themes

- Explore themes [here](https://themes.gohugo.io/)
- Download theme to `themes/<NAME>`

```sh
git clone https://github.com/siegerts/hugo-theme-basic themes/basic
```

- Change `theme` entry in `config.toml` to the theme name

For more, checkout [official documentations](https://gohugo.io/documentation/).