# AGENTS.md - Hugo Blog (PaperMod Theme)

## Build Commands
- **Development server**: `hugo server -D` (includes drafts)
- **Production build**: `hugo --gc --minify`
- **Basic build**: `hugo`
- **New post**: `hugo new posts/title.md`

## Code Style Guidelines
- **Content frontmatter**: Use YAML (---) format, never TOML (+++)
- **Language**: Portuguese (pt-br) for content and configuration
- **Theme customization**: Copy files from `themes/PaperMod/` to root directory (never edit submodule directly)
- **CSS variables**: Use `--secondary` (#6b4423) and `--tertiary` (#8b5a3c) for Sherlock-inspired color scheme
- **File structure**: Keep `docs/` directory protected (never delete)
- **Naming**: kebab-case for URLs, Title Case for display names
- **Error handling**: Draft posts use `draft: true` flag

## Linting & Quality
- **Markdown**: markdownlint enabled
- **YAML**: yamllint enabled
- **Grammar**: languagetool (Portuguese) enabled
- **Security**: gitleaks, semgrep, osvScanner enabled
- **HTML**: htmlhint enabled

## Important Notes
- Never commit `public/` directory (auto-generated)
- Use `git submodule update --remote themes/PaperMod` to update theme
- ProfileMode enabled with custom color scheme and social icons