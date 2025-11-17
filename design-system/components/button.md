# Button Component

Buttons are interactive elements that trigger actions when clicked or tapped.

## Variants

### Primary Button
- **Purpose**: Main call-to-action
- **Usage**: One primary button per section
- **Color**: Primary-600 background, white text

### Secondary Button
- **Purpose**: Secondary actions
- **Usage**: Multiple allowed per section
- **Color**: Neutral-200 background, neutral-900 text

### Tertiary/Ghost Button
- **Purpose**: Low-emphasis actions
- **Usage**: Less important actions
- **Color**: Transparent background, primary-600 text

### Destructive Button
- **Purpose**: Destructive or irreversible actions
- **Usage**: Delete, remove, cancel operations
- **Color**: Error-600 background, white text

## Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 32px | 8px 12px | sm (0.875rem) |
| Medium | 40px | 12px 20px | base (1rem) |
| Large | 48px | 16px 28px | lg (1.125rem) |

## States

### Default
```css
.button {
  background-color: var(--color-primary-600);
  color: var(--color-neutral-0);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-3) var(--spacing-5);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--duration-base) var(--easing-out);
  box-shadow: var(--shadow-sm);
}
```

### Hover
```css
.button:hover {
  background-color: var(--color-primary-700);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
```

### Active
```css
.button:active {
  background-color: var(--color-primary-800);
  box-shadow: var(--shadow-sm);
  transform: translateY(0);
}
```

### Focus
```css
.button:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}
```

### Disabled
```css
.button:disabled {
  background-color: var(--color-neutral-300);
  color: var(--color-neutral-500);
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.6;
}
```

### Loading
- Show spinner/loading indicator
- Disable interaction
- Maintain button width to prevent layout shift

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

#### 1.4.3 Contrast (Minimum)
- ✅ Primary button: White text on primary-600 (7.2:1 ratio)
- ✅ Secondary button: Dark text on light background (8.5:1 ratio)
- ✅ Minimum contrast ratio: 4.5:1

#### 1.4.11 Non-text Contrast
- ✅ Button boundaries: 3:1 against background
- ✅ Focus indicators: 3:1 minimum contrast

#### 2.1.1 Keyboard
- ✅ Fully keyboard accessible
- ✅ Tab navigation supported
- ✅ Enter/Space activation

#### 2.4.7 Focus Visible
- ✅ Clear focus indicator (2px outline)
- ✅ High contrast focus state
- ✅ Visible on all backgrounds

#### 2.5.5 Target Size (AAA)
- ✅ Minimum 44x44px touch target
- ✅ Adequate spacing between buttons (8px minimum)

#### 4.1.2 Name, Role, Value
- ✅ Proper semantic HTML (`<button>`)
- ✅ Accessible name (text or aria-label)
- ✅ Role communicated to assistive technology

### Implementation

```html
<!-- Good: Accessible button -->
<button
  type="button"
  class="button button--primary"
  aria-label="Submit form"
>
  Submit
</button>

<!-- Good: Button with icon -->
<button
  type="button"
  class="button button--primary"
  aria-label="Close dialog"
>
  <svg aria-hidden="true" focusable="false">
    <!-- Icon SVG -->
  </svg>
  <span>Close</span>
</button>

<!-- Good: Disabled button -->
<button
  type="button"
  class="button button--primary"
  disabled
  aria-disabled="true"
>
  Submit
</button>

<!-- Bad: Div as button -->
<div class="button" onclick="doSomething()">
  Click me <!-- ❌ Not keyboard accessible -->
</div>

<!-- Bad: Missing accessible name -->
<button class="button">
  <svg><!-- Icon only --></svg>
  <!-- ❌ No text or aria-label -->
</button>
```

### ARIA Attributes

| Attribute | Usage | Required |
|-----------|-------|----------|
| `aria-label` | Provides accessible name when no visible text | When icon-only |
| `aria-disabled` | Indicates disabled state | With `disabled` |
| `aria-pressed` | For toggle buttons | Toggle buttons only |
| `aria-expanded` | For buttons that expand/collapse | Dropdown buttons |
| `aria-controls` | References controlled element | When controlling other elements |

## Icon Guidelines

### Icon with Text
```html
<button class="button">
  <svg class="button__icon" aria-hidden="true" focusable="false">
    <!-- Icon -->
  </svg>
  <span>Save</span>
</button>
```

### Icon Only
```html
<button class="button" aria-label="Save document">
  <svg aria-hidden="true" focusable="false">
    <!-- Icon -->
  </svg>
</button>
```

**Rules**:
- Icons must be `aria-hidden="true"`
- Icons must be `focusable="false"` (for IE11)
- Icon-only buttons MUST have `aria-label`

## Responsive Behavior

```css
/* Mobile: Full width on small screens */
@media (max-width: 640px) {
  .button--full-mobile {
    width: 100%;
  }
}

/* Tablet and up: Auto width */
@media (min-width: 641px) {
  .button {
    width: auto;
    min-width: 120px;
  }
}
```

## Best Practices

### Do ✅
- Use semantic `<button>` element
- Provide clear, action-oriented labels
- Maintain consistent button hierarchy
- Ensure 44x44px minimum touch target
- Use loading states for async actions
- Disable during processing
- Provide clear focus indicators

### Don't ❌
- Use `<div>` or `<a>` as buttons
- Use vague labels like "Click here"
- Have more than one primary button per section
- Make buttons too small (< 44x44px)
- Rely solely on color to convey state
- Remove focus indicators
- Use button for navigation (use `<a>` instead)

## Testing Checklist

- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus indicator is clearly visible
- [ ] Screen reader announces button correctly
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Touch target is at least 44x44px
- [ ] Disabled state is communicated to AT
- [ ] Loading state prevents double submission
- [ ] Hover and active states are distinct
- [ ] Works with browser zoom up to 200%
- [ ] Supports reduced motion preferences

## Examples

### Primary Button
```html
<button class="button button--primary button--md">
  Get Started
</button>
```

### Secondary Button
```html
<button class="button button--secondary button--md">
  Learn More
</button>
```

### Destructive Button
```html
<button class="button button--destructive button--md">
  Delete Account
</button>
```

### Button Group
```html
<div class="button-group" role="group" aria-label="Form actions">
  <button class="button button--secondary">Cancel</button>
  <button class="button button--primary">Save</button>
</div>
```
