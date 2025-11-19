# Design System Customization Guide

This guide will help you customize the design system to match your brand and preferences.

## Quick Start Customization

### 1. Brand Colors

Edit `design-system/tokens/design-tokens.json` to change your brand colors:

```json
{
  "color": {
    "primary": {
      "500": { "value": "#YOUR_PRIMARY_COLOR", "type": "color" },
      "600": { "value": "#YOUR_PRIMARY_DARK", "type": "color" }
    }
  }
}
```css

After editing the JSON, update `assets/css/tokens.css`:

```css
:root {
  --color-primary-500: #YOUR_PRIMARY_COLOR;
  --color-primary-600: #YOUR_PRIMARY_DARK;
}
```css

### 2. Typography

#### Change Font Family

Edit `hugo.toml` to add custom fonts:

```toml
[params.assets]
disableFingerprinting = false
```css

Then update `assets/css/tokens.css`:

```css
:root {
  /* Replace with your preferred font */
  --font-family-sans: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```css

#### Adjust Font Sizes

In `assets/css/tokens.css`:

```css
:root {
  --font-size-base: 1rem;      /* Change base size */
  --font-size-lg: 1.125rem;    /* Adjust as needed */
}
```css

### 3. Spacing Scale

Modify spacing in `assets/css/tokens.css`:

```css
:root {
  /* Increase/decrease spacing */
  --spacing-4: 1rem;    /* Default */
  --spacing-6: 1.5rem;  /* Default */

  /* Or use a different scale */
  --spacing-4: 1.25rem;  /* Larger */
  --spacing-6: 2rem;     /* Larger */
}
```bash

### 4. Border Radius

Adjust roundness of components:

```css
:root {
  /* More rounded */
  --radius-md: 0.5rem;   /* Instead of 0.375rem */
  --radius-lg: 0.75rem;  /* Instead of 0.5rem */

  /* Less rounded */
  --radius-md: 0.25rem;  /* Instead of 0.375rem */
  --radius-lg: 0.375rem; /* Instead of 0.5rem */
}
```bash

## Hugo Configuration

### Site Information

Edit `hugo.toml`:

```toml
baseURL = 'https://YOUR_USERNAME.github.io/'
title = 'Your Blog Name'
languageCode = 'pt-br'  # or 'en' for English

[params]
title = "Your Name"
description = "Your blog description"
author = "Your Name"
```toml

### Social Links

Update social media links in `hugo.toml`:

```toml
[[params.socialIcons]]
name = "github"
url = "https://github.com/YOUR_USERNAME"

[[params.socialIcons]]
name = "linkedin"
url = "https://linkedin.com/in/YOUR_PROFILE"

[[params.socialIcons]]
name = "twitter"
url = "https://twitter.com/YOUR_HANDLE"
```css

### Navigation Menu

Customize menu items:

```toml
[[menu.main]]
identifier = "custom"
name = "Custom Page"
url = "/custom/"
weight = 45
```css

## Color Schemes

### Preset 1: Blue & Purple (Default)

```css
:root {
  --color-primary-600: #0284c7;    /* Sky Blue */
  --color-secondary-600: #7c3aed;  /* Purple */
}
```css

### Preset 2: Green & Teal (Nature)

```css
:root {
  --color-primary-600: #059669;    /* Emerald */
  --color-secondary-600: #0d9488;  /* Teal */
}
```css

### Preset 3: Orange & Red (Warm)

```css
:root {
  --color-primary-600: #ea580c;    /* Orange */
  --color-secondary-600: #dc2626;  /* Red */
}
```css

### Preset 4: Indigo & Pink (Modern)

```css
:root {
  --color-primary-600: #4f46e5;    /* Indigo */
  --color-secondary-600: #ec4899;  /* Pink */
}
```css

## Advanced Customization

### Custom Component Styles

Create `assets/css/custom.css`:

```css
/* Custom button style */
.button--custom {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

/* Custom card hover effect */
.card--custom:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-xl);
}
```css

Then reference it in your layouts.

### Dark Mode Colors

Customize dark mode in `assets/css/tokens.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --theme-bg: #1a1a1a;        /* Your dark bg */
    --theme-fg: #f5f5f5;        /* Your dark text */
    --theme-border: #404040;    /* Your dark borders */
  }
}
```css

### Animation Timing

Adjust animation speeds:

```css
:root {
  --duration-fast: 100ms;    /* Faster */
  --duration-base: 200ms;    /* Faster */
  --duration-slow: 300ms;    /* Faster */

  /* Or slower */
  --duration-fast: 200ms;
  --duration-base: 350ms;
  --duration-slow: 500ms;
}
```toml

## Content Customization

### Homepage

Edit `content/_index.md` (create if doesn't exist):

```markdown
---
title: "Home"
---
```toml

Or customize in `hugo.toml`:

```toml
[params.homeInfoParams]
Title = "Your custom title 👋"
Content = "Your custom introduction text."
```bash

### About Page

Edit `content/about.md`:

```markdown
---
title: "About"
---

## Your About Content

Write about yourself here...
```bash

### Creating New Posts

```bash

# Using Hugo CLI
hugo new posts/my-new-post.md

# Or create manually
touch content/posts/my-new-post.md
```bash

Template:

```markdown
---
title: "Your Post Title"
date: 2025-01-17T10:00:00-03:00
draft: false
tags: ["tag1", "tag2"]
categories: ["Category"]
description: "Post description for SEO"
---

Your content here...
```markdown

## Deployment Customization

### GitHub Pages

The GitHub Actions workflow is already configured in `.github/workflows/hugo.yml`.

To deploy:

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. Site will build and deploy automatically

### Custom Domain

To use a custom domain:

1. Create `static/CNAME` file:
   ```
   yourdomain.com
   ```

2. Update `hugo.toml`:
   ```toml
   baseURL = 'https://yourdomain.com/'
   ```

3. Configure DNS:
   ```
   Type: CNAME
   Name: www (or @)
   Value: YOUR_USERNAME.github.io
   ```

## Performance Optimization

### Image Optimization

1. Use WebP format:
   ```bash
   # Convert images to WebP
   cwebp input.jpg -o output.webp
   ```

2. Use Hugo image processing in templates:
   ```html
   {{ $img := resources.Get "images/photo.jpg" }}
   {{ $resized := $img.Resize "800x" }}
   <img src="{{ $resized.RelPermalink }}" alt="...">
   ```

### Minification

Hugo automatically minifies in production. Ensure in `hugo.toml`:

```toml
[minify]
disableXML = true
minifyOutput = true
```css

## Accessibility Customization

### Focus Indicators

Customize focus styles in `assets/css/extended.css`:

```css
*:focus-visible {
  outline: 3px solid var(--color-primary-600);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```bash

### Contrast

Use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify your color choices meet WCAG AA standards (4.5:1 for normal text).

## Testing Your Customizations

### Local Testing

```bash

# Development server with drafts
hugo server -D

# Production build preview
hugo server --minify

# Check for broken links
hugo --printPathWarnings
```bash

### Build

```bash

# Production build
hugo --minify

# Build output is in /public folder
```bash

### Accessibility Testing

```bash

# Install tools
npm install -g pa11y lighthouse

# Test accessibility
pa11y http://localhost:1313

# Run Lighthouse
lighthouse http://localhost:1313 --only-categories=accessibility
```bash

## Troubleshooting

### Theme Not Loading

```bash

# Verify submodule
git submodule update --init --recursive

# Check hugo.toml
theme = 'PaperMod'  # Must match folder name
```bash

### CSS Not Applying

1. Check file paths in `hugo.toml`
2. Clear browser cache (Ctrl+Shift+R)
3. Verify CSS syntax
4. Check browser console for errors

### Build Errors

```bash

# Verbose output
hugo --verbose

# Debug mode
hugo --debug
```bash

## Next Steps

1. ✅ Customize colors and typography
2. ✅ Update site information in `hugo.toml`
3. ✅ Write your first blog post
4. ✅ Test locally with `hugo server -D`
5. ✅ Push to GitHub to deploy
6. ✅ Share your blog!

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [PaperMod Wiki](https://github.com/adityatelange/hugo-PaperMod/wiki)
- [Design System README](design-system/README.md)
- [WCAG Checklist](design-system/accessibility/wcag-checklist.md)

## Need Help?

- Check [Hugo Forums](https://discourse.gohugo.io/)
- Review [PaperMod Issues](https://github.com/adityatelange/hugo-PaperMod/issues)
- Read design system documentation in `design-system/`

Happy blogging! 🚀
