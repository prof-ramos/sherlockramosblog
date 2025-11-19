# Card Component

Cards are containers for grouping related content and actions about a single subject.

## Structure

```html
<article class="card">
  <img
    src="image.jpg"
    alt="Descriptive alt text"
    class="card__image"
    loading="lazy"
  />
  <div class="card__content">
    <h3 class="card__title">Card Title</h3>
    <p class="card__description">
      Brief description of the card content goes here.
    </p>
    <div class="card__meta">
      <time datetime="2025-01-15">January 15, 2025</time>
      <span class="card__category">Technology</span>
    </div>
  </div>
  <div class="card__actions">
    <a href="/article" class="button button--primary">
      Read More
    </a>
  </div>
</article>
```css

## Variants

### Basic Card
```css
.card {
  background-color: var(--color-neutral-0);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--duration-base) var(--easing-out);
}
```css

### Elevated Card
```css
.card--elevated {
  border: none;
  box-shadow: var(--shadow-md);
}

.card--elevated:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```css

### Outlined Card
```css
.card--outlined {
  border: 2px solid var(--color-neutral-300);
  box-shadow: none;
}
```css

### Interactive Card (Clickable)
```html
<article class="card card--interactive">
  <a href="/article" class="card__link">
    <img
      src="image.jpg"
      alt="Descriptive alt text"
      class="card__image"
    />
    <div class="card__content">
      <h3 class="card__title">Card Title</h3>
      <p class="card__description">
        Brief description of the card content.
      </p>
    </div>
  </a>
</article>
```css

```css
.card--interactive {
  cursor: pointer;
}

.card--interactive:hover {
  border-color: var(--color-primary-600);
}

.card__link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card__link:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}
```css

## Spacing

```css
.card__content {
  padding: var(--spacing-6);
}

.card__title {
  margin-bottom: var(--spacing-3);
}

.card__description {
  margin-bottom: var(--spacing-4);
}

.card__actions {
  padding: var(--spacing-4) var(--spacing-6);
  border-top: 1px solid var(--color-neutral-200);
}
```html

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

#### 1.1.1 Non-text Content
- ✅ All images have descriptive alt text
- ✅ Decorative images use `alt=""`

#### 1.3.1 Info and Relationships
- ✅ Use semantic HTML (`<article>`, `<h3>`, `<time>`)
- ✅ Proper heading hierarchy

#### 1.4.3 Contrast (Minimum)
- ✅ Text contrast: 4.5:1 minimum
- ✅ Borders/separators: 3:1 against background

#### 2.1.1 Keyboard
- ✅ Interactive cards keyboard accessible
- ✅ Focusable elements have visible focus

#### 2.4.4 Link Purpose (In Context)
- ✅ Link text clearly describes destination
- ✅ Avoid "click here" or "read more" without context

### Semantic Markup

```html
<!-- ✅ Good: Proper semantics -->
<article class="card">
  <h3 class="card__title">Article Title</h3>
  <p class="card__description">Description text</p>
  <time datetime="2025-01-15">January 15, 2025</time>
  <a href="/article">Read Article Title</a>
</article>

<!-- ❌ Bad: Divs everywhere -->
<div class="card">
  <div class="card__title">Article Title</div>
  <div class="card__description">Description text</div>
  <div>January 15, 2025</div>
  <a href="/article">Read more</a>
</div>
```html

### Interactive Card Accessibility

When making an entire card clickable:

```html
<!-- Option 1: Wrapper link (simple) -->
<article class="card">
  <a href="/article" class="card__link">
    <h3>Complete Article Title</h3>
    <p>Article description...</p>
  </a>
</article>

<!-- Option 2: Pseudo-element technique (advanced) -->
<article class="card">
  <h3>
    <a href="/article" class="card__primary-link">
      Complete Article Title
    </a>
  </h3>
  <p>Article description...</p>
  <a href="/share">Share</a>
</article>
```css

```css
/* Pseudo-element technique */
.card {
  position: relative;
}

.card__primary-link::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* Other links need higher z-index */
.card a:not(.card__primary-link) {
  position: relative;
  z-index: 2;
}
```html

## Image Handling

### Responsive Images

```html
<img
  src="image-400.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Detailed description of image"
  class="card__image"
  loading="lazy"
  width="400"
  height="300"
/>
```css

### Aspect Ratio

```css
.card__image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}
```css

## Grid Layouts

```html
<div class="card-grid">
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```css

```css
.card-grid {
  display: grid;
  gap: var(--spacing-6);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

/* Responsive */
@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```css

## Loading States

```html
<article class="card card--loading" aria-busy="true" aria-live="polite">
  <div class="card__skeleton">
    <div class="skeleton skeleton--image"></div>
    <div class="skeleton skeleton--title"></div>
    <div class="skeleton skeleton--text"></div>
    <div class="skeleton skeleton--text"></div>
  </div>
</article>
```css

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-neutral-200) 0%,
    var(--color-neutral-100) 50%,
    var(--color-neutral-200) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: var(--radius-base);
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
  }
}
```css

## Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
  .card {
    background-color: var(--color-neutral-800);
    border-color: var(--color-neutral-700);
  }

  .card__title {
    color: var(--color-neutral-100);
  }

  .card__description {
    color: var(--color-neutral-300);
  }
}
```css

## Best Practices

### Do ✅
- Use semantic HTML elements
- Provide descriptive alt text for images
- Use proper heading hierarchy
- Make interactive cards keyboard accessible
- Provide clear focus indicators
- Use `loading="lazy"` for images
- Implement proper aspect ratios
- Support both light and dark modes
- Respect `prefers-reduced-motion`

### Don't ❌
- Nest clickable elements within clickable cards
- Use generic "read more" links without context
- Forget alt text on images
- Make cards too wide (> 800px for readability)
- Use images without width/height attributes
- Rely on hover-only interactions
- Use low-contrast text on images

## Testing Checklist

- [ ] Images have descriptive alt text
- [ ] Semantic HTML is used correctly
- [ ] Heading hierarchy is proper
- [ ] Interactive elements are keyboard accessible
- [ ] Focus indicators are clearly visible
- [ ] Links have descriptive text
- [ ] Text contrast meets WCAG AA (4.5:1)
- [ ] Cards work with screen readers
- [ ] Responsive images load correctly
- [ ] Loading states are announced to AT
- [ ] Dark mode is supported
- [ ] Animations respect reduced-motion
- [ ] Cards work at 200% zoom

## Examples

### Blog Post Card

```html
<article class="card">
  <img
    src="post-image.jpg"
    alt="Developer coding on laptop"
    class="card__image"
    loading="lazy"
    width="400"
    height="225"
  />
  <div class="card__content">
    <div class="card__meta">
      <time datetime="2025-01-15">Jan 15, 2025</time>
      <span class="card__category">Development</span>
    </div>
    <h3 class="card__title">
      <a href="/posts/accessibility-guide" class="card__link">
        Complete Guide to Web Accessibility
      </a>
    </h3>
    <p class="card__description">
      Learn how to make your websites accessible to everyone,
      including users with disabilities.
    </p>
    <div class="card__author">
      <img
        src="author.jpg"
        alt=""
        class="card__avatar"
        width="32"
        height="32"
      />
      <span>Sherlock Ramos</span>
    </div>
  </div>
</article>
```html

### Product Card

```html
<article class="card">
  <img
    src="product.jpg"
    alt="Blue wireless headphones"
    class="card__image"
  />
  <div class="card__content">
    <h3 class="card__title">Premium Headphones</h3>
    <p class="card__price">
      <span class="sr-only">Price:</span>
      $299.99
    </p>
    <p class="card__rating">
      <span aria-label="Rated 4.5 out of 5 stars">
        ★★★★☆ (4.5)
      </span>
    </p>
  </div>
  <div class="card__actions">
    <button class="button button--primary button--full">
      Add to Cart
    </button>
  </div>
</article>
```html
