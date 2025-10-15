# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Type

Hugo static site generator blog using the PaperMod theme, configured for Portuguese language (pt-br) with ProfileMode enabled and custom homepage layout.

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
  - Hugo version in CI/CD: 0.146.0 (extended)
- **Code review**: CodeRabbit configured with markdownlint, yamllint, languagetool, gitleaks, semgrep, and osvScanner

## Project Architecture

### Homepage Architecture
The site uses a **custom homepage layout** that overrides PaperMod's default ProfileMode:

- **Custom Layout**: `layouts/index.html` provides hero section + posts grid
- **Posts Grid**: Displays 6 most recent posts in responsive grid (3→2→1 columns)
- **Card Component**: `layouts/partials/post_card.html` - reusable post card with:
  - Thumbnail support (16:9 aspect ratio) with Hugo Image Processing
  - Fallback SVG for posts without images
  - Truncated title (2 lines) and excerpt (3 lines)
  - Date in Portuguese + reading time
  - Tag display (max 3 tags)
- **CTA Buttons**: "Explorar Posts" with smooth scroll + secondary buttons from ProfileMode config

### Search Functionality
- **Search page**: `content/search.md` - layout: "search"
- **Powered by**: Fuse.js (fuzzy search)
- **Search in**: titles, permalinks, summaries, content
- **JSON output**: Required for search - configured in `outputs.home` (html, rss, json)

### Content Structure
- `content/posts/`: Blog posts with YAML frontmatter (title, date, draft)
- `content/about/`: About page section
- `content/search.md`: Search page
- `archetypes/default.md`: Template for new content with auto-populated fields

### Theme Customization Strategy
- **CRITICAL**: Never edit files inside `themes/PaperMod/` directly - the theme is a Git submodule
- **Override pattern**: Copy from `themes/PaperMod/` to same path in project root - Hugo prioritizes root files
- **Custom homepage**: `layouts/index.html` completely overrides theme's ProfileMode homepage
- **Custom partials**: `layouts/partials/` can override any theme partial
- **Custom CSS**: `assets/css/extended/custom.css` - PaperMod automatically loads files from `extended/`
- **Custom head**: `layouts/partials/head.html` - overrides theme's head partial

### Visual Design System

**Color Scheme**:
- Background: Navy gradient with multiple layers + dot texture
- Primary: `#f1f5f9` (light slate)
- Secondary: `#60a5fa` (blue-400)
- Tertiary: `#3b82f6` (blue-500)
- Dark theme as default (`defaultTheme: dark`)

**CSS Architecture** (`assets/css/extended/custom.css`):
- CSS Custom Properties for theme colors
- Glassmorphism effects: `backdrop-filter: blur()` on cards, header, footer
- Responsive grid: `minmax(320px, 1fr)` auto-fill pattern
- Mobile-first breakpoints: 768px (tablet), 1024px (desktop)
- Animation patterns: cubic-bezier transitions, shimmer effects, glow animations

**Key CSS Classes**:
- `.hero-compact` - Hero section (max 35vh)
- `.posts-grid` - Responsive posts grid
- `.post-card` - Individual post card with glassmorphism
- `.cta-primary` / `.cta-secondary` - Call-to-action buttons

### Image Processing
Configured in `hugo.yaml` under `imaging`:
- **resampleFilter**: lanczos (high quality)
- **quality**: 85
- **anchor**: smart (intelligent cropping)
- **Usage in templates**: Resources.Get → Resize "600x webp q85"

### Key Configuration in hugo.yaml

**ProfileMode** (`params.profileMode`):
- `enabled: true` - Shows profile on homepage
- `buttons` - Array of navigation buttons (used in custom homepage)
- Profile image from external URL (Twitter avatar)

**Search** (`params.fuseOpts`):
- Fuzzy matching with threshold 0.4
- Searches: title, permalink, summary, content
- Case-insensitive, sorted results

**Main Sections** (`params.mainSections`):
- Array: `["posts"]` - Defines what appears in homepage grid

**Menu** (`menu.main`):
- Ordered by weight (10, 20, 30, 40)
- Posts → Sobre → Tags → Buscar

**Outputs** (`outputs.home`):
- `["html", "rss", "json"]` - JSON required for search

## Important Development Notes

### Content Files
- All frontmatter uses **YAML format** (`---`), not TOML (`+++`)
- Draft posts (`draft: true`) only appear with `hugo server -D`
- Date format: `2025-10-15T10:00:00-03:00` (ISO 8601 with timezone)

### Build Output
- `public/` directory is **auto-generated** - never edit manually
- **CRITICAL**: Never commit development server output from `hugo server -D`
  - Dev server includes localhost URLs and livereload scripts
  - Always use `hugo --gc --minify` for production builds
- CI/CD automatically builds and deploys `public/` to GitHub Pages

### Protected Directories
- **CRITICAL**: `docs/` directory must NEVER be deleted - contains protected documentation
- `themes/PaperMod/` is a Git submodule - never edit directly

### Security
- XSS vulnerability patched in search: `fastsearch.js` uses safe DOM methods instead of `innerHTML`
- CodeRabbit scans for secrets via gitleaks
- HTMLHint validates HTML output

## GitHub Actions Workflow

**Trigger**: Push to `main` branch or manual dispatch

**Build Process**:
1. Install Hugo CLI 0.146.0 (extended)
2. Checkout with recursive submodules
3. Build: `hugo --gc --minify --baseURL <dynamic>`
4. Upload `public/` as artifact
5. Deploy to GitHub Pages

**Deployment**: GitHub Pages project site (subpath deployment)
