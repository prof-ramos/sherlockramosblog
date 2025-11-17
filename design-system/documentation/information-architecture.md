# Information Architecture

Complete information architecture for the Sherlock Ramos Blog, defining content organization, navigation structure, and taxonomy.

## Site Map

```
Sherlock Ramos Blog
│
├── Home (/)
│   ├── Hero/Introduction
│   ├── Recent Posts (3-6 posts)
│   ├── Featured Categories
│   └── About Preview
│
├── Posts (/posts/)
│   ├── All Posts (paginated)
│   ├── Search & Filters
│   └── Individual Post (/posts/[slug]/)
│       ├── Post Content
│       ├── Table of Contents
│       ├── Author Info
│       ├── Tags & Categories
│       ├── Social Sharing
│       ├── Related Posts
│       └── Comments (optional)
│
├── Categories (/categories/)
│   ├── Category List
│   └── Category Page (/categories/[category]/)
│       └── Posts in Category (paginated)
│
├── Tags (/tags/)
│   ├── Tag Cloud/List
│   └── Tag Page (/tags/[tag]/)
│       └── Posts with Tag (paginated)
│
├── About (/about/)
│   ├── Author Bio
│   ├── Expertise Areas
│   ├── Contact Information
│   └── Social Links
│
├── Search (/search/)
│   ├── Search Interface
│   └── Results Page
│       └── Filtered Results
│
└── Utility Pages
    ├── 404 Error
    ├── Privacy Policy (optional)
    └── Terms of Use (optional)
```

## Content Inventory

### Page Types

#### 1. Homepage
**Purpose**: Welcome visitors, showcase recent content

**Content Blocks**:
- Site header + navigation
- Hero section with introduction
- Recent/featured blog posts (3-6)
- Category highlights
- About snippet
- Footer with links

**Key Elements**:
- Clear value proposition
- Primary CTA (View All Posts)
- Search access
- Mobile-friendly layout

**Update Frequency**: Automatic (recent posts)

---

#### 2. Blog Post List Page
**Purpose**: Browse all blog posts

**Content Blocks**:
- Breadcrumb navigation
- Page title and description
- Filter/sort controls
- Post grid/list
- Pagination
- Sidebar (optional)
  - Categories
  - Tags
  - Search

**Post Card Components**:
- Featured image
- Title
- Excerpt (150-200 chars)
- Date published
- Category tags
- Read time estimate
- Author (optional)
- CTA button

**Sort Options**:
- Newest first (default)
- Oldest first
- Most popular
- A-Z by title

**Update Frequency**: Automatic (new posts)

---

#### 3. Individual Blog Post
**Purpose**: Deliver long-form content

**Content Structure**:
```
┌─────────────────────────────────────┐
│ Breadcrumbs                         │
│ Home > Posts > Category > Title     │
├─────────────────────────────────────┤
│ Article Header                      │
│ • Title (H1)                        │
│ • Author info                       │
│ • Date published / updated          │
│ • Read time                         │
│ • Category & Tags                   │
├─────────────────────────────────────┤
│ Featured Image (optional)           │
├─────────────────────────────────────┤
│ Table of Contents (collapsible)     │
├─────────────────────────────────────┤
│ Article Body                        │
│ • Headings (H2, H3, H4)            │
│ • Paragraphs                        │
│ • Images                            │
│ • Code blocks                       │
│ • Lists                             │
│ • Blockquotes                       │
│ • Embedded media                    │
├─────────────────────────────────────┤
│ Article Footer                      │
│ • Tags                              │
│ • Share buttons                     │
│ • Author bio                        │
├─────────────────────────────────────┤
│ Related Posts (3-4)                 │
├─────────────────────────────────────┤
│ Post Navigation                     │
│ ← Previous | Next →                 │
├─────────────────────────────────────┤
│ Comments (optional)                 │
└─────────────────────────────────────┘
```

**Content Elements**:
- Introduction paragraph
- Subheadings (proper hierarchy)
- Body paragraphs (65 chars max width)
- Visual elements (images, diagrams)
- Code examples (syntax highlighted)
- Callout boxes (tips, warnings)
- Summary/conclusion

**Metadata**:
- Title (SEO optimized)
- Meta description
- Open Graph tags
- Schema.org markup
- Canonical URL
- Published/updated dates

**Update Frequency**: On-demand (content updates)

---

#### 4. Category Page
**Purpose**: Browse posts by category

**Content Blocks**:
- Breadcrumbs
- Category name (H1)
- Category description
- Post count
- Sort controls
- Post list (same format as main blog list)
- Pagination

**Categories**:
- Technology
- Design
- Development
- Tutorial
- Business
- Opinion

**Update Frequency**: Automatic

---

#### 5. Tag Page
**Purpose**: Browse posts by specific tag

**Content Blocks**:
- Breadcrumbs
- Tag name (H1)
- Post count
- Related tags
- Post list
- Pagination

**Tag Examples**:
- JavaScript
- React
- CSS
- Accessibility
- Performance
- Testing
- DevOps
- Career

**Update Frequency**: Automatic

---

#### 6. About Page
**Purpose**: Introduce author, build credibility

**Content Sections**:
```
┌─────────────────────────────────────┐
│ Page Header                         │
│ • Title: "Sobre"                    │
├─────────────────────────────────────┤
│ Author Section                      │
│ • Photo/Avatar                      │
│ • Name                              │
│ • Title/Role                        │
│ • Brief bio (2-3 paragraphs)       │
├─────────────────────────────────────┤
│ Expertise Areas                     │
│ • Web Development                   │
│ • Software Architecture             │
│ • DevOps & Cloud                    │
├─────────────────────────────────────┤
│ Technologies & Skills               │
│ • List or icon grid                 │
├─────────────────────────────────────┤
│ Contact & Social                    │
│ • Email                             │
│ • GitHub                            │
│ • LinkedIn                          │
│ • Twitter                           │
├─────────────────────────────────────┤
│ CTA                                 │
│ • "View My Posts" button            │
└─────────────────────────────────────┘
```

**Update Frequency**: Quarterly or as needed

---

#### 7. Search Page
**Purpose**: Find specific content

**Content Blocks**:
- Search input (prominent)
- Recent searches (optional)
- Popular posts (before search)
- Search results (after search)
  - Result count
  - Query highlight
  - Post cards with matched excerpt
  - Pagination

**Search Features**:
- Instant search (as you type)
- Autocomplete suggestions
- Search filters (category, date)
- Result highlighting
- "No results" helpful message

**Update Frequency**: Real-time

---

## Navigation Structure

### Primary Navigation (Desktop)

```
┌──────────────────────────────────────────────────────────┐
│ [Logo]  Home  Posts  Categories  Tags  About  [Search🔍] │
└──────────────────────────────────────────────────────────┘
```

**Items**: 5-6 main links (optimal for usability)

**Placement**: Top of page, sticky on scroll

**Behavior**:
- Current page highlighted
- Hover states
- Keyboard accessible
- Focus indicators

### Mobile Navigation

```
┌───────────────────────┐
│ [☰] [Logo]  [🔍]     │ ← Header
└───────────────────────┘

[Hamburger Expanded]
┌───────────────────────┐
│ [✕] [Logo]  [🔍]     │
├───────────────────────┤
│ Home                  │
│ Posts                 │
│ Categories ›          │
│ Tags                  │
│ About                 │
│ ─────────────────     │
│ [GitHub] [LinkedIn]   │
└───────────────────────┘
```

**Features**:
- Hamburger menu icon
- Slide-in/overlay menu
- Search always accessible
- Social links included
- Close button clear

### Footer Navigation

```
┌─────────────────────────────────────────────────────────┐
│  Quick Links        Categories         Social           │
│  • Home             • Technology       • GitHub          │
│  • Posts            • Design           • LinkedIn        │
│  • About            • Development      • Twitter         │
│  • Search           • Tutorial                           │
│                                                          │
│  © 2025 Sherlock Ramos | Privacy | Terms                │
└─────────────────────────────────────────────────────────┘
```

**Purpose**:
- Backup navigation
- SEO benefits
- Important links
- Legal pages
- Social connections

### Breadcrumb Navigation

```
Home > Posts > Technology > Complete Guide to Web Accessibility
[Link] [Link]  [Link]       [Current Page - no link]
```

**Implementation**:
- All pages except homepage
- Structured data markup
- Accessible (aria-label)
- Mobile-friendly
- Last item not clickable

### Contextual Navigation

**On Blog Posts**:
- Table of Contents (sidebar/top)
- Back to top button (appears on scroll)
- Previous/Next post links
- Related posts section

**On List Pages**:
- Category/tag filters
- Sort controls
- Pagination
- Search refinement

## Content Organization Principles

### 1. Hierarchy

```
Level 1: Main sections (Home, Posts, About)
    │
    ├─ Level 2: Sub-sections (Categories, Tags)
    │      │
    │      └─ Level 3: Individual items (Posts, Category pages)
```

**Rules**:
- Maximum 3 levels deep
- Clear parent-child relationships
- Logical grouping
- Consistent structure

### 2. Taxonomy

#### Categories (Primary Classification)

**Characteristics**:
- Broad topics
- Mutually exclusive (one category per post)
- 5-10 total categories
- High-level organization

**Current Categories**:
1. Technology - Latest tech trends and news
2. Development - Coding tutorials and guides
3. Design - UI/UX and visual design
4. Tutorial - Step-by-step guides
5. Opinion - Thoughts and perspectives
6. Business - Tech business insights

#### Tags (Secondary Classification)

**Characteristics**:
- Specific topics
- Multiple per post allowed
- Flexible and expandable
- Keyword-based

**Tag Strategy**:
- Use 3-5 tags per post
- Consistent naming (lowercase, hyphenated)
- Common tags promoted
- Auto-suggest existing tags

**Example Tags**:
- javascript, react, vue, angular
- css, sass, tailwind
- accessibility, a11y, wcag
- performance, optimization
- testing, jest, cypress
- nodejs, python, go
- career, learning, productivity

### 3. Labeling

**Principles**:
- Clear and descriptive
- User language (not jargon)
- Consistent terminology
- Scannable labels

**Examples**:
- ✅ "Posts" instead of "Blog"
- ✅ "About" instead of "About Me"
- ✅ "Search" not "Find"
- ✅ "Categories" not "Topics"

### 4. Content Relationships

```
Blog Post
    │
    ├─── Belongs to: 1 Category
    ├─── Tagged with: Multiple Tags
    ├─── Written by: 1 Author
    ├─── Related to: 3-5 Similar Posts
    └─── Part of: 1 Series (optional)
```

**Related Content Logic**:
1. Same category
2. Shared tags (highest overlap)
3. Similar publish date
4. Manual curation (when specified)

## Search Strategy

### Search Scope

**Searchable Content**:
- Post titles (highest weight)
- Post excerpts/descriptions
- Post body content
- Tags
- Category names

**Not Searchable**:
- Comments
- Author bios
- Footer content

### Search Implementation

```javascript
// Search priorities (Hugo/Fuse.js example)
{
  keys: [
    { name: "title", weight: 0.4 },
    { name: "description", weight: 0.3 },
    { name: "content", weight: 0.2 },
    { name: "tags", weight: 0.1 }
  ],
  threshold: 0.4,
  location: 0,
  distance: 100
}
```

### Search Features

1. **Auto-complete**: Suggest as user types
2. **Filters**: Category, date range
3. **Sorting**: Relevance, date
4. **Highlighting**: Match terms highlighted
5. **Fuzzy matching**: Handle typos
6. **Recent searches**: Quick access

## URL Structure

### Pattern

```
https://sherlockramos.github.io/[content-type]/[slug]/

Examples:
https://sherlockramos.github.io/
https://sherlockramos.github.io/posts/
https://sherlockramos.github.io/posts/web-accessibility-guide/
https://sherlockramos.github.io/categories/technology/
https://sherlockramos.github.io/tags/javascript/
https://sherlockramos.github.io/about/
https://sherlockramos.github.io/search/?q=react
```

### URL Best Practices

- ✅ Lowercase only
- ✅ Hyphens for spaces
- ✅ Descriptive slugs
- ✅ Consistent structure
- ✅ Trailing slashes
- ❌ No special characters
- ❌ No date in URL (for flexibility)
- ❌ No file extensions

## Metadata Strategy

### Page Metadata

```html
<!-- Title -->
<title>Page Title | Sherlock Ramos Blog</title>

<!-- Description -->
<meta name="description" content="Page description 150-160 characters">

<!-- Keywords -->
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Author -->
<meta name="author" content="Sherlock Ramos">

<!-- Open Graph -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://url.com/image.jpg">
<meta property="og:url" content="https://url.com/page">
<meta property="og:type" content="article">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:image" content="https://url.com/image.jpg">

<!-- Structured Data (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "image": "image-url",
  "author": {
    "@type": "Person",
    "name": "Sherlock Ramos"
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-15"
}
</script>
```

## Content Guidelines

### Writing Style

- Clear and concise
- Conversational but professional
- Portuguese (pt-BR) as primary language
- Active voice preferred
- Short paragraphs (3-4 sentences)
- Subheadings every 300-500 words

### Post Length

- **Quick tip**: 300-500 words
- **Standard post**: 800-1500 words
- **Tutorial**: 1500-3000 words
- **Comprehensive guide**: 3000+ words

### Visual Content

- Featured image: 1200x630px (OG ratio)
- In-post images: Max 1200px wide
- Code screenshots: Readable text
- Diagrams: SVG when possible
- Alt text: Always required

## Future Expansion

### Phase 2 Features

- [ ] Series/Course structure
- [ ] Newsletter signup
- [ ] Comments system
- [ ] Dark mode toggle
- [ ] Language switcher (PT/EN)
- [ ] RSS feed
- [ ] Reading progress bar
- [ ] Estimated read time
- [ ] Print-friendly layouts

### Phase 3 Features

- [ ] Author profiles (multi-author)
- [ ] Guest posts
- [ ] Code playground integration
- [ ] Video content
- [ ] Podcast episodes
- [ ] Member-only content
- [ ] Community forum

## Governance

### Content Ownership

**Content Manager**: Sherlock Ramos
**Contributors**: (As added)
**Reviewers**: (As added)

### Publication Process

1. **Draft**: Write content in Markdown
2. **Review**: Self-review for quality
3. **Edit**: Technical and copy editing
4. **Approve**: Final approval
5. **Publish**: Deploy to GitHub Pages
6. **Promote**: Share on social media

### Content Calendar

- **Frequency**: 1-2 posts per week (goal)
- **Best days**: Tuesday, Thursday
- **Best time**: 9am BRT

### Analytics & Iteration

**Track**:
- Page views per post
- Time on page
- Bounce rate
- Search queries
- Top exit pages
- Popular categories/tags

**Review**: Monthly

**Iterate**: Quarterly IA review

---

This information architecture provides a solid foundation for the blog's content organization and user experience. It should be reviewed and updated as the site grows and user needs evolve.
