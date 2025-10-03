# Guia Rápido do Hugo para IA

Este guia fornece snippets de código essenciais para trabalhar com o gerador de sites estáticos Hugo.

## Comandos Básicos

### Verifique a Versão
É crucial para garantir a compatibilidade.

```sh
hugo version
```

### Crie um Novo Site
Use este comando para iniciar um novo projeto Hugo.

```sh
hugo new site meu-blog
cd meu-blog
```

### Inicie o Servidor de Desenvolvimento
Para visualizar seu site localmente com live reload.

```sh
# Inicia o servidor
hugo server

# Inclui rascunhos (drafts)
hugo server -D
```

### Crie Conteúdo
Adicione novas páginas ou posts.

```sh
# Cria um novo post
hugo new content posts/meu-primeiro-post.md
```

### Compile o Site
Gera os arquivos estáticos para deploy.

```sh
hugo
```

## Configuração do Site (`hugo.toml`)

Um exemplo de arquivo de configuração `hugo.toml` com parâmetros essenciais.

```toml
baseURL = 'https://example.org/'
languageCode = 'pt-br'
title = 'Meu Novo Site Hugo'
theme = 'ananke'

[params]
  description = "Descrição do meu site."

# Exemplo de configuração de menu
[[menu.main]]
  name = 'Home'
  pageRef = '/'
  weight = 10
[[menu.main]]
  name = 'Posts'
  pageRef = '/posts'
  weight = 20
```

## Front Matter

Metadados no topo de um arquivo Markdown.

```markdown
---
title: "Meu Primeiro Post"
date: 2024-10-03T10:00:00-03:00
draft: false
description: "Este é um exemplo de post."
tags: ["hugo", "desenvolvimento"]
---

## Introdução

Este é o corpo do seu post em Markdown.
```

## Módulos Hugo

Gerencie temas e outras dependências.

### Adicionar um Tema como Submódulo Git

```sh
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo "theme = 'ananke'" >> hugo.toml
```

### Usar `hugo mod`

Para gerenciar módulos Go.

```sh
# Obter um módulo específico
hugo mod get github.com/user/reponame

# Atualizar todos os módulos
hugo mod get -u
```

## Templates Go

Exemplo básico de lógica de template do Hugo.

```go-html-template
{{/* Exemplo de condicional */}}
{{ if .Params.show_author }}
  <p>Autor: {{ .Params.author }}</p>
{{ end }}

{{/* Iterar sobre páginas */}}
{{ range .Pages }}
  <h2><a href="{{ .RelPermalink }}">{{ .Title }}</a></h2>
{{ end }}
```