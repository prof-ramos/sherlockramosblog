# Wireframes & Prototypes

Visual representations of key pages and user interface layouts for the Sherlock Ramos Blog.

## Wireframe Methodology

### Low-Fidelity Wireframes
- Focus on layout and hierarchy
- No colors, just grayscale
- Placeholder content
- Rapid iteration

### Mid-Fidelity Wireframes
- Include actual content
- Basic typography
- Simple interactions
- More detailed layout

### High-Fidelity Prototypes
- Full design system applied
- Real content
- Interactive elements
- Production-ready designs

## Homepage Wireframes

### Desktop Layout (1280px)

```
┌────────────────────────────────────────────────────────────┐
│  [Logo]    Home  Posts  Categories  Tags  About  [Search]  │ ← Header (sticky)
├────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                                                      │  │
│  │   Olá, sou Sherlock Ramos 👋                        │  │ ← Hero Section
│  │                                                      │  │
│  │   Bem-vindo ao meu blog pessoal onde compartilho    │  │
│  │   conhecimentos sobre tecnologia e desenvolvimento  │  │
│  │                                                      │  │
│  │   [View All Posts →]                                │  │
│  │                                                      │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
│  Recent Posts                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ [Image]      │  │ [Image]      │  │ [Image]      │    │
│  │              │  │              │  │              │    │
│  │ Post Title 1 │  │ Post Title 2 │  │ Post Title 3 │    │ ← Featured Posts
│  │              │  │              │  │              │    │   (3 columns)
│  │ Excerpt...   │  │ Excerpt...   │  │ Excerpt...   │    │
│  │              │  │              │  │              │    │
│  │ [Read More→] │  │ [Read More→] │  │ [Read More→] │    │
│  │ Jan 15, 2025 │  │ Jan 14, 2025 │  │ Jan 13, 2025 │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  Categories                                                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│  │  Tech   │ │ Design  │ │Business │ │Tutorial │         │ ← Category Cards
│  │  (12)   │ │  (8)    │ │  (6)    │ │  (10)   │         │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘         │
│                                                             │
├────────────────────────────────────────────────────────────┤
│  [Logo]                                                     │
│                                                             │
│  Quick Links      Categories        Social                 │
│  • Home           • Technology      • GitHub               │ ← Footer
│  • Posts          • Design          • LinkedIn             │
│  • About          • Business        • Twitter              │
│                                                             │
│  © 2025 Sherlock Ramos                                     │
└────────────────────────────────────────────────────────────┘
```

### Tablet Layout (768px)

```
┌──────────────────────────────────────┐
│  [Logo]    [☰ Menu]      [Search]    │ ← Header
├──────────────────────────────────────┤
│                                       │
│  ┌───────────────────────────────┐  │
│  │   Olá, sou Sherlock Ramos     │  │
│  │                               │  │
│  │   Bem-vindo ao meu blog       │  │ ← Hero
│  │                               │  │
│  │   [View All Posts →]          │  │
│  └───────────────────────────────┘  │
│                                       │
│  Recent Posts                         │
│  ┌────────────┐  ┌────────────┐     │
│  │ [Image]    │  │ [Image]    │     │ ← 2 columns
│  │ Title 1    │  │ Title 2    │     │
│  │ Excerpt... │  │ Excerpt... │     │
│  └────────────┘  └────────────┘     │
│  ┌────────────┐  ┌────────────┐     │
│  │ [Image]    │  │ [Image]    │     │
│  │ Title 3    │  │ Title 4    │     │
│  └────────────┘  └────────────┘     │
│                                       │
└──────────────────────────────────────┘
```

### Mobile Layout (375px)

```
┌───────────────────────┐
│ [☰]  [Logo]  [Search] │ ← Sticky header
├───────────────────────┤
│                       │
│  Olá, sou Sherlock    │
│                       │
│  Bem-vindo ao meu     │ ← Hero
│  blog pessoal...      │   (condensed)
│                       │
│  [View Posts →]       │
│                       │
├───────────────────────┤
│  Recent Posts         │
│                       │
│  ┌─────────────────┐ │
│  │ [Image]         │ │
│  │                 │ │
│  │ Post Title 1    │ │ ← Single
│  │                 │ │   column
│  │ Excerpt text... │ │
│  │                 │ │
│  │ [Read More →]   │ │
│  └─────────────────┘ │
│                       │
│  ┌─────────────────┐ │
│  │ [Image]         │ │
│  │ Post Title 2    │ │
│  └─────────────────┘ │
│                       │
└───────────────────────┘
```

## Blog Post List Page

### Desktop Layout

```
┌────────────────────────────────────────────────────────────┐
│  [Header Navigation]                                        │
├────────────────────────────────────────────────────────────┤
│  Home > Posts                                   [Breadcrumb]│
│                                                             │
│  ┌────────────────┐                                        │
│  │  Filters       │  ┌─────────────────────────────────┐  │
│  │                │  │ [Post Image - 16:9 ratio]       │  │
│  │  Categories    │  │                                  │  │
│  │  ☐ Technology  │  ├─────────────────────────────────┤  │
│  │  ☐ Design      │  │ Blog Post Title Goes Here       │  │
│  │  ☐ Business    │  │                                  │  │
│  │                │  │ Brief excerpt of the post that   │  │
│  │  Tags          │  │ gives readers an idea of the    │  │
│  │  • JavaScript  │  │ content...                       │  │
│  │  • CSS         │  │                                  │  │
│  │  • React       │  │ Jan 15, 2025 • 5 min read       │  │
│  │                │  │ [Technology] [Tutorial]          │  │
│  │  [Search]      │  │                                  │  │
│  │  [________]    │  │ [Read More →]                    │  │
│  │                │  └─────────────────────────────────┘  │
│  └────────────────┘                                        │
│      Sidebar         ┌─────────────────────────────────┐  │
│      (25%)           │ [Post Image]                    │  │
│                      │ Another Post Title               │  │
│                      │ Excerpt...                       │  │
│                      │ Jan 14, 2025                     │  │
│                      └─────────────────────────────────┘  │
│                                                             │
│                      [1] 2 3 4 ... Next →    [Pagination]  │
├────────────────────────────────────────────────────────────┤
│  [Footer]                                                   │
└────────────────────────────────────────────────────────────┘
```

### Mobile Layout

```
┌───────────────────────┐
│  [Header]             │
├───────────────────────┤
│  Home > Posts         │
│                       │
│  [Search Posts]       │
│  [Filter by Category] │
│                       │
│  ┌─────────────────┐ │
│  │ [Post Image]    │ │
│  ├─────────────────┤ │
│  │ Post Title      │ │
│  │                 │ │
│  │ Excerpt...      │ │
│  │                 │ │
│  │ Jan 15, 2025    │ │
│  │ [Tech] [Web]    │ │
│  │                 │ │
│  │ [Read More →]   │ │
│  └─────────────────┘ │
│                       │
│  ┌─────────────────┐ │
│  │ [Post Image]    │ │
│  │ Post Title 2    │ │
│  └─────────────────┘ │
│                       │
│  [Load More]          │
│                       │
└───────────────────────┘
```

## Individual Blog Post

### Desktop Layout

```
┌────────────────────────────────────────────────────────────┐
│  [Header Navigation]                                        │
├────────────────────────────────────────────────────────────┤
│  Home > Posts > Technology > Post Title     [Breadcrumb]    │
│                                                             │
│  ┌──────────────┐  ┌─────────────────────────────────┐    │
│  │ Table of     │  │                                  │    │
│  │ Contents     │  │  Complete Guide to Web          │    │
│  │              │  │  Accessibility                   │    │
│  │ • Introduction│  │                                  │    │
│  │ • Section 1  │  │  By Sherlock Ramos               │    │
│  │   - Sub 1.1  │  │  Jan 15, 2025 • 10 min read     │    │
│  │   - Sub 1.2  │  │  [Technology] [Accessibility]    │    │
│  │ • Section 2  │  │                                  │    │
│  │ • Conclusion │  │  [Featured Image - 21:9]         │    │
│  │              │  │                                  │    │
│  │ [Share]      │  ├─────────────────────────────────┤    │
│  │  Twitter     │  │                                  │    │
│  │  LinkedIn    │  │  ## Introduction                 │    │
│  │  Copy Link   │  │                                  │    │
│  │              │  │  Article content begins here...  │    │
│  └──────────────┘  │                                  │    │
│      Sidebar       │  Paragraph text with proper      │    │
│      (20%)         │  line length and spacing for     │    │
│                    │  optimal readability.            │    │
│                    │                                  │    │
│                    │  ## Main Section                 │    │
│                    │                                  │    │
│                    │  More content here...            │    │
│                    │                                  │    │
│                    │  [Back to Top ↑]                 │    │
│                    └─────────────────────────────────┘    │
│                                                             │
│                    ┌─────────────────────────────────┐    │
│                    │ Related Posts                    │    │
│                    │                                  │    │
│                    │ ┌───┐  ┌───┐  ┌───┐            │    │
│                    │ │ 1 │  │ 2 │  │ 3 │            │    │
│                    │ └───┘  └───┘  └───┘            │    │
│                    └─────────────────────────────────┘    │
│                                                             │
│  ← Previous Post              Next Post →   [Post Nav]     │
│                                                             │
├────────────────────────────────────────────────────────────┤
│  [Footer]                                                   │
└────────────────────────────────────────────────────────────┘
```

### Mobile Layout

```
┌───────────────────────┐
│  [Header]             │
├───────────────────────┤
│  Home > Posts > Tech  │
│                       │
│  Web Accessibility    │
│  Guide                │
│                       │
│  Sherlock Ramos       │
│  Jan 15, 2025         │
│  [Tech] [A11y]        │
│                       │
│  [▼ Table of Contents]│ ← Collapsible
│                       │
│  [Featured Image]     │
│                       │
├───────────────────────┤
│                       │
│  ## Introduction      │
│                       │
│  Article content with │
│  comfortable reading  │
│  width...             │
│                       │
│  ## Main Section      │
│                       │
│  More content...      │
│                       │
│  [↑ Back to Top]      │
│                       │
├───────────────────────┤
│  Share this post      │
│  [Twitter] [LinkedIn] │
│                       │
│  Related Posts        │
│  • Post 1             │
│  • Post 2             │
│  • Post 3             │
│                       │
│  ← Prev    Next →     │
│                       │
└───────────────────────┘
```

## Category/Tag Page

```
┌────────────────────────────────────────────────────────────┐
│  [Header]                                                   │
├────────────────────────────────────────────────────────────┤
│  Home > Categories > Technology                             │
│                                                             │
│  Technology                                                 │
│  12 posts in this category                                 │
│                                                             │
│  [Sort: Newest First ▼]                                    │
│                                                             │
│  ┌───────────┐  Post Title 1                              │
│  │  [Image]  │  Brief excerpt about the post...            │
│  │           │  Jan 15, 2025 • 5 min read                  │
│  └───────────┘  [Read More →]                              │
│                                                             │
│  ┌───────────┐  Post Title 2                              │
│  │  [Image]  │  Brief excerpt about the post...            │
│  │           │  Jan 14, 2025 • 8 min read                  │
│  └───────────┘  [Read More →]                              │
│                                                             │
│  [Load More Posts]                                          │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

## Search Results Page

```
┌────────────────────────────────────────────────────────────┐
│  [Header]                                                   │
├────────────────────────────────────────────────────────────┤
│  [Search: accessibility          ] [🔍 Search]              │
│                                                             │
│  5 results for "accessibility"                             │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Complete Guide to Web Accessibility                  │ │
│  │  ...implementation of accessibility features in web   │ │
│  │  applications. Learn about WCAG compliance...         │ │
│  │  Technology • Jan 15, 2025                            │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Accessibility Testing Tools                          │ │
│  │  ...various tools for testing accessibility including │ │
│  │  automated and manual testing approaches...           │ │
│  │  Tutorial • Jan 10, 2025                              │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  [1] 2 Next →                                              │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

## About Page

```
┌────────────────────────────────────────────────────────────┐
│  [Header]                                                   │
├────────────────────────────────────────────────────────────┤
│  Home > About                                               │
│                                                             │
│  ┌──────────┐                                              │
│  │ [Avatar] │   Sherlock Ramos                             │
│  │  Photo   │   Developer & Tech Enthusiast                │
│  └──────────┘                                              │
│                                                             │
│  ## About Me                                                │
│                                                             │
│  Content about the author, background,                      │
│  interests, and expertise...                                │
│                                                             │
│  ## Technologies                                            │
│                                                             │
│  • Web Development                                          │
│  • Software Architecture                                    │
│  • DevOps & Cloud                                           │
│                                                             │
│  ## Contact                                                 │
│                                                             │
│  [GitHub] [LinkedIn] [Twitter] [Email]                     │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

## Component Library Preview

### Button States
```
┌──────────────────────────────────────┐
│  [Default Button]                    │
│  [Hover State]                       │
│  [Active/Pressed]                    │
│  [Disabled]                          │
│  [Loading...]                        │
└──────────────────────────────────────┘
```

### Form Components
```
┌──────────────────────────────────────┐
│  Label                               │
│  [____________Input_________]        │
│  Help text here                      │
│                                      │
│  [Dropdown ▼]                        │
│                                      │
│  ☐ Checkbox option                  │
│  ○ Radio option                     │
└──────────────────────────────────────┘
```

### Cards
```
┌──────────────┐  ┌──────────────┐
│ [Image]      │  │ [Icon]       │
│              │  │              │
│ Card Title   │  │ Feature Name │
│              │  │              │
│ Description  │  │ Description  │
│ text here... │  │ goes here... │
│              │  │              │
│ [Action CTA] │  │ [Learn More] │
└──────────────┘  └──────────────┘
```

## Interactive Prototypes

### Prototype Tools
- **Figma**: Full design and prototyping
- **Adobe XD**: Interactive prototypes
- **InVision**: Clickable mockups
- **Sketch + Craft**: Design to prototype

### Interaction Specifications

#### Hamburger Menu (Mobile)
```
State 1: Closed
┌───────────────┐
│ ☰  Logo  🔍  │
└───────────────┘

Action: Tap hamburger
Animation: 250ms ease-out

State 2: Open
┌───────────────┐
│ ✕  Logo  🔍  │
├───────────────┤
│ Home          │
│ Posts         │
│ Categories    │
│ Tags          │
│ About         │
└───────────────┘
```

#### Search Overlay
```
State 1: Icon only
[🔍]

Action: Click/Tap search
Animation: Expand 300ms

State 2: Expanded
┌──────────────────────────┐
│ [Search posts...  ] [✕] │
│                          │
│ Recent Searches:         │
│ • accessibility          │
│ • web development        │
└──────────────────────────┘
```

## Annotation Guidelines

### Design Annotations
```
┌─────────────────┐
│ Component Name  │ ← Typography: font-size-2xl, font-weight-bold
│                 │
│ Body text here  │ ← Typography: font-size-base, line-height-relaxed
│ and description │   Color: neutral-700
│                 │   Max-width: 65ch
│ [Button Text]   │ ← Padding: spacing-3 spacing-6
└─────────────────┘   Border-radius: radius-md
     ^                Box-shadow: shadow-sm
     |
     Spacing: spacing-6 between elements
```

### Responsive Breakpoints
```
Mobile:    < 640px   (1 column)
Tablet:    768px     (2 columns)
Desktop:   1024px    (3 columns)
Large:     1280px+   (max-width container)
```

## Accessibility Annotations

```
┌─────────────────────┐
│ [Button]            │ ← min-height: 44px (WCAG AAA)
└─────────────────────┘   Focus indicator: 2px solid primary-600

Color Contrast:
- Text on background: 4.5:1 ✓
- Button text: 7:1 ✓
- Focus indicator: 3:1 ✓

ARIA:
- aria-label="Descriptive label"
- role="navigation"
```

## Handoff Documentation

### Developer Handoff Checklist
- [ ] All components documented
- [ ] Design tokens specified
- [ ] Interaction states defined
- [ ] Responsive breakpoints noted
- [ ] Accessibility requirements listed
- [ ] Animation timings specified
- [ ] Asset exports provided
- [ ] Prototype links shared

### Asset Exports
- **Images**: 1x, 2x, 3x for icons
- **Logos**: SVG + PNG fallbacks
- **Icons**: SVG sprite or individual
- **Fonts**: WOFF2, WOFF formats
- **Illustrations**: SVG when possible

## Next Steps

1. **Validate wireframes** with stakeholders
2. **User testing** on prototypes
3. **Iterate** based on feedback
4. **Create high-fidelity designs**
5. **Build component library**
6. **Develop frontend** from designs
7. **Test accessibility** thoroughly
8. **Launch and monitor** user behavior
