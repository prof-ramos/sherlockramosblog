# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Type

Hugo static site generator blog using the PaperMod theme, configured for Portuguese language (pt-br) with ProfileMode enabled.

## Essential Commands

```bash
# Development server (includes drafts)
hugo server -D

# Production build (outputs to public/)
hugo

# Production build with optimization (as used in CI/CD)
hugo --gc --minify

# Create new blog post
hugo new posts/my-post-title.md

# Create content using archetype
hugo new content content/posts/my-first-post.md

# Check Hugo version
hugo version
```

## Configuration

- **Primary config**: `hugo.yaml` (YAML format, not TOML)
- **Language**: Portuguese (pt-br) set via `languageCode` and `defaultContentLanguage`
- **Theme**: PaperMod (Git submodule at `themes/PaperMod/`)
  - To update theme: `git submodule update --remote themes/PaperMod`
  - When cloning this repo: `git clone --recurse-submodules` or `git submodule update --init --recursive`
- **Output directory**: `public/` (generated static site for deployment)
- **Base URL**: `https://prof-ramos.github.io/sherlockramosblog/` (GitHub Pages with subpath)
- **Deployment**: Automated GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages on push to `main`
- **Code review**: CodeRabbit configured with markdownlint, yamllint, languagetool, gitleaks, semgrep, and osvScanner

## Project Architecture

### Content Structure
- `content/posts/`: Blog posts with YAML frontmatter (title, date, draft)
- `content/about/`: About page section
- `archetypes/default.md`: Template for new content with auto-populated fields

### Theme Customization
- **IMPORTANT**: Never edit files inside `themes/PaperMod/` directly - the theme is a Git submodule
- To customize theme files: Copy from `themes/PaperMod/` to the same path in project root (Hugo will prioritize root files)
- Custom CSS: `assets/css/extended/custom.css` - Color overrides for secondary/tertiary colors
- Custom head: `layouts/partials/head.html` - Theme color meta tags and noscript CSS overrides (overrides theme version)
- Color scheme:
  - Primary theme color: #1e293b (Tailwind slate-800 matte dark navy blue)
  - Applied via CSS custom properties (--secondary, --tertiary) to secondary and tertiary variables
  - Applied consistently across light/dark modes and noscript fallbacks
- PaperMod features: ProfileMode, search (Fuse.js), dark/light mode toggle, social icons

### Key Configuration in hugo.yaml
- **ProfileMode**: Homepage displays profile with welcome message, navigation buttons, and social links
- **PaperMod params**: ShowReadingTime, ShowShareButtons, ShowCodeCopyButtons, ShowBreadCrumbs, etc.
- **Menu structure**: Main navigation defined in `menu.main` section
- **Outputs**: HTML, RSS, and JSON for home page

## Important Notes

- All content files use YAML frontmatter (---), not TOML (+++)
- Draft posts (draft: true) only appear with `hugo server -D`
- The `public/` directory is auto-generated and should not be manually edited
- Social icons configured in `params.socialIcons` (Twitter)
- Security: XSS vulnerability patched in search functionality (fastsearch.js uses safe DOM methods instead of innerHTML)
- **CRITICAL**: The `docs/` directory contains protected documentation and must NEVER be deleted under any circumstances
- GitHub Pages deployment is automated: pushing to `main` triggers build and deploy
- Hugo version in CI/CD: 0.146.0 (extended)
- Site is deployed as a GitHub Pages project site (subpath deployment) - baseURL reflects this configuration
