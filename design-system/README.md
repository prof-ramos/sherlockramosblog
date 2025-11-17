# Sherlock Ramos Blog - Design System

A comprehensive, accessible, and responsive design system for the Sherlock Ramos personal blog.

## Overview

This design system provides a complete set of design tokens, components, patterns, and guidelines to ensure consistency, accessibility, and excellent user experience across the blog.

### Key Principles

1. **Accessibility First**: WCAG 2.1 Level AA compliance minimum
2. **Mobile-First**: Progressive enhancement from mobile to desktop
3. **Performance**: Fast loading and smooth interactions
4. **Consistency**: Reusable patterns and components
5. **Maintainability**: Well-documented and easy to update

## Table of Contents

- [Design Tokens](#design-tokens)
- [Components](#components)
- [Patterns](#patterns)
- [Accessibility](#accessibility)
- [Documentation](#documentation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Design Tokens

Design tokens are the foundational elements of the design system, stored as reusable values.

### Location
- **JSON**: `design-system/tokens/design-tokens.json`
- **CSS**: `assets/css/tokens.css`
- **Documentation**: `design-system/tokens/README.md`

### Token Categories

#### Colors
```css
/* Primary colors (11 shades) */
--color-primary-50 through --color-primary-950

/* Secondary colors (11 shades) */
--color-secondary-50 through --color-secondary-950

/* Neutral colors (13 shades) */
--color-neutral-0 through --color-neutral-1000

/* Semantic colors */
--color-success-*
--color-warning-*
--color-error-*
--color-info-*
```

#### Typography
```css
/* Font families */
--font-family-sans
--font-family-serif
--font-family-mono

/* Font sizes (xs to 9xl) */
--font-size-*

/* Font weights (thin to black) */
--font-weight-*

/* Line heights */
--line-height-*

/* Letter spacing */
--letter-spacing-*
```

#### Spacing
```css
/* Spacing scale (0 to 96) */
--spacing-0
--spacing-px
--spacing-1 through --spacing-96
```

#### Other Tokens
- Border radius (`--radius-*`)
- Shadows (`--shadow-*`)
- Animation duration/easing
- Z-index layers
- Breakpoints

### Usage Example

```css
.button {
  background-color: var(--color-primary-600);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  transition: all var(--duration-base) var(--easing-out);
}
```

## Components

Reusable UI components with accessibility built-in.

### Available Components

#### Buttons (`design-system/components/button.md`)
- Primary, Secondary, Tertiary variants
- Small, Medium, Large sizes
- Hover, Focus, Active, Disabled states
- Full keyboard accessibility
- Minimum 44x44px touch targets

```html
<button class="button button--primary button--md">
  Get Started
</button>
```

#### Forms (`design-system/components/form-inputs.md`)
- Text inputs, textareas, selects
- Checkboxes and radio buttons
- Proper label association
- Error states and validation
- Help text support

```html
<div class="form-field">
  <label for="email" class="form-label">Email</label>
  <input
    type="email"
    id="email"
    class="form-input"
    required
    aria-required="true"
  />
</div>
```

#### Cards (`design-system/components/card.md`)
- Basic, Elevated, Outlined variants
- Image, content, actions sections
- Responsive grid layouts
- Loading states
- Dark mode support

```html
<article class="card">
  <img src="..." alt="..." class="card__image" />
  <div class="card__content">
    <h3 class="card__title">Title</h3>
    <p class="card__description">Description</p>
  </div>
</article>
```

### Creating New Components

1. Document in `design-system/components/[name].md`
2. Include accessibility requirements
3. Provide code examples
4. Document all states and variants
5. Add to this README

## Patterns

Higher-level patterns combining multiple components.

### Responsive Design (`design-system/patterns/responsive-design.md`)
- Mobile-first approach
- Breakpoint strategy (xs, sm, md, lg, xl, 2xl)
- Fluid typography
- Responsive images
- Touch targets

### User Flows (`design-system/patterns/user-flows.md`)
- First-time visitor journey
- Returning visitor patterns
- Mobile user flows
- Navigation optimization

### Wireframes (`design-system/patterns/wireframes.md`)
- Homepage layouts (desktop, tablet, mobile)
- Blog post list pages
- Individual blog posts
- Category/tag pages
- Search results

## Accessibility

Comprehensive accessibility guidelines and tools.

### WCAG Compliance (`design-system/accessibility/wcag-checklist.md`)
- Complete WCAG 2.1 Level AA checklist
- Testing methods
- Quick reference guide
- Sign-off template

### Audit Framework (`design-system/accessibility/audit-framework.md`)
- Planning phase
- Automated testing tools
- Manual testing procedures
- Screen reader testing
- Keyboard navigation
- Reporting templates

### Accessibility Features

✅ Skip navigation links
✅ Semantic HTML structure
✅ ARIA attributes where needed
✅ Keyboard navigation support
✅ Focus indicators (3:1 contrast minimum)
✅ Color contrast (4.5:1 for text, 3:1 for UI)
✅ Screen reader friendly
✅ Alternative text for images
✅ Form labels and error messages
✅ Responsive and zoomable

## Documentation

Additional documentation resources.

### User Personas (`design-system/documentation/user-personas.md`)
1. **Ana Silva** - Technical Developer (Primary)
2. **João Santos** - Tech-Curious Student (Secondary)
3. **Carlos Oliveira** - Engineering Manager (Tertiary)
4. **Mariana Costa** - Career Switcher (Emerging)

### Information Architecture (`design-system/documentation/information-architecture.md`)
- Site map
- Content inventory
- Navigation structure
- URL patterns
- Taxonomy (categories/tags)
- Metadata strategy

### Usability Testing Plans
- Test scenarios
- Moderated testing protocols
- Remote unmoderated testing
- A/B testing strategy
- Participant recruitment

## Getting Started

### Prerequisites

- Hugo Extended version 0.121.0+
- Git
- Modern web browser
- Text editor

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sherlockramos/sherlockramosblog.git
   cd sherlockramosblog
   ```

2. **Initialize Hugo**
   ```bash
   hugo mod init github.com/sherlockramos/sherlockramosblog
   ```

3. **Add PaperMod theme**
   ```bash
   git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
   git submodule update --init --recursive
   ```

4. **Run development server**
   ```bash
   hugo server -D
   ```

5. **View in browser**
   ```
   http://localhost:1313
   ```

## Usage

### Using Design Tokens

Design tokens are available as CSS custom properties:

```css
/* Import tokens */
@import "tokens.css";

/* Use in your styles */
.my-component {
  color: var(--color-primary-600);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
}
```

### Using Components

Components are documented with complete HTML and CSS examples:

```html
<!-- Copy component markup from documentation -->
<button class="button button--primary">
  Click Me
</button>
```

### Responsive Development

Follow mobile-first approach:

```css
/* Mobile (default) */
.element {
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    width: 33.333%;
  }
}
```

### Accessibility Implementation

Always include:

1. **Semantic HTML**
   ```html
   <article>
     <h2>Article Title</h2>
     <p>Content...</p>
   </article>
   ```

2. **ARIA when needed**
   ```html
   <button aria-label="Close dialog" aria-pressed="false">
     ✕
   </button>
   ```

3. **Focus indicators**
   ```css
   .interactive:focus-visible {
     outline: 2px solid var(--color-primary-600);
     outline-offset: 2px;
   }
   ```

4. **Alternative text**
   ```html
   <img src="chart.png" alt="Bar chart showing 50% growth">
   ```

## File Structure

```
sherlockramosblog/
├── archetypes/          # Content templates
├── assets/
│   └── css/
│       ├── tokens.css   # Design tokens as CSS variables
│       └── extended.css # Custom styles
├── content/             # Blog content
│   ├── posts/
│   ├── about.md
│   └── search.md
├── design-system/       # Design system documentation
│   ├── tokens/
│   │   ├── design-tokens.json
│   │   └── README.md
│   ├── components/
│   │   ├── button.md
│   │   ├── form-inputs.md
│   │   └── card.md
│   ├── patterns/
│   │   ├── responsive-design.md
│   │   ├── user-flows.md
│   │   └── wireframes.md
│   ├── accessibility/
│   │   ├── wcag-checklist.md
│   │   └── audit-framework.md
│   ├── documentation/
│   │   ├── user-personas.md
│   │   └── information-architecture.md
│   └── README.md        # This file
├── layouts/             # Hugo templates
├── static/              # Static assets
│   ├── css/
│   └── images/
├── themes/
│   └── PaperMod/        # Theme submodule
├── .gitmodules
├── hugo.toml            # Hugo configuration
├── LICENSE
└── README.md
```

## Browser Support

### Supported Browsers

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Progressive Enhancement

The design system follows progressive enhancement:

1. **Base layer**: Semantic HTML works everywhere
2. **Enhancement layer**: CSS for visual design
3. **Advanced layer**: Modern CSS features with fallbacks

```css
/* Example with fallback */
.card {
  background: #ffffff; /* Fallback */
  background: var(--color-neutral-0); /* Modern */
}
```

## Performance

### Optimization Strategies

1. **CSS**: Minified and combined
2. **Images**: WebP with fallbacks, lazy loading
3. **Fonts**: System font stack (no external fonts)
4. **JavaScript**: Minimal, deferred loading
5. **Caching**: Aggressive cache headers

### Performance Budgets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Page Weight**: < 1MB

## Testing

### Automated Testing

```bash
# HTML validation
npx html-validate "public/**/*.html"

# Accessibility testing
npx pa11y-ci

# Lighthouse CI
npx lhci autorun
```

### Manual Testing

1. **Keyboard navigation**: Tab through all pages
2. **Screen reader**: Test with NVDA/VoiceOver
3. **Color contrast**: Use WebAIM checker
4. **Responsive**: Test on real devices
5. **Cross-browser**: Test in all supported browsers

### Testing Checklist

- [ ] All components keyboard accessible
- [ ] Focus indicators visible (3:1 contrast)
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Works with screen readers
- [ ] Responsive on mobile devices
- [ ] No console errors
- [ ] Performance budget met
- [ ] Cross-browser compatible

## Contributing

### Design System Updates

1. **Propose changes**: Open issue describing change
2. **Document first**: Update relevant documentation
3. **Implement**: Make code changes
4. **Test**: Ensure accessibility and responsiveness
5. **Review**: Get team approval
6. **Merge**: Update main branch
7. **Communicate**: Announce changes to team

### Contribution Guidelines

- Follow existing patterns and conventions
- Maintain accessibility standards
- Document all changes
- Test thoroughly
- Keep components modular
- Write clear commit messages

## Resources

### Design Tools

- **Figma**: Design mockups and prototypes
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Blindness Simulator**: Chromatic Vision Simulator
- **Screen Readers**: NVDA, JAWS, VoiceOver

### Documentation

- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/
- **MDN Web Docs**: https://developer.mozilla.org/
- **A11y Project**: https://www.a11yproject.com/
- **Hugo Docs**: https://gohugo.io/documentation/

### Learning

- **WebAIM**: https://webaim.org/
- **Inclusive Components**: https://inclusive-components.design/
- **Every Layout**: https://every-layout.dev/
- **Smashing Magazine**: https://www.smashingmagazine.com/

## License

This design system is part of the Sherlock Ramos Blog project.

See LICENSE file for details.

## Changelog

### Version 1.0.0 (2025-01-17)

**Initial Release**

- ✅ Complete design token system
- ✅ Core component library (buttons, forms, cards)
- ✅ Responsive design patterns
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Comprehensive documentation
- ✅ User personas and research
- ✅ Information architecture
- ✅ Wireframes and prototypes

### Roadmap

**Version 1.1.0** (Planned)
- [ ] Additional components (modals, tooltips, alerts)
- [ ] Animation library
- [ ] Icon system
- [ ] Advanced search patterns

**Version 2.0.0** (Future)
- [ ] Multi-language support
- [ ] Theme customization
- [ ] Component playground
- [ ] Design tokens API

## Contact

**Maintainer**: Sherlock Ramos

**Questions or Issues**: Open an issue on GitHub

---

Built with ❤️ and accessibility in mind.
