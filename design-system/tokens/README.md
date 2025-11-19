# Design Tokens

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to maintain a scalable and consistent visual system.

## Token Categories

### Color Tokens

Our color system is built on a comprehensive palette that supports both light and dark modes:

#### Primary Colors
- **Purpose**: Main brand colors, primary CTAs, links
- **Range**: 50-950 (11 shades)
- **Accessibility**: Meets WCAG AA contrast requirements when paired correctly

#### Secondary Colors
- **Purpose**: Accents, secondary actions, highlights
- **Range**: 50-950 (11 shades)

#### Neutral Colors
- **Purpose**: Text, backgrounds, borders, dividers
- **Range**: 0-1000 (13 shades including pure white and black)

#### Semantic Colors
- **Success**: Green palette for positive actions/states
- **Warning**: Amber palette for caution/warning states
- **Error**: Red palette for errors/destructive actions
- **Info**: Blue palette for informational content

### Typography Tokens

#### Font Families
- **Sans**: System font stack optimized for readability
- **Serif**: For special headings or emphasis
- **Mono**: For code blocks and technical content

#### Font Sizes
- Scale from `xs` (0.75rem) to `9xl` (8rem)
- Each size includes recommended line height
- Mobile-first approach with responsive scaling

#### Font Weights
- Range from `thin` (100) to `black` (900)
- Use `normal` (400) for body text
- Use `semibold` (600) or `bold` (700) for headings

#### Line Heights
- **tight**: For headings
- **normal**: For body text
- **relaxed**: For improved readability in long-form content

### Spacing Tokens

Consistent spacing creates visual rhythm and hierarchy:

- Based on 0.25rem (4px) base unit
- Scale from `0` to `96` (24rem)
- Use multiples of 4 for consistency

**Usage Guidelines**:
- Component padding: 12-16 (3-4rem)
- Section margins: 16-24 (4-6rem)
- Element gaps: 4-8 (1-2rem)

### Border Radius Tokens

- **sm/base**: For small components (buttons, inputs)
- **md/lg**: For cards, containers
- **xl/2xl/3xl**: For large surfaces
- **full**: For circular elements (avatars, badges)

### Shadow Tokens

Elevation system for depth and hierarchy:

- **sm**: Subtle elevation for inputs
- **base**: Default elevation for cards
- **md/lg**: Prominent elevation for dropdowns
- **xl/2xl**: Maximum elevation for modals
- **inner**: For inset effects

### Animation Tokens

Consistent timing for smooth interactions:

#### Duration
- **fast** (150ms): Micro-interactions
- **base** (250ms): Standard transitions
- **slow** (350ms): Complex animations
- **slower** (500ms): Page transitions

#### Easing
- **linear**: Constant speed
- **in**: Accelerating
- **out**: Decelerating (recommended for most UI)
- **in-out**: Smooth acceleration and deceleration

### Z-Index Tokens

Layering system to prevent conflicts:

- **dropdown**: 1000
- **sticky**: 1100
- **fixed**: 1200
- **overlay**: 1300
- **modal**: 1400
- **popover**: 1500
- **tooltip**: 1600

## Usage

### In CSS

```css
.button {
  background-color: var(--color-primary-600);
  color: var(--color-neutral-0);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  transition: all var(--duration-base) var(--easing-out);
  box-shadow: var(--shadow-sm);
}

.button:hover {
  background-color: var(--color-primary-700);
  box-shadow: var(--shadow-md);
}
```css

### In JavaScript

```javascript
import tokens from './design-tokens.json';

const primaryColor = tokens.color.primary[600].value;
const spacing = tokens.spacing[4].value;
```css

## Accessibility Considerations

1. **Color Contrast**: All color combinations meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)
2. **Focus Indicators**: Use primary-600 with 2px outline for keyboard focus
3. **Motion**: Respect `prefers-reduced-motion` media query
4. **Touch Targets**: Minimum 44x44px using spacing tokens

## Updating Tokens

When modifying tokens:

1. Update `design-tokens.json`
2. Regenerate CSS custom properties
3. Test in both light and dark modes
4. Verify accessibility compliance
5. Update documentation
6. Version control the changes

## Tools

- **Figma**: Tokens sync with Figma Tokens plugin
- **Validation**: Use included token validator script
- **Documentation**: Auto-generated from JSON source
