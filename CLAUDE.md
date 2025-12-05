# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static blog built with **Hugo v0.146.0** using the **PaperMod** theme. Content is in Portuguese (pt-BR) with a custom navy color scheme, mobile-first responsive design, and PWA capabilities.

## Common Development Commands

```bash
# Development server (hot reload on port 1313)
hugo server

# Production build (recommended - ensures Hugo v0.146.0)
bash build.sh

# Direct build
hugo --gc

# Create new blog post
hugo new posts/my-post.md

# Build including draft posts
hugo --buildDrafts

# Clean rebuild
rm -rf resources/_gen public && hugo
```

## Architecture and Key Conventions

### Hugo Configuration
- Main config: `hugo.yaml` (YAML format, Portuguese)
- Language: `pt-br`
- Theme: PaperMod
- Hugo version: **v0.146.0 (enforced by build.sh)**
- Binary location: `~/.local/bin/hugo`

### CSS Customization Pattern (IMPORTANT)
Custom theme styles are in `assets/css/extended/custom.css`. **You must use `!important`** on custom CSS variables because:
- Extended CSS loads AFTER theme core CSS
- Without `!important`, core theme variables override custom values
- This is due to Hugo's asset pipeline processing order

Example:
```css
:root {
  --theme: #e8edf4 !important;
  --primary: #0f1419 !important;
}
```

### Theme Customization
- **Never edit theme files directly** in `/themes/PaperMod/`
- To override layouts: copy from `/themes/PaperMod/layouts/` → `/layouts/` (maintain same structure)
- To add custom scripts/styles: use `/layouts/partials/extend_head.html` or `extend_footer.html`
- CSS Custom Properties handle light/dark mode switching

### Content Structure

**Standard post:**
```
content/posts/my-post.md
```

**Post with images (page bundle):**
```
content/posts/my-post/
  ├── index.md      # Post content
  ├── image1.jpg
  └── image2.jpg
```

### Frontmatter Format (YAML)

```yaml
---
title: "Post Title"
date: 2025-10-03T10:00:00-03:00
draft: false
author: "Sherlock Ramos"
description: "SEO description (required)"
tags: ["tag1", "tag2"]
categories: ["Tecnologia"]

cover:
    image: "image.jpg"
    alt: "Alt text"
    relative: true        # REQUIRED for page bundles
    hidden: false

ShowToc: true
ShowReadingTime: true
---
```

**Critical:** Set `relative: true` in cover image frontmatter when using page bundles.

## Key Files Reference

| File | Purpose |
|------|---------|
| `hugo.yaml` | Main Hugo configuration (YAML, Portuguese) |
| `build.sh` | Build script that enforces Hugo v0.146.0 |
| `assets/css/extended/custom.css` | Navy theme CSS variables (requires `!important`) |
| `layouts/partials/extend_head.html` | Custom head injections (mobile menu, PWA setup) |
| `static/manifest.json` | PWA manifest |
| `static/sw.js` | Service Worker for offline support |
| `docs/` | 11 comprehensive implementation guides |

## Project Structure

```
├── assets/css/extended/       # Custom theme CSS (navy theme)
├── content/
│   ├── posts/                 # Blog posts (Markdown)
│   └── about/                 # Static pages
├── layouts/
│   ├── partials/              # Custom components (extend_head.html)
│   └── shortcodes/            # Markdown extensions (webp-image.html)
├── static/                    # Static assets (manifest.json, sw.js, images)
├── themes/PaperMod/           # Theme directory (DO NOT EDIT DIRECTLY)
├── docs/                      # Implementation guides
├── hugo.yaml                  # Main configuration
└── build.sh                   # Build script with version enforcement
```

## Theme Features

- Navy color scheme with light/dark mode
- Mobile-first responsive design
- 48x48px minimum touch targets (WCAG 2.2)
- PWA with Service Worker
- WebP images with automatic fallback
- Lazy-loaded syntax highlighting CSS
- Fuse.js client-side search

## Documentation

Comprehensive guides in `/docs/`:
1. Theme personalization (`1-personalizacao.md`)
2. Content creation (`2-criacao-de-conteudo.md`)
3. Navy theme implementation (`3-mudanca-tema-navy.md`)
4. UI/UX evaluation (`4-avaliacao-ui-ux.md`)
5. PagesCMS usage (`5-usando-pagescms.md`)
6. Performance analysis (`6-analise-desempenho.md`)
7. Frontend optimizations (`7-otimizacoes-frontend.md`)
8. Mobile-first diagnosis (`8-diagnostico-mobile-first.md`)
9. Mobile verification (`9-verificacao-final-mobile-first.md`)
10. WebP images (`10-usando-webp.md`)
11. Final improvements (`11-relatorio-melhorias-finais.md`)
