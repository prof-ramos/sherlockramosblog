# Hugo Blog - SherlockRamosBlog

Blog pessoal desenvolvido com [Hugo](https://gohugo.io/) utilizando o tema [PaperMod](https://github.com/adityatelange/hugo-PaperMod), configurado em português (pt-br) com ProfileMode habilitado.

## 🚀 Comandos Essenciais

```bash
# Servidor de desenvolvimento (inclui rascunhos)
hugo server -D

# Build de produção (saída em public/)
hugo

# Build otimizado (como usado no CI/CD)
hugo --gc --minify

# Criar novo post
hugo new posts/meu-post.md

# Criar conteúdo usando archetype
hugo new content content/posts/meu-primeiro-post.md

# Verificar versão do Hugo
hugo version
```

## ⚙️ Configuração

- **Arquivo principal**: `hugo.yaml` (formato YAML)
- **Idioma**: Português (pt-br) via `languageCode` e `defaultContentLanguage`
- **Tema**: PaperMod (Git submodule em `themes/PaperMod/`)
  - Atualizar tema: `git submodule update --remote themes/PaperMod`
  - Ao clonar este repositório: `git clone --recurse-submodules` ou `git submodule update --init --recursive`
- **Diretório de saída**: `public/` (site estático gerado para deploy)
- **Base URL**: `https://prof-ramos.github.io/sherlockramosblog/` (GitHub Pages com subpath)
- **Deploy**: Workflow automatizado via GitHub Actions (`.github/workflows/deploy.yml`) - deploy para GitHub Pages ao fazer push na branch `main`
- **Code Review**: CodeRabbit configurado com markdownlint, yamllint, languagetool, gitleaks, semgrep e osvScanner

## 📁 Estrutura do Projeto

### Conteúdo
- `content/posts/`: Posts do blog com frontmatter YAML (título, data, draft)
- `content/about/`: Seção "Sobre"
- `archetypes/default.md`: Template para novo conteúdo com campos auto-preenchidos

### Customização do Tema
- **IMPORTANTE**: Nunca edite arquivos dentro de `themes/PaperMod/` diretamente - o tema é um Git submodule
- Para customizar: Copie de `themes/PaperMod/` para o mesmo caminho na raiz do projeto (Hugo prioriza arquivos na raiz)
- CSS customizado: `assets/css/extended/custom.css` - Sobrescreve cores secundárias/terciárias
- Head customizado: `layouts/partials/head.html` - Meta tags de cor do tema e CSS para noscript
- Esquema de cores:
  - Cor primária: #1e293b (Tailwind slate-800 matte dark navy blue)
  - Aplicado via propriedades CSS customizadas (--secondary, --tertiary)
  - Consistente nos modos claro/escuro e fallbacks noscript
- Recursos PaperMod: ProfileMode, busca (Fuse.js), toggle dark/light mode, ícones sociais

### Configurações-chave em hugo.yaml
- **ProfileMode**: Página inicial exibe perfil com mensagem de boas-vindas, botões de navegação e links sociais
- **Parâmetros PaperMod**: ShowReadingTime, ShowShareButtons, ShowCodeCopyButtons, ShowBreadCrumbs, etc.
- **Estrutura de menu**: Navegação principal definida em `menu.main`
- **Outputs**: HTML, RSS e JSON para home page

## 📝 Notas Importantes

- Todos os arquivos de conteúdo usam frontmatter YAML (---), não TOML (+++)
- Posts em rascunho (draft: true) só aparecem com `hugo server -D`
- O diretório `public/` é auto-gerado e não deve ser editado manualmente
- Ícones sociais configurados em `params.socialIcons` (Twitter)
- Segurança: Vulnerabilidade XSS corrigida na busca (fastsearch.js usa métodos DOM seguros ao invés de innerHTML)
- **CRÍTICO**: O diretório `docs/` contém documentação protegida e NUNCA deve ser deletado
- Deploy no GitHub Pages é automatizado: push na `main` dispara build e deploy
- Versão do Hugo no CI/CD: 0.146.0 (extended)
- Site deployado como GitHub Pages project site (deploy com subpath) - baseURL reflete essa configuração

## 📖 Recursos Adicionais

Para mais informações, consulte a [documentação oficial do Hugo](https://gohugo.io/documentation/).
