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
- **Theme**: PaperMod (located in `themes/PaperMod/`)
- **Output directory**: `public/` (generated static site for deployment)

## Project Architecture

### Content Structure
- `content/posts/`: Blog posts with YAML frontmatter (title, date, draft)
- `content/about/`: About page section
- `archetypes/default.md`: Template for new content with auto-populated fields

### Theme Customization
- Custom CSS: `assets/css/extended/custom.css`
- Custom JavaScript: `layouts/partials/extend_footer.html`
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
- Social icons configured in `params.socialIcons` (GitHub, Twitter, LinkedIn)
- Security: XSS vulnerability patched in search functionality (fastsearch.js uses safe DOM methods instead of innerHTML)
- **CRITICAL**: The `docs/` directory and its contents must NEVER be deleted under any circumstances
