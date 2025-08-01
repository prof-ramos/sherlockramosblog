This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  workflows/
    hugo.yaml
archetypes/
  default.md
  post.md
assets/
  css/
    custom.css
content/
  blog/
    abobrinha/
      _index.md
    ferramentas-de-estudo/
      _index.md
    inteligencia-artificial/
      _index.md
      2025-07-23-bencao.md
    _index.md
  contato/
    _index.md
  posts/
    my-first-post.md
  _index.md
docs/
  analise-e-melhorias-ux-ui.md
themes/
  PaperMod/
    .github/
      ISSUE_TEMPLATE/
        bug.yaml
        config.yml
        enhancement.yaml
      workflows/
        gh-pages.yml
      PULL_REQUEST_TEMPLATE.md
    assets/
      css/
        common/
          404.css
          archive.css
          footer.css
          header.css
          main.css
          post-entry.css
          post-single.css
          profile-mode.css
          search.css
          terms.css
        core/
          license.css
          reset.css
          theme-vars.css
          zmedia.css
        extended/
          blank.css
        includes/
          chroma-mod.css
          chroma-styles.css
          scroll-bar.css
      js/
        fastsearch.js
        fuse.basic.min.js
        license.js
    i18n/
      ar.yaml
      be.yaml
      bg.yaml
      bn.yaml
      ca.yaml
      ckb.yaml
      cs.yaml
      da.yaml
      de.yaml
      el.yaml
      en.yaml
      eo.yaml
      es.yaml
      fa.yaml
      fi.yaml
      fr.yaml
      he.yaml
      hi.yaml
      hr.yaml
      hu.yaml
      id.yaml
      it.yaml
      ja.yaml
      ko.yaml
      ku.yaml
      mn.yaml
      ms.yaml
      nl.yaml
      no.yaml
      oc.yaml
      pa.yaml
      pl.yaml
      pnb.yaml
      pt.yaml
      ro.yaml
      ru.yaml
      sk.yaml
      sv.yaml
      sw.yaml
      th.yaml
      tr.yaml
      uk.yaml
      uz.yaml
      vi.yaml
      zh-tw.yaml
      zh.yaml
    layouts/
      _default/
        _markup/
          render-image.html
        archives.html
        baseof.html
        index.json
        list.html
        rss.xml
        search.html
        single.html
        terms.html
      partials/
        templates/
          _funcs/
            get-page-images.html
          opengraph.html
          schema_json.html
          twitter_cards.html
        anchored_headings.html
        author.html
        breadcrumbs.html
        comments.html
        cover.html
        edit_post.html
        extend_footer.html
        extend_head.html
        footer.html
        head.html
        header.html
        home_info.html
        index_profile.html
        post_canonical.html
        post_meta.html
        post_nav_links.html
        share_icons.html
        social_icons.html
        svg.html
        toc.html
        translation_list.html
      shortcodes/
        collapse.html
        figure.html
        inTextImg.html
        ltr.html
        rawhtml.html
        rtl.html
      404.html
      robots.txt
    .git
    go.mod
    LICENSE
    README.md
    theme.toml
.gitignore
.gitmodules
config.yaml
README.md
```

# Files

## File: content/blog/inteligencia-artificial/2025-07-23-bencao.md
````markdown
---
title: "Qual a minha benção?"
description: "Ignorando a trend para entender-mos o porquê"
---
````

## File: themes/PaperMod/.github/ISSUE_TEMPLATE/bug.yaml
````yaml
name: Bug Report 🐞
description: Create a report to help us improve
title: "[Bug]: "
labels: ["bug", "triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report :)
        - Kindly **DO NOT** ask for instructions.
        - Use [Discussions](https://github.com/adityatelange/hugo-PaperMod/discussions) section if you have a query or doubts or any other relevant question.
        - You may join [Discord community](https://discord.gg/ahpmTvhVmp) to interact with fellow contributors and users
        - Read project's [Wiki](https://github.com/adityatelange/hugo-PaperMod/wiki) for detailed documentation.
        - Read project's [FAQs](https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs) section for Frequently asked questions.
        - Search for previous [Issues](https://github.com/adityatelange/hugo-PaperMod/issues)/[Pull Requests](https://github.com/adityatelange/hugo-PaperMod/pulls) if this issue is already reported or fix has been created.
  - type: textarea
    id: what_happened
    attributes:
      label: What happened?
      description: Also tell us, what did you expect to happen?
      placeholder: A bug happened! Here are the screenshots.. Tell us what you see!
    validations:
      required: true
  - type: textarea
    id: steps_to_reproduce
    attributes:
      label: Steps to reproduce
      description: How to reproduce this issue. Here are the steps...
      placeholder:  |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true
  - type: dropdown
    id: hugo_version
    attributes:
      label: Hugo Version
      description: What version of Hugo are you running?
      options:
        - Hugo >= 0.146.0 (Recommended - Minimum version required for PaperMod)
        - Hugo < 0.146.0  (Incompatible - Not recommended to build PaperMod on lower versions)
    validations:
      required: true
  - type: input
    id: papermod_version
    attributes:
      label: PaperMod Version
      description: What version of PaperMod are you running?
      placeholder:  |
        PaperMod v7.0 or
        Branch master or
        Commit-id: 3f50861a0ced88f9b614a43662edeb4c0bc45da8
    validations:
      required: true
  - type: dropdown
    id: browser_type
    attributes:
      label: What kind of devices are you seeing the problem on?
      multiple: true
      options:
        - Mobile
        - Desktop
    validations:
      required: false
  - type: dropdown
    id: browsers
    attributes:
      label: What browsers are you seeing the problem on?
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
    validations:
      required: false
  - type: input
    id: browser_version
    attributes:
      label: Browser Version
      description: Please add browser version or enter user agent string (navigator.userAgent)
      placeholder: ex. Google Chrome 86.0
    validations:
      required: false
  - type: textarea
    id: logs
    attributes:
      label: Relevant log output
      description: Please copy and paste any relevant log output. This will be automatically formatted into code, so no need for backticks.
      render: shell
    validations:
      required: true
  - type: input
    id: repo_url
    attributes:
      label: Repository/Source Code link where this issue can be reproduced
      description: Please add url of the repository where this issue can be reproduced
      placeholder: https://github.com/<username>/<repo name>
    validations:
      required: false
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://github.com/adityatelange/hugo-PaperMod?tab=coc-ov-file#readme).
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
    validations:
      required: true
````

## File: themes/PaperMod/.github/ISSUE_TEMPLATE/config.yml
````yaml
blank_issues_enabled: false
contact_links:
  - name: PaperMod Discussions
    url: https://github.com/adityatelange/hugo-PaperMod/discussions
    about: Please ask and answer questions/doubts here, DO NOT open an issue for questions.
````

## File: themes/PaperMod/.github/ISSUE_TEMPLATE/enhancement.yaml
````yaml
name: Enhancement 🚀
description: Propose a new feature or change for enhancing the experience.
title: "[Enhancement]: "
labels: ["enhancement", "triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this enhancement form :)
        - Use [Discussions](https://github.com/adityatelange/hugo-PaperMod/discussions) section if you have a query or doubts or any other relevant question.
        - You may join [Discord community](https://discord.gg/ahpmTvhVmp) to interact with fellow contributors and users
        - Read project's [Wiki](https://github.com/adityatelange/hugo-PaperMod/wiki) for detailed documentation.
        - Read project's [FAQs](https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs) section for Frequently asked questions.
        - Search for previous [Issues](https://github.com/adityatelange/hugo-PaperMod/issues)/[Pull Requests](https://github.com/adityatelange/hugo-PaperMod/pulls) if this issue is already reported or fix has been created.
  - type: textarea
    id: what_happened
    attributes:
      label: What you'd like to propose?
      description:
      placeholder:
    validations:
      required: true
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://github.com/adityatelange/hugo-PaperMod?tab=coc-ov-file#readme).
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
    validations:
      required: true
````

## File: themes/PaperMod/.github/workflows/gh-pages.yml
````yaml
name: Deploy Hugo PaperMod Demo to Pages

on:
  push:
    paths-ignore:
      - "images/**"
      - "LICENSE"
      - "README.md"
    branches:
      - master
      - exampleSite
  workflow_dispatch:
    # manual run
    inputs:
      hugoVersion:
        description: "Hugo Version"
        required: false
        default: "0.146.0"

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

# Default to bash
defaults:
  run:
    shell: bash

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: ${{ github.event.inputs.hugoVersion || '0.146.0' }}
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
        with:
          ref: exampleSite
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Get Theme
        run: git submodule update --init --recursive
      - name: Update theme to Latest commit
        run: git submodule update --remote --merge
      - name: Build with Hugo
        run: |
          hugo \
            --buildDrafts --gc \
            --baseURL ${{ steps.pages.outputs.base_url }}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
````

## File: themes/PaperMod/.github/PULL_REQUEST_TEMPLATE.md
````markdown
<!--

## READ BEFORE OPENING A PR

Thank you for contributing to hugo-PaperMod!
Please fill out the following questions to make it easier for us to review your
changes. You do not need to check all the boxes below.

**NOTE**: PaperMod does not have any external dependencies fetched from 3rd party
CDN servers. However we do have custom Head/Footer extender templates which you can use
to add those to your website.
https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs#custom-head--footer

-->


**What does this PR change? What problem does it solve?**

<!--
Describe the changes and their purpose here, as detailed as and if needed.

Please do not add 2 unrelated changes in a single PR as it is difficult to track/revert those in future.
-->


**Was the change discussed in an issue or in the Discussions before?**

<!--
Link issues and relevant Discussions posts here.

If this PR resolves an issue on GitHub, use "Closes #1234" so that the issue
is closed automatically when this PR is merged.
-->


## PR Checklist

- [ ] This change adds/updates translations and I have used the [template present here](https://github.com/adityatelange/hugo-PaperMod/wiki/Translations#want-to-add-your-language-).
- [ ] I have enabled [maintainer edits for this PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
- [ ] I have verified that the code works as described/as intended.
- [ ] This change adds a Social Icon which has a permissive license to use it.
- [ ] This change **does not** include any CDN resources/links.
- [ ] This change **does not** include any unrelated scripts such as bash and python scripts.
- [ ] This change updates the overridden internal templates from HUGO's repository.
````

## File: themes/PaperMod/assets/css/common/404.css
````css
.not-found {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    font-size: 160px;
    font-weight: 700;
}
````

## File: themes/PaperMod/assets/css/common/archive.css
````css
.archive-posts {
    width: 100%;
    font-size: 16px;
}

.archive-year {
    margin-top: 40px;
}

.archive-year:not(:last-of-type) {
    border-bottom: 2px solid var(--border);
}

.archive-month {
    display: flex;
    align-items: flex-start;
    padding: 10px 0;
}

.archive-month-header {
    margin: 25px 0;
    width: 200px;
}

.archive-month:not(:last-of-type) {
    border-bottom: 1px solid var(--border);
}

.archive-entry {
    position: relative;
    padding: 5px;
    margin: 10px 0;
}

.archive-entry-title {
    margin: 5px 0;
    font-weight: 400;
}

.archive-count,
.archive-meta {
    color: var(--secondary);
    font-size: 14px;
}
````

## File: themes/PaperMod/assets/css/common/footer.css
````css
.footer,
.top-link {
    font-size: 12px;
    color: var(--secondary);
}

.footer {
    max-width: calc(var(--main-width) + var(--gap) * 2);
    margin: auto;
    padding: calc((var(--footer-height) - var(--gap)) / 2) var(--gap);
    text-align: center;
    line-height: 24px;
}

.footer span {
    margin-inline-start: 1px;
    margin-inline-end: 1px;
}

.footer span:last-child {
    white-space: nowrap;
}

.footer a {
    color: inherit;
    border-bottom: 1px solid var(--secondary);
}

.footer a:hover {
    border-bottom: 1px solid var(--primary);
}

.top-link {
    visibility: hidden;
    position: fixed;
    bottom: 60px;
    right: 30px;
    z-index: 99;
    background: var(--tertiary);
    width: 42px;
    height: 42px;
    padding: 12px;
    border-radius: 64px;
    transition: visibility 0.5s, opacity 0.8s linear;
}

.top-link,
.top-link svg {
    filter: drop-shadow(0px 0px 0px var(--theme));
}

.footer a:hover,
.top-link:hover {
    color: var(--primary);
}

.top-link:focus,
#theme-toggle:focus {
    outline: 0;
}
````

## File: themes/PaperMod/assets/css/common/header.css
````css
.nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: calc(var(--nav-width) + var(--gap) * 2);
    margin-inline-start: auto;
    margin-inline-end: auto;
    line-height: var(--header-height);
}

.nav a {
    display: block;
}

.logo,
#menu {
    display: flex;
    margin: auto var(--gap);
}

.logo {
    flex-wrap: inherit;
}

.logo a {
    font-size: 24px;
    font-weight: 700;
}

.logo a img, .logo a svg {
    display: inline;
    vertical-align: middle;
    pointer-events: none;
    transform: translate(0, -10%);
    border-radius: 6px;
    margin-inline-end: 8px;
}

button#theme-toggle {
    font-size: 26px;
    margin: auto 4px;
}

body.dark #moon {
    vertical-align: middle;
    display: none;
}

body:not(.dark) #sun {
    display: none;
}

#menu {
    list-style: none;
    word-break: keep-all;
    overflow-x: auto;
    white-space: nowrap;
}

#menu li + li {
    margin-inline-start: var(--gap);
}

#menu a {
    font-size: 16px;
}

#menu .active {
    font-weight: 500;
    border-bottom: 2px solid currentColor;
}

.lang-switch li,
.lang-switch ul,
.logo-switches {
    display: inline-flex;
    margin: auto 4px;
}

.lang-switch {
    display: flex;
    flex-wrap: inherit;
}

.lang-switch a {
    margin: auto 3px;
    font-size: 16px;
    font-weight: 500;
}

.logo-switches {
    flex-wrap: inherit;
}
````

## File: themes/PaperMod/assets/css/common/main.css
````css
.main {
    position: relative;
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    max-width: calc(var(--main-width) + var(--gap) * 2);
    margin: auto;
    padding: var(--gap);
}

.page-header h1 {
    font-size: 40px;
}

.pagination {
    display: flex;
}

.pagination a {
    color: var(--theme);
    font-size: 13px;
    line-height: 36px;
    background: var(--primary);
    border-radius: calc(36px / 2);
    padding: 0 16px;
}

.pagination .next {
    margin-inline-start: auto;
}


.social-icons a {
    display: inline-flex;
    padding: 10px;
}

.social-icons a svg {
    height: 26px;
    width: 26px;
}

code {
    direction: ltr;
}

div.highlight,
pre {
    position: relative;
}

.copy-code {
    display: none;
    position: absolute;
    top: 4px;
    right: 4px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(78, 78, 78, 0.8);
    border-radius: var(--radius);
    padding: 0 5px;
    font-size: 14px;
    user-select: none;
}

div.highlight:hover .copy-code,
pre:hover .copy-code {
    display: block;
}
````

## File: themes/PaperMod/assets/css/common/post-entry.css
````css
.first-entry {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 320px;
    margin: var(--gap) 0 calc(var(--gap) * 2) 0;
}

.first-entry .entry-header {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.first-entry .entry-header h1 {
    font-size: 34px;
    line-height: 1.3;
}

.first-entry .entry-content {
    margin: 14px 0;
    font-size: 16px;
    -webkit-line-clamp: 3;
}

.first-entry .entry-footer {
    font-size: 14px;
}

.home-info .entry-content {
    -webkit-line-clamp: unset;
}

.post-entry {
    position: relative;
    margin-bottom: var(--gap);
    padding: var(--gap);
    background: var(--entry);
    border-radius: var(--radius);
    transition: transform 0.1s;
    border: 1px solid var(--border);
}

.post-entry:active {
    transform: scale(0.96);
}

.tag-entry .entry-cover {
    display: none;
}

.entry-header h2 {
    font-size: 24px;
    line-height: 1.3;
}

.entry-content {
    margin: 8px 0;
    color: var(--secondary);
    font-size: 14px;
    line-height: 1.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.entry-footer {
    color: var(--secondary);
    font-size: 13px;
}

.entry-link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.entry-hint {
    color: var(--secondary);
}

.entry-hint-parent {
    display: flex;
    justify-content: space-between;
}

.entry-cover {
    font-size: 14px;
    margin-bottom: var(--gap);
    text-align: center;
}

.entry-cover img {
    border-radius: var(--radius);
    width: 100%;
    height: auto;
}

.entry-cover a {
    color: var(--secondary);
    box-shadow: 0 1px 0 var(--primary);
}
````

## File: themes/PaperMod/assets/css/common/post-single.css
````css
.page-header,
.post-header {
    margin: 24px auto var(--content-gap) auto;
}

.post-title {
    margin-bottom: 2px;
    font-size: 40px;
}

.post-description {
    margin-top: 10px;
    margin-bottom: 5px;
}

.post-meta,
.breadcrumbs {
    color: var(--secondary);
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.post-meta .i18n_list li {
    display: inline-flex;
    list-style: none;
    margin: auto 3px;
    box-shadow: 0 1px 0 var(--secondary);
}

.breadcrumbs a {
    font-size: 16px;
}

.post-content {
    color: var(--content);
}

.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
    margin: 24px 0 16px;
}

.post-content h1 {
    margin: 40px auto 32px;
    font-size: 40px;
}

.post-content h2 {
    margin: 32px auto 24px;
    font-size: 32px;
}

.post-content h3 {
    font-size: 24px;
}

.post-content h4 {
    font-size: 16px;
}

.post-content h5 {
    font-size: 14px;
}

.post-content h6 {
    font-size: 12px;
}

.post-content a,
.toc a:hover {
    box-shadow: 0 1px 0;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
}

.post-content a code {
    margin: auto 0;
    border-radius: 0;
    box-shadow: 0 -1px 0 var(--primary) inset;
}

.post-content del {
    text-decoration: line-through;
}

.post-content dl,
.post-content ol,
.post-content p,
.post-content figure,
.post-content ul {
    margin-bottom: var(--content-gap);
}

.post-content ol,
.post-content ul {
    padding-inline-start: 20px;
}

.post-content li {
    margin-top: 5px;
}

.post-content li p {
    margin-bottom: 0;
}

.post-content dl {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
}

.post-content dt {
    width: 25%;
    font-weight: 700;
}

.post-content dd {
    width: 75%;
    margin-inline-start: 0;
    padding-inline-start: 10px;
}

.post-content dd~dd,
.post-content dt~dt {
    margin-top: 10px;
}

.post-content table {
    margin-bottom: var(--content-gap);
}

.post-content table th,
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) td {
    min-width: 80px;
    padding: 8px 5px;
    line-height: 1.5;
    border-bottom: 1px solid var(--border);
}

.post-content table th {
    text-align: start;
}

.post-content table:not(.highlighttable) td code:only-child {
    margin: auto 0;
}

.post-content .highlight table {
    border-radius: var(--radius);
}

.post-content .highlight:not(table) {
    margin: 10px auto;
    background: var(--code-block-bg) !important;
    border-radius: var(--radius);
    direction: ltr;
}

.post-content li>.highlight {
    margin-inline-end: 0;
}

.post-content ul pre {
    margin-inline-start: calc(var(--gap) * -2);
}

.post-content .highlight pre {
    margin: 0;
}

.post-content .highlighttable {
    table-layout: fixed;
}

.post-content .highlighttable td:first-child {
    width: 40px;
}

.post-content .highlighttable td .linenodiv {
    padding-inline-end: 0 !important;
}

.post-content .highlighttable td .highlight,
.post-content .highlighttable td .linenodiv pre {
    margin-bottom: 0;
}

.post-content code {
    margin: auto 4px;
    padding: 4px 6px;
    font-size: 0.78em;
    line-height: 1.5;
    background: var(--code-bg);
    border-radius: 2px;
}

.post-content pre code {
    display: grid;
    margin: auto 0;
    padding: 10px;
    color: rgb(213, 213, 214);
    background: var(--code-block-bg) !important;
    border-radius: var(--radius);
    overflow-x: auto;
    word-break: break-all;
}

.post-content blockquote {
    margin: 20px 0;
    padding: 0 14px;
    border-inline-start: 3px solid var(--primary);
}

.post-content hr {
    margin: 30px 0;
    height: 2px;
    background: var(--tertiary);
    border: 0;
}

.post-content iframe {
    max-width: 100%;
}

.post-content img {
    border-radius: 4px;
    margin: 1rem 0;
}

.post-content img[src*="#center"] {
    margin: 1rem auto;
}

.post-content figure.align-center {
    text-align: center;
}

.post-content figure>figcaption {
    color: var(--primary);
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0 16px;
}

.post-content figure>figcaption>p {
    color: var(--secondary);
    font-size: 14px;
    font-weight: normal;
}

.toc {
    margin: 0 2px 40px 2px;
    border: 1px solid var(--border);
    background: var(--code-bg);
    border-radius: var(--radius);
    padding: 0.4em;
}

.dark .toc {
    background: var(--entry);
}

.toc details summary {
    cursor: zoom-in;
    margin-inline-start: 10px;
    user-select: none;
}

.toc details[open] summary {
    cursor: zoom-out;
}

.toc .details {
    display: inline;
    font-weight: 500;
}

.toc .inner {
    margin: 5px 20px 0;
    padding: 0 10px;
    opacity: 0.9;
}

.toc li ul {
    margin-inline-start: var(--gap);
}

.toc summary:focus {
    outline: 0;
}

.post-footer {
    margin-top: 56px;
}

.post-footer>* {
    margin-bottom: 10px;
}

.post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.post-tags li {
    display: inline-block;
}

.post-tags a,
.share-buttons,
.paginav {
    border-radius: var(--radius);
    background: var(--code-bg);
    border: 1px solid var(--border);
}

.post-tags a {
    display: block;
    padding: 0 14px;
    color: var(--secondary);
    font-size: 14px;
    line-height: 34px;
    background: var(--code-bg);
}

.post-tags a:hover,
.paginav a:hover {
    background: var(--border);
}

.share-buttons {
    padding: 10px;
    display: flex;
    justify-content: center;
    overflow-x: auto;
    gap: 10px;
}

.share-buttons li,
.share-buttons a {
    display: inline-flex;
}

.share-buttons a:not(:last-of-type) {
    margin-inline-end: 12px;
}

h1:hover .anchor,
h2:hover .anchor,
h3:hover .anchor,
h4:hover .anchor,
h5:hover .anchor,
h6:hover .anchor {
    display: inline-flex;
    color: var(--secondary);
    margin-inline-start: 8px;
    font-weight: 500;
    user-select: none;
}

.paginav {
    display: flex;
    line-height: 30px;
}

.paginav a {
    padding-inline-start: 14px;
    padding-inline-end: 14px;
    border-radius: var(--radius);
}

.paginav .title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: small;
    color: var(--secondary);
}

.paginav .prev,
.paginav .next {
    width: 50%;
}

.paginav span:hover:not(.title) {
    box-shadow: 0 1px 0;
}

.paginav .next {
    margin-inline-start: auto;
    text-align: right;
}

[dir="rtl"] .paginav .next {
    text-align: left;
}

h1>a>svg {
    display: inline;
}

img.in-text {
    display: inline;
    margin: auto;
}
````

## File: themes/PaperMod/assets/css/common/profile-mode.css
````css
.buttons,
.main .profile {
    display: flex;
    justify-content: center;
}

.main .profile {
    align-items: center;
    min-height: calc(100vh - var(--header-height) - var(--footer-height) - (var(--gap) * 2));
    text-align: center;
}

.profile .profile_inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.profile img {
    border-radius: 50%;
}

.buttons {
    flex-wrap: wrap;
    max-width: 400px;
}

.button {
    background: var(--tertiary);
    border-radius: var(--radius);
    margin: 8px;
    padding: 6px;
    transition: transform 0.1s;
}

.button-inner {
    padding: 0 8px;
}

.button:active {
    transform: scale(0.96);
}
````

## File: themes/PaperMod/assets/css/common/search.css
````css
#searchbox input {
    padding: 4px 10px;
    width: 100%;
    color: var(--primary);
    font-weight: bold;
    border: 2px solid var(--tertiary);
    border-radius: var(--radius);
}

#searchbox input:focus {
    border-color: var(--secondary);
}

#searchResults li {
    list-style: none;
    border-radius: var(--radius);
    padding: 10px;
    margin: 10px 0;
    position: relative;
    font-weight: 500;
}

#searchResults {
    margin: 10px 0;
    width: 100%;
}

#searchResults li:active {
    transition: transform 0.1s;
    transform: scale(0.98);
}

#searchResults a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    outline: none;
}

#searchResults .focus {
    transform: scale(0.98);
    border: 2px solid var(--tertiary);
}
````

## File: themes/PaperMod/assets/css/common/terms.css
````css
.terms-tags li {
    display: inline-block;
    margin: 10px;
    font-weight: 500;
}

.terms-tags a {
    display: block;
    padding: 3px 10px;
    background: var(--tertiary);
    border-radius: 6px;
    transition: transform 0.1s;
}

.terms-tags a:active {
    background: var(--tertiary);
    transform: scale(0.96);
}
````

## File: themes/PaperMod/assets/css/core/license.css
````css
/*
  PaperMod v8+
  License: MIT https://github.com/adityatelange/hugo-PaperMod/blob/master/LICENSE
  Copyright (c) 2020 nanxiaobei and adityatelange
  Copyright (c) 2021-2025 adityatelange
*/
````

## File: themes/PaperMod/assets/css/core/reset.css
````css
*,
::after,
::before {
    box-sizing: border-box;
}

html {
    -webkit-tap-highlight-color: transparent;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
}

a,
button,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--primary);
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    word-break: break-word;
    background: var(--theme);
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
table {
    display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    line-height: 1.2;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

ul {
    padding: 0;
}

a {
    text-decoration: none;
}

body,
figure,
ul {
    margin: 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow-x: auto;
    word-break: keep-all;
}

button,
input,
textarea {
    padding: 0;
    font: inherit;
    background: 0 0;
    border: 0;
}

input,
textarea {
    outline: 0;
}

button,
input[type=button],
input[type=submit] {
    cursor: pointer;
}

input:-webkit-autofill,
textarea:-webkit-autofill {
    box-shadow: 0 0 0 50px var(--theme) inset;
}

img {
    display: block;
    max-width: 100%;
}
````

## File: themes/PaperMod/assets/css/core/theme-vars.css
````css
:root {
    --gap: 24px;
    --content-gap: 20px;
    --nav-width: 1024px;
    --main-width: 720px;
    --header-height: 60px;
    --footer-height: 60px;
    --radius: 8px;
    --theme: rgb(255, 255, 255);
    --entry: rgb(255, 255, 255);
    --primary: rgb(30, 30, 30);
    --secondary: rgb(108, 108, 108);
    --tertiary: rgb(214, 214, 214);
    --content: rgb(31, 31, 31);
    --code-block-bg: rgb(28, 29, 33);
    --code-bg: rgb(245, 245, 245);
    --border: rgb(238, 238, 238);
}

.dark {
    --theme: rgb(29, 30, 32);
    --entry: rgb(46, 46, 51);
    --primary: rgb(218, 218, 219);
    --secondary: rgb(155, 156, 157);
    --tertiary: rgb(65, 66, 68);
    --content: rgb(196, 196, 197);
    --code-block-bg: rgb(46, 46, 51);
    --code-bg: rgb(55, 56, 62);
    --border: rgb(51, 51, 51);
}

.list {
    background: var(--code-bg);
}

.dark.list {
    background: var(--theme);
}
````

## File: themes/PaperMod/assets/css/core/zmedia.css
````css
@media screen and (max-width: 768px) {
    /* theme-vars */
    :root {
        --gap: 14px;
    }

    /* profile-mode */
    .profile img {
        transform: scale(0.85);
    }

    /* post-entry */
    .first-entry {
        min-height: 260px;
    }

    /* archive */
    .archive-month {
        flex-direction: column;
    }

    .archive-year {
        margin-top: 20px;
    }

    /* footer */
    .footer {
        padding: calc((var(--footer-height) - var(--gap) - 10px) / 2) var(--gap);
    }
}

/* footer */
@media screen and (max-width: 900px) {
    .list .top-link {
        transform: translateY(-5rem);
    }
}

@media screen and (max-width: 340px) {
    .share-buttons {
        justify-content: unset;
    }
}

@media (prefers-reduced-motion) {
    /* terms; profile-mode; post-single; post-entry; post-entry; search; search */
    .terms-tags a:active,
    .button:active,
    .post-entry:active,
    .top-link,
    #searchResults .focus,
    #searchResults li:active {
        transform: none;
    }
}
````

## File: themes/PaperMod/assets/css/extended/blank.css
````css
/*
This is just a placeholder blank stylesheet so as to support adding custom styles budled with theme's default styles

Read https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs#bundling-custom-css-with-themes-assets for more info
*/
````

## File: themes/PaperMod/assets/css/includes/chroma-mod.css
````css
.chroma {
    background-color: unset !important;
}

.chroma .hl {
    display: flex;
}

.chroma .lnt {
    padding: 0 0 0 12px;
}

.highlight pre.chroma code {
    padding: 8px 0;
}

.highlight pre.chroma .line .cl,
.chroma .ln {
    padding: 0 10px;
}

.chroma .lntd:last-of-type {
    width: 100%;
}
````

## File: themes/PaperMod/assets/css/includes/chroma-styles.css
````css
/* Background */ .bg { color: #cad3f5; background-color: #24273a; }
/* PreWrapper */ .chroma { color: #cad3f5; background-color: #24273a; }
/* Other */ .chroma .x {  }
/* Error */ .chroma .err { color: #ed8796 }
/* CodeLine */ .chroma .cl {  }
/* LineLink */ .chroma .lnlinks { outline: none; text-decoration: none; color: inherit }
/* LineTableTD */ .chroma .lntd { vertical-align: top; padding: 0; margin: 0; border: 0; }
/* LineTable */ .chroma .lntable { border-spacing: 0; padding: 0; margin: 0; border: 0; }
/* LineHighlight */ .chroma .hl { background-color: #474733 }
/* LineNumbersTable */ .chroma .lnt { white-space: pre; -webkit-user-select: none; user-select: none; margin-right: 0.4em; padding: 0 0.4em 0 0.4em;color: #8087a2 }
/* LineNumbers */ .chroma .ln { white-space: pre; -webkit-user-select: none; user-select: none; margin-right: 0.4em; padding: 0 0.4em 0 0.4em;color: #8087a2 }
/* Line */ .chroma .line { display: flex; }
/* Keyword */ .chroma .k { color: #c6a0f6 }
/* KeywordConstant */ .chroma .kc { color: #f5a97f }
/* KeywordDeclaration */ .chroma .kd { color: #ed8796 }
/* KeywordNamespace */ .chroma .kn { color: #8bd5ca }
/* KeywordPseudo */ .chroma .kp { color: #c6a0f6 }
/* KeywordReserved */ .chroma .kr { color: #c6a0f6 }
/* KeywordType */ .chroma .kt { color: #ed8796 }
/* Name */ .chroma .n {  }
/* NameAttribute */ .chroma .na { color: #8aadf4 }
/* NameBuiltin */ .chroma .nb { color: #91d7e3 }
/* NameBuiltinPseudo */ .chroma .bp { color: #91d7e3 }
/* NameClass */ .chroma .nc { color: #eed49f }
/* NameConstant */ .chroma .no { color: #eed49f }
/* NameDecorator */ .chroma .nd { color: #8aadf4; font-weight: bold }
/* NameEntity */ .chroma .ni { color: #8bd5ca }
/* NameException */ .chroma .ne { color: #f5a97f }
/* NameFunction */ .chroma .nf { color: #8aadf4 }
/* NameFunctionMagic */ .chroma .fm { color: #8aadf4 }
/* NameLabel */ .chroma .nl { color: #91d7e3 }
/* NameNamespace */ .chroma .nn { color: #f5a97f }
/* NameOther */ .chroma .nx {  }
/* NameProperty */ .chroma .py { color: #f5a97f }
/* NameTag */ .chroma .nt { color: #c6a0f6 }
/* NameVariable */ .chroma .nv { color: #f4dbd6 }
/* NameVariableClass */ .chroma .vc { color: #f4dbd6 }
/* NameVariableGlobal */ .chroma .vg { color: #f4dbd6 }
/* NameVariableInstance */ .chroma .vi { color: #f4dbd6 }
/* NameVariableMagic */ .chroma .vm { color: #f4dbd6 }
/* Literal */ .chroma .l {  }
/* LiteralDate */ .chroma .ld {  }
/* LiteralString */ .chroma .s { color: #a6da95 }
/* LiteralStringAffix */ .chroma .sa { color: #ed8796 }
/* LiteralStringBacktick */ .chroma .sb { color: #a6da95 }
/* LiteralStringChar */ .chroma .sc { color: #a6da95 }
/* LiteralStringDelimiter */ .chroma .dl { color: #8aadf4 }
/* LiteralStringDoc */ .chroma .sd { color: #6e738d }
/* LiteralStringDouble */ .chroma .s2 { color: #a6da95 }
/* LiteralStringEscape */ .chroma .se { color: #8aadf4 }
/* LiteralStringHeredoc */ .chroma .sh { color: #6e738d }
/* LiteralStringInterpol */ .chroma .si { color: #a6da95 }
/* LiteralStringOther */ .chroma .sx { color: #a6da95 }
/* LiteralStringRegex */ .chroma .sr { color: #8bd5ca }
/* LiteralStringSingle */ .chroma .s1 { color: #a6da95 }
/* LiteralStringSymbol */ .chroma .ss { color: #a6da95 }
/* LiteralNumber */ .chroma .m { color: #f5a97f }
/* LiteralNumberBin */ .chroma .mb { color: #f5a97f }
/* LiteralNumberFloat */ .chroma .mf { color: #f5a97f }
/* LiteralNumberHex */ .chroma .mh { color: #f5a97f }
/* LiteralNumberInteger */ .chroma .mi { color: #f5a97f }
/* LiteralNumberIntegerLong */ .chroma .il { color: #f5a97f }
/* LiteralNumberOct */ .chroma .mo { color: #f5a97f }
/* Operator */ .chroma .o { color: #91d7e3; font-weight: bold }
/* OperatorWord */ .chroma .ow { color: #91d7e3; font-weight: bold }
/* Punctuation */ .chroma .p {  }
/* Comment */ .chroma .c { color: #6e738d; font-style: italic }
/* CommentHashbang */ .chroma .ch { color: #6e738d; font-style: italic }
/* CommentMultiline */ .chroma .cm { color: #6e738d; font-style: italic }
/* CommentSingle */ .chroma .c1 { color: #6e738d; font-style: italic }
/* CommentSpecial */ .chroma .cs { color: #6e738d; font-style: italic }
/* CommentPreproc */ .chroma .cp { color: #6e738d; font-style: italic }
/* CommentPreprocFile */ .chroma .cpf { color: #6e738d; font-weight: bold; font-style: italic }
/* Generic */ .chroma .g {  }
/* GenericDeleted */ .chroma .gd { color: #ed8796; background-color: #363a4f }
/* GenericEmph */ .chroma .ge { font-style: italic }
/* GenericError */ .chroma .gr { color: #ed8796 }
/* GenericHeading */ .chroma .gh { color: #f5a97f; font-weight: bold }
/* GenericInserted */ .chroma .gi { color: #a6da95; background-color: #363a4f }
/* GenericOutput */ .chroma .go {  }
/* GenericPrompt */ .chroma .gp {  }
/* GenericStrong */ .chroma .gs { font-weight: bold }
/* GenericSubheading */ .chroma .gu { color: #f5a97f; font-weight: bold }
/* GenericTraceback */ .chroma .gt { color: #ed8796 }
/* GenericUnderline */ .chroma .gl { text-decoration: underline }
/* TextWhitespace */ .chroma .w {  }
````

## File: themes/PaperMod/assets/css/includes/scroll-bar.css
````css
/* from reset */
::-webkit-scrollbar-track {
    background: 0 0;
}

.list:not(.dark)::-webkit-scrollbar-track {
    background: var(--code-bg);
}

::-webkit-scrollbar-thumb {
    background: var(--tertiary);
    border: 5px solid var(--theme);
    border-radius: var(--radius);
}

.list:not(.dark)::-webkit-scrollbar-thumb {
    border: 5px solid var(--code-bg);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--secondary);
}

::-webkit-scrollbar:not(.highlighttable, .highlight table, .gist .highlight) {
    background: var(--theme);
}

/* from post-single */
.post-content .highlighttable td .highlight pre code::-webkit-scrollbar {
    display: none;
}

.post-content :not(table) ::-webkit-scrollbar-thumb {
    border: 2px solid var(--code-block-bg);
    background: rgb(113, 113, 117);
}

.post-content :not(table) ::-webkit-scrollbar-thumb:hover {
    background: rgb(163, 163, 165);
}

.gist table::-webkit-scrollbar-thumb {
    border: 2px solid rgb(255, 255, 255);
    background: rgb(173, 173, 173);
}

.gist table::-webkit-scrollbar-thumb:hover {
    background: rgb(112, 112, 112);
}

.post-content table::-webkit-scrollbar-thumb {
    border-width: 2px;
}

/* from zmedia */
@media screen and (min-width: 768px) {

    /* reset */
    ::-webkit-scrollbar {
        width: 19px;
        height: 11px;
    }
}
````

## File: themes/PaperMod/assets/js/fastsearch.js
````javascript
import * as params from '@params';

let fuse; // holds our search engine
let resList = document.getElementById('searchResults');
let sInput = document.getElementById('searchInput');
let first, last, current_elem = null
let resultsAvailable = false;

// load our search index
window.onload = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                if (data) {
                    // fuse.js options; check fuse.js website for details
                    let options = {
                        distance: 100,
                        threshold: 0.4,
                        ignoreLocation: true,
                        keys: [
                            'title',
                            'permalink',
                            'summary',
                            'content'
                        ]
                    };
                    if (params.fuseOpts) {
                        options = {
                            isCaseSensitive: params.fuseOpts.iscasesensitive ?? false,
                            includeScore: params.fuseOpts.includescore ?? false,
                            includeMatches: params.fuseOpts.includematches ?? false,
                            minMatchCharLength: params.fuseOpts.minmatchcharlength ?? 1,
                            shouldSort: params.fuseOpts.shouldsort ?? true,
                            findAllMatches: params.fuseOpts.findallmatches ?? false,
                            keys: params.fuseOpts.keys ?? ['title', 'permalink', 'summary', 'content'],
                            location: params.fuseOpts.location ?? 0,
                            threshold: params.fuseOpts.threshold ?? 0.4,
                            distance: params.fuseOpts.distance ?? 100,
                            ignoreLocation: params.fuseOpts.ignorelocation ?? true
                        }
                    }
                    fuse = new Fuse(data, options); // build the index from the json file
                }
            } else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.open('GET', "../index.json");
    xhr.send();
}

function activeToggle(ae) {
    document.querySelectorAll('.focus').forEach(function (element) {
        // rm focus class
        element.classList.remove("focus")
    });
    if (ae) {
        ae.focus()
        document.activeElement = current_elem = ae;
        ae.parentElement.classList.add("focus")
    } else {
        document.activeElement.parentElement.classList.add("focus")
    }
}

function reset() {
    resultsAvailable = false;
    resList.innerHTML = sInput.value = ''; // clear inputbox and searchResults
    sInput.focus(); // shift focus to input box
}

// execute search as each character is typed
sInput.onkeyup = function (e) {
    // run a search query (for "term") every time a letter is typed
    // in the search box
    if (fuse) {
        let results;
        if (params.fuseOpts) {
            results = fuse.search(this.value.trim(), {limit: params.fuseOpts.limit}); // the actual query being run using fuse.js along with options
        } else {
            results = fuse.search(this.value.trim()); // the actual query being run using fuse.js
        }
        if (results.length !== 0) {
            // build our html if result exists
            let resultSet = ''; // our results bucket

            for (let item in results) {
                resultSet += `<li class="post-entry"><header class="entry-header">${results[item].item.title}&nbsp;»</header>` +
                    `<a href="${results[item].item.permalink}" aria-label="${results[item].item.title}"></a></li>`
            }

            resList.innerHTML = resultSet;
            resultsAvailable = true;
            first = resList.firstChild;
            last = resList.lastChild;
        } else {
            resultsAvailable = false;
            resList.innerHTML = '';
        }
    }
}

sInput.addEventListener('search', function (e) {
    // clicked on x
    if (!this.value) reset()
})

// kb bindings
document.onkeydown = function (e) {
    let key = e.key;
    let ae = document.activeElement;

    let inbox = document.getElementById("searchbox").contains(ae)

    if (ae === sInput) {
        let elements = document.getElementsByClassName('focus');
        while (elements.length > 0) {
            elements[0].classList.remove('focus');
        }
    } else if (current_elem) ae = current_elem;

    if (key === "Escape") {
        reset()
    } else if (!resultsAvailable || !inbox) {
        return
    } else if (key === "ArrowDown") {
        e.preventDefault();
        if (ae == sInput) {
            // if the currently focused element is the search input, focus the <a> of first <li>
            activeToggle(resList.firstChild.lastChild);
        } else if (ae.parentElement != last) {
            // if the currently focused element's parent is last, do nothing
            // otherwise select the next search result
            activeToggle(ae.parentElement.nextSibling.lastChild);
        }
    } else if (key === "ArrowUp") {
        e.preventDefault();
        if (ae.parentElement == first) {
            // if the currently focused element is first item, go to input box
            activeToggle(sInput);
        } else if (ae != sInput) {
            // if the currently focused element is input box, do nothing
            // otherwise select the previous search result
            activeToggle(ae.parentElement.previousSibling.lastChild);
        }
    } else if (key === "ArrowRight") {
        ae.click(); // click on active link
    }
}
````

## File: themes/PaperMod/assets/js/fuse.basic.min.js
````javascript
/**
 * Fuse.js v7.0.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2023 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var e,t;e=this,t=function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e){return Array.isArray?Array.isArray(e):"[object Array]"===m(e)}var l=1/0;function d(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-l?"-0":t}(e)}function f(e){return"string"==typeof e}function v(e){return"number"==typeof e}function g(e){return!0===e||!1===e||function(e){return function(e){return"object"===n(e)}(e)&&null!==e}(e)&&"[object Boolean]"==m(e)}function y(e){return null!=e}function p(e){return!e.trim().length}function m(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}var b=function(e){return"Missing ".concat(e," property in key")},k=function(e){return"Property 'weight' in key '".concat(e,"' must be a positive integer")},M=Object.prototype.hasOwnProperty,w=function(){function e(t){var n=this;r(this,e),this._keys=[],this._keyMap={};var i=0;t.forEach((function(e){var t=x(e);n._keys.push(t),n._keyMap[t.id]=t,i+=t.weight})),this._keys.forEach((function(e){e.weight/=i}))}return o(e,[{key:"get",value:function(e){return this._keyMap[e]}},{key:"keys",value:function(){return this._keys}},{key:"toJSON",value:function(){return JSON.stringify(this._keys)}}]),e}();function x(e){var t=null,n=null,r=null,i=1,o=null;if(f(e)||u(e))r=e,t=L(e),n=S(e);else{if(!M.call(e,"name"))throw new Error(b("name"));var a=e.name;if(r=a,M.call(e,"weight")&&(i=e.weight)<=0)throw new Error(k(a));t=L(a),n=S(a),o=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:o}}function L(e){return u(e)?e:e.split(".")}function S(e){return u(e)?e.join("."):e}var _={useExtendedSearch:!1,getFn:function(e,t){var n=[],r=!1;return function e(t,i,o){if(y(t))if(i[o]){var a=t[i[o]];if(!y(a))return;if(o===i.length-1&&(f(a)||v(a)||g(a)))n.push(d(a));else if(u(a)){r=!0;for(var c=0,s=a.length;c<s;c+=1)e(a[c],i,o+1)}else i.length&&e(a,i,o+1)}else n.push(t)}(e,f(t)?t.split("."):t,0),r?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},O=t(t(t(t({},{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:function(e,t){return e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1}}),{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1}),{location:0,threshold:.6,distance:100}),_),j=/[^ ]+/g,A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.getFn,i=void 0===n?O.getFn:n,o=t.fieldNormWeight,a=void 0===o?O.fieldNormWeight:o;r(this,e),this.norm=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=new Map,r=Math.pow(10,t);return{get:function(t){var i=t.match(j).length;if(n.has(i))return n.get(i);var o=1/Math.pow(i,.5*e),a=parseFloat(Math.round(o*r)/r);return n.set(i,a),a},clear:function(){n.clear()}}}(a,3),this.getFn=i,this.isCreated=!1,this.setIndexRecords()}return o(e,[{key:"setSources",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.docs=e}},{key:"setIndexRecords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.records=e}},{key:"setKeys",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.keys=t,this._keysMap={},t.forEach((function(t,n){e._keysMap[t.id]=n}))}},{key:"create",value:function(){var e=this;!this.isCreated&&this.docs.length&&(this.isCreated=!0,f(this.docs[0])?this.docs.forEach((function(t,n){e._addString(t,n)})):this.docs.forEach((function(t,n){e._addObject(t,n)})),this.norm.clear())}},{key:"add",value:function(e){var t=this.size();f(e)?this._addString(e,t):this._addObject(e,t)}},{key:"removeAt",value:function(e){this.records.splice(e,1);for(var t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}},{key:"getValueForItemAtKeyId",value:function(e,t){return e[this._keysMap[t]]}},{key:"size",value:function(){return this.records.length}},{key:"_addString",value:function(e,t){if(y(e)&&!p(e)){var n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}}},{key:"_addObject",value:function(e,t){var n=this,r={i:t,$:{}};this.keys.forEach((function(t,i){var o=t.getFn?t.getFn(e):n.getFn(e,t.path);if(y(o))if(u(o)){for(var a=[],c=[{nestedArrIndex:-1,value:o}];c.length;){var s=c.pop(),h=s.nestedArrIndex,l=s.value;if(y(l))if(f(l)&&!p(l)){var d={v:l,i:h,n:n.norm.get(l)};a.push(d)}else u(l)&&l.forEach((function(e,t){c.push({nestedArrIndex:t,value:e})}))}r.$[i]=a}else if(f(o)&&!p(o)){var v={v:o,n:n.norm.get(o)};r.$[i]=v}})),this.records.push(r)}},{key:"toJSON",value:function(){return{keys:this.keys,records:this.records}}}]),e}();function E(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.getFn,i=void 0===r?O.getFn:r,o=n.fieldNormWeight,a=void 0===o?O.fieldNormWeight:o,c=new A({getFn:i,fieldNormWeight:a});return c.setKeys(e.map(x)),c.setSources(t),c.create(),c}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.errors,r=void 0===n?0:n,i=t.currentLocation,o=void 0===i?0:i,a=t.expectedLocation,c=void 0===a?0:a,s=t.distance,h=void 0===s?O.distance:s,u=t.ignoreLocation,l=void 0===u?O.ignoreLocation:u,d=r/e.length;if(l)return d;var f=Math.abs(c-o);return h?d+f/h:f?1:d}var F=32;function C(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.location,o=void 0===i?O.location:i,a=r.distance,c=void 0===a?O.distance:a,s=r.threshold,h=void 0===s?O.threshold:s,u=r.findAllMatches,l=void 0===u?O.findAllMatches:u,d=r.minMatchCharLength,f=void 0===d?O.minMatchCharLength:d,v=r.includeMatches,g=void 0===v?O.includeMatches:v,y=r.ignoreLocation,p=void 0===y?O.ignoreLocation:y;if(t.length>F)throw new Error("Pattern length exceeds max of ".concat(F,"."));for(var m,b=t.length,k=e.length,M=Math.max(0,Math.min(o,k)),w=h,x=M,L=f>1||g,S=L?Array(k):[];(m=e.indexOf(t,x))>-1;){var _=I(t,{currentLocation:m,expectedLocation:M,distance:c,ignoreLocation:p});if(w=Math.min(_,w),x=m+b,L)for(var j=0;j<b;)S[m+j]=1,j+=1}x=-1;for(var A=[],E=1,C=b+k,N=1<<b-1,P=0;P<b;P+=1){for(var W=0,T=C;W<T;)I(t,{errors:P,currentLocation:M+T,expectedLocation:M,distance:c,ignoreLocation:p})<=w?W=T:C=T,T=Math.floor((C-W)/2+W);C=T;var $=Math.max(1,M-T+1),D=l?k:Math.min(M+T,k)+b,K=Array(D+2);K[D+1]=(1<<P)-1;for(var z=D;z>=$;z-=1){var J=z-1,R=n[e.charAt(J)];if(L&&(S[J]=+!!R),K[z]=(K[z+1]<<1|1)&R,P&&(K[z]|=(A[z+1]|A[z])<<1|1|A[z+1]),K[z]&N&&(E=I(t,{errors:P,currentLocation:J,expectedLocation:M,distance:c,ignoreLocation:p}))<=w){if(w=E,(x=J)<=M)break;$=Math.max(1,2*M-x)}}if(I(t,{errors:P+1,currentLocation:M,expectedLocation:M,distance:c,ignoreLocation:p})>w)break;A=K}var U={isMatch:x>=0,score:Math.max(.001,E)};if(L){var B=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.minMatchCharLength,n=[],r=-1,i=-1,o=0,a=e.length;o<a;o+=1){var c=e[o];c&&-1===r?r=o:c||-1===r||((i=o-1)-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}(S,f);B.length?g&&(U.indices=B):U.isMatch=!1}return U}function N(e){for(var t={},n=0,r=e.length;n<r;n+=1){var i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}var P=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.location,a=void 0===o?O.location:o,c=i.threshold,s=void 0===c?O.threshold:c,h=i.distance,u=void 0===h?O.distance:h,l=i.includeMatches,d=void 0===l?O.includeMatches:l,f=i.findAllMatches,v=void 0===f?O.findAllMatches:f,g=i.minMatchCharLength,y=void 0===g?O.minMatchCharLength:g,p=i.isCaseSensitive,m=void 0===p?O.isCaseSensitive:p,b=i.ignoreLocation,k=void 0===b?O.ignoreLocation:b;if(r(this,e),this.options={location:a,threshold:s,distance:u,includeMatches:d,findAllMatches:v,minMatchCharLength:y,isCaseSensitive:m,ignoreLocation:k},this.pattern=m?t:t.toLowerCase(),this.chunks=[],this.pattern.length){var M=function(e,t){n.chunks.push({pattern:e,alphabet:N(e),startIndex:t})},w=this.pattern.length;if(w>F){for(var x=0,L=w%F,S=w-L;x<S;)M(this.pattern.substr(x,F),x),x+=F;if(L){var _=w-F;M(this.pattern.substr(_),_)}}else M(this.pattern,0)}}return o(e,[{key:"searchIn",value:function(e){var t=this.options,n=t.isCaseSensitive,r=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return r&&(i.indices=[[0,e.length-1]]),i}var o=this.options,a=o.location,s=o.distance,h=o.threshold,u=o.findAllMatches,l=o.minMatchCharLength,d=o.ignoreLocation,f=[],v=0,g=!1;this.chunks.forEach((function(t){var n=t.pattern,i=t.alphabet,o=t.startIndex,y=C(e,n,i,{location:a+o,distance:s,threshold:h,findAllMatches:u,minMatchCharLength:l,includeMatches:r,ignoreLocation:d}),p=y.isMatch,m=y.score,b=y.indices;p&&(g=!0),v+=m,p&&b&&(f=[].concat(c(f),c(b)))}));var y={isMatch:g,score:g?v/this.chunks.length:1};return g&&r&&(y.indices=f),y}}]),e}(),W=[];function T(e,t){for(var n=0,r=W.length;n<r;n+=1){var i=W[n];if(i.condition(e,t))return new i(e,t)}return new P(e,t)}function $(e,t){var n=e.matches;t.matches=[],y(n)&&n.forEach((function(e){if(y(e.indices)&&e.indices.length){var n={indices:e.indices,value:e.value};e.key&&(n.key=e.key.src),e.idx>-1&&(n.refIndex=e.idx),t.matches.push(n)}}))}function D(e,t){t.score=e.score}var K=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;if(r(this,e),this.options=t(t({},O),i),this.options.useExtendedSearch)throw new Error("Extended search is not available");this._keyStore=new w(this.options.keys),this.setCollection(n,o)}return o(e,[{key:"setCollection",value:function(e,t){if(this._docs=e,t&&!(t instanceof A))throw new Error("Incorrect 'index' type");this._myIndex=t||E(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}},{key:"add",value:function(e){y(e)&&(this._docs.push(e),this._myIndex.add(e))}},{key:"remove",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},t=[],n=0,r=this._docs.length;n<r;n+=1){var i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,t.push(i))}return t}},{key:"removeAt",value:function(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}},{key:"getIndex",value:function(){return this._myIndex}},{key:"search",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).limit,n=void 0===t?-1:t,r=this.options,i=r.includeMatches,o=r.includeScore,a=r.shouldSort,c=r.sortFn,s=r.ignoreFieldNorm,h=f(e)?f(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,t){var n=t.ignoreFieldNorm,r=void 0===n?O.ignoreFieldNorm:n;e.forEach((function(e){var t=1;e.matches.forEach((function(e){var n=e.key,i=e.norm,o=e.score,a=n?n.weight:null;t*=Math.pow(0===o&&a?Number.EPSILON:o,(a||1)*(r?1:i))})),e.score=t}))}(h,{ignoreFieldNorm:s}),a&&h.sort(c),v(n)&&n>-1&&(h=h.slice(0,n)),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.includeMatches,i=void 0===r?O.includeMatches:r,o=n.includeScore,a=void 0===o?O.includeScore:o,c=[];return i&&c.push($),a&&c.push(D),e.map((function(e){var n=e.idx,r={item:t[n],refIndex:n};return c.length&&c.forEach((function(t){t(e,r)})),r}))}(h,this._docs,{includeMatches:i,includeScore:o})}},{key:"_searchStringList",value:function(e){var t=T(e,this.options),n=this._myIndex.records,r=[];return n.forEach((function(e){var n=e.v,i=e.i,o=e.n;if(y(n)){var a=t.searchIn(n),c=a.isMatch,s=a.score,h=a.indices;c&&r.push({item:n,idx:i,matches:[{score:s,value:n,norm:o,indices:h}]})}})),r}},{key:"_searchLogical",value:function(e){throw new Error("Logical search is not available")}},{key:"_searchObjectList",value:function(e){var t=this,n=T(e,this.options),r=this._myIndex,i=r.keys,o=r.records,a=[];return o.forEach((function(e){var r=e.$,o=e.i;if(y(r)){var s=[];i.forEach((function(e,i){s.push.apply(s,c(t._findMatches({key:e,value:r[i],searcher:n})))})),s.length&&a.push({idx:o,item:r,matches:s})}})),a}},{key:"_findMatches",value:function(e){var t=e.key,n=e.value,r=e.searcher;if(!y(n))return[];var i=[];if(u(n))n.forEach((function(e){var n=e.v,o=e.i,a=e.n;if(y(n)){var c=r.searchIn(n),s=c.isMatch,h=c.score,u=c.indices;s&&i.push({score:h,key:t,value:n,idx:o,norm:a,indices:u})}}));else{var o=n.v,a=n.n,c=r.searchIn(o),s=c.isMatch,h=c.score,l=c.indices;s&&i.push({score:h,key:t,value:o,norm:a,indices:l})}return i}}]),e}();return K.version="7.0.0",K.createIndex=E,K.parseIndex=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getFn,r=void 0===n?O.getFn:n,i=t.fieldNormWeight,o=void 0===i?O.fieldNormWeight:i,a=e.keys,c=e.records,s=new A({getFn:r,fieldNormWeight:o});return s.setKeys(a),s.setIndexRecords(c),s},K.config=O,K},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Fuse=t();
````

## File: themes/PaperMod/assets/js/license.js
````javascript
/*
  PaperMod v8+
  License: MIT https://github.com/adityatelange/hugo-PaperMod/blob/master/LICENSE
  Copyright (c) 2020 nanxiaobei and adityatelange
  Copyright (c) 2021-2025 adityatelange
*/
````

## File: themes/PaperMod/i18n/ar.yaml
````yaml
- id: prev_page
  translation: "السابق"

- id: next_page
  translation: "التالي"

- id: read_time
  translation:
    one: "دقيقة واحدة"
    two: "دقيقتان"
    few: "بضع ثوان"
    zero: "الآن"
    other: "دقائق {{ .Count }}"

- id: toc
  translation: "فهرس المحتوى"

- id: translations
  translation: "ترجمات أخرى"
  
- id: home
  translation: "الصفحة الرئيسية"

- id: code_copied
  translation: "تم النسخ!"

- id: code_copy
  translation: "نسخ الكود"
````

## File: themes/PaperMod/i18n/be.yaml
````yaml
- id: prev_page
  translation: "Папярэдняя"

- id: next_page
  translation: "Наступная"

- id: read_time
  translation:
    zero: "0 хвілін"
    one: "1 хвіліна"
    few: "{{ .Count }} хвіліны"
    many: "{{ .Count }} хвілін"
    other: "{{ .Count }} хвілін"

- id: words
  translation:
    zero: "няма слоў"
    one: "1 слова"
    few: "{{ .Count }} слова"
    many: "{{ .Count }} слоў"
    other: "{{ .Count }} слова"

- id: toc
  translation: "Змест"

- id: translations
  translation: "Пераклады"

- id: home
  translation: "Галоўная"

- id: edit_post
  translation: "Рэдагаваць"

- id: code_copy
  translation: "капіяваць"

- id: code_copied
  translation: "скапіявана!"
````

## File: themes/PaperMod/i18n/bg.yaml
````yaml
- id: prev_page
  translation: "Предишна страница"

- id: next_page
  translation: "Следваща страница"

- id: read_time
  translation:
    one : "1 мин"
    other: "{{ .Count }} мин"

- id: toc
  translation: "Съдържание"

- id: translations
  translation: "Преводи"
````

## File: themes/PaperMod/i18n/bn.yaml
````yaml
- id: prev_page
  translation: "পূর্ববর্তী"

- id: next_page
  translation: "পরবর্তী"

- id: read_time
  translation:
    one : "১ মিনিট"
    other: "{{ .Count }} মিনিট"
    
- id: words
  translation:
    one : "১ টি শব্দ"
    other: "{{ .Count }} টি শব্দ"

- id: toc
  translation: "সূচিপত্র"

- id: translations
  translation: "অনুবাদসমূহ"

- id: home
  translation: "হোম"

- id: edit_post
  translation: "সম্পাদনা করুন"

- id: code_copy
  translation: "কপি করুন"

- id: code_copied
  translation: "কপি হয়েছে!"
````

## File: themes/PaperMod/i18n/ca.yaml
````yaml
- id: prev_page
  translation: "Pàgina anterior"

- id: next_page
  translation: "Pàgina següent"

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} min"

- id: toc
  translation: "Taula de Continguts"

- id: translations
  translation: "Traduccions"

- id: home
  translation: "Inici"
````

## File: themes/PaperMod/i18n/ckb.yaml
````yaml
- id: prev_page
  translation: "پەڕەی پێشتر"

- id: next_page
  translation: "پەڕەی دواتر"

- id: read_time
  translation:
    one : "1 خولەک"
    other: "{{ .Count }} خولەک"

- id: toc
  translation: "پێڕست"

- id: translations
  translation: "وەرگێڕانەکان"

- id: home
  translation: "ماڵەوە"

- id: code_copy
  translation: "لەبەری بگرەوە"

- id: code_copied
  translation: "لەبەر گیرایەوە!"
````

## File: themes/PaperMod/i18n/cs.yaml
````yaml
- id: prev_page
  translation: "Předchozí"

- id: next_page
  translation: "Další"

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} min"

- id: words
  translation:
    one : "slovo"
    other: "{{ .Count }} slov"

- id: toc
  translation: "Obsah"

- id: translations
  translation: "Překlady"

- id: home
  translation: "Domů"

- id: edit_post
  translation: "Upravit"

- id: code_copy
  translation: "kopírovat"

- id: code_copied
  translation: "zkopírováno!"
````

## File: themes/PaperMod/i18n/da.yaml
````yaml
- id: prev_page
  translation: "Forrige Side"

- id: next_page
  translation: "Næste Side"

- id: read_time
  translation:
    one: "1 min"
    other: "{{ .Count }} min"

- id: toc
  translation: "Indholdsfortegnelse"

- id: translations
  translation: "Oversættelser"

- id: home
  translation: "Start"

- id: edit_post
  translation: "Rediger"

- id: code_copy
  translation: "kopier"

- id: code_copied
  translation: "kopieret!"
````

## File: themes/PaperMod/i18n/de.yaml
````yaml
- id: prev_page
  translation: "Vorherige"

- id: next_page
  translation: "Nächste"

- id: read_time
  translation:
    one: "1 Minute"
    other: "{{ .Count }} Minuten"

- id: words
  translation:
    one : "Wort"
    other: "{{ .Count }} Wörter"

- id: toc
  translation: "Inhaltsverzeichnis"

- id: translations
  translation: "Übersetzungen"

- id: home
  translation: "Home"

- id: edit_post
  translation: "Bearbeiten"

- id: code_copy
  translation: "Kopieren"

- id: code_copied
  translation: "Kopiert!"
````

## File: themes/PaperMod/i18n/el.yaml
````yaml
- id: prev_page
  translation: "Προηγούμενο"

- id: next_page
  translation: "Επόμενο"

- id: read_time
  translation:
    one: "1 λεπτό"
    other: "{{ .Count }} λεπτά"

- id: words
  translation:
    one: "λέξη"
    other: "{{ .Count }} λέξεις"

- id: toc
  translation: "Πίνακας Περιεχομένων"

- id: translations
  translation: "Μεταφράσεις"

- id: home
  translation: "Αρχική"

- id: edit_post
  translation: "Επεξεργασία"

- id: code_copy
  translation: "αντιγραφή"

- id: code_copied
  translation: "αντιγράφηκε!"
````

## File: themes/PaperMod/i18n/en.yaml
````yaml
- id: prev_page
  translation: "Prev"

- id: next_page
  translation: "Next"

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} min"

- id: words
  translation:
    one : "word"
    other: "{{ .Count }} words"

- id: toc
  translation: "Table of Contents"

- id: translations
  translation: "Translations"

- id: home
  translation: "Home"

- id: edit_post
  translation: "Edit"

- id: code_copy
  translation: "copy"

- id: code_copied
  translation: "copied!"
````

## File: themes/PaperMod/i18n/eo.yaml
````yaml
- id: prev_page
  translation: "antaŭa paĝo"

- id: next_page
  translation: "sekva paĝo"

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} min"

- id: toc
  translation: "Enhavo"

- id: translations
  translation: "tradukoj"

- id: home
  translation: "ĉefpaĝo"

- id: code_copy
  translation: "kopii"

- id: code_copied
  translation: "kopiite!"
````

## File: themes/PaperMod/i18n/es.yaml
````yaml
- id: prev_page
  translation: "Anterior"

- id: next_page
  translation: "Siguiente"

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} min"

- id: words
  translation:
    one : "palabra"
    other: "{{ .Count }} palabras"

- id: toc
  translation: "Tabla de Contenidos"

- id: translations
  translation: "Traducciones"

- id: home
  translation: "Inicio"

- id: edit_post
  translation: "Editar"

- id: code_copy
  translation: "copiar"

- id: code_copied
  translation: "¡copiado!"
````

## File: themes/PaperMod/i18n/fa.yaml
````yaml
- id: prev_page
  translation: "صفحه قبلی"

- id: next_page
  translation: "صفحه بعدی"

- id: read_time
  translation:
    one: "۱ دقیقه"
    other: "{{ .Count }} دقیقه"

- id: toc
  translation: "فهرست مطالب"

- id: translations
  translation: "ترجمه ها"

- id: home
  translation: "خانه"

- id: edit_post
  translation: "ویرایش"

- id: code_copy
  translation: "کپی"

- id: code_copied
  translation: "کپی شد!"
````

## File: themes/PaperMod/i18n/fi.yaml
````yaml
- id: prev_page
  translation: "Edellinen"

- id: next_page
  translation: "Seuraava"

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} minuuttia"

- id: words
  translation:
    one : "sana"
    other: "{{ .Count }} sanaa"

- id: toc
  translation: "Sisällysluettelo"

- id: translations
  translation: "Käännökset"

- id: home
  translation: "Etusivu"

- id: edit_post
  translation: "Muokkaa"

- id: code_copy
  translation: "Kopioi"

- id: code_copied
  translation: "Kopioitu!"
````

## File: themes/PaperMod/i18n/fr.yaml
````yaml
- id: prev_page
  translation: "Précédent"

- id: next_page
  translation: "Suivant"

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} min"

- id: words
  translation:
    one : "mot"
    other: "{{ .Count }} mots"

- id: toc
  translation: "Table des matières"

- id: translations
  translation: "Traductions"

- id: home
  translation: "Accueil"

- id: edit_post
  translation: "Modifier"

- id: code_copy
  translation: "Copier"

- id: code_copied
  translation: "Copié !"
````

## File: themes/PaperMod/i18n/he.yaml
````yaml
- id: prev_page
  translation: "הקודם"

- id: next_page
  translation: "הבא"

- id: read_time
  translation:
    one: "דקה אחת"
    other: "{{ .Count }} דקות"

- id: words
  translation:
    one: "מילה אחת"
    other: "{{ .Count }} מילים"

- id: toc
  translation: "תוכן עניינים"

- id: translations
  translation: "תרגומים"

- id: home
  translation: "בית"

- id: edit_post
  translation: "ערוך"

- id: code_copy
  translation: "העתק"

- id: code_copied
  translation: "הועתק!"
````

## File: themes/PaperMod/i18n/hi.yaml
````yaml
- id: prev_page
  translation: "पिछला"

- id: next_page
  translation: "अगला"

- id: read_time
  translation:
    one : "एक मिनट"
    other: "{{ .Count }} मिनट"

- id: edit_post
  translation: "सुधारें"

- id: toc
  translation: "विषय - सूची"

- id: translations
  translation: "अनुवाद"
````

## File: themes/PaperMod/i18n/hr.yaml
````yaml
- id: prev_page
  translation: "Prethodna stranica"

- id: next_page
  translation: "Sljedeća stranica"

- id: read_time
  translation:
    one : "1 minuta"
    other: "{{ .Count }} minute"

- id: words
  translation:
    one : "riječ"
    other: "{{ .Count }} riječi"

- id: toc
  translation: "Tablica Sadržaja"

- id: translations
  translation: "Prijevodi"

- id: home
  translation: "Početna stranica"

- id: edit_post
  translation: "Promjeni"

- id: code_copy
  translation: "kopiraj"

- id: code_copied
  translation: "kopirano!"
````

## File: themes/PaperMod/i18n/hu.yaml
````yaml
- id: prev_page
  translation: "Előző oldal"

- id: next_page
  translation: "Következő oldal"

- id: read_time
  translation:
    one: "1 perc"
    other: "{{ .Count }} perc"

- id: toc
  translation: "Tartalomjegyzék"

- id: translations
  translation: "Fordítások"
````

## File: themes/PaperMod/i18n/id.yaml
````yaml
- id: prev_page
  translation: "Sebelumnya"

- id: next_page
  translation: "Selanjutnya"

- id: read_time
  translation:
    one : "1 menit"
    other: "{{ .Count }} menit"

- id: words
  translation:
    one : "kata"
    other: "{{ .Count }} kata"

- id: toc
  translation: "Daftar isi"

- id: translations
  translation: "Terjemahan"

- id: home
  translation: "Beranda"

- id: edit_post
  translation: "Sunting"

- id: code_copy
  translation: "salin"

- id: code_copied
  translation: "disalin!"
````

## File: themes/PaperMod/i18n/it.yaml
````yaml
- id: prev_page
  translation: "Precedente"

- id: next_page
  translation: "Successivo"

- id: read_time
  translation:
    one: "1 minuto"
    other: "{{ .Count }} minuti"

- id: words
  translation:
    one : "parola"
    other: "{{ .Count }} parole"

- id: toc
  translation: "Indice contenuti"

- id: translations
  translation: "Traduzioni"

- id: home
  translation: "Home"

- id: edit_post
  translation: "Modifica"

- id: code_copy
  translation: "copia"

- id: code_copied
  translation: "copiato!"
````

## File: themes/PaperMod/i18n/ja.yaml
````yaml
- id: prev_page
  translation: "前へ"

- id: next_page
  translation: "次へ"

- id: read_time
  translation:
    one : "1 分"
    other: "{{ .Count }} 分"

- id: words
  translation:
    one: "文字"
    other: "{{ .Count }} 文字"

- id: toc
  translation: "目次"

- id: translations
  translation: "言語"

- id: home
  translation: "ホーム"

- id: edit_post
  translation: "編集"

- id: code_copy
  translation: "コピー"

- id: code_copied
  translation: "コピーされました!"
````

## File: themes/PaperMod/i18n/ko.yaml
````yaml
- id: prev_page
  translation: "이전 페이지"

- id: next_page
  translation: "다음 페이지"

- id: read_time
  translation:
    one : "1 분"
    other: "{{ .Count }} 분"

- id: words
  translation:
    one : "단어"
    other: "{{ .Count }} 단어"

- id: toc
  translation: "목차"

- id: translations
  translation: "번역"

- id: home
  translation: "홈"

- id: edit_post
  translation: "편집"

- id: code_copy
  translation: "복사"

- id: code_copied
  translation: "복사 완료!"
````

## File: themes/PaperMod/i18n/ku.yaml
````yaml
- id: prev_page
  translation: "Rûpela Paş"

- id: next_page
  translation: "Rûpela Pêş"

- id: read_time
  translation:
    one : "1 xulek"
    other: "{{ .Count }} xulek"

- id: toc
  translation: "Pêrist"

- id: translations
  translation: "Wergeran"

- id: home
  translation: "Xanî"

- id: code_copy
  translation: "Jê bigire"

- id: code_copied
  translation: "Hat jêgirtin!"
````

## File: themes/PaperMod/i18n/mn.yaml
````yaml
- id: prev_page
  translation: "Ѳмнѳх"

- id: next_page
  translation: "Дараах"

- id: read_time
  translation:
    one : "1 МИН"
    other: "{{ .Count }} МИН"

- id: toc
  translation: "Агуулга"

- id: translations
  translation: "Орчуулга"

- id: home
  translation: "Нүүр"

- id: code_copy
  translation: "хуулах"

- id: code_copied
  translation: "хуулсан!"
````

## File: themes/PaperMod/i18n/ms.yaml
````yaml
- id: prev_page
  translation: "Halaman Sebelumnya"

- id: next_page
  translation: "Halaman Seterusnya"

- id: read_time
  translation:
    one: "1 minit"
    other: "{{ .Count }} minit"

- id: toc
  translation: "Isi Kandungan"

- id: translations
  translation: "Terjemahan"

- id: home
  translation: "Home"

- id: edit_post
  translation: "Sunting"

- id: code_copy
  translation: "Salin"

- id: code_copied
  translation: "Disalin!"
````

## File: themes/PaperMod/i18n/nl.yaml
````yaml
- id: prev_page
  translation: "Vorige"

- id: next_page
  translation: "Volgende"

- id: read_time
  translation:
      one: "1 min"
      other: "{{ .Count }} min"

- id: words
  translation:
    one : "woord"
    other: "{{ .Count }} woorden"

- id: toc
  translation: "Inhoudsopgave"

- id: translations
  translation: "Vertalingen"

- id: home
  translation: "Startpagina"

- id: edit_post
  translation: "Bewerk"

- id: code_copy
  translation: "kopieer"

- id: code_copied
  translation: "gekopieerd!"
````

## File: themes/PaperMod/i18n/no.yaml
````yaml
- id: prev_page
  translation: "Forrige Side"

- id: next_page
  translation: "Neste Side"

- id: read_time
  translation:
    one: "1 min"
    other: "{{ .Count }} min"

- id: words
  translation:
    one: "ord"
    other: "{{ .Count }} ord"

- id: toc
  translation: "Innholdsfortegnelse"

- id: translations
  translation: "Oversettelser"

- id: home
  translation: "Hjem"

- id: edit_post
  translation: "Rediger"

- id: code_copy
  translation: "Kopier"

- id: code_copied
  translation: "Kopiert!"
````

## File: themes/PaperMod/i18n/oc.yaml
````yaml
- id: prev_page
  translation: "Prec."

- id: next_page
  translation: "Seg."

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} min"

- id: words
  translation:
    one : "mot"
    other: "{{ .Count }} motss"

- id: toc
  translation: "Taula de contengut"

- id: translations
  translation: "Traduccions"

- id: home
  translation: "Acuèlh"

- id: edit_post
  translation: "Modificar"

- id: code_copy
  translation: "copiar"

- id: code_copied
  translation: "copiat !"
````

## File: themes/PaperMod/i18n/pa.yaml
````yaml
- id: prev_page
  translation: "ਪਿਛਲਾ"

- id: next_page
  translation: "ਅਗਲਾ"

- id: read_time
  translation:
    one: "1 ਮਿੰਟ"
    other: "{{ .Count }} ਮਿੰਟ"

- id: words
  translation:
    one: "ਸ਼ਬਦ"
    other: "{{ .Count }} ਸ਼ਬਦ"

- id: toc
  translation: "ਤਤਕਰਾ"

- id: translations
  translation: "ਅਨੁਵਾਦ"

- id: home
  translation: "ਘਰ"

- id: edit_post
  translation: "ਸੋਧ"

- id: code_copy
  translation: "ਕਾਪੀ"

- id: code_copied
  translation: "ਕਾਪੀ ਕੀਤੀ ਗਈ!!"
````

## File: themes/PaperMod/i18n/pl.yaml
````yaml
- id: prev_page
  translation: "Poprzednia"

- id: next_page
  translation: "Następna"

- id: read_time
  translation:
      one: "1 min"
      other: "{{ .Count }} min"

- id: words
  translation:
    one : "słowo"
    other: "{{ .Count }} słów"

- id: toc
  translation: "Spis treści"

- id: translations
  translation: "Tłumaczenia"

- id: home
  translation: "Strona Główna"

- id: edit_post
  translation: "Edytuj"

- id: code_copy
  translation: "Kopiuj"

- id: code_copied
  translation: "Skopiowano!"
````

## File: themes/PaperMod/i18n/pnb.yaml
````yaml
- id: prev_page
  translation: "پِچھلا"

- id: next_page
  translation: "اگلا"

- id: read_time
  translation:
    one: "ایک منٹ"
    other: "مِنٹ {{ .Count }}"

- id: words
  translation:
    one: "لفظ"
    other: "لفظ {{ .Count }}"

- id: toc
  translation: "تتکرا"

- id: translations
  translation: "انوواد"

- id: home
  translation: "گھر"

- id: edit_post
  translation: "سودھ"

- id: code_copy
  translation: "کاپی"

- id: code_copied
  translation: "کاپی کیتی گئی!"
````

## File: themes/PaperMod/i18n/pt.yaml
````yaml
- id: prev_page
  translation: "Página Anterior"

- id: next_page
  translation: "Próxima Página"

- id: read_time
  translation:
    one: "1 minuto"
    other: "{{ .Count }} minutos"

- id: words
  translation:
    one : "palavra"
    other: "{{ .Count }} palavras"

- id: toc
  translation: "Conteúdo"

- id: translations
  translation: "Traduções"
  
- id: home
  translation: "Início"

- id: edit_post
  translation: "Editar"

- id: code_copy
  translation: "copiar"

- id: code_copied
  translation: "copiado!"
````

## File: themes/PaperMod/i18n/ro.yaml
````yaml
- id: prev_page
  translation: "Înapoi"

- id: next_page
  translation: "Înainte"

- id: read_time
  translation:
    one : "1 minut"
    other: "{{ .Count }} minute"

- id: words
  translation:
    one : "cuvânt"
    other: "{{ .Count }} cuvinte"

- id: toc
  translation: "Sumar"

- id: translations
  translation: "Traduceri"

- id: home
  translation: "Acasă"

- id: edit_post
  translation: "Editează"

- id: code_copy
  translation: "copiază"

- id: code_copied
  translation: "copiat!"
````

## File: themes/PaperMod/i18n/ru.yaml
````yaml
- id: prev_page
  translation: "Предыдущая"

- id: next_page
  translation: "Следующая"

- id: read_time
  translation:
    zero: "0 минут"
    one: "1 минута"
    few: "{{ .Count }} минуты"
    many: "{{ .Count }} минут"
    other: "{{ .Count }} минута"

- id: words
  translation:
    zero: "0 слов"
    one: "1 слово"
    few: "{{ .Count }} слова"
    many: "{{ .Count }} слов"
    other: "{{ .Count }} слово"

- id: toc
  translation: "Оглавление"

- id: translations
  translation: "Переводы"

- id: home
  translation: "Главная"

- id: edit_post
  translation: "Редактировать"

- id: code_copy
  translation: "копировать"

- id: code_copied
  translation: "скопировано!"
````

## File: themes/PaperMod/i18n/sk.yaml
````yaml
- id: prev_page
  translation: "Predch"

- id: next_page
  translation: "Ďaľší"

- id: read_time
  translation:
    one : "1 min"
    other: "{{ .Count }} min"

- id: words
  translation:
    one : "slovo"
    other: "{{ .Count }} slov"

- id: toc
  translation: "Obsah"

- id: translations
  translation: "Preklady"

- id: home
  translation: "Domov"

- id: edit_post
  translation: "Upraviť"

- id: code_copy
  translation: "kopírovať"

- id: code_copied
  translation: "skopírované!"
````

## File: themes/PaperMod/i18n/sv.yaml
````yaml
- id: prev_page
  translation: "Förra Sidan"

- id: next_page
  translation: "Nästa Sida"

- id: read_time
  translation:
    one: "1 min"
    other: "{{ .Count }} min"

- id: toc
  translation: "Innehållsförteckning"

- id: translations
  translation: "Översättningar"

- id: home
  translation: "Hem"

- id: edit_post
  translation: "Redigera"

- id: code_copy
  translation: "kopiera"

- id: code_copied
  translation: "kopierad!"
````

## File: themes/PaperMod/i18n/sw.yaml
````yaml
- id: prev_page
  translation: "Uliopita"

- id: next_page
  translation: "Ujao"

- id: read_time
  translation:
    one : "dakika 1"
    other: "dakika {{ .Count }}"

- id: words
  translation:
    one : "neno"
    other: "maneno {{ .Count }}"

- id: toc
  translation: "Jedwali la Yaliyomo"

- id: translations
  translation: "Tafsiri"

- id: home
  translation: "Mwanzo"

- id: edit_post
  translation: "Hariri"

- id: code_copy
  translation: "nakili"

- id: code_copied
  translation: "nakiliwa!"
````

## File: themes/PaperMod/i18n/th.yaml
````yaml
- id: prev_page
  translation: "ก่อนหน้า"

- id: next_page
  translation: "ถัดไป"

- id: read_time
  translation:
    one : "1 นาที"
    other: "{{ .Count }} นาที"

- id: words
  translation:
    one : "คำ"
    other: "{{ .Count }} คำ"

- id: toc
  translation: "สารบัญ"

- id: translations
  translation: "การแปล"

- id: home
  translation: "หน้าหลัก"

- id: edit_post
  translation: "แก้ไข"

- id: code_copy
  translation: "คัดลอก"

- id: code_copied
  translation: "คัดลอกแล้ว!"
````

## File: themes/PaperMod/i18n/tr.yaml
````yaml
- id: prev_page
  translation: "Önceki"

- id: next_page
  translation: "Sonraki"

- id: read_time
  translation:
    one : "1 dk"
    other: "{{ .Count }} dk"

- id: words
  translation:
    one : "sözcük"
    other: "{{ .Count }} sözcük"

- id: toc
  translation: "İçindekiler"

- id: translations
  translation: "Çeviriler"

- id: home
  translation: "Ana Sayfa"

- id: edit_post
  translation: "Düzenle"

- id: code_copy
  translation: "Kopyala"

- id: code_copied
  translation: "Kopyalandı!"
````

## File: themes/PaperMod/i18n/uk.yaml
````yaml
- id: prev_page
  translation: "Попередня"

- id: next_page
  translation: "Наступна"

- id: read_time
  translation:
    one : "1 хвилина"
    other: "{{ .Count }} хвилин"

- id: toc
  translation: "Зміст"

- id: translations
  translation: "Переклади"

- id: home
  translation: "Головна"

- id: code_copy
  translation: "копіювати"

- id: code_copied
  translation: "скопійовано!"
````

## File: themes/PaperMod/i18n/uz.yaml
````yaml
- id: prev_page
  translation: "Oldingi sahifa"

- id: next_page
  translation: "Keyingi sahifa"

- id: read_time
  translation:
    one : "Bir daqiqa"
    other: "{{ .Count }} daqiqa"

- id: toc
  translation: "Mundarija"

- id: translations
  translation: "Tarjimalar"

- id: home
  translation: "Bosh sahifa"
````

## File: themes/PaperMod/i18n/vi.yaml
````yaml
- id: prev_page
  translation: "Trang trước"

- id: next_page
  translation: "Trang tiếp theo"

- id: read_time
  translation:
    one: "1 phút"
    other: "{{ .Count }} phút"

- id: words
  translation:
    one: "từ"
    other: "{{ .Count }} từ"

- id: toc
  translation: "Mục lục"

- id: translations
  translation: "Bản dịch"

- id: home
  translation: "Trang chủ"

- id: edit_post
  translation: "Chỉnh sửa"

- id: code_copy
  translation: "Sao chép"

- id: code_copied
  translation: "Đã sao chép!"
````

## File: themes/PaperMod/i18n/zh-tw.yaml
````yaml
- id: prev_page
  translation: "上一頁"

- id: next_page
  translation: "下一頁"

- id: read_time
  translation:
    one : "1 分鐘"
    other: "{{ .Count }} 分鐘"

- id: words
  translation:
    one: "字"
    other: "{{ .Count }} 字"

- id: toc
  translation: "目錄"

- id: translations
  translation: "語言"

- id: home
  translation: "首頁"

- id: edit_post
  translation: "編輯"

- id: code_copy
  translation: "複製"

- id: code_copied
  translation: "已複製！"
````

## File: themes/PaperMod/i18n/zh.yaml
````yaml
- id: prev_page
  translation: "上一页"

- id: next_page
  translation: "下一页"

- id: read_time
  translation:
    one : "1 分钟"
    other: "{{ .Count }} 分钟"

- id: words
  translation: 
    one: "字"
    other: "{{ .Count }} 字"

- id: toc
  translation: "目录"

- id: translations
  translation: "语言"

- id: home
  translation: "主页"

- id: edit_post
  translation: "编辑"

- id: code_copy
  translation: "复制"

- id: code_copied
  translation: "已复制！"
````

## File: themes/PaperMod/layouts/_default/_markup/render-image.html
````html
{{- $u := urls.Parse .Destination -}}
{{- $src := $u.String -}}
{{- if not $u.IsAbs -}}
  {{- $path := strings.TrimPrefix "./" $u.Path }}
  {{- with or (.PageInner.Resources.Get $path) (resources.Get $path) -}}
    {{- $src = .RelPermalink -}}
    {{- with $u.RawQuery -}}
      {{- $src = printf "%s?%s" $src . -}}
    {{- end -}}
    {{- with $u.Fragment -}}
      {{- $src = printf "%s#%s" $src . -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{- $attributes := merge .Attributes (dict "alt" .Text "src" $src "title" (.Title | transform.HTMLEscape) "loading" "lazy") -}}
<img
  {{- range $k, $v := $attributes -}}
    {{- if $v -}}
      {{- printf " %s=%q" $k $v | safeHTMLAttr -}}
    {{- end -}}
  {{- end -}}>
{{- /**/ -}}
````

## File: themes/PaperMod/layouts/_default/archives.html
````html
{{- define "main" }}

<header class="page-header">
  <h1>
    {{ .Title }}
    {{- if (.Param "ShowRssButtonInSectionTermList") }}
    {{- $rss := (.OutputFormats.Get "rss") }}
    {{- if (eq .Kind `page`) }}
    {{- $rss = (.Parent.OutputFormats.Get "rss") }}
    {{- end }}
    {{- with $rss }}
    <a href="{{ .RelPermalink }}" title="RSS" aria-label="RSS">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" height="23">
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </svg>
    </a>
    {{- end }}
    {{- end }}
  </h1>
  {{- if .Description }}
  <div class="post-description">
    {{ .Description }}
  </div>
  {{- end }}
</header>

{{- $pages := where site.RegularPages "Type" "in" site.Params.mainSections }}

{{- if site.Params.ShowAllPagesInArchive }}
{{- $pages = site.RegularPages }}
{{- end }}

{{- range $pages.GroupByPublishDate "2006" }}
{{- if ne .Key "0001" }}
<div class="archive-year">
  {{- $year := replace .Key "0001" "" }}
  <h2 class="archive-year-header" id="{{ $year }}">
    <a class="archive-header-link" href="#{{ $year }}">
      {{- $year -}}
    </a>
    <sup class="archive-count">&nbsp;{{ len .Pages }}</sup>
  </h2>
  {{- range .Pages.GroupByDate "January" }}
  <div class="archive-month">
    <h3 class="archive-month-header" id="{{ $year }}-{{ .Key }}">
      <a class="archive-header-link" href="#{{ $year }}-{{ .Key }}">
        {{- .Key -}}
      </a>
      <sup class="archive-count">&nbsp;{{ len .Pages }}</sup>
    </h3>
    <div class="archive-posts">
      {{- range .Pages }}
      {{- if eq .Kind "page" }}
      <div class="archive-entry">
        <h3 class="archive-entry-title entry-hint-parent">
          {{- .Title | markdownify }}
          {{- if .Draft }}
          <span class="entry-hint" title="Draft">
            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" fill="currentColor">
              <path
                d="M160-410v-60h300v60H160Zm0-165v-60h470v60H160Zm0-165v-60h470v60H160Zm360 580v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T862.09-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
            </svg>
          </span>
          {{- end }}
        </h3>
        <div class="archive-meta">
          {{- partial "post_meta.html" . -}}
        </div>
        <a class="entry-link" aria-label="post link to {{ .Title | plainify }}" href="{{ .Permalink }}"></a>
      </div>
      {{- end }}
      {{- end }}
    </div>
  </div>
  {{- end }}
</div>
{{- end }}
{{- end }}

{{- end }}{{/* end main */}}
````

## File: themes/PaperMod/layouts/_default/baseof.html
````html
{{- if lt hugo.Version "0.146.0" }}
{{- errorf "=> hugo v0.146.0 or greater is required for hugo-PaperMod to build " }}
{{- end -}}

<!DOCTYPE html>
<html lang="{{ site.Language }}" dir="{{ .Language.LanguageDirection | default "auto" }}">

<head>
    {{- partial "head.html" . }}
</head>

<body class="
{{- if (or (ne .Kind `page` ) (eq .Layout `archives`) (eq .Layout `search`)) -}}
{{- print "list" -}}
{{- end -}}
{{- if eq site.Params.defaultTheme `dark` -}}
{{- print " dark" }}
{{- end -}}
" id="top">
    {{- partialCached "header.html" . .Page -}}
    <main class="main">
        {{- block "main" . }}{{ end }}
    </main>
    {{ partialCached "footer.html" . .Layout .Kind (.Param "hideFooter") (.Param "ShowCodeCopyButtons") -}}
</body>

</html>
````

## File: themes/PaperMod/layouts/_default/index.json
````json
{{- $.Scratch.Add "index" slice -}}
{{- range site.RegularPages -}}
    {{- if and (not .Params.searchHidden) (ne .Layout `archives`) (ne .Layout `search`) }}
    {{- $.Scratch.Add "index" (dict "title" .Title "content" .Plain "permalink" .Permalink "summary" .Summary) -}}
    {{- end }}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}
````

## File: themes/PaperMod/layouts/_default/list.html
````html
{{- define "main" }}

{{- if (and site.Params.profileMode.enabled .IsHome) }}
{{- partial "index_profile.html" . }}
{{- else }} {{/* if not profileMode */}}

{{- if not .IsHome | and .Title }}
<header class="page-header">
  {{- partial "breadcrumbs.html" . }}
  <h1>
    {{ .Title }}
    {{- if and (or (eq .Kind `term`) (eq .Kind `section`)) (.Param "ShowRssButtonInSectionTermList") }}
    {{- with .OutputFormats.Get "rss" }}
    <a href="{{ .RelPermalink }}" title="RSS" aria-label="RSS">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" height="23">
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </svg>
    </a>
    {{- end }}
    {{- end }}
  </h1>
  {{- if .Description }}
  <div class="post-description">
    {{ .Description | markdownify }}
  </div>
  {{- end }}
</header>
{{- end }}

{{- if .Content }}
<div class="post-content">
  {{- if not (.Param "disableAnchoredHeadings") }}
  {{- partial "anchored_headings.html" .Content -}}
  {{- else }}{{ .Content }}{{ end }}
</div>
{{- end }}

{{- $pages := union .RegularPages .Sections }}

{{- if .IsHome }}
{{- $pages = where site.RegularPages "Type" "in" site.Params.mainSections }}
{{- $pages = where $pages "Params.hiddenInHomeList" "!=" "true"  }}
{{- end }}

{{- $paginator := .Paginate $pages }}

{{- if and .IsHome site.Params.homeInfoParams (eq $paginator.PageNumber 1) }}
{{- partial "home_info.html" . }}
{{- end }}

{{- $term := .Data.Term }}
{{- range $index, $page := $paginator.Pages }}

{{- $class := "post-entry" }}

{{- $user_preferred := or site.Params.disableSpecial1stPost site.Params.homeInfoParams }}
{{- if (and $.IsHome (eq $paginator.PageNumber 1) (eq $index 0) (not $user_preferred)) }}
{{- $class = "first-entry" }}
{{- else if $term }}
{{- $class = "post-entry tag-entry" }}
{{- end }}

<article class="{{ $class }}">
  {{- $isHidden := (.Param "cover.hiddenInList") | default (.Param "cover.hidden") | default false }}
  {{- partial "cover.html" (dict "cxt" . "IsSingle" false "isHidden" $isHidden) }}
  <header class="entry-header">
    <h2 class="entry-hint-parent">
      {{- .Title }}
      {{- if .Draft }}
      <span class="entry-hint" title="Draft">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" fill="currentColor">
          <path
            d="M160-410v-60h300v60H160Zm0-165v-60h470v60H160Zm0-165v-60h470v60H160Zm360 580v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T862.09-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
        </svg>
      </span>
      {{- end }}
    </h2>
  </header>
  {{- if (ne (.Param "hideSummary") true) }}
  <div class="entry-content">
    <p>{{ .Summary | plainify | htmlUnescape }}{{ if .Truncated }}...{{ end }}</p>
  </div>
  {{- end }}
  {{- if not (.Param "hideMeta") }}
  <footer class="entry-footer">
    {{- partial "post_meta.html" . -}}
  </footer>
  {{- end }}
  <a class="entry-link" aria-label="post link to {{ .Title | plainify }}" href="{{ .Permalink }}"></a>
</article>
{{- end }}

{{- if gt $paginator.TotalPages 1 }}
<footer class="page-footer">
  <nav class="pagination">
    {{- if $paginator.HasPrev }}
    <a class="prev" href="{{ $paginator.Prev.URL | absURL }}">
      «&nbsp;{{ i18n "prev_page" }}&nbsp;
      {{- if (.Param "ShowPageNums") }}
      {{- sub $paginator.PageNumber 1 }}/{{ $paginator.TotalPages }}
      {{- end }}
    </a>
    {{- end }}
    {{- if $paginator.HasNext }}
    <a class="next" href="{{ $paginator.Next.URL | absURL }}">
      {{- i18n "next_page" }}&nbsp;
      {{- if (.Param "ShowPageNums") }}
      {{- add 1 $paginator.PageNumber }}/{{ $paginator.TotalPages }}
      {{- end }}&nbsp;»
    </a>
    {{- end }}
  </nav>
</footer>
{{- end }}

{{- end }}{{/* end profileMode */}}

{{- end }}{{- /* end main */ -}}
````

## File: themes/PaperMod/layouts/_default/rss.xml
````xml
{{- /* Deprecate site.Author.email in favor of site.Params.author.email */}}
{{- $authorEmail := "" }}
{{- with site.Params.author }}
  {{- if reflect.IsMap . }}
    {{- with .email }}
      {{- $authorEmail = . }}
    {{- end }}
  {{- end }}
{{- else }}
  {{- with site.Author.email }}
    {{- $authorEmail = . }}
    {{- warnf "The author key in site configuration is deprecated. Use params.author.email instead." }}
  {{- end }}
{{- end }}

{{- /* Deprecate site.Author.name in favor of site.Params.author.name */}}
{{- $authorName := "" }}
{{- with site.Params.author }}
  {{- if reflect.IsMap . }}
    {{- with .name }}
      {{- $authorName = . }}
    {{- end }}
  {{- else }}
    {{- $authorName  = . }}
  {{- end }}
{{- else }}
  {{- with site.Author.name }}
    {{- $authorName = . }}
    {{- warnf "The author key in site configuration is deprecated. Use params.author.name instead." }}
  {{- end }}
{{- end }}

{{- $pctx := . }}
{{- if .IsHome }}{{ $pctx = site }}{{ end }}
{{- $pages := slice }}
{{- if or $.IsHome $.IsSection }}
{{- $pages = $pctx.RegularPages }}
{{- else }}
{{- $pages = $pctx.Pages }}
{{- end }}
{{- $limit := site.Config.Services.RSS.Limit }}
{{- if ge $limit 1 }}
{{- $pages = $pages | first $limit }}
{{- end }}
{{- printf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>" | safeHTML }}
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>{{ if eq .Title site.Title }}{{ site.Title }}{{ else }}{{ with .Title }}{{ . }} on {{ end }}{{ site.Title }}{{ end }}</title>
    <link>{{ .Permalink }}</link>
    <description>Recent content {{ if ne .Title site.Title }}{{ with .Title }}in {{ . }} {{ end }}{{ end }}on {{ site.Title }}</description>
    {{- with site.Params.images }}
    <image>
      <title>{{ site.Title }}</title>
      <url>{{ index . 0 | absURL }}</url>
      <link>{{ index . 0 | absURL }}</link>
    </image>
    {{- end }}
    <generator>Hugo -- {{ hugo.Version }}</generator>
    <language>{{ site.Language.LanguageCode }}</language>{{ with $authorEmail }}
    <managingEditor>{{.}}{{ with $authorName }} ({{ . }}){{ end }}</managingEditor>{{ end }}{{ with $authorEmail }}
    <webMaster>{{ . }}{{ with $authorName }} ({{ . }}){{ end }}</webMaster>{{ end }}{{ with site.Copyright }}
    <copyright>{{ . | markdownify | plainify | strings.TrimPrefix "© " }}</copyright>{{ end }}{{ if not .Date.IsZero }}
    <lastBuildDate>{{ (index $pages.ByLastmod.Reverse 0).Lastmod.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</lastBuildDate>{{ end }}
    {{- with .OutputFormats.Get "RSS" }}
    {{ printf "<atom:link href=%q rel=\"self\" type=%q />" .Permalink .MediaType | safeHTML }}
    {{- end }}
    {{- range $pages }}
    {{- if and (ne .Layout `search`) (ne .Layout `archives`) }}
    <item>
      <title>{{ .Title }}</title>
      <link>{{ .Permalink }}</link>
      <pubDate>{{ .PublishDate.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</pubDate>
      {{- with $authorEmail }}<author>{{ . }}{{ with $authorName }} ({{ . }}){{ end }}</author>{{ end }}
      <guid>{{ .Permalink }}</guid>
      <description>{{ with .Description | html }}{{ . }}{{ else }}{{ .Summary | html }}{{ end -}}</description>
      {{- if and site.Params.ShowFullTextinRSS .Content }}
      <content:encoded>{{ (printf "<![CDATA[%s]]>" .Content) | safeHTML }}</content:encoded>
      {{- end }}
    </item>
    {{- end }}
    {{- end }}
  </channel>
</rss>
````

## File: themes/PaperMod/layouts/_default/search.html
````html
{{- define "main" }}

<header class="page-header">
    <h1>{{- (printf "%s&nbsp;" .Title ) | htmlUnescape -}}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    </h1>
    {{- if .Description }}
    <div class="post-description">
        {{ .Description }}
    </div>
    {{- end }}
    {{- if not (.Param "hideMeta") }}
    <div class="post-meta">
        {{- partial "translation_list.html" . -}}
    </div>
    {{- end }}
</header>

<div id="searchbox">
    <input id="searchInput" autofocus placeholder="{{ .Params.placeholder | default (printf "%s ↵" .Title) }}"
        aria-label="search" type="search" autocomplete="off" maxlength="64">
    <ul id="searchResults" aria-label="search results"></ul>
</div>

{{- end }}{{/* end main */}}
````

## File: themes/PaperMod/layouts/_default/single.html
````html
{{- define "main" }}

<article class="post-single">
  <header class="post-header">
    {{ partial "breadcrumbs.html" . }}
    <h1 class="post-title entry-hint-parent">
      {{ .Title }}
      {{- if .Draft }}
      <span class="entry-hint" title="Draft">
        <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" fill="currentColor">
          <path
            d="M160-410v-60h300v60H160Zm0-165v-60h470v60H160Zm0-165v-60h470v60H160Zm360 580v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T862.09-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
        </svg>
      </span>
      {{- end }}
    </h1>
    {{- if .Description }}
    <div class="post-description">
      {{ .Description }}
    </div>
    {{- end }}
    {{- if not (.Param "hideMeta") }}
    <div class="post-meta">
      {{- partial "post_meta.html" . -}}
      {{- partial "translation_list.html" . -}}
      {{- partial "edit_post.html" . -}}
      {{- partial "post_canonical.html" . -}}
    </div>
    {{- end }}
  </header>
  {{- $isHidden := (.Param "cover.hiddenInSingle") | default (.Param "cover.hidden") | default false }}
  {{- partial "cover.html" (dict "cxt" . "IsSingle" true "isHidden" $isHidden) }}
  {{- if (.Param "ShowToc") }}
  {{- partial "toc.html" . }}
  {{- end }}

  {{- if .Content }}
  <div class="post-content">
    {{- if not (.Param "disableAnchoredHeadings") }}
    {{- partial "anchored_headings.html" .Content -}}
    {{- else }}{{ .Content }}{{ end }}
  </div>
  {{- end }}

  <footer class="post-footer">
    {{- $tags := .Language.Params.Taxonomies.tag | default "tags" }}
    <ul class="post-tags">
      {{- range ($.GetTerms $tags) }}
      <li><a href="{{ .Permalink }}">{{ .LinkTitle }}</a></li>
      {{- end }}
    </ul>
    {{- if (.Param "ShowPostNavLinks") }}
    {{- partial "post_nav_links.html" . }}
    {{- end }}
    {{- if (and site.Params.ShowShareButtons (ne .Params.disableShare true)) }}
    {{- partial "share_icons.html" . -}}
    {{- end }}
  </footer>

  {{- if (.Param "comments") }}
  {{- partial "comments.html" . }}
  {{- end }}
</article>

{{- end }}{{/* end main */}}
````

## File: themes/PaperMod/layouts/_default/terms.html
````html
{{- define "main" }}

{{- if .Title }}
<header class="page-header">
    <h1>{{ .Title }}</h1>
    {{- if .Description }}
    <div class="post-description">
        {{ .Description }}
    </div>
    {{- end }}
</header>
{{- end }}

<ul class="terms-tags">
    {{- $type := .Type }}
    {{- range $key, $value := .Data.Terms.Alphabetical }}
    {{- $name := .Name }}
    {{- $count := .Count }}
    {{- with site.GetPage (printf "/%s/%s" $type $name) }}
    <li>
        <a href="{{ .Permalink }}">{{ .Name }} <sup><strong><sup>{{ $count }}</sup></strong></sup> </a>
    </li>
    {{- end }}
    {{- end }}
</ul>

{{- end }}{{/* end main */ -}}
````

## File: themes/PaperMod/layouts/partials/templates/_funcs/get-page-images.html
````html
{{- $imgs := slice }}
{{- $imgParams := .Params.images }}
{{- $resources := .Resources.ByType "image" -}}
{{/* Find featured image resources if the images parameter is empty. */}}
{{- if not $imgParams }}
  {{- $featured := $resources.GetMatch "*feature*" -}}
  {{- if not $featured }}{{ $featured = $resources.GetMatch "{*cover*,*thumbnail*}" }}{{ end -}}
  {{- with $featured }}
    {{- $imgs = $imgs | append (dict
      "Image" .
      "RelPermalink" .RelPermalink
      "Permalink" .Permalink) }}
  {{- end }}
{{- end }}
{{/* Use the first one of site images as the fallback. */}}
{{- if and (not $imgParams) (not $imgs) }}
  {{- with site.Params.images }}
    {{- $imgParams = first 1 . }}
  {{- end }}
{{- end }}
{{/* Parse page's images parameter. */}}
{{- range $imgParams }}
  {{- $img := . }}
  {{- $url := urls.Parse $img }}
  {{- if eq $url.Scheme "" }}
    {{/* Internal image. */}}
    {{- with $resources.GetMatch $img -}}
      {{/* Image resource. */}}
      {{- $imgs = $imgs | append (dict
        "Image" .
        "RelPermalink" .RelPermalink
        "Permalink" .Permalink) }}
    {{- else }}
      {{- $imgs = $imgs | append (dict
        "RelPermalink" (relURL $img)
        "Permalink" (absURL $img)
      ) }}
    {{- end }}
  {{- else }}
    {{/* External image */}}
    {{- $imgs = $imgs | append (dict
      "RelPermalink" $img
      "Permalink" $img
    ) }}
  {{- end }}
{{- end }}
{{- return $imgs }}
````

## File: themes/PaperMod/layouts/partials/templates/opengraph.html
````html
<meta property="og:url" content="{{ .Permalink }}">

{{- with or site.Title site.Params.title | plainify }}
  <meta property="og:site_name" content="{{ . }}">
{{- end }}

{{- with or .Title site.Title site.Params.title | plainify }}
  <meta property="og:title" content="{{ . }}">
{{- end }}

{{- with or .Description .Summary site.Params.description | plainify | htmlUnescape | chomp }}
  <meta property="og:description" content="{{ . }}">
{{- end }}

{{- with or .Params.locale site.Language.LanguageCode site.Language.Lang }}
  <meta property="og:locale" content="{{ . }}">
{{- end }}

{{- if .IsPage }}
  <meta property="og:type" content="article">
  {{- with .Section }}
    <meta property="article:section" content="{{ . }}">
  {{- end }}
  {{- $ISO8601 := "2006-01-02T15:04:05-07:00" }}
  {{- with .PublishDate }}
    <meta property="article:published_time" {{ .Format $ISO8601 | printf "content=%q" | safeHTMLAttr }}>
  {{- end }}
  {{- with .Lastmod }}
    <meta property="article:modified_time" {{ .Format $ISO8601 | printf "content=%q" | safeHTMLAttr }}>
  {{- end }}
  {{- range .GetTerms "tags" | first 6 }}
    <meta property="article:tag" content="{{ .Page.Title | plainify }}">
  {{- end }}
{{- else }}
  <meta property="og:type" content="website">
{{- end }}

{{- if .Params.cover.image -}}
  {{- if (ne .Params.cover.relative true) }}
    <meta property="og:image" content="{{ .Params.cover.image | absURL }}">
  {{- else}}
    <meta property="og:image" content="{{ (path.Join .RelPermalink .Params.cover.image ) | absURL }}">
  {{- end}}
{{- else }}
  {{- with partial "_funcs/get-page-images" . }}
    {{- range . | first 6 }}
      <meta property="og:image" content="{{ .Permalink }}">
    {{- end }}
  {{- end }}
{{- end }}

{{- with .Params.audio }}
  {{- range . | first 6  }}
    <meta property="og:audio" content="{{ . | absURL }}">
  {{- end }}
{{- end }}

{{- with .Params.videos }}
  {{- range . | first 6 }}
    <meta property="og:video" content="{{ . | absURL }}">
  {{- end }}
{{- end }}

{{- range .GetTerms "series" }}
  {{- range .Pages | first 7 }}
    {{- if ne $ . }}
      <meta property="og:see_also" content="{{ .Permalink }}">
    {{- end }}
  {{- end }}
{{- end }}

{{- with site.Params.social }}
  {{- if reflect.IsMap . }}
    {{- with .facebook_app_id }}
      <meta property="fb:app_id" content="{{ . }}">
    {{- else }}
      {{- with .facebook_admin }}
        <meta property="fb:admins" content="{{ . }}">
      {{- end }}
    {{- end }}
  {{- end }}
{{- end }}

{{- with (.Param "social.fediverse_creator") }}
  <meta name="fediverse:creator" content="{{ . }}">
{{- end }}
````

## File: themes/PaperMod/layouts/partials/templates/schema_json.html
````html
{{ if .IsHome }}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{{- ( site.Params.schema.publisherType | default "Organization") | title -}}",
  "name": {{ site.Title }},
  "url": {{ site.Home.Permalink }},
  "description": {{ site.Params.description | plainify | truncate 180 | safeHTML }},
  {{- if (eq site.Params.schema.publisherType "Person") }}
  "image": {{ site.Params.assets.favicon | default "favicon.ico" | absURL }},
  {{- else }}
  "logo": {{ site.Params.assets.favicon | default "favicon.ico" | absURL }},
  {{- end }}
  "sameAs": [
    {{- if site.Params.schema.sameAs }}
      {{ range $i, $e := site.Params.schema.sameAs }}{{ if $i }}, {{ end }}{{ trim $e " " }}{{ end }}
    {{- else}}
      {{ range $i, $e := site.Params.SocialIcons }}{{ if $i }}, {{ end }}{{ trim $e.url " " | safeURL }}{{ end }}
    {{- end}}
  ]
}
</script>
{{- else if (or .IsPage .IsSection) }}
{{/* BreadcrumbList */}}
{{- $url := replace .Parent.Permalink ( printf "%s" site.Home.Permalink) "" }}
{{- $lang_url := strings.TrimPrefix ( printf "%s/" .Lang) $url }}
{{- $bc_list := (split $lang_url "/")}}

{{- $scratch := newScratch }}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
  {{- range $index, $element := $bc_list }}

    {{- $scratch.Add "path" (printf "%s/" $element ) | safeJS }}
    {{- $bc_pg := site.GetPage ($scratch.Get "path") -}}

    {{- if (and ($bc_pg) (gt (len . ) 0))}}
    {{- if (and $index)}}, {{end }}
    {
      "@type": "ListItem",
      "position": {{ add 1 $index  }},
      "name": {{ $bc_pg.Name }},
      "item": {{ $bc_pg.Permalink | safeHTML }}
    }
    {{- end }}

  {{- end }}
  {{- /*  self-page addition  */ -}}
  {{- if (ge (len $bc_list) 2) }}, {{end }}
    {
      "@type": "ListItem",
      "position": {{len $bc_list}},
      "name": {{ .Name }},
      "item": {{ .Permalink | safeHTML }}
    }
  ]
}
</script>
{{- if .IsPage }}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": {{ .Title | plainify}},
  "name": "{{ .Title | plainify }}",
  "description": {{ with .Description | plainify }}{{ . }}{{ else }}{{ .Summary | plainify  }}{{ end -}},
  "keywords": [
    {{- if .Params.keywords }}
    {{ range $i, $e := .Params.keywords }}{{ if $i }}, {{ end }}{{ $e }}{{ end }}
    {{- else }}
    {{ range $i, $e := .Params.tags }}{{ if $i }}, {{ end }}{{ $e }}{{ end }}
    {{- end }}
  ],
  "articleBody": {{ .Content | safeJS | htmlUnescape | plainify }},
  "wordCount" : "{{ .WordCount }}",
  "inLanguage": {{ .Language.Lang | default "en-us" }},
  {{ if .Params.cover.image -}}
  "image":
    {{- if (ne .Params.cover.relative true) -}}
    {{ .Params.cover.image | absURL }},
    {{- else -}}
    {{ (path.Join .RelPermalink .Params.cover.image ) | absURL }},
    {{- end}}
  {{- else }}
    {{- $images := partial "templates/_funcs/get-page-images" . -}}
    {{- with index $images 0 -}}
  "image": {{ .Permalink }},
    {{- end }}
  {{- end -}}
  "datePublished": {{ .PublishDate }},
  "dateModified": {{ .Lastmod }},
  {{- with (.Params.author | default site.Params.author) }}
  "author":
    {{- if (or (eq (printf "%T" .) "[]string") (eq (printf "%T" .) "[]interface {}")) -}}
  [{{- range $i, $v := . -}}
  {{- if $i }}, {{end -}}
  {
    "@type": "Person",
    "name": {{ $v }}
  }
  {{- end }}],
    {{- else -}}
  {
    "@type": "Person",
    "name": {{ . }}
  },
    {{- end -}}
  {{- end }}
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": {{ .Permalink | safeHTML }}
  },
  "publisher": {
    "@type": "{{- ( site.Params.schema.publisherType | default "Organization") | title -}}",
    "name": {{ site.Title }},
    "logo": {
      "@type": "ImageObject",
      "url": {{ site.Params.assets.favicon | default "favicon.ico" | absURL }}
    }
  }
}
</script>
{{- end }}{{/* .IsPage end */}}

{{- end -}}
````

## File: themes/PaperMod/layouts/partials/templates/twitter_cards.html
````html
{{- if .Params.cover.image -}}
<meta name="twitter:card" content="summary_large_image">
{{- if (ne $.Params.cover.relative true) }}
<meta name="twitter:image" content="{{ .Params.cover.image | absURL }}">
{{- else }}
<meta name="twitter:image" content="{{ (path.Join .RelPermalink .Params.cover.image ) | absURL }}">
{{- end}}
{{- else }}
{{- $images := partial "templates/_funcs/get-page-images" . -}}
{{- with index $images 0 -}}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{{ .Permalink }}">
{{- else -}}
<meta name="twitter:card" content="summary">
{{- end -}}
{{- end }}
<meta name="twitter:title" content="{{ .Title }}">
<meta name="twitter:description" content="{{ with .Description }}{{ . }}{{ else }}{{if .IsPage}}{{ .Summary }}{{ else }}{{ with site.Params.description }}{{ . }}{{ end }}{{ end }}{{ end -}}">

{{- $twitterSite := "" }}
{{- with site.Params.social }}
  {{- if reflect.IsMap . }}
    {{- with .twitter }}
      {{- $content := . }}
      {{- if not (strings.HasPrefix . "@") }}
        {{- $content = printf "@%v" . }}
      {{- end }}
      <meta name="twitter:site" content="{{ $content }}">
    {{- end }}
  {{- end }}
{{- end }}
````

## File: themes/PaperMod/layouts/partials/anchored_headings.html
````html
{{- /* formats .Content headings by adding an anchor */ -}}
{{ . | replaceRE "(<h[1-6] id=\"([^\"]+)\".+)(</h[1-6]+>)" "${1}<a hidden class=\"anchor\" aria-hidden=\"true\" href=\"#${2}\">#</a>${3}" | safeHTML }}
````

## File: themes/PaperMod/layouts/partials/author.html
````html
{{- if or .Params.author site.Params.author }}
{{- $author := (.Params.author | default site.Params.author) }}
{{- $author_type := (printf "%T" $author) }}
{{- if (or (eq $author_type "[]string") (eq $author_type "[]interface {}")) }}
{{- (delimit $author ", " ) }}
{{- else }}
{{- $author }}
{{- end }}
{{- end -}}
````

## File: themes/PaperMod/layouts/partials/breadcrumbs.html
````html
{{- if (.Param "ShowBreadCrumbs") -}}
<div class="breadcrumbs">
    {{- $url := replace .Parent.Permalink (printf "%s" site.Home.Permalink) "" }}
    {{- $lang_url := strings.TrimPrefix (printf "%s/" .Lang) $url -}}

    <a href="{{ "" | absLangURL }}">{{ i18n "home" | default "Home" }}</a>
    {{- $scratch := newScratch }}
    {{- range $index, $element := split $lang_url "/" }}

    {{- $scratch.Add "path" (printf "%s/" $element )}}
    {{- $bc_pg := site.GetPage ($scratch.Get "path") -}}

    {{- if (and ($bc_pg) (gt (len . ) 0))}}
    {{- print "&nbsp;»&nbsp;" | safeHTML -}}<a href="{{ $bc_pg.Permalink }}">{{ $bc_pg.Name }}</a>
    {{- end }}

    {{- end -}}
</div>
{{- end -}}
````

## File: themes/PaperMod/layouts/partials/comments.html
````html
{{- /* Comments area start */ -}}
{{- /* to add comments read => https://gohugo.io/content-management/comments/ */ -}}
{{- /* Comments area end */ -}}
````

## File: themes/PaperMod/layouts/partials/cover.html
````html
{{- with .cxt}} {{/* Apply proper context from dict */}}
{{- if (and .Params.cover.image (not $.isHidden)) }}
<figure class="entry-cover">
    {{- $loading := cond $.IsSingle "eager" "lazy" }}
    {{- $addLink := (and site.Params.cover.linkFullImages $.IsSingle) }}
    {{- $prod := (hugo.IsProduction | or (eq site.Params.env "production")) }}
    {{- $alt := (.Params.cover.alt | default .Params.cover.caption | plainify) }}
    {{- $responsiveImages := (.Params.cover.responsiveImages | default site.Params.cover.responsiveImages) | default true }}

    {{- $pageBundleCover := (.Resources.ByType "image").GetMatch (printf "*%s*" (.Params.cover.image)) }}
    {{- $globalResourcesCover := (resources.ByType "image").GetMatch (printf "*%s*" (.Params.cover.image)) }}
    {{- $cover := (or $pageBundleCover $globalResourcesCover)}}
    {{- /* We are not using the .Param.cover.relative to decide the location of image */}}
    {{- /* If we have the image in pageBundle or globalResources we can process the image */}}

    {{- $sizes := (slice "360" "480" "720" "1080" "1500") }}
    {{- $processableFormats := (slice "jpg" "jpeg" "png" "tif" "bmp" "gif") -}}
    {{- if hugo.IsExtended -}}
        {{- $processableFormats = $processableFormats | append "webp" -}}
    {{- end -}}

    {{- $imgdl := (.Params.cover.image) | absURL }}
    {{- if $cover -}}
        {{- $imgdl = $cover.Permalink }}
    {{- end -}}

    {{- if $addLink }}
        <a href="{{ $imgdl }}" target="_blank" rel="noopener noreferrer">
    {{- end }}

    {{- if $cover -}}
        {{/* i.e it is present in page bundle */}}
        {{- if (and (in $processableFormats $cover.MediaType.SubType) ($responsiveImages) (eq $prod true)) }}
            <img loading="{{$loading}}"
                srcset='{{- range $size := $sizes -}}
                            {{- if (ge $cover.Width $size) }}
                                {{- printf "%s %s" (($cover.Resize (printf "%sx" $size)).Permalink) (printf "%sw," $size) }}
                            {{- end }}
                        {{- end }}
                        {{- printf "%s %dw" ($cover.Permalink) ($cover.Width) }}'
                src="{{ $cover.Permalink }}"
                sizes="(min-width: 768px) 720px, 100vw"
                width="{{ $cover.Width }}" height="{{ $cover.Height }}"
                alt="{{ $alt }}">
        {{- else }}{{/* Unprocessable image or responsive images disabled */}}
            <img loading="{{ $loading }}" src="{{ $imgdl }}" alt="{{ $alt }}">
        {{- end }}
    {{- else }}
        {{- /* For absolute urls and external links, no img processing here */}}
        <img loading="{{ $loading }}" src="{{ $imgdl }}" alt="{{ $alt }}">
    {{- end }}

    {{- if $addLink }}
        </a>
    {{- end -}}

    {{- /*  Display Caption  */}}
    {{- if $.IsSingle }}
        {{ with .Params.cover.caption -}}
            <figcaption>{{ . | markdownify }}</figcaption>
        {{- end }}
    {{- end }}
</figure>
{{- end }}{{/* End image */}}
{{- end -}}{{/* End context */ -}}
````

## File: themes/PaperMod/layouts/partials/edit_post.html
````html
{{- if and (or .Params.editPost.URL site.Params.editPost.URL) (not (.Param "editPost.disabled")) -}}
{{- $fileUrlPath := path.Join .File.Path }}

{{- if or .Params.author site.Params.author (.Param "ShowReadingTime") (not .Date.IsZero) .IsTranslated }}&nbsp;|&nbsp;{{- end -}}
<a href="{{ .Params.editPost.URL | default site.Params.editPost.URL }}{{ if .Params.editPost.appendFilePath | default ( site.Params.editPost.appendFilePath | default false ) }}/{{ $fileUrlPath }}{{ end }}" rel="noopener noreferrer edit" target="_blank">
    {{- .Params.editPost.Text | default (site.Params.editPost.Text | default (i18n "edit_post" | default "Edit")) -}}
</a>
{{- end }}
````

## File: themes/PaperMod/layouts/partials/extend_footer.html
````html
{{- /* Footer custom content area start */ -}}
{{- /*     Insert any custom code web-analytics, resources, etc. here */ -}}
{{- /* Footer custom content area end */ -}}
````

## File: themes/PaperMod/layouts/partials/extend_head.html
````html
{{- /* Head custom content area start */ -}}
{{- /*     Insert any custom code (web-analytics, resources, etc.) - it will appear in the <head></head> section of every page. */ -}}
{{- /*     Can be overwritten by partial with the same name in the global layouts. */ -}}
{{- /* Head custom content area end */ -}}
````

## File: themes/PaperMod/layouts/partials/footer.html
````html
{{- if not (.Param "hideFooter") }}
<footer class="footer">
    {{- if not site.Params.footer.hideCopyright }}
        {{- if site.Copyright }}
        <span>{{ site.Copyright | markdownify }}</span>
        {{- else }}
        <span>&copy; {{ now.Year }} <a href="{{ "" | absLangURL }}">{{ site.Title }}</a></span>
        {{- end }}
        {{- print " · "}}
    {{- end }}

    {{- with site.Params.footer.text }}
        {{ . | markdownify }}
        {{- print " · "}}
    {{- end }}

    <span>
        Powered by
        <a href="https://gohugo.io/" rel="noopener noreferrer" target="_blank">Hugo</a> &
        <a href="https://github.com/adityatelange/hugo-PaperMod/" rel="noopener" target="_blank">PaperMod</a>
    </span>
</footer>
{{- end }}

{{- if (not site.Params.disableScrollToTop) }}
<a href="#top" aria-label="go to top" title="Go to Top (Alt + G)" class="top-link" id="top-link" accesskey="g">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" fill="currentColor">
        <path d="M12 6H0l6-6z" />
    </svg>
</a>
{{- end }}

{{- partial "extend_footer.html" . }}

<script>
    let menu = document.getElementById('menu')
    if (menu) {
        menu.scrollLeft = localStorage.getItem("menu-scroll-position");
        menu.onscroll = function () {
            localStorage.setItem("menu-scroll-position", menu.scrollLeft);
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            var id = this.getAttribute("href").substr(1);
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView();
            }
            if (id === "top") {
                history.replaceState(null, null, " ");
            } else {
                history.pushState(null, null, `#${id}`);
            }
        });
    });

</script>

{{- if (not site.Params.disableScrollToTop) }}
<script>
    var mybutton = document.getElementById("top-link");
    window.onscroll = function () {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            mybutton.style.visibility = "visible";
            mybutton.style.opacity = "1";
        } else {
            mybutton.style.visibility = "hidden";
            mybutton.style.opacity = "0";
        }
    };

</script>
{{- end }}

{{- if (not site.Params.disableThemeToggle) }}
<script>
    document.getElementById("theme-toggle").addEventListener("click", () => {
        if (document.body.className.includes("dark")) {
            document.body.classList.remove('dark');
            localStorage.setItem("pref-theme", 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem("pref-theme", 'dark');
        }
    })

</script>
{{- end }}

{{- if (and (eq .Kind "page") (ne .Layout "archives") (ne .Layout "search") (.Param "ShowCodeCopyButtons")) }}
<script>
    document.querySelectorAll('pre > code').forEach((codeblock) => {
        const container = codeblock.parentNode.parentNode;

        const copybutton = document.createElement('button');
        copybutton.classList.add('copy-code');
        copybutton.innerHTML = '{{- i18n "code_copy" | default "copy" }}';

        function copyingDone() {
            copybutton.innerHTML = '{{- i18n "code_copied" | default "copied!" }}';
            setTimeout(() => {
                copybutton.innerHTML = '{{- i18n "code_copy" | default "copy" }}';
            }, 2000);
        }

        copybutton.addEventListener('click', (cb) => {
            if ('clipboard' in navigator) {
                navigator.clipboard.writeText(codeblock.textContent);
                copyingDone();
                return;
            }

            const range = document.createRange();
            range.selectNodeContents(codeblock);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            try {
                document.execCommand('copy');
                copyingDone();
            } catch (e) { };
            selection.removeRange(range);
        });

        if (container.classList.contains("highlight")) {
            container.appendChild(copybutton);
        } else if (container.parentNode.firstChild == container) {
            // td containing LineNos
        } else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "TABLE") {
            // table containing LineNos and code
            codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(copybutton);
        } else {
            // code blocks not having highlight as parent class
            codeblock.parentNode.appendChild(copybutton);
        }
    });
</script>
{{- end }}
````

## File: themes/PaperMod/layouts/partials/head.html
````html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{{- if hugo.IsProduction | or (eq site.Params.env "production") | and (ne .Params.robotsNoIndex true) }}
<meta name="robots" content="index, follow">
{{- else }}
<meta name="robots" content="noindex, nofollow">
{{- end }}

{{- /* Title */}}
<title>{{ if .IsHome }}{{ else }}{{ if .Title }}{{ .Title }} | {{ end }}{{ end }}{{ site.Title }}</title>

{{- /* Meta */}}
{{- if .IsHome }}
{{ with site.Params.keywords -}}<meta name="keywords" content="{{- range $i, $e := . }}{{ if $i }}, {{ end }}{{ $e }}{{ end }}">{{ end }}
{{- else }}
<meta name="keywords" content="{{ if .Params.keywords -}}
    {{- range $i, $e := .Params.keywords }}{{ if $i }}, {{ end }}{{ $e }}{{ end }} {{- else }}
    {{- range $i, $e := .Params.tags }}{{ if $i }}, {{ end }}{{ $e }}{{ end }} {{- end -}}">
{{- end }}
<meta name="description" content="{{- with .Description }}{{ . }}{{- else }}{{- if or .IsPage .IsSection}}
    {{- .Summary | default (printf "%s - %s" .Title  site.Title) }}{{- else }}
    {{- with site.Params.description }}{{ . }}{{- end }}{{- end }}{{- end -}}">
<meta name="author" content="{{ (partial "author.html" . ) }}">
<link rel="canonical" href="{{ if .Params.canonicalURL -}} {{ trim .Params.canonicalURL " " }} {{- else -}} {{ .Permalink }} {{- end }}">
{{- if site.Params.analytics.google.SiteVerificationTag }}
<meta name="google-site-verification" content="{{ site.Params.analytics.google.SiteVerificationTag }}">
{{- end }}
{{- if site.Params.analytics.yandex.SiteVerificationTag }}
<meta name="yandex-verification" content="{{ site.Params.analytics.yandex.SiteVerificationTag }}">
{{- end }}
{{- if site.Params.analytics.bing.SiteVerificationTag }}
<meta name="msvalidate.01" content="{{ site.Params.analytics.bing.SiteVerificationTag }}">
{{- end }}
{{- if site.Params.analytics.naver.SiteVerificationTag }}
<meta name="naver-site-verification" content="{{ site.Params.analytics.naver.SiteVerificationTag }}">
{{- end }}

{{- /* Styles */}}

{{- /* includes */}}
{{- $includes := slice }}
{{- $includes = $includes | append (" " | resources.FromString "assets/css/includes-blank.css")}}

{{- if not (eq site.Params.assets.disableScrollBarStyle true) }}
    {{- $ScrollStyle := (resources.Get "css/includes/scroll-bar.css") }}
    {{- $includes = (append $ScrollStyle $includes) }}
{{- end }}

{{- $includes_all := $includes | resources.Concat "assets/css/includes.css" }}

{{- $theme_vars := (resources.Get "css/core/theme-vars.css") }}
{{- $reset := (resources.Get "css/core/reset.css") }}
{{- $media := (resources.Get "css/core/zmedia.css") }}
{{- $license_css := (resources.Get "css/core/license.css") }}
{{- $common := (resources.Match "css/common/*.css") | resources.Concat "assets/css/common.css" }}

{{- /* markup.highlight.noClasses should be set to `false` */}}
{{- $chroma_styles := (resources.Get "css/includes/chroma-styles.css") }}
{{- $chroma_mod := (resources.Get "css/includes/chroma-mod.css") }}

{{- /* order is important */}}
{{- $core := (slice $theme_vars $reset $common $chroma_styles $chroma_mod $includes_all $media) | resources.Concat "assets/css/core.css" | resources.Minify }}
{{- $extended := (resources.Match "css/extended/*.css") | resources.Concat "assets/css/extended.css" | resources.Minify }}

{{- /* bundle all required css */}}
{{- /* Add extended css after theme style */ -}}
{{- $stylesheet := (slice $license_css $core $extended) | resources.Concat "assets/css/stylesheet.css"  }}

{{- if not site.Params.assets.disableFingerprinting }}
{{- $stylesheet := $stylesheet | fingerprint }}
<link crossorigin="anonymous" href="{{ $stylesheet.RelPermalink }}" integrity="{{ $stylesheet.Data.Integrity }}" rel="preload stylesheet" as="style">
{{- else }}
<link crossorigin="anonymous" href="{{ $stylesheet.RelPermalink }}" rel="preload stylesheet" as="style">
{{- end }}

{{- /* Search */}}
{{- if (eq .Layout `search`) -}}
<link crossorigin="anonymous" rel="preload" as="fetch" href="../index.json">
{{- $fastsearch := resources.Get "js/fastsearch.js" | js.Build (dict "params" (dict "fuseOpts" site.Params.fuseOpts)) | resources.Minify }}
{{- $fusejs := resources.Get "js/fuse.basic.min.js" }}
{{- $license_js := resources.Get "js/license.js" }}
{{- if not site.Params.assets.disableFingerprinting }}
{{- $search := (slice $fusejs $license_js $fastsearch ) | resources.Concat "assets/js/search.js" | fingerprint }}
<script defer crossorigin="anonymous" src="{{ $search.RelPermalink }}" integrity="{{ $search.Data.Integrity }}"></script>
{{- else }}
{{- $search := (slice $fusejs $fastsearch ) | resources.Concat "assets/js/search.js" }}
<script defer crossorigin="anonymous" src="{{ $search.RelPermalink }}"></script>
{{- end }}
{{- end -}}

{{- /* Favicons */}}
<link rel="icon" href="{{ site.Params.assets.favicon | default "favicon.ico" | absURL }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ site.Params.assets.favicon16x16 | default "favicon-16x16.png" | absURL }}">
<link rel="icon" type="image/png" sizes="32x32" href="{{ site.Params.assets.favicon32x32 | default "favicon-32x32.png" | absURL }}">
<link rel="apple-touch-icon" href="{{ site.Params.assets.apple_touch_icon | default "apple-touch-icon.png" | absURL }}">
<link rel="mask-icon" href="{{ site.Params.assets.safari_pinned_tab | default "safari-pinned-tab.svg" | absURL }}">
<meta name="theme-color" content="{{ site.Params.assets.theme_color | default "#2e2e33" }}">
<meta name="msapplication-TileColor" content="{{ site.Params.assets.msapplication_TileColor | default "#2e2e33" }}">

{{- /* RSS */}}
{{ range .AlternativeOutputFormats -}}
<link rel="{{ .Rel }}" type="{{ .MediaType.Type | html }}" href="{{ .Permalink | safeURL }}">
{{ end -}}
{{- range .AllTranslations -}}
<link rel="alternate" hreflang="{{ .Lang }}" href="{{ .Permalink }}">
{{ end -}}

<noscript>
    <style>
        #theme-toggle,
        .top-link {
            display: none;
        }

    </style>
    {{- if (and (ne site.Params.defaultTheme "light") (ne site.Params.defaultTheme "dark")) }}
    <style>
        @media (prefers-color-scheme: dark) {
            :root {
                --theme: rgb(29, 30, 32);
                --entry: rgb(46, 46, 51);
                --primary: rgb(218, 218, 219);
                --secondary: rgb(155, 156, 157);
                --tertiary: rgb(65, 66, 68);
                --content: rgb(196, 196, 197);
                --code-block-bg: rgb(46, 46, 51);
                --code-bg: rgb(55, 56, 62);
                --border: rgb(51, 51, 51);
            }

            .list {
                background: var(--theme);
            }

            .list:not(.dark)::-webkit-scrollbar-track {
                background: 0 0;
            }

            .list:not(.dark)::-webkit-scrollbar-thumb {
                border-color: var(--theme);
            }
        }

    </style>
    {{- end }}
</noscript>

{{- partial "extend_head.html" . -}}

{{- /* Misc */}}
{{- if hugo.IsProduction | or (eq site.Params.env "production") }}
{{- partial "google_analytics.html" . }}
{{- partial "templates/opengraph.html" . }}
{{- partial "templates/twitter_cards.html" . }}
{{- partial "templates/schema_json.html" . }}
{{- end -}}
````

## File: themes/PaperMod/layouts/partials/header.html
````html
{{- /* theme-toggle is enabled */}}
{{- if (not site.Params.disableThemeToggle) }}
{{- /* theme is light */}}
{{- if (eq site.Params.defaultTheme "light") }}
<script>
    if (localStorage.getItem("pref-theme") === "dark") {
        document.body.classList.add('dark');
    }

</script>
{{- /* theme is dark */}}
{{- else if (eq site.Params.defaultTheme "dark") }}
<script>
    if (localStorage.getItem("pref-theme") === "light") {
        document.body.classList.remove('dark')
    }

</script>
{{- else }}
{{- /* theme is auto */}}
<script>
    if (localStorage.getItem("pref-theme") === "dark") {
        document.body.classList.add('dark');
    } else if (localStorage.getItem("pref-theme") === "light") {
        document.body.classList.remove('dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
    }

</script>
{{- end }}
{{- /* theme-toggle is disabled and theme is auto */}}
{{- else if (and (ne site.Params.defaultTheme "light") (ne site.Params.defaultTheme "dark"))}}
<script>
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
    }

</script>
{{- end }}

<header class="header">
    <nav class="nav">
        <div class="logo">
            {{- $label_text := (site.Params.label.text | default site.Title) }}
            {{- if site.Title }}
            <a href="{{ "" | absLangURL }}" accesskey="h" title="{{ $label_text }} (Alt + H)">
                {{- if site.Params.label.icon }}
                {{- $img := resources.Get site.Params.label.icon }}
                {{- if $img }}
                    {{- $processableFormats := (slice "jpg" "jpeg" "png" "tif" "bmp" "gif") -}}
                    {{- if hugo.IsExtended -}}
                        {{- $processableFormats = $processableFormats | append "webp" -}}
                    {{- end -}}
                    {{- $prod := (hugo.IsProduction | or (eq site.Params.env "production")) }}
                    {{- if and (in $processableFormats $img.MediaType.SubType) (eq $prod true)}}
                        {{- if site.Params.label.iconHeight }}
                            {{- $img = $img.Resize (printf "x%d" site.Params.label.iconHeight) }}
                        {{ else }}
                            {{- $img = $img.Resize "x30" }}
                        {{- end }}
                    {{- end }}
                    <img src="{{ $img.Permalink }}" alt="" aria-label="logo"
                        height="{{- site.Params.label.iconHeight | default "30" -}}">
                {{- else }}
                <img src="{{- site.Params.label.icon | absURL -}}" alt="" aria-label="logo"
                    height="{{- site.Params.label.iconHeight | default "30" -}}">
                {{- end -}}
                {{- else if hasPrefix site.Params.label.iconSVG "<svg" }}
                    {{ site.Params.label.iconSVG | safeHTML }}
                {{- end -}}
                {{- $label_text -}}
            </a>
            {{- end }}
            <div class="logo-switches">
                {{- if (not site.Params.disableThemeToggle) }}
                <button id="theme-toggle" accesskey="t" title="(Alt + T)" aria-label="Toggle theme">
                    <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                    <svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                </button>
                {{- end }}

                {{- $lang := .Lang}}
                {{- $separator := or $label_text (not site.Params.disableThemeToggle)}}
                {{- with site.Home.Translations }}
                <ul class="lang-switch">
                    {{- if $separator }}<li>|</li>{{ end }}
                    {{- range . -}}
                    {{- if ne $lang .Lang }}
                    <li>
                        <a href="{{- .Permalink -}}" title="{{ .Language.Params.languageAltTitle | default (.Language.LanguageName | emojify) | default (.Lang | title) }}"
                            aria-label="{{ .Language.LanguageName | default (.Lang | title) }}">
                            {{- if (and site.Params.displayFullLangName (.Language.LanguageName)) }}
                            {{- .Language.LanguageName | emojify -}}
                            {{- else }}
                            {{- .Lang | title -}}
                            {{- end -}}
                        </a>
                    </li>
                    {{- end -}}
                    {{- end}}
                </ul>
                {{- end }}
            </div>
        </div>
        {{- $currentPage := . }}
        <ul id="menu">
            {{- range site.Menus.main }}
            {{- $menu_item_url := (cond (strings.HasSuffix .URL "/") .URL (printf "%s/" .URL) ) | absLangURL }}
            {{- $page_url:= $currentPage.Permalink | absLangURL }}
            {{- $is_search := eq (site.GetPage .KeyName).Layout `search` }}
            <li>
                <a href="{{ .URL | absLangURL }}" title="{{ .Title | default .Name }} {{- cond $is_search (" (Alt + /)" | safeHTMLAttr) ("" | safeHTMLAttr ) }}"
                {{- cond $is_search (" accesskey=/" | safeHTMLAttr) ("" | safeHTMLAttr ) }}>
                    <span {{- if eq $menu_item_url $page_url }} class="active" {{- end }}>
                        {{- .Pre }}
                        {{- .Name -}}
                        {{ .Post -}}
                    </span>
                    {{- if (findRE "://" .URL) }}&nbsp;
                    <svg fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" height="12" width="12">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                    </svg>
                    {{- end }}
                </a>
            </li>
            {{- end }}
        </ul>
    </nav>
</header>
````

## File: themes/PaperMod/layouts/partials/home_info.html
````html
{{- with site.Params.homeInfoParams }}
<article class="first-entry home-info">
    <header class="entry-header">
        <h1>{{ .Title | markdownify }}</h1>
    </header>
    <div class="entry-content">
        {{ .Content | markdownify }}
    </div>
    <footer class="entry-footer">
        {{ partial "social_icons.html" (dict "align" site.Params.homeInfoParams.AlignSocialIconsTo) }}
    </footer>
</article>
{{- end -}}
````

## File: themes/PaperMod/layouts/partials/index_profile.html
````html
<div class="profile">
    {{- with site.Params.profileMode }}
    <div class="profile_inner">
        {{- if .imageUrl -}}
        {{- $img := "" }}
        {{- if not (urls.Parse .imageUrl).IsAbs }}
            {{- $img = resources.Get .imageUrl }}
        {{- end }}
        {{- if $img }}
            {{- $processableFormats := (slice "jpg" "jpeg" "png" "tif" "bmp" "gif") -}}
            {{- if hugo.IsExtended -}}
                {{- $processableFormats = $processableFormats | append "webp" -}}
            {{- end -}}
            {{- $prod := (hugo.IsProduction | or (eq site.Params.env "production")) }}
            {{- if and (in $processableFormats $img.MediaType.SubType) (eq $prod true)}}
                {{- if (not (and (not .imageHeight) (not .imageWidth))) }}
                    {{- $img = $img.Resize (printf "%dx%d" .imageWidth .imageHeight) }}
                {{- else if .imageHeight }}
                    {{- $img = $img.Resize (printf "x%d" .imageHeight) }}
                {{ else if .imageWidth }}
                    {{- $img = $img.Resize (printf "%dx" .imageWidth) }}
                {{ else }}
                    {{- $img = $img.Resize "150x150" }}
                {{- end }}
            {{- end }}
            <img draggable="false" src="{{ $img.Permalink }}" alt="{{ .imageTitle | default "profile image" }}" title="{{ .imageTitle }}"
                height="{{ .imageHeight | default 150 }}" width="{{ .imageWidth | default 150 }}" />
        {{- else }}
        <img draggable="false" src="{{ .imageUrl | absURL }}" alt="{{ .imageTitle | default "profile image" }}" title="{{ .imageTitle }}"
            height="{{ .imageHeight | default 150 }}" width="{{ .imageWidth | default 150 }}" />
        {{- end }}
        {{- end }}
        <h1>{{ .title | default site.Title | markdownify }}</h1>
        <span>{{ .subtitle | markdownify }}</span>
        {{- partial "social_icons.html" -}}

        {{- with .buttons }}
        <div class="buttons">
            {{- range . }}
            <a class="button" href="{{ trim .url " " }}" rel="noopener" title="{{ .name }}">
                <span class="button-inner">
                    {{ .name }}
                    {{- if (findRE "://" .url) }}&nbsp;
                    <svg fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" height="14" width="14">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                    </svg>
                    {{- end }}
                </span>
            </a>
            {{- end }}
        </div>
        {{- end }}
    </div>
    {{- end}}
</div>
````

## File: themes/PaperMod/layouts/partials/post_canonical.html
````html
{{ if and (.Params.canonicalURL) (.Params.ShowCanonicalLink ) -}}
{{ $url := urls.Parse .Params.canonicalURL }}

{{- if or .Params.author site.Params.author (.Param "ShowReadingTime") (not .Date.IsZero) .IsTranslated (or .Params.editPost.URL site.Params.editPost.URL) }}&nbsp;|&nbsp;{{- end -}}
<span>
    {{- (site.Params.CanonicalLinkText | default .Params.CanonicalLinkText) | default "Originally published at" -}}
    &nbsp;<a href="{{ trim .Params.canonicalURL " " }}" title="{{ trim .Params.canonicalURL " " }}" target="_blank" rel="noopener noreferrer">{{ $url.Host }}</a>
</span>
{{- end }}
````

## File: themes/PaperMod/layouts/partials/post_meta.html
````html
{{- $scratch := newScratch }}

{{- if not .Date.IsZero -}}
{{- $scratch.Add "meta" (slice (printf "<span title='%s'>%s</span>" (.Date) (.Date | time.Format (default "January 2, 2006" site.Params.DateFormat)))) }}
{{- end }}

{{- if (.Param "ShowReadingTime") -}}
{{- $scratch.Add "meta" (slice (i18n "read_time" .ReadingTime | default (printf "%d min" .ReadingTime))) }}
{{- end }}

{{- if (.Param "ShowWordCount") -}}
{{- $scratch.Add "meta" (slice (i18n "words" .WordCount | default (printf "%d words" .WordCount))) }}
{{- end }}

{{- if not (.Param "hideAuthor") -}}
{{- with (partial "author.html" .) }}
{{- $scratch.Add "meta" (slice .) }}
{{- end }}
{{- end }}

{{- with ($scratch.Get "meta") }}
{{- delimit . "&nbsp;·&nbsp;" | safeHTML -}}
{{- end -}}
````

## File: themes/PaperMod/layouts/partials/post_nav_links.html
````html
{{- $pages := where site.RegularPages "Type" "in" site.Params.mainSections }}
{{- if and (gt (len $pages) 1) (in $pages . ) }}
<nav class="paginav">
  {{- with $pages.Next . }}
  <a class="prev" href="{{ .Permalink }}">
    <span class="title">« {{ i18n "prev_page" }}</span>
    <br>
    <span>{{- .Name -}}</span>
  </a>
  {{- end }}
  {{- with $pages.Prev . }}
  <a class="next" href="{{ .Permalink }}">
    <span class="title">{{ i18n "next_page" }} »</span>
    <br>
    <span>{{- .Name -}}</span>
  </a>
  {{- end }}
</nav>
{{- end }}
````

## File: themes/PaperMod/layouts/partials/share_icons.html
````html
{{- $pageurl := .Permalink }}
{{- $title := .Title }}

{{- $.Scratch.Set "tags" ""}}

{{- with .Params.Tags }}
{{- $hashtags := newScratch}}
{{- range . }}{{ $hashtags.Add "tags" (slice (replaceRE "(\\s)" "" . ))}}{{end}}
{{- $.Scratch.Set "tags" (delimit ($hashtags.Get "tags") ",") }}
{{- end -}}

{{- $custom := false }}
{{- $ShareButtons := (.Param "ShareButtons")}}
{{- with $ShareButtons }}{{ $custom = true }}{{ end }}

<ul class="share-buttons">
    {{- if (or (cond ($custom) (in $ShareButtons "x") (true)) (cond ($custom) (in $ShareButtons "twitter") (true))) }}
    <li>
        <a target="_blank" rel="noopener noreferrer" aria-label="share {{ $title | plainify }} on x"
            href="https://x.com/intent/tweet/?text={{ $title }}&amp;url={{ $pageurl }}&amp;hashtags={{- $.Scratch.Get "tags" -}}">
            <svg version="1.1" viewBox="0 0 512 512" xml:space="preserve" height="30px" width="30px" fill="currentColor">
                <path
                    d="M512 62.554 L 512 449.446 C 512 483.97 483.97 512 449.446 512 L 62.554 512 C 28.03 512 0 483.97 0 449.446 L 0 62.554 C 0 28.03 28.029 0 62.554 0 L 449.446 0 C 483.971 0 512 28.03 512 62.554 Z M 269.951 190.75 L 182.567 75.216 L 56 75.216 L 207.216 272.95 L 63.9 436.783 L 125.266 436.783 L 235.9 310.383 L 332.567 436.783 L 456 436.783 L 298.367 228.367 L 432.367 75.216 L 371.033 75.216 Z M 127.633 110 L 164.101 110 L 383.481 400.065 L 349.5 400.065 Z" />
            </svg>
        </a>
    </li>
    {{- end }}
    {{- if (cond ($custom) (in $ShareButtons "linkedin") (true)) }}
    <li>
        <a target="_blank" rel="noopener noreferrer" aria-label="share {{ $title | plainify }} on linkedin"
            href="https://www.linkedin.com/shareArticle?mini=true&amp;url={{ $pageurl }}&amp;title={{ $title }}&amp;summary={{ $title }}&amp;source={{ $pageurl }}">
            <svg version="1.1" viewBox="0 0 512 512" xml:space="preserve" height="30px" width="30px" fill="currentColor">
                <path
                    d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z" />
            </svg>
        </a>
    </li>
    {{- end }}
    {{- if (cond ($custom) (in $ShareButtons "reddit") (true)) }}
    <li>
        <a target="_blank" rel="noopener noreferrer" aria-label="share {{ $title | plainify }} on reddit"
            href="https://reddit.com/submit?url={{ $pageurl }}&title={{ $title }}">
            <svg version="1.1" viewBox="0 0 512 512" xml:space="preserve" height="30px" width="30px" fill="currentColor">
                <path
                    d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-3.446,265.638c0,-22.964 -18.616,-41.58 -41.58,-41.58c-11.211,0 -21.361,4.457 -28.841,11.666c-28.424,-20.508 -67.586,-33.757 -111.204,-35.278l18.941,-89.121l61.884,13.157c0.756,15.734 13.642,28.29 29.56,28.29c16.407,0 29.706,-13.299 29.706,-29.701c0,-16.403 -13.299,-29.702 -29.706,-29.702c-11.666,0 -21.657,6.792 -26.515,16.578l-69.105,-14.69c-1.922,-0.418 -3.939,-0.042 -5.585,1.036c-1.658,1.073 -2.811,2.761 -3.224,4.686l-21.152,99.438c-44.258,1.228 -84.046,14.494 -112.837,35.232c-7.468,-7.164 -17.589,-11.591 -28.757,-11.591c-22.965,0 -41.585,18.616 -41.585,41.58c0,16.896 10.095,31.41 24.568,37.918c-0.639,4.135 -0.99,8.328 -0.99,12.576c0,63.977 74.469,115.836 166.33,115.836c91.861,0 166.334,-51.859 166.334,-115.836c0,-4.218 -0.347,-8.387 -0.977,-12.493c14.564,-6.47 24.735,-21.034 24.735,-38.001Zm-119.474,108.193c-20.27,20.241 -59.115,21.816 -70.534,21.816c-11.428,0 -50.277,-1.575 -70.522,-21.82c-3.007,-3.008 -3.007,-7.882 0,-10.889c3.003,-2.999 7.882,-3.003 10.885,0c12.777,12.781 40.11,17.317 59.637,17.317c19.522,0 46.86,-4.536 59.657,-17.321c3.016,-2.999 7.886,-2.995 10.885,0.008c3.008,3.011 3.003,7.882 -0.008,10.889Zm-5.23,-48.781c-16.373,0 -29.701,-13.324 -29.701,-29.698c0,-16.381 13.328,-29.714 29.701,-29.714c16.378,0 29.706,13.333 29.706,29.714c0,16.374 -13.328,29.698 -29.706,29.698Zm-160.386,-29.702c0,-16.381 13.328,-29.71 29.714,-29.71c16.369,0 29.689,13.329 29.689,29.71c0,16.373 -13.32,29.693 -29.689,29.693c-16.386,0 -29.714,-13.32 -29.714,-29.693Z" />
            </svg>
        </a>
    </li>
    {{- end }}
    {{- if (cond ($custom) (in $ShareButtons "facebook") (true)) }}
    <li>
        <a target="_blank" rel="noopener noreferrer" aria-label="share {{ $title | plainify }} on facebook"
            href="https://facebook.com/sharer/sharer.php?u={{ $pageurl }}">
            <svg version="1.1" viewBox="0 0 512 512" xml:space="preserve" height="30px" width="30px" fill="currentColor">
                <path
                    d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" />
            </svg>
        </a>
    </li>
    {{- end }}
    {{- if (cond ($custom) (in $ShareButtons "whatsapp") (true)) }}
    <li>
        <a target="_blank" rel="noopener noreferrer" aria-label="share {{ $title | plainify }} on whatsapp"
            href="https://api.whatsapp.com/send?text={{ $title }}%20-%20{{ $pageurl }}">
            <svg version="1.1" viewBox="0 0 512 512" xml:space="preserve" height="30px" width="30px" fill="currentColor">
                <path
                    d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-58.673,127.703c-33.842,-33.881 -78.847,-52.548 -126.798,-52.568c-98.799,0 -179.21,80.405 -179.249,179.234c-0.013,31.593 8.241,62.428 23.927,89.612l-25.429,92.884l95.021,-24.925c26.181,14.28 55.659,21.807 85.658,21.816l0.074,0c98.789,0 179.206,-80.413 179.247,-179.243c0.018,-47.895 -18.61,-92.93 -52.451,-126.81Zm-126.797,275.782l-0.06,0c-26.734,-0.01 -52.954,-7.193 -75.828,-20.767l-5.441,-3.229l-56.386,14.792l15.05,-54.977l-3.542,-5.637c-14.913,-23.72 -22.791,-51.136 -22.779,-79.287c0.033,-82.142 66.867,-148.971 149.046,-148.971c39.793,0.014 77.199,15.531 105.329,43.692c28.128,28.16 43.609,65.592 43.594,105.4c-0.034,82.149 -66.866,148.983 -148.983,148.984Zm81.721,-111.581c-4.479,-2.242 -26.499,-13.075 -30.604,-14.571c-4.105,-1.495 -7.091,-2.241 -10.077,2.241c-2.986,4.483 -11.569,14.572 -14.182,17.562c-2.612,2.988 -5.225,3.364 -9.703,1.12c-4.479,-2.241 -18.91,-6.97 -36.017,-22.23c-13.314,-11.876 -22.304,-26.542 -24.916,-31.026c-2.612,-4.484 -0.279,-6.908 1.963,-9.14c2.016,-2.007 4.48,-5.232 6.719,-7.847c2.24,-2.615 2.986,-4.484 4.479,-7.472c1.493,-2.99 0.747,-5.604 -0.374,-7.846c-1.119,-2.241 -10.077,-24.288 -13.809,-33.256c-3.635,-8.733 -7.327,-7.55 -10.077,-7.688c-2.609,-0.13 -5.598,-0.158 -8.583,-0.158c-2.986,0 -7.839,1.121 -11.944,5.604c-4.105,4.484 -15.675,15.32 -15.675,37.364c0,22.046 16.048,43.342 18.287,46.332c2.24,2.99 31.582,48.227 76.511,67.627c10.685,4.615 19.028,7.371 25.533,9.434c10.728,3.41 20.492,2.929 28.209,1.775c8.605,-1.285 26.499,-10.833 30.231,-21.295c3.732,-10.464 3.732,-19.431 2.612,-21.298c-1.119,-1.869 -4.105,-2.99 -8.583,-5.232Z" />
            </svg>
        </a>
    </li>
    {{- end }}
    {{- if (cond ($custom) (in $ShareButtons "telegram") (true)) }}
    <li>
        <a target="_blank" rel="noopener noreferrer" aria-label="share {{ $title | plainify }} on telegram"
            href="https://telegram.me/share/url?text={{ $title }}&amp;url={{ $pageurl }}">
            <svg version="1.1" xml:space="preserve" viewBox="2 2 28 28" height="30px" width="30px" fill="currentColor">
                <path
                    d="M26.49,29.86H5.5a3.37,3.37,0,0,1-2.47-1,3.35,3.35,0,0,1-1-2.47V5.48A3.36,3.36,0,0,1,3,3,3.37,3.37,0,0,1,5.5,2h21A3.38,3.38,0,0,1,29,3a3.36,3.36,0,0,1,1,2.46V26.37a3.35,3.35,0,0,1-1,2.47A3.38,3.38,0,0,1,26.49,29.86Zm-5.38-6.71a.79.79,0,0,0,.85-.66L24.73,9.24a.55.55,0,0,0-.18-.46.62.62,0,0,0-.41-.17q-.08,0-16.53,6.11a.59.59,0,0,0-.41.59.57.57,0,0,0,.43.52l4,1.24,1.61,4.83a.62.62,0,0,0,.63.43.56.56,0,0,0,.4-.17L16.54,20l4.09,3A.9.9,0,0,0,21.11,23.15ZM13.8,20.71l-1.21-4q8.72-5.55,8.78-5.55c.15,0,.23,0,.23.16a.18.18,0,0,1,0,.06s-2.51,2.3-7.52,6.8Z" />
            </svg>
        </a>
    </li>
    {{- end }}
    {{- if (cond ($custom) (in $ShareButtons "ycombinator") (true)) }}
    <li>
        <a target="_blank" rel="noopener noreferrer" aria-label="share {{ $title | plainify }} on ycombinator"
            href="https://news.ycombinator.com/submitlink?t={{ $title }}&u={{ $pageurl }}">
            <svg version="1.1" xml:space="preserve" width="30px" height="30px" viewBox="0 0 512 512" fill="currentColor"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape">
                <path
                    d="M449.446 0C483.971 0 512 28.03 512 62.554L512 449.446C512 483.97 483.97 512 449.446 512L62.554 512C28.03 512 0 483.97 0 449.446L0 62.554C0 28.03 28.029 0 62.554 0L449.446 0ZM183.8767 87.9921H121.8427L230.6673 292.4508V424.0079H281.3328V292.4508L390.1575 87.9921H328.1233L256 238.2489z" />
            </svg>
        </a>
    </li>
    {{- end }}
</ul>
````

## File: themes/PaperMod/layouts/partials/social_icons.html
````html
<div class="social-icons" {{ with .align}}align="{{.}}" {{- end }}>
    {{- range site.Params.socialIcons }}
    <a href="{{ trim .url " " | safeURL }}" target="_blank" rel="noopener noreferrer me"
        title="{{ (.title | default .name) | title }}">
        {{ partial "svg.html" . }}
    </a>
    {{- end }}
</div>
````

## File: themes/PaperMod/layouts/partials/svg.html
````html
{{- $icon_name := ( trim .name " " | lower )}}
{{- if (eq $icon_name "123rf") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path style="font-variation-settings:normal"
        d="M7.48 3.826c-.702 0-1.345.388-1.675 1.008l-.711 1.334a4.214 4.214 0 0 1-1.614 1.67l-.388.224a2.207 2.207 0 0 0-1.104 1.913v8.607c0 .878.712 1.592 1.59 1.592h1.186c.468 0 .916-.19 1.244-.524l1.478-1.504c.266-.27.628-.421 1.006-.421h7.04c.378 0 .74.151 1.005.421l1.478 1.504c.329.334.778.524 1.247.524h1.183c.879 0 1.592-.714 1.592-1.592V9.975c0-.79-.422-1.518-1.106-1.912l-.388-.225a4.214 4.214 0 0 1-1.613-1.67l-.711-1.334a1.899 1.899 0 0 0-1.676-1.008z"
        stroke-linejoin="miter" />
    <circle cx="12" cy="12.467" r="2.723" />
</svg>
{{- else if (eq $icon_name "500px") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M7.451 8.9995A3.0005 3.0005 0 1 0 10.4514 12a3.0275 3.0275 0 0 0-3.0006-3.0005Zm0 5.371A2.3554 2.3554 0 1 1 9.7912 12a2.3704 2.3704 0 0 1-2.3404 2.3704Zm6.448-5.371A3.0005 3.0005 0 1 0 16.8997 12a3.0005 3.0005 0 0 0-3.0005-3.0005Zm0 5.371A2.3554 2.3554 0 1 1 16.2396 12a2.3314 2.3314 0 0 1-2.3404 2.3704zM2.29 10.7997a2.0224 2.0224 0 0 0-1.5903.42V9.6297h2.7005c.09 0 .15-.03.15-.3 0-.2701-.12-.2701-.18-.2701H.3997a.27.27 0 0 0-.27.27V11.97c0 .15.09.18.24.21a.228.228 0 0 0 .27-.06A1.7073 1.7073 0 0 1 2.14 11.4 1.5603 1.5603 0 0 1 3.4902 12.72 1.5183 1.5183 0 0 1 2.17 14.4004h-.18a1.5303 1.5303 0 0 1-1.4103-.9901c-.03-.09-.09-.15-.33-.06-.2401.09-.2701.15-.2401.24a2.1274 2.1274 0 0 0 2.7005 1.2602A2.1274 2.1274 0 0 0 3.9703 12.15 2.1004 2.1004 0 0 0 2.29 10.7998zm16.65-1.7703a1.6263 1.6263 0 0 0-1.4403 1.6203v2.6704c0 .15.12.18.3.18s.3001-.03.3001-.18v-2.6704a1.0082 1.0082 0 0 1 .8702-1.0202.9872.9872 0 0 1 .7501.24.9572.9572 0 0 1 .33.7202 1.2002 1.2002 0 0 1-.21.57A.9452.9452 0 0 1 19 11.55c-.12 0-.21 0-.24.27 0 .1801 0 .2701.15.3001a1.4763 1.4763 0 0 0 .8701-.18 1.6113 1.6113 0 0 0 .8702-1.2602 1.5543 1.5543 0 0 0-1.4463-1.6803.8311.8311 0 0 1-.264.03zm3.9307 1.5602 1.0802-1.0801c.03-.03.12-.12-.06-.3301a.3.3 0 0 0-.2101-.12.156.156 0 0 0-.12.06l-1.0802 1.0802-1.0802-1.1102c-.09-.09-.18-.06-.33.06-.15.12-.15.24-.06.33l1.0801 1.0802-1.0862 1.1102a.228.228 0 0 0-.06.12.252.252 0 0 0 .12.2101.483.483 0 0 0 .21.12.318.318 0 0 0 .1501-.06l1.0802-1.0802 1.0802 1.0802a.156.156 0 0 0 .12.06.3.3 0 0 0 .21-.12c.09-.12.12-.24.03-.3z" />
</svg>
{{- else if (eq $icon_name "adobestock") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path style="font-variation-settings:normal" d="M2.235 2.235h19.53v19.53H2.235z" />
    <path style="font-variation-settings:normal"
        d="M6.165 16.659s3.16 1.2 4.602-.17c1.37-1.3.787-3.163-.754-4.05-1.68-.969-3.284-1.788-3.036-3.536.446-3.138 4.386-1.851 4.386-1.851M15.792 7.794v7.774c0 1.023.635 1.766 2.043 1.624M17.826 10.04h-3.582" />
</svg>
{{- else if (eq $icon_name "anilist") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 25 28" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path style="font-variation-settings:normal"
        d="M6.361 2.943 0 21.056h4.942l1.077-3.133H11.4l1.052 3.133H22.9c.71 0 1.1-.392 1.1-1.101V17.53c0-.71-.39-1.101-1.1-1.101h-6.483V4.045c0-.71-.392-1.102-1.101-1.102h-2.422c-.71 0-1.101.392-1.101 1.102v1.064l-.758-2.166zm2.324 5.948 1.688 5.018H7.144z" />
</svg>
{{- else if or (eq $icon_name "ao3") (eq $icon_name "archiveofourown") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" stroke-width="1.6" stroke="currentColor" fill="none"
    stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 5c7.109 4.1 10.956 10.131 12 14c1.074 -4.67 4.49 -8.94 8 -11" />
    <path d="M14 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 9c-.278 5.494 -2.337 7.33 -4 10c4.013 -2 6.02 -5 15.05 -5c4.012 0 3.51 2.5 1 3c2 .5 2.508 5 -2.007 2" />
</svg>
{{- else if (eq $icon_name "applemusic") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z" />
</svg>
{{- else if (eq $icon_name "applepodcasts") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z" />
</svg>
{{- else if (eq $icon_name "bandcamp") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
</svg>
{{- else if (eq $icon_name "behance") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path paint-order="stroke fill markers" stroke-linejoin="miter" stroke-width="2"
        style="font-variation-settings:normal"
        d="M1.774 18.063V5.466h5.51c1.978 0 3.116 1.326 3.055 2.806-.043 1.049-.711 2.988-2.643 2.988h-5.93H7.73c1.224 0 3.532 1.13 3.532 3.532 0 2.4-1.873 3.27-3.318 3.27zm12.57-4.459h7.89s.012-4.18-4.167-4.18c-5.237 0-5.277 9.11-.3 9.11 3.06 0 3.935-1.806 3.935-1.806M15.526 5.823h4.987" />
</svg>
{{- else if (eq $icon_name "bilibili") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round">
    <rect x="1.3333" y="6" width="21.333" height="15.333" rx="4" ry="4" />
    <path d="m8 12.4v1.2" />
    <path d="m16 12.4v1.2" />
    <path d="m5.8853 2.6667 2.6667 2.6667" />
    <path d="m18.115 2.6667-2.6667 2.6667" />
</svg>
{{- else if (eq $icon_name "bitcoin") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
</svg>
{{- else if (eq $icon_name "bluesky") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-25 0 400 320" fill="none" stroke="currentColor" stroke-width="30">
    <path
        d="M180 141.964C163.699 110.262 119.308 51.1817 78.0347 22.044C38.4971 -5.86834 23.414 -1.03207 13.526 3.43594C2.08093 8.60755 0 26.1785 0 36.5164C0 46.8542 5.66748 121.272 9.36416 133.694C21.5786 174.738 65.0603 188.607 105.104 184.156C107.151 183.852 109.227 183.572 111.329 183.312C109.267 183.642 107.19 183.924 105.104 184.156C46.4204 192.847 -5.69621 214.233 62.6582 290.33C137.848 368.18 165.705 273.637 180 225.702C194.295 273.637 210.76 364.771 295.995 290.33C360 225.702 313.58 192.85 254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158C294.94 188.61 338.421 174.74 350.636 133.697C354.333 121.275 360 46.8568 360 36.519C360 26.1811 357.919 8.61012 346.474 3.43851C336.586 -1.02949 321.503 -5.86576 281.965 22.0466C240.692 51.1843 196.301 110.262 180 141.964Z" />
</svg>
{{- else if (eq $icon_name "bookwyrm") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path 
        d="m8.3359 0.0078125c-2.0069 0.073882-3.9461 1.339-5.1719 3.1055-1.2258 1.7665-1.686 4.04-0.90234 6.2734 0.7201 2.0524 2.301 3.6839 4.377 4.3066l-0.40234 2.5547c-0.61924-0.29743-1.2854-0.52634-1.9707-0.55078-1.0699-0.03816-2.6915 0.27366-3.707 2.0703-0.69877 1.2362-0.81095 2.9826 0.10555 4.4707 0.61159 0.99303 1.7053 1.9179 4.2929 1.4745 1.4845-0.25433 2.2237-1.3456 2.9082-2.9727 0.37179-0.88378 0.65101-2.0921 1.1895-2.8398 0.73644-1.0227 2.285-1.5902 3.2578-1.6113-0.93782-0.45256-3.7855-1.1922-5.584 1.8008-0.48715 0.8107-1.0605 2.4179-1.9609 2.9531-0.2998 0.1782-0.76718 0.0994-1.0781-0.13477-0.20088-0.15128-0.95922-1.0342-0.16016-1.9395 0.21799-0.24696 0.54865-0.3631 0.93555-0.33398 0.26333 0.01982 0.55734 0.12268 0.88477 0.35352 0.21582-0.44651 0.44063-0.88851 0.68359-1.3204 0.19226-0.34173 0.49358-0.75049 0.88086-1.1426l0.87305-5.3652c-0.24381 0.10022-0.52508 0.15616-0.76367 0.18559-0.41295 0.05094-0.81717 0.02605-1.1895-0.08789-0.48449-0.14828-0.99894-0.41785-1.2695-0.93554-0.086172-0.16486-0.024184-0.37016 0.13477-0.4668 0.17373-0.10562 0.37573-0.028092 0.5 0.13281 0.41046 0.53144 1.1723 0.85969 2.0879 0.58794 1.2598-0.3318 2.1585-0.89477 2.7973-0.94823 0.62644-0.052424 0.9395 0.63646 1.1998 1.2859 0.08927-0.40702 0.33679-1.217 1-0.30078 0.020069-0.7907 0.48358-0.94364 0.93945-0.37895-1.2259-2.9496-3.6999-1.7628-5.0589-1.4148-0.63799 0.1634-1.8432 0.2286-2.5441-1.5549-0.19205-1.9238 0.832-3.0815 1.9497-3.6181 1.11-0.5329 2.4759-0.33316 3.4043 0.23242-0.36121 0.71072-0.96917 0.66041-1.7031 0.73633 0.97044 0.57933 1.6654 0.51691 2.4707 0.23438 0.05017 0.64643-0.27301 0.94594-0.66797 1.4023 1.1363 0.014693 1.7281-0.12865 1.9199-0.2207-0.06996-0.12068-0.13737-0.24477-0.20117-0.375-0.15114-0.30851-0.20068-1.0047-0.10742-1.7402 0.2535 0.25256 0.66781 0.50633 1.0586 0.54492-0.13923-0.55326 0.04953-1.4041 0.36523-1.9453 0.17929 0.22031 0.65534 0.48341 1.0664 0.51758-0.03367-0.13937-0.01471-0.38143 0.01758-0.63672-0.9214-0.25345-1.2388-0.43896-1.8164-0.75195-0.73954-0.40078-3.2824-1.7015-5.041-1.6367zm11.457 1.4355-0.50391 1.0195c-0.6186-0.30447-1.3497 0.099697-1.4238 0.78516 0 0-1.575-0.59615-1.7793-1.3223-0.25838 0.42041-0.34228 1.2928-0.10156 1.9375-0.25368 0.056883-1.3427-0.18224-1.5254-0.42578-0.17662 0.4343-0.06096 1.5935 0.38086 1.9824-0.70463-0.029033-1.2107-0.10404-1.6016-0.47266 0.05528 0.65482 1.1567 2.5058 3.0605 2.4473 1.8859-0.057961 5.3416-2.0444 5.1172 0.77734l0.76367-0.91406 0.44922 1.082 0.12891-1.502 0.62891 0.10352-0.01563-0.86719c-1.0878 0.21766-2.216 0.15404-3.2715-0.1875 0 0 0.81541-1.2247 3.2109-0.62695 0 0 1.0704-0.18142 0.54492-1.0547-0.52548-0.87327-1.0156 0.42383-1.0156 0.42383-0.45143-0.28472-0.85656-0.63336-1.291-0.94336-0.79444-0.56687-1.4356-1.3204-1.7559-2.2422zm-0.8418 1.2695c0.75216-0.00879 1.4355 0.46302 1.7031 1.166 0.04186 0.10996 0.15236 0.15844 0.26758 0.13477 0.1635-0.033594 0.32277 0.073435 0.36719 0.23438 0.04852 0.17581-0.05737 0.35656-0.23437 0.40039-0.43572 0.1079-0.84051-0.14952-1.002-0.56836-0.02156-0.055928-0.27308-0.7224-1.1016-0.70117-0.187 0.00479-0.33205-0.14489-0.33203-0.33203 0-0.18715 0.14489-0.3318 0.33203-0.33398zm0.25781 1.0957c0.26687 0.00108 0.48296 0.21751 0.48242 0.48438-5.37e-4 0.26611-0.21632 0.48135-0.48242 0.48242-0.26763 0.00108-0.48579-0.21479-0.48633-0.48242-5.41e-4 -0.2684 0.21793-0.48546 0.48633-0.48438zm-10.809 3.0397c-0.34991 0.22367-0.78824 0.66637-0.87563 1.2212l-0.02322 0.14744c0.11372 0.12466 0.70444-9.118e-4 0.7719-0.043257 0.072919-0.44812 0.27343-0.56586 0.52734-0.7258 0.23894-0.15051 0.51638-0.15096 0.6371-0.12959l8.1113 1.4355-1.5332 9.2793-4.498-0.7793c-0.90219 0.26905-1.5466 0.74872-1.8106 1.1153-0.23032 0.31978-0.45999 0.95271-0.64258 1.457h0.00195l5.6465 0.94531 0.10547-0.60938 0.26172-1.5273c2e-3 -0.0014 0.0039-0.0025 0.0059-0.0039l1.4961 0.27148 0.60547-3.5977c0.53943 0.80503 0.83125 1.8162 0.69727 2.6641-0.14 0.88552-0.69613 1.6056-1.9375 1.9688-0.12433 0.03633-0.24744 0.06753-0.36914 0.0957l-0.19727 1.2051c-0.03115 0.20643-0.23137 0.34436-0.43555 0.30078l-6.1348-1.0312-0.4043 0.97656c1.464 1.0792 3.2449 2.1812 5.5723 2.2578 1.1718 0.03857 2.7611-0.13523 4.207-0.83594 1.4459-0.7007 2.7188-1.9524 3.2031-3.9375 0.35588-1.4586 0.21674-3.049-0.29883-4.4395-0.7975-2.1508-2.4648-3.307-3.1621-3.625l0.45703-2.7188-1.0625-0.19141c-1.0515 0.21674-2.1447 0.13408-3.1035-0.5625l-4.6797-0.84768c-0.15388-0.027874-0.67134-0.034627-1.1391 0.26435zm1.2523 3.6087-0.00195 0.0039-0.8125 4.8438c0.78057-0.26418 1.5395-0.2905 2.2051-0.20898l0.64636-3.8533c-0.23318 0.2305-0.41364 0.22022-0.48214 0.21007-0.51767-0.07669-0.62748-0.99295-0.98846-1.1614-0.11104-0.05182-0.29544-0.02624-0.56639 0.16594z" />
</svg>
{{- else if (eq $icon_name "bugcrowd") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M24 12L18 1.387H6L0 12l6 10.613h12zm-5.782 1.658c-.003.825-.122 1.569-.354 2.231a5.05 5.05 0 0 1-.99 1.708 4.316 4.316 0 0 1-1.503 1.093 4.69 4.69 0 0 1-1.896.385 4.158 4.158 0 0 1-1.145-.152 3.754 3.754 0 0 1-.868-.36 3.792 3.792 0 0 1-.601-.435 3.023 3.023 0 0 1-.466-.514h-.04l.02.193c.011.166.018.331.02.497v.528H7.961V7.062c0-.151-.04-.263-.114-.337-.077-.074-.19-.109-.33-.109h-.811V4.425h2.452c.473-.003.824.108 1.048.331.222.223.333.576.33 1.049v3.003c-.003.258-.01.467-.02.626l-.02.247h.04a2.898 2.898 0 0 1 .463-.507c.156-.143.354-.284.6-.426.245-.142.538-.261.876-.36.38-.1.77-.15 1.162-.148.702.003 1.334.135 1.894.395a4.118 4.118 0 0 1 1.446 1.11c.4.48.707 1.052.92 1.715.212.658.317 1.392.32 2.198m-2.803 1.406c.138-.399.206-.852.209-1.366-.003-.659-.112-1.231-.328-1.718-.216-.484-.517-.859-.902-1.125a2.347 2.347 0 0 0-1.344-.404 2.57 2.57 0 0 0-.969.186 2.372 2.372 0 0 0-.83.589 2.839 2.839 0 0 0-.579 1.015c-.141.413-.212.906-.216 1.477 0 .397.053.792.159 1.174.101.366.265.712.483 1.02.211.3.486.548.805.722.32.176.698.267 1.127.27.343.002.683-.07.997-.213a2.43 2.43 0 0 0 .824-.623c.24-.273.428-.607.564-1.004Z" />
</svg>
{{- else if (eq $icon_name "buttondown") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" stroke="none" stroke-width="1" fill="none"
    fill-rule="evenodd">
    <g>
        <g transform="translate(4, 4.075)" fill-rule="nonzero" stroke="currentColor">
            <g transform="translate(256, 255.9625) scale(-1, 1) rotate(-180) translate(-256, -255.9625)translate(0, 0)">
                <path
                    d="M301.6606,14.1373853 C303.688746,15.1698525 310.677734,16.9113405 318.761474,17.4327026 L319.541861,17.4809376 C319.825804,17.4976809 320.110512,17.5135842 320.399561,17.5288479 C343.999067,18.8284973 371.499186,24.4257864 387.885292,31.3591646 C389.181101,31.9620544 390.66612,32.5947748 391.905059,33.118941 C392.457805,33.3527953 392.939556,33.5536822 393.264934,33.7015814 C412.253041,41.8039575 429.258626,53.4407732 443.988462,68.0795656 C458.987342,83.1852739 470.054864,99.5757529 478.566662,119.436613 C479.232992,120.911103 479.797477,122.244579 480.266338,123.348721 C480.69095,124.348659 481.055744,125.201101 481.297832,125.733696 C482.04768,127.342286 483.431159,131.761421 484.827767,136.297068 L485.106229,137.205397 C485.646254,138.974836 486.171716,140.74265 486.644558,142.383076 L486.880758,143.207351 C487.207895,144.356002 487.503394,145.423929 487.751708,146.362309 C490.93928,158.570506 493.630153,177.2304 494.475121,191.67464 C494.489037,191.936321 494.503699,192.197595 494.519062,192.458134 L494.567297,193.238521 C495.088659,201.322261 496.830148,208.311249 497.533797,209.718548 C498.334936,211.178568 497.319844,228.009 497.058098,246.405938 L497.042743,247.557661 C497.037968,247.942166 497.033542,248.327226 497.02949,248.712715 L497.017514,249.984954 C497.005194,251.470665 496.998775,252.960712 496.99958,254.447993 L496.999676,258.181669 C497.000028,258.606948 497.000957,259.032365 497.002432,259.457749 L497.008473,260.73363 C497.011015,261.158776 497.014077,261.583719 497.017629,262.008287 L497.029731,263.280699 L497.036167,263.858626 L497.050699,265.012063 C497.303024,283.630141 498.381851,300.733383 497.862615,301.660591 C496.830148,303.688737 495.088659,310.677724 494.567297,318.761465 L494.519062,319.541851 C494.502319,319.825795 494.486416,320.110503 494.471152,320.399552 C493.171503,343.999057 487.574213,371.499175 480.640835,387.885281 C480.037945,389.18109 479.405225,390.666109 478.881059,391.905047 C478.647204,392.457794 478.446317,392.939544 478.298418,393.264922 C470.196042,412.253029 458.559226,429.258613 443.920433,443.988449 C428.814724,458.987328 412.424245,470.05485 392.563384,478.566648 C391.088894,479.232978 389.755418,479.797462 388.651276,480.266324 C387.651338,480.690936 386.798896,481.055729 386.266301,481.297818 C384.657711,482.047666 380.238576,483.431145 375.702929,484.827753 L374.794599,485.106214 C373.02516,485.64624 371.257346,486.171702 369.61692,486.644544 L368.792645,486.880744 C367.643994,487.207881 366.576067,487.503379 365.637687,487.751694 C353.42949,490.939266 334.769595,493.630139 320.325355,494.475106 C320.063674,494.489023 319.802399,494.503685 319.541861,494.519048 L318.761474,494.567283 C310.677734,495.088645 303.688746,496.830133 302.281447,497.533782 C302.035045,497.661499 301.011128,497.716526 299.363262,497.7223 L298.898489,497.722671 C292.818341,497.712349 279.458647,497.139676 265.150262,496.970881 L263.86424,496.956847 C263.43483,496.952547 263.004741,496.948635 262.574142,496.945135 L261.280986,496.935901 C260.849538,496.933253 260.417748,496.931043 259.985788,496.929298 L258.689562,496.925483 L258.041381,496.924669 L253.657009,496.924794 C253.446174,496.925019 253.235292,496.925408 253.024384,496.925957 L251.758805,496.931136 C250.282339,496.939343 248.806728,496.954997 247.339358,496.976767 L246.083802,496.996893 C231.045475,497.255639 217.102055,498.121167 212.28841,498.144484 L211.908579,498.144446 C211.132148,498.140007 210.660626,498.106798 210.541309,498.036292 C208.804002,497.065047 200.747967,494.947781 191.70142,494.4712 C168.007289,493.171931 140.502731,487.575001 124.114708,480.640821 C122.818899,480.037931 121.33388,479.405211 120.094941,478.881044 C119.542195,478.64719 119.060444,478.446303 118.735066,478.298404 C99.7469589,470.196028 82.741374,458.559212 68.0115377,443.92042 C53.0126581,428.814711 41.9451357,412.424232 33.4333382,392.563372 C32.7670076,391.088883 32.2025234,389.755406 31.7336621,388.651264 C31.3090498,387.651326 30.9442562,386.798884 30.7021677,386.26629 C29.95232,384.6577 28.5688409,380.238565 27.1722326,375.702918 L26.8937715,374.794588 C26.3537459,373.025149 25.828284,371.257335 25.3554418,369.616909 L25.1192419,368.792634 C24.7921049,367.643983 24.4966065,366.576056 24.2482917,365.637676 C21.0607195,353.42948 18.3698466,334.769585 17.5248792,320.325345 C17.5109627,320.063665 17.4963009,319.80239 17.4809377,319.541851 L17.4327026,318.761465 C16.9113405,310.677724 15.1698524,303.688737 14.4662028,302.281438 C13.6650642,300.821417 14.6801556,283.990985 14.9419016,265.594047 L14.9572566,264.442324 C14.9620324,264.057819 14.9664581,263.67276 14.9705103,263.28727 L14.9824855,262.015031 C14.9948063,260.52932 15.0012251,259.039273 15.0004199,257.551993 L15.0003241,253.818317 C14.9999715,253.393037 14.9990434,252.96762 14.9975678,252.542236 L14.991527,251.266356 C14.9889848,250.841209 14.9859234,250.416266 14.982371,249.991698 L14.9702689,248.719286 L14.9638332,248.14136 L14.9493008,246.987923 C14.6969761,228.369845 13.6181487,211.266602 14.1373851,210.339394 C15.1698524,208.311249 16.9113405,201.322261 17.4327026,193.238521 L17.4809376,192.458134 C17.497681,192.174191 17.5135843,191.889482 17.528848,191.600434 C18.8284974,168.000928 24.4257866,140.500811 31.359165,124.114705 C31.9620548,122.818896 32.5947752,121.333877 33.1189414,120.094938 C33.3527958,119.542192 33.5536826,119.060441 33.7015818,118.735063 C41.8039581,99.7469565 53.4407742,82.7413722 68.0795669,68.0115364 C83.1852758,53.0126572 99.5757552,41.945135 119.436616,33.4333378 C120.911106,32.7670072 122.244582,32.202523 123.348724,31.7336617 C124.348662,31.3090494 125.201104,30.9442559 125.733699,30.7021673 C127.342289,29.9523196 131.761424,28.5688406 136.297071,27.1722323 L137.205401,26.8937712 C138.97484,26.3537457 140.742654,25.8282838 142.38308,25.3554416 L143.207355,25.1192417 C144.356006,24.7921047 145.423933,24.4966062 146.362313,24.2482914 C158.57051,21.0607194 177.230405,18.3698465 191.674645,17.5248791 C191.936326,17.5109626 192.197601,17.4963008 192.458139,17.4809376 L193.238526,17.4327026 C201.322266,16.9113405 208.311254,15.1698525 209.718553,14.4662029 C211.178574,13.6650644 228.009006,14.6801556 246.405945,14.9419016 L247.557668,14.9572566 C247.942173,14.9620325 248.327233,14.9664581 248.712722,14.9705103 L249.984961,14.9824855 C251.470672,14.9948063 252.960719,15.0012251 254.448,15.0004199 L258.181676,15.0003241 C258.606956,14.9999715 259.032373,14.9990434 259.457757,14.9975678 L260.733637,14.991527 C261.158784,14.9889848 261.583727,14.9859234 262.008295,14.982371 L263.280707,14.970269 L263.858633,14.9638332 L265.012071,14.9493008 C283.630149,14.6969761 300.733392,13.6181489 301.6606,14.1373853 Z M265.026493,92.0296599 L249.744651,92.029657 C167.461891,92.0425357 153.533809,92.6396122 147.982352,93.9766623 C121.749425,100.534894 104.713136,116.950788 96.7054361,143.900268 C95.2786079,148.894167 94.5374284,160.056741 94.5288557,250.581875 L94.5288556,261.41669 C94.5374284,351.943244 95.2786079,363.105819 96.7477126,368.24491 C104.585874,394.6671 121.509461,411.196166 147.229818,417.884338 C151.997298,419.128018 169.925259,419.767249 256.681942,419.870901 C265.575313,419.880905 273.69874,419.887907 281.123349,419.891007 L283.874959,419.891985 L284.417493,419.892136 L293.747859,419.892182 C352.240621,419.875332 361.867876,419.160649 366.882835,417.906751 C380.083055,414.543234 391.091619,408.294586 399.693108,399.693097 C408.294598,391.091608 414.543245,380.083045 417.923354,366.817091 C419.330777,361.1874 419.957356,349.104459 419.970337,263.831745 L419.970337,248.170524 C419.957356,162.895526 419.330777,150.812585 417.906762,145.11716 C414.543245,131.91694 408.294598,120.908377 399.693108,112.306888 C391.091619,103.705399 380.083055,97.4567518 366.817101,94.0766428 C361.184993,92.6686158 349.194124,92.0426462 265.026493,92.0296599 Z"
                    id="Shape" stroke-width="30"></path>
                <path
                    d="M237.756837,213.880303 C243.697542,212.351025 270.469508,212.355347 276.296906,213.894654 C307.747937,222.419986 319.857121,230.722369 355.205849,265.603984 L364.751388,274.99473 L356.628995,283.164902 L356.006401,283.786883 L355.368551,284.422819 C351.240042,288.534779 347.834019,296.489642 347.482132,296.489642 C347.137754,296.489642 341.927037,286.842876 335.740337,280.770542 C324.562608,269.698323 314.086597,259.727944 312.615545,258.568741 C302.060008,250.029682 293.681914,245.050055 282.218718,240.487036 C280.744798,239.835173 275.247856,238.382783 269.811392,237.366989 L269.035607,237.224979 C268.777443,237.178722 268.519857,237.133588 268.26329,237.089711 C259.560898,235.480011 255.795602,235.511124 248.176661,236.63523 C224.145112,240.365796 209.964715,248.544545 173.648855,285.080499 C172.894405,285.844068 172.174746,286.568578 171.467223,287.277146 L170.547933,288.195658 C168.41448,290.322353 166.776972,296.489642 166.517477,296.489642 C166.141508,296.489642 162.333834,288.123417 157.783584,283.577722 L149.427943,275.22216 L157.641045,267.057087 C193.587122,231.204097 206.428095,222.321851 237.756837,213.880303 Z"
                    id="Path" stroke-width="25"></path>
            </g>
        </g>
    </g>
</svg>
{{- else if (eq $icon_name "buymeacoffee") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 884 1279" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M791.109 297.518L790.231 297.002L788.201 296.383C789.018 297.072 790.04 297.472 791.109 297.518Z"
        fill="currentColor"></path>
    <path d="M803.896 388.891L802.916 389.166L803.896 388.891Z" fill="currentColor"></path>
    <path
        d="M791.484 297.377C791.359 297.361 791.237 297.332 791.118 297.29C791.111 297.371 791.111 297.453 791.118 297.534C791.252 297.516 791.379 297.462 791.484 297.377Z"
        fill="currentColor"></path>
    <path d="M791.113 297.529H791.244V297.447L791.113 297.529Z" fill="currentColor"></path>
    <path
        d="M803.111 388.726L804.591 387.883L805.142 387.573L805.641 387.04C804.702 387.444 803.846 388.016 803.111 388.726Z"
        fill="currentColor"></path>
    <path d="M793.669 299.515L792.223 298.138L791.243 297.605C791.77 298.535 792.641 299.221 793.669 299.515Z"
        fill="currentColor"></path>
    <path
        d="M430.019 1186.18C428.864 1186.68 427.852 1187.46 427.076 1188.45L427.988 1187.87C428.608 1187.3 429.485 1186.63 430.019 1186.18Z"
        fill="currentColor"></path>
    <path
        d="M641.187 1144.63C641.187 1143.33 640.551 1143.57 640.705 1148.21C640.705 1147.84 640.86 1147.46 640.929 1147.1C641.015 1146.27 641.084 1145.46 641.187 1144.63Z"
        fill="currentColor"></path>
    <path
        d="M619.284 1186.18C618.129 1186.68 617.118 1187.46 616.342 1188.45L617.254 1187.87C617.873 1187.3 618.751 1186.63 619.284 1186.18Z"
        fill="currentColor"></path>
    <path
        d="M281.304 1196.06C280.427 1195.3 279.354 1194.8 278.207 1194.61C279.136 1195.06 280.065 1195.51 280.684 1195.85L281.304 1196.06Z"
        fill="currentColor"></path>
    <path
        d="M247.841 1164.01C247.704 1162.66 247.288 1161.35 246.619 1160.16C247.093 1161.39 247.489 1162.66 247.806 1163.94L247.841 1164.01Z"
        fill="currentColor"></path>
    <path
        d="M472.623 590.836C426.682 610.503 374.546 632.802 306.976 632.802C278.71 632.746 250.58 628.868 223.353 621.274L270.086 1101.08C271.74 1121.13 280.876 1139.83 295.679 1153.46C310.482 1167.09 329.87 1174.65 349.992 1174.65C349.992 1174.65 416.254 1178.09 438.365 1178.09C462.161 1178.09 533.516 1174.65 533.516 1174.65C553.636 1174.65 573.019 1167.08 587.819 1153.45C602.619 1139.82 611.752 1121.13 613.406 1101.08L663.459 570.876C641.091 563.237 618.516 558.161 593.068 558.161C549.054 558.144 513.591 573.303 472.623 590.836Z"
        fill="currentColor"></path>
    <path d="M78.6885 386.132L79.4799 386.872L79.9962 387.182C79.5987 386.787 79.1603 386.435 78.6885 386.132Z"
        fill="currentColor"></path>
    <path
        d="M879.567 341.849L872.53 306.352C866.215 274.503 851.882 244.409 819.19 232.898C808.711 229.215 796.821 227.633 788.786 220.01C780.751 212.388 778.376 200.55 776.518 189.572C773.076 169.423 769.842 149.257 766.314 129.143C763.269 111.85 760.86 92.4243 752.928 76.56C742.604 55.2584 721.182 42.8009 699.88 34.559C688.965 30.4844 677.826 27.0375 666.517 24.2352C613.297 10.1947 557.342 5.03277 502.591 2.09047C436.875 -1.53577 370.983 -0.443234 305.422 5.35968C256.625 9.79894 205.229 15.1674 158.858 32.0469C141.91 38.224 124.445 45.6399 111.558 58.7341C95.7448 74.8221 90.5829 99.7026 102.128 119.765C110.336 134.012 124.239 144.078 138.985 150.737C158.192 159.317 178.251 165.846 198.829 170.215C256.126 182.879 315.471 187.851 374.007 189.968C438.887 192.586 503.87 190.464 568.44 183.618C584.408 181.863 600.347 179.758 616.257 177.304C634.995 174.43 647.022 149.928 641.499 132.859C634.891 112.453 617.134 104.538 597.055 107.618C594.095 108.082 591.153 108.512 588.193 108.942L586.06 109.252C579.257 110.113 572.455 110.915 565.653 111.661C551.601 113.175 537.515 114.414 523.394 115.378C491.768 117.58 460.057 118.595 428.363 118.647C397.219 118.647 366.058 117.769 334.983 115.722C320.805 114.793 306.661 113.611 292.552 112.177C286.134 111.506 279.733 110.801 273.333 110.009L267.241 109.235L265.917 109.046L259.602 108.134C246.697 106.189 233.792 103.953 221.025 101.251C219.737 100.965 218.584 100.249 217.758 99.2193C216.932 98.1901 216.482 96.9099 216.482 95.5903C216.482 94.2706 216.932 92.9904 217.758 91.9612C218.584 90.9319 219.737 90.2152 221.025 89.9293H221.266C232.33 87.5721 243.479 85.5589 254.663 83.8038C258.392 83.2188 262.131 82.6453 265.882 82.0832H265.985C272.988 81.6186 280.026 80.3625 286.994 79.5366C347.624 73.2301 408.614 71.0801 469.538 73.1014C499.115 73.9618 528.676 75.6996 558.116 78.6935C564.448 79.3474 570.746 80.0357 577.043 80.8099C579.452 81.1025 581.878 81.4465 584.305 81.7391L589.191 82.4445C603.438 84.5667 617.61 87.1419 631.708 90.1703C652.597 94.7128 679.422 96.1925 688.713 119.077C691.673 126.338 693.015 134.408 694.649 142.03L696.732 151.752C696.786 151.926 696.826 152.105 696.852 152.285C701.773 175.227 706.7 198.169 711.632 221.111C711.994 222.806 712.002 224.557 711.657 226.255C711.312 227.954 710.621 229.562 709.626 230.982C708.632 232.401 707.355 233.6 705.877 234.504C704.398 235.408 702.75 235.997 701.033 236.236H700.895L697.884 236.649L694.908 237.044C685.478 238.272 676.038 239.419 666.586 240.486C647.968 242.608 629.322 244.443 610.648 245.992C573.539 249.077 536.356 251.102 499.098 252.066C480.114 252.57 461.135 252.806 442.162 252.771C366.643 252.712 291.189 248.322 216.173 239.625C208.051 238.662 199.93 237.629 191.808 236.58C198.106 237.389 187.231 235.96 185.029 235.651C179.867 234.928 174.705 234.177 169.543 233.397C152.216 230.798 134.993 227.598 117.7 224.793C96.7944 221.352 76.8005 223.073 57.8906 233.397C42.3685 241.891 29.8055 254.916 21.8776 270.735C13.7217 287.597 11.2956 305.956 7.64786 324.075C4.00009 342.193 -1.67805 361.688 0.472751 380.288C5.10128 420.431 33.165 453.054 73.5313 460.35C111.506 467.232 149.687 472.807 187.971 477.556C338.361 495.975 490.294 498.178 641.155 484.129C653.44 482.982 665.708 481.732 677.959 480.378C681.786 479.958 685.658 480.398 689.292 481.668C692.926 482.938 696.23 485.005 698.962 487.717C701.694 490.429 703.784 493.718 705.08 497.342C706.377 500.967 706.846 504.836 706.453 508.665L702.633 545.797C694.936 620.828 687.239 695.854 679.542 770.874C671.513 849.657 663.431 928.434 655.298 1007.2C653.004 1029.39 650.71 1051.57 648.416 1073.74C646.213 1095.58 645.904 1118.1 641.757 1139.68C635.218 1173.61 612.248 1194.45 578.73 1202.07C548.022 1209.06 516.652 1212.73 485.161 1213.01C450.249 1213.2 415.355 1211.65 380.443 1211.84C343.173 1212.05 297.525 1208.61 268.756 1180.87C243.479 1156.51 239.986 1118.36 236.545 1085.37C231.957 1041.7 227.409 998.039 222.9 954.381L197.607 711.615L181.244 554.538C180.968 551.94 180.693 549.376 180.435 546.76C178.473 528.023 165.207 509.681 144.301 510.627C126.407 511.418 106.069 526.629 108.168 546.76L120.298 663.214L145.385 904.104C152.532 972.528 159.661 1040.96 166.773 1109.41C168.15 1122.52 169.44 1135.67 170.885 1148.78C178.749 1220.43 233.465 1259.04 301.224 1269.91C340.799 1276.28 381.337 1277.59 421.497 1278.24C472.979 1279.07 524.977 1281.05 575.615 1271.72C650.653 1257.95 706.952 1207.85 714.987 1130.13C717.282 1107.69 719.576 1085.25 721.87 1062.8C729.498 988.559 737.115 914.313 744.72 840.061L769.601 597.451L781.009 486.263C781.577 480.749 783.905 475.565 787.649 471.478C791.392 467.391 796.352 464.617 801.794 463.567C823.25 459.386 843.761 452.245 859.023 435.916C883.318 409.918 888.153 376.021 879.567 341.849ZM72.4301 365.835C72.757 365.68 72.1548 368.484 71.8967 369.792C71.8451 367.813 71.9483 366.058 72.4301 365.835ZM74.5121 381.94C74.6842 381.819 75.2003 382.508 75.7337 383.334C74.925 382.576 74.4089 382.009 74.4949 381.94H74.5121ZM76.5597 384.641C77.2996 385.897 77.6953 386.689 76.5597 384.641V384.641ZM80.672 387.979H80.7752C80.7752 388.1 80.9645 388.22 81.0333 388.341C80.9192 388.208 80.7925 388.087 80.6548 387.979H80.672ZM800.796 382.989C793.088 390.319 781.473 393.726 769.996 395.43C641.292 414.529 510.713 424.199 380.597 419.932C287.476 416.749 195.336 406.407 103.144 393.382C94.1102 392.109 84.3197 390.457 78.1082 383.798C66.4078 371.237 72.1548 345.944 75.2003 330.768C77.9878 316.865 83.3218 298.334 99.8572 296.355C125.667 293.327 155.64 304.218 181.175 308.09C211.917 312.781 242.774 316.538 273.745 319.36C405.925 331.405 540.325 329.529 671.92 311.91C695.906 308.686 719.805 304.941 743.619 300.674C764.835 296.871 788.356 289.731 801.175 311.703C809.967 326.673 811.137 346.701 809.778 363.615C809.359 370.984 806.139 377.915 800.779 382.989H800.796Z"
        fill="currentColor"></path>
</svg>
{{- else if (eq $icon_name "codeberg") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d='M11.955.49A12 12 0 0 0 0 12.49a12 12 0 0 0 1.832 6.373L11.838 5.928a.187.14 0 0 1 .324 0l10.006 12.935A12 12 0 0 0 24 12.49a12 12 0 0 0-12-12 12 12 0 0 0-.045 0zm.375 6.467l4.416 16.553a12 12 0 0 0 5.137-4.213z' />
</svg>
{{- else if (eq $icon_name "codeforces") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 26" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
</svg>
{{- else if (eq $icon_name "codepen") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
    <line x1="12" y1="22" x2="12" y2="15.5"></line>
    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
    <line x1="12" y1="2" x2="12" y2="8.5"></line>
</svg>
{{- else if (eq $icon_name "credly") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" fill="currentColor" stroke="none">
    <path
        d="m 366.04603,0.539085 c -9.03598,0 -10.77973,0.42893562 -15.78373,3.8968966 -3.35779,2.3268743 -8.3929,8.1583914 -12.49099,14.4655944 -9.48143,14.593085 -12.15553,15.67658 -23.95415,9.697781 C 288.74714,15.895368 270.59837,11.338625 245.64499,11.484396 205.97913,11.716096 172.05517,25.859207 145.32213,53.309347 104.48601,95.240854 76.020398,154.63994 66.9762,216.79856 c -6.092249,41.86824 -2.974097,92.7649 8.000409,130.64544 19.389663,66.92743 60.256841,104.96526 120.074111,111.75986 11.97899,1.3607 33.24497,0.42096 46.09323,-2.03737 38.22791,-7.31398 76.74467,-29.90075 111.05372,-65.12525 22.65718,-23.26237 39.50239,-47.24087 52.90626,-75.31472 8.23215,-17.2418 9.31001,-23.43292 5.55765,-31.91534 -3.70171,-8.36882 -10.69858,-13.42359 -19.60478,-14.16221 -12.2704,-1.01759 -17.7717,3.62699 -32.96932,27.83274 -26.44919,42.12471 -49.6215,65.49325 -80.30485,80.98223 -29.30931,14.79535 -58.73794,17.48923 -87.25388,7.99255 -25.31711,-8.43163 -44.41812,-28.62159 -53.89487,-56.97053 -6.2792,-18.78312 -7.83604,-33.41725 -7.03795,-66.15048 0.74234,-30.44679 2.42781,-44.77419 8.41626,-71.53553 14.88113,-66.50301 52.31461,-114.886915 94.37029,-121.980722 20.78331,-3.505693 43.1099,0.696677 51.67965,9.726548 11.89366,12.532806 12.23581,25.259094 1.67121,62.227444 -2.89562,10.13204 -5.62965,21.15694 -6.07287,24.49814 -2.85326,21.50809 19.7617,39.5481 39.34034,31.38178 12.3339,-5.14409 18.6741,-15.73544 25.16508,-42.03677 9.05731,-36.69987 21.80795,-68.950595 39.4685,-99.836425 10.05125,-17.57882 12.86723,-25.679207 11.4867,-33.039939 C 393.89772,17.218994 387.8986,8.6159571 381.48718,4.1875215 376.8711,0.99934541 374.91955,0.539085 366.04603,0.539085 Z" />
</svg>
{{- else if (eq $icon_name "cryptohack") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,57.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke-width="12"
        stroke="currentColor">
        <path
            d="M180 495 c-7 -8 -22 -15 -35 -15 -23 0 -55 -28 -55 -48 0 -6 -12 -23 -26 -37 -18 -18 -24 -33 -21 -48 3 -12 -1 -31 -9 -41 -18 -26 -18 -70 1 -86 8 -7 15 -21 15 -31 0 -36 23 -68 59 -83 21 -8 43 -21 50 -30 19 -23 74 -20 97 5 17 19 19 41 22 204 3 174 2 185 -17 204 -25 25 -63 27 -81 6z m54 -11 c14 -5 16 -32 16 -193 0 -196 -3 -211 -45 -211 -39 0 -47 20 -20 52 14 16 25 40 25 52 0 34 -37 76 -66 76 -31 0 -31 -18 0 -26 30 -7 50 -48 36 -73 -28 -54 -118 -28 -103 29 3 10 -4 27 -16 39 -26 26 -27 46 -2 68 14 12 18 24 14 48 -7 41 12 53 40 27 12 -11 32 -23 44 -26 12 -4 31 -18 42 -32 33 -41 55 -29 25 14 -15 21 -15 25 1 42 22 25 0 38 -25 15 -26 -24 -68 -12 -81 21 -12 32 3 54 36 54 12 0 28 7 35 15 14 17 21 18 44 9z" />
        <path
            d="M309 489 c-19 -19 -20 -30 -17 -204 3 -163 5 -185 22 -204 23 -25 78 -28 97 -5 7 9 29 22 50 30 36 15 59 47 59 83 0 10 7 24 15 31 19 16 19 60 1 86 -8 10 -12 29 -9 41 3 15 -3 30 -19 46 -12 13 -30 37 -38 53 -10 19 -25 30 -42 32 -15 2 -32 10 -38 18 -18 20 -57 17 -81 -7z m71 -14 c7 -8 23 -15 35 -15 34 0 48 -22 34 -54 -10 -20 -19 -26 -46 -26 -34 0 -44 -13 -17 -24 28 -11 47 -7 70 15 30 28 48 16 41 -28 -4 -24 -2 -36 8 -39 20 -8 28 -40 15 -64 -11 -20 -63 -28 -86 -12 -17 11 -36 51 -29 62 3 5 1 11 -5 15 -16 10 -24 -25 -12 -57 9 -24 8 -30 -8 -38 -21 -11 -33 -37 -24 -52 4 -6 16 2 28 17 20 25 26 27 64 20 23 -4 44 -10 47 -14 9 -15 -26 -51 -49 -51 -14 0 -30 -10 -40 -25 -18 -27 -54 -33 -74 -13 -17 17 -17 384 1 391 22 9 34 7 47 -8z" />
    </g>
</svg>
{{- else if (eq $icon_name "ctftime") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.000000 200.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
        <path d="M365 1499 c201 -275 365 -503 365 -507 0 -4 -84 -120 -188 -259 -103
            -139 -263 -355 -356 -480 -93 -125 -173 -229 -178 -231 -45 -19 101 -22 992
            -22 l1000 0 0 1000 0 1000 -1000 0 -999 0 364 -501z m1310 -509 l0 -305 -312
            -3 -313 -2 0 310 0 310 313 -2 312 -3 0 -305z" />
        <path d="M1150 1194 c0 -2 -1 -95 -1 -206 l0 -203 216 -3 215 -2 0 210 0 210
            -157 0 -158 0 98 -98 c53 -53 97 -101 97 -106 0 -4 -42 -48 -92 -97 l-93 -88
            -28 26 -27 27 65 66 65 66 -100 101 c-55 55 -100 99 -100 97z" />
    </g>
</svg>
{{- else if (eq $icon_name "cv") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z" />
    <path d="M9 13h6" />
    <path d="M9 17h3" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
</svg>
{{- else if (eq $icon_name "deezer") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="currentColor" stroke="none">
    <path
        d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03h-5.19zm6.271 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19Z" />
</svg>
{{- else if (eq $icon_name "dev") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
</svg>
{{- else if (eq $icon_name "deviantart") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 167" fill="currentColor" stroke="none">
    <path
        d=" M100 0 L99.96 0 L99.95 0 L71.32 0 L68.26 3.04 L53.67 30.89 L49.41 33.35 L0 33.35 L0 74.97 L26.40 74.97 L29.15 77.72 L0 133.36 L0 166.5 L0 166.61 L0 166.61 L28.70 166.6 L31.77 163.55 L46.39 135.69 L50.56 133.28 L100 133.28 L100 91.68 L73.52 91.68 L70.84 89 L100 33.33 " />
</svg>
{{- else if (eq $icon_name "discogs") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M1.7422 11.982c0-5.6682 4.61-10.2782 10.2758-10.2782 1.8238 0 3.5372.48 5.0251 1.3175l.8135-1.4879C16.1768.588 14.2474.036 12.1908.0024h-.1944C5.4091.0144.072 5.3107 0 11.886v.1152c.0072 3.4389 1.4567 6.5345 3.7748 8.7207l1.1855-1.2814c-1.9798-1.8743-3.218-4.526-3.218-7.4585zM20.362 3.4053l-1.1543 1.2406c1.903 1.867 3.0885 4.4636 3.0885 7.3361 0 5.6658-4.61 10.2758-10.2758 10.2758-1.783 0-3.4605-.456-4.922-1.2575l-.8542 1.5214c1.7086.9384 3.6692 1.4735 5.7546 1.4759C18.6245 23.9976 24 18.6246 24 11.9988c-.0048-3.3717-1.399-6.4146-3.638-8.5935zM1.963 11.982c0 2.8701 1.2119 5.4619 3.146 7.2953l1.1808-1.2767c-1.591-1.5166-2.587-3.6524-2.587-6.0186 0-4.586 3.7293-8.3152 8.3152-8.3152 1.483 0 2.875.3912 4.082 1.0751l.8351-1.5262C15.481 2.395 13.8034 1.927 12.018 1.927 6.4746 1.9246 1.963 6.4362 1.963 11.982zm18.3702 0c0 4.586-3.7293 8.3152-8.3152 8.3152-1.4327 0-2.7837-.3648-3.962-1.0055l-.852 1.5166c1.4303.7823 3.0718 1.2287 4.814 1.2287 5.5434 0 10.055-4.5116 10.055-10.055 0-2.8077-1.1567-5.3467-3.0165-7.1729l-1.183 1.2743c1.519 1.507 2.4597 3.5924 2.4597 5.8986zm-1.9486 0c0 3.5109-2.8558 6.3642-6.3642 6.3642a6.3286 6.3286 0 01-3.0069-.756l-.8471 1.507c1.147.624 2.4597.9768 3.854.9768 4.4636 0 8.0944-3.6308 8.0944-8.0944 0-2.239-.9143-4.2692-2.3902-5.7378l-1.1783 1.267c1.1351 1.152 1.8383 2.731 1.8383 4.4732zm-14.4586 0c0 2.3014.9671 4.382 2.515 5.8578l1.1734-1.2695c-1.207-1.159-1.9606-2.786-1.9606-4.5883 0-3.5108 2.8557-6.3642 6.3642-6.3642 1.1423 0 2.215.3048 3.1437.8352l.8303-1.5167c-1.1759-.6647-2.5317-1.0487-3.974-1.0487-4.4612 0-8.092 3.6308-8.092 8.0944zm12.5292 0c0 2.4502-1.987 4.4372-4.4372 4.4372a4.4192 4.4192 0 01-2.0614-.5088l-.8351 1.4879a6.1135 6.1135 0 002.8965.727c3.3885 0 6.1434-2.7548 6.1434-6.1433 0-1.6774-.6767-3.1989-1.7686-4.3076l-1.1615 1.2503c.7559.7967 1.2239 1.8718 1.2239 3.0573zm-10.5806 0c0 1.7374.7247 3.3069 1.8886 4.4252L8.92 15.1569l.0144.0144c-.8351-.8063-1.3559-1.9366-1.3559-3.1869 0-2.4502 1.9846-4.4372 4.4372-4.4372.8087 0 1.5646.2184 2.2174.5976l.8207-1.4975a6.097 6.097 0 00-3.0381-.8063c-3.3837-.0048-6.141 2.7525-6.141 6.141zm6.681 0c0 .2952-.2424.5351-.5376.5351-.2952 0-.5375-.24-.5375-.5351 0-.2976.24-.5375.5375-.5375.2952 0 .5375.24.5375.5375zm-3.9405 0c0-1.879 1.5239-3.4029 3.4005-3.4029 1.879 0 3.4005 1.5215 3.4005 3.4029 0 1.879-1.5239 3.4005-3.4005 3.4005S8.6151 13.861 8.6151 11.982zm.1488 0c.0048 1.7974 1.4567 3.2493 3.2517 3.2517 1.795 0 3.254-1.4567 3.254-3.2517-.0023-1.7974-1.4566-3.2517-3.254-3.254-1.795 0-3.2517 1.4566-3.2517 3.254Z" />
</svg>
{{- else if (eq $icon_name "discord") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" stroke="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
</svg>
{{- else if (eq $icon_name "douban") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="m2.42288,2.08086l19.15349,0l0,2.15751l-19.15349,0l0,-2.15751z" />
    <path
        d="m19.88879,14.92347l0,-8.43444l-15.82351,0l0,8.43444l15.82351,0zm-13.52889,-6.27842l11.25739,0l0,4.1235l-11.25739,0l0,-4.1235z" />
    <path
        d="m16.48864,19.78508c0.6885,-1.05398 1.33827,-2.27636 1.94031,-3.66377l-2.30206,-0.83906c-0.59872,1.64418 -1.29579,3.14745 -2.08899,4.50283l-4.00578,0c-0.66389,-1.75663 -1.41312,-3.25884 -2.25363,-4.50283l-2.11727,0.83906c0.87327,1.30991 1.57742,2.52932 2.11727,3.66377l-5.89733,0l0,2.13406l20.23769,0l0,-2.13406l-5.63021,0z" />
</svg>
{{- else if (eq $icon_name "dreamstime") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M19.834 20.994s4.824-4.08 2.044-12.03C19.252 1.456 6.822-1.223 2.508 7.566c-3.936 8.023 2.18 14.46 7.88 14.374 4.889-.075 8.475-3.226 7.813-8.604-.76-6.18-6.73-6.816-9.275-4.184-2.256 2.334-1.816 7.034.873 7.823 2.241.844 4.661-1.265 3.161-3.215"
        style="font-variation-settings:normal" stroke="currentColor" stroke-linejoin="bevel"
        paint-order="stroke fill markers" />
</svg>
{{- else if (eq $icon_name "dribbble") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <circle style="font-variation-settings:normal" cx="12.004" cy="12" r="9.39" paint-order="stroke fill markers" />
    <path style="font-variation-settings:normal"
        d="M5.858 19.136s2.343-5.79 8.161-6.422c5.818-.633 7.442.479 7.442.479M2.68 10.839s4.91.752 10.112-1.11c5.202-1.863 5.887-4.601 5.887-4.601" />
    <path style="font-variation-settings:normal"
        d="M8.533 3.208s2.888 2.73 5.339 9.235c2.451 6.505 2.344 8.4 2.344 8.4" />
</svg>
{{- else if (eq $icon_name "dzen") -}}
<svg viewBox="0 0 166 167" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.3295 166.23H82.6705C49.7081 166.23 30.436 162.915 17.0154 149.754C3.1854 135.664 0 116.522 0 83.6996V82.7709C0 49.9484 3.1854 30.6762 17.0154 16.7164C30.5658 3.56543 49.7081 0.240234 82.6605 0.240234H83.3295C116.152 0.240234 135.424 3.56543 148.985 16.7164C162.815 30.806 166 49.9484 166 82.7709V83.6996C166 116.532 162.805 135.804 148.985 149.754C135.424 162.905 116.292 166.23 83.3295 166.23ZM145.84 80.771C146.48 80.801 147 81.3308 147 81.9706H146.99V84.6498C146.99 85.2996 146.47 85.8294 145.83 85.8494C122.868 86.7191 108.902 89.6382 99.115 99.4252C89.338 109.202 86.4189 123.148 85.5392 146.071C85.5092 146.71 84.9794 147.23 84.3396 147.23H81.6504C81.0006 147.23 80.4708 146.71 80.4508 146.071C79.5711 123.148 76.652 109.202 66.875 99.4252C57.0981 89.6482 43.1225 86.7191 20.1596 85.8494C19.5198 85.8194 19 85.2896 19 84.6498V81.9706C19 81.3208 19.5198 80.791 20.1596 80.771C43.1225 79.9013 57.0881 76.9822 66.875 67.1952C76.672 57.3983 79.5911 43.4027 80.4608 20.3999C80.4908 19.7601 81.0206 19.2402 81.6604 19.2402H84.3396C84.9894 19.2402 85.5192 19.7601 85.5392 20.3999C86.4089 43.4127 89.328 57.3983 99.125 67.1952C108.902 76.9722 122.878 79.9013 145.84 80.771Z" fill="currentColor"/>
</svg>
{{- else if (eq $icon_name "email") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
</svg>
{{- else if (eq $icon_name "ethereum") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
</svg>
{{- else if (eq $icon_name "exercism") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2230.4 1817.9" fill="currentColor" stroke-width="2"
    stroke="currentColor">
    <path d="M0,905.1v-48.3c119-10.6,189.5-56.6,206.8-157.4c14.8-85.8-9.8-249.3-6.7-387.8c3.5-157,107.1-289.2,222.6-305.8
	c48-6.9,83-8.3,121.4-0.3c35,6,63.3,26.3,76.4,52v74.2H508.1c-98,11.1-135.6,76.9-157.4,179.9c-26.1,123,101.7,561.8-170.9,593.6
	c272.6,31.7,144.8,470.5,170.9,593.6c21.8,103,59.3,168.8,157.4,179.9h112.4v74.2c-13.2,25.7-41.4,46-76.4,52
	c-38.4,8-73.4,6.6-121.4-0.3c-115.5-16.6-219.1-148.8-222.6-305.8c-3.1-138.5,21.5-302.1,6.7-387.8C189.5,1010,119,964,0,953.4
	V905.1z M2230.4,912.8v-48.3c-119-10.6-189.5-56.6-206.8-157.4c-14.8-85.8,9.8-249.3,6.7-387.8c-3.5-157-107.1-289.2-222.6-305.8
	c-48-6.9-83-8.3-121.4-0.3c-35,6-63.3,26.3-76.4,52v74.2h112.4c98,11.1,135.6,76.9,157.4,179.9c26.1,123-101.7,561.8,170.9,593.6
	c-272.6,31.7-144.8,470.5-170.9,593.6c-21.8,103-59.3,168.8-157.4,179.9h-112.4v74.2c13.2,25.7,41.4,46,76.4,52
	c38.4,8,73.4,6.6,121.4-0.3c115.5-16.6,219.1-148.8,222.6-305.8c3.1-138.5-21.5-302.1-6.7-387.8c17.3-100.8,87.8-146.8,206.8-157.4
	V912.8z" />
    <path d="M944.3,935.4c0-139.7-112.7-252.9-251.8-252.9S440.7,795.8,440.7,935.4H539c0-85.2,68.7-154.2,153.5-154.2
	S846,850.3,846,935.4H944.3z M1796.4,935.4c0-139.7-112.7-252.9-251.8-252.9s-251.8,113.2-251.8,252.9h98.3
	c0-85.2,68.7-154.2,153.5-154.2c84.8,0,153.5,69,153.5,154.2H1796.4z M1364.7,1269.3c-6.1,118.6-109.4,220.1-233.8,219.2
	c-124.8-0.9-227.3-102.3-233.8-219.2v-74.2h114.7v74.2c5.7,60,59.6,109.2,119.2,107.4c60.5-1.9,116.7-48.2,119.2-107.4v-74.2h114.7
	V1269.3z" />
</svg>
{{- else if (eq $icon_name "facebook") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
{{- else if (eq $icon_name "farcaster") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" stroke="currentColor" stroke-width="2">
    <path d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z"/>
    <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"/>
    <path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z"/>
</svg>
{{- else if (eq $icon_name "fediverse") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M47.923 72.796a18.227 18.227 0 0 1-7.795 7.76l42.798 42.964 10.318-5.229zm56.452 56.67-10.318 5.229 21.686 21.77a18.227 18.227 0 0 1 7.797-7.76zm49.517-39.67-24.23 12.279 1.787 11.427 27.415-13.894a18.227 18.227 0 0 1-4.972-9.812zm-38.295 19.407L58.31 138.237a18.227 18.227 0 0 1 4.973 9.813l54.102-27.42zM97.174 37.686 69.53 91.653l8.162 8.193 29.269-57.138a18.227 18.227 0 0 1-9.787-5.022ZM62.34 105.69l-14.002 27.335a18.227 18.227 0 0 1 9.786 5.021l12.377-24.163ZM39.89 80.675a18.227 18.227 0 0 1-9.106 1.904 18.227 18.227 0 0 1-1.759-.184l8.176 52.297a18.227 18.227 0 0 1 9.106-1.903 18.227 18.227 0 0 1 1.758.184zm23.435 67.634a18.227 18.227 0 0 1 .19 3.672 18.227 18.227 0 0 1-1.922 7.19l52.289 8.391a18.227 18.227 0 0 1-.192-3.672 18.227 18.227 0 0 1 1.924-7.19zM159.048 99.8l-24.135 47.116a18.227 18.227 0 0 1 9.788 5.023l24.134-47.117a18.227 18.227 0 0 1-9.787-5.023zm-32.917-66.64a18.227 18.227 0 0 1-7.797 7.76l37.376 37.52a18.227 18.227 0 0 1 7.797-7.76zm-34.114-5.477L44.77 51.627a18.227 18.227 0 0 1 4.972 9.813L96.99 37.495a18.227 18.227 0 0 1-4.971-9.811zm26.231 13.281a18.227 18.227 0 0 1-9.256 1.98 18.227 18.227 0 0 1-1.595-.168l4.185 26.8 11.42 1.832zm-4.234 44.192 9.896 63.362a18.227 18.227 0 0 1 8.973-1.837 18.227 18.227 0 0 1 1.906.21l-9.354-59.903ZM49.775 61.64a18.227 18.227 0 0 1 .201 3.73 18.227 18.227 0 0 1-1.894 7.139l26.82 4.308 5.271-10.295zm45.968 7.382L90.47 79.318l63.37 10.177a18.227 18.227 0 0 1-.184-3.63 18.227 18.227 0 0 1 1.945-7.229z"
        style="display:inline" transform="matrix(.13855 0 0 .1385 -2.107 -1.132)" />
    <g style="display:inline;opacity:1" transform="matrix(.13834 .00753 -.00754 .1383 -1.182 -5.633)">
        <circle cx="106.266" cy="51.536" r="16.571" />
        <circle cx="171.428" cy="110.193" r="16.571" />
        <circle cx="135.764" cy="190.277" r="16.571" />
        <circle cx="48.559" cy="181.114" r="16.571" />
        <circle cx="30.329" cy="95.367" r="16.571" />
    </g>
</svg>
{{- else if (eq $icon_name "firefish") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M16.21.088c-.256.114-.607.485-.7.735-.048.128-.075 1.322-.075 3.46 0 3.083.007 3.286.128 3.522.162.317.378.52.694.654.216.088.721.101 3.492.101 3.559 0 3.491.007 3.889-.411.37-.391.458-.897.256-1.396-.148-.344-6.228-6.45-6.605-6.632-.317-.148-.79-.162-1.079-.033ZM6.107.155C5.79.276 5.473.56 5.352.85c-.074.175-.095.857-.095 3.474 0 3.13.007 3.258.135 3.535.081.162.263.364.418.472l.276.196 3.303.02c3.269.02 3.303.013 3.6-.128.62-.297.882-1.12.565-1.734C13.42 6.43 7.354.337 7.111.21 6.86.081 6.383.054 6.107.155Zm-5.09 10.166a1.25 1.25 0 0 0-.889.695c-.121.263-.128.56-.128 6.139 0 5.842 0 5.869.142 6.166.087.175.256.364.417.472l.277.182 5.864.02c3.95.014 5.951 0 6.113-.054.33-.094.573-.297.755-.627l.148-.284v-5.835c0-4.627-.02-5.889-.087-6.085-.128-.364-.533-.701-.95-.789-.425-.088-11.203-.094-11.661 0zm3.095 6.982c.572.243 1.01.924 1.01 1.579a1.69 1.69 0 0 1-1.705 1.686c-.667 0-1.18-.303-1.496-.89a1.72 1.72 0 0 1 .23-1.957c.47-.54 1.26-.708 1.96-.418zm4.36.04c.162.075.398.257.526.412.944 1.106.169 2.813-1.28 2.813-1.247 0-2.083-1.282-1.557-2.395.242-.533.647-.85 1.287-1.005.23-.054.728.027 1.024.176zm8.028-7.029c-.378.068-.762.351-.923.689-.142.29-.142.37-.142 3.568 0 3.029.013 3.285.128 3.535.148.324.364.533.694.675.216.087.715.1 3.471.1 2.986 0 3.243-.013 3.492-.127.667-.31.97-1.12.647-1.748-.128-.25-6.457-6.624-6.578-6.624-.04 0-.176-.027-.304-.054a1.461 1.461 0 0 0-.485-.014z" />
</svg>
{{- else if (eq $icon_name "flickr") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M5.334 6.666C2.3884 6.666 0 9.055 0 12c0 2.9456 2.3884 5.334 5.334 5.334 2.9456 0 5.332-2.3884 5.332-5.334 0-2.945-2.3864-5.334-5.332-5.334zm13.332 0c-2.9456 0-5.332 2.389-5.332 5.334 0 2.9456 2.3864 5.334 5.332 5.334C21.6116 17.334 24 14.9456 24 12c0-2.945-2.3884-5.334-5.334-5.334Z" />
</svg>
{{- else if (eq $icon_name "forgejo") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M16.7773 0c1.6018 0 2.9004 1.2986 2.9004 2.9005s-1.2986 2.9004-2.9004 2.9004c-1.0854 0-2.0315-.596-2.5288-1.4787H12.91c-2.3322 0-4.2272 1.8718-4.2649 4.195l-.0007 2.1175a7.0759 7.0759 0 0 1 4.148-1.4205l.1176-.001 1.3385.0002c.4973-.8827 1.4434-1.4788 2.5288-1.4788 1.6018 0 2.9004 1.2986 2.9004 2.9005s-1.2986 2.9004-2.9004 2.9004c-1.0854 0-2.0315-.596-2.5288-1.4787H12.91c-2.3322 0-4.2272 1.8718-4.2649 4.195l-.0007 2.319c.8827.4973 1.4788 1.4434 1.4788 2.5287 0 1.602-1.2986 2.9005-2.9005 2.9005-1.6018 0-2.9004-1.2986-2.9004-2.9005 0-1.0853.596-2.0314 1.4788-2.5287l-.0002-9.9831c0-3.887 3.1195-7.0453 6.9915-7.108l.1176-.001h1.3385C14.7458.5962 15.692 0 16.7773 0ZM7.2227 19.9052c-.6596 0-1.1943.5347-1.1943 1.1943s.5347 1.1943 1.1943 1.1943 1.1944-.5347 1.1944-1.1943-.5348-1.1943-1.1944-1.1943Zm9.5546-10.4644c-.6596 0-1.1944.5347-1.1944 1.1943s.5348 1.1943 1.1944 1.1943c.6596 0 1.1943-.5347 1.1943-1.1943s-.5347-1.1943-1.1943-1.1943Zm0-7.7346c-.6596 0-1.1944.5347-1.1944 1.1943s.5348 1.1943 1.1944 1.1943c.6596 0 1.1943-.5347 1.1943-1.1943s-.5347-1.1943-1.1943-1.1943Z" />
</svg>
{{- else if (eq $icon_name "freepik") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M5.737 17.28s3.423.84 7.61.162c4.188-.676 6.862-2.57 6.862-2.57s.28 3.943-4.967 5.33c-5.248 1.388-8.543.657-9.506-2.923zm-.62-3.104s4.491 1.361 8.728.344c4.237-1.016 5.94-2.568 5.94-2.568s-1.81-6.448-7.405-5.648c-5.597.8-8.061 4.414-7.263 7.872z"
        style="font-variation-settings:normal" stroke-linejoin="round" />
    <path
        d="M1.265 12.607c.159-1.98.561-3.898 2.08-5.701m5.148-3.29c2.006-.66 3.968-1.157 6.446-.844m5.202 2.98c1.192 1.275 1.963 2.163 2.594 3.815"
        style="font-variation-settings:normal" stroke="currentColor" stroke-linejoin="round" />
    <circle r=".989" cy="10.404" cx="14.746" fill="currentColor" stroke="none" />
    <circle cx="9.637" cy="11.305" r="1.477" fill="currentColor" stroke="none" />
</svg>
{{- else if (eq $icon_name "git") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" fill="currentColor" strock="currentColor"
    fill-rule="nonzero">
    <path
        d="M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371" />
</svg>
{{- else if (eq $icon_name "gitea") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="currentColor">
    <path
        d="M4.209 4.603c-.247 0-.525.02-.84.088-.333.07-1.28.283-2.054 1.027C-.403 7.25.035 9.685.089 10.052c.065.446.263 1.687 1.21 2.768 1.749 2.141 5.513 2.092 5.513 2.092s.462 1.103 1.168 2.119c.955 1.263 1.936 2.248 2.89 2.367 2.406 0 7.212-.004 7.212-.004s.458.004 1.08-.394c.535-.324 1.013-.893 1.013-.893s.492-.527 1.18-1.73c.21-.37.385-.729.538-1.068 0 0 2.107-4.471 2.107-8.823-.042-1.318-.367-1.55-.443-1.627-.156-.156-.366-.153-.366-.153s-4.475.252-6.792.306c-.508.011-1.012.023-1.512.027v4.474l-.634-.301c0-1.39-.004-4.17-.004-4.17-1.107.016-3.405-.084-3.405-.084s-5.399-.27-5.987-.324c-.187-.011-.401-.032-.648-.032zm.354 1.832h.111s.271 2.269.6 3.597C5.549 11.147 6.22 13 6.22 13s-.996-.119-1.641-.348c-.99-.324-1.409-.714-1.409-.714s-.73-.511-1.096-1.52C1.444 8.73 2.021 7.7 2.021 7.7s.32-.859 1.47-1.145c.395-.106.863-.12 1.072-.12zm8.33 2.554c.26.003.509.127.509.127l.868.422-.529 1.075a.686.686 0 0 0-.614.359.685.685 0 0 0 .072.756l-.939 1.924a.69.69 0 0 0-.66.527.687.687 0 0 0 .347.763.686.686 0 0 0 .867-.206.688.688 0 0 0-.069-.882l.916-1.874a.667.667 0 0 0 .237-.02.657.657 0 0 0 .271-.137 8.826 8.826 0 0 1 1.016.512.761.761 0 0 1 .286.282c.073.21-.073.569-.073.569-.087.29-.702 1.55-.702 1.55a.692.692 0 0 0-.676.477.681.681 0 1 0 1.157-.252c.073-.141.141-.282.214-.431.19-.397.515-1.16.515-1.16.035-.066.218-.394.103-.814-.095-.435-.48-.638-.48-.638-.467-.301-1.116-.58-1.116-.58s0-.156-.042-.27a.688.688 0 0 0-.148-.241l.516-1.062 2.89 1.401s.48.218.583.619c.073.282-.019.534-.069.657-.24.587-2.1 4.317-2.1 4.317s-.232.554-.748.588a1.065 1.065 0 0 1-.393-.045l-.202-.08-4.31-2.1s-.417-.218-.49-.596c-.083-.31.104-.691.104-.691l2.073-4.272s.183-.37.466-.497a.855.855 0 0 1 .35-.077z" />
</svg>
{{- else if (eq $icon_name "github") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
    </path>
</svg>
{{- else if (eq $icon_name "gitlab") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z">
    </path>
</svg>
{{- else if (eq $icon_name "goodreads") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.078.695.007 1.375-.013 2.07-.006.224 1.342 1.065 2.43 2.683 3.026 1.583.496 3.737.46 5.082-.174 1.351-.636 2.145-1.822 2.503-3.577.212-1.042.236-1.734.231-2.92l-.005-1.631h-.059c-1.245 2.564-3.315 3.53-5.59 3.475-5.74-.054-7.68-4.534-7.528-8.606.01-5.241 3.22-8.537 7.557-8.495 2.354-.14 4.605 1.362 5.554 3.37l.059.002.002-2.918 2.099.004-.002 15.717c-.193 7.04-4.376 7.89-8.209 7.811zm6.1-15.633c-.096-3.26-1.601-6.62-5.503-6.645-3.954-.017-5.625 3.592-5.604 6.85-.013 3.439 1.643 6.305 4.703 6.762 4.532.591 6.551-3.411 6.404-6.967z" />
</svg>
{{- else if (eq $icon_name "googleplaystore") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
    stroke-linejoin="round" stroke-width="2">
    <path
        d="M15.7 15.9 2.1 3.7m2.4-1.5c-.9-.5-2 0-2.4.8v18a2 2 0 0 0 2.4.8l16.8-8.6c.9-1.1.7-1.7 0-2.4zm11.2 6-13.6 12" />
</svg>
{{- else if (eq $icon_name "googlepodcasts") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M1.503 9.678c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zm20.994 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zM6.68 14.587c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.62c0-.83-.67-1.5-1.5-1.5zm0-9.817c-.83 0-1.5.67-1.5 1.5v5.357a1.5 1.5 0 003 0V6.258c0-.83-.67-1.5-1.5-1.5zm10.638 0c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 003 0V6.27c0-.83-.67-1.5-1.5-1.5zM12 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0V1.5c0-.83-.67-1.499-1.5-1.499zm0 19.355c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 103 .01v-1.64c0-.82-.67-1.5-1.5-1.5zm5.319-8.457c-.83 0-1.5.68-1.5 1.5v5.328a1.5 1.5 0 003 0v-5.329c0-.83-.67-1.5-1.5-1.5zM12 6.128c-.83 0-1.5.68-1.5 1.5v8.728a1.5 1.5 0 003 0V7.638c0-.83-.67-1.5-1.5-1.5z" />
</svg>
{{- else if (eq $icon_name "googlescholar") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M5.242 13.769L0.5 9.5 12 1l11.5 9-5.242 3.769C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
</svg>
{{- else if (eq $icon_name "gurushots") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.000000 76.000000" fill="currentColor" stroke-width="2"
    preserveAspectRatio="xMidYMid meet">
    <g>
        <path d="M25.7,30.5c0,0,0.3-26.9,1.5-26.9c7.9,0,20.2-0.6,22.3,0C53.3,4.8,39.5,10.9,25.7,30.5z" />
        <path d="M34.6,24.4c0,0,19-19,19.9-18.1c5.7,5.5,14.8,13.8,15.8,15.6C72.3,25.5,58.2,20.1,34.6,24.4z" />
        <path d="M45,26.1c0,0,26.9-0.3,26.9,0.9c0.2,7.9,1,20.2,0.5,22.2C71.3,53.1,65,39.4,45,26.1z" />
        <path d="M51.7,34.4c0,0,18.9,19.2,18,20C64.1,60.1,55.8,69.2,54,70.2C50.4,72.1,55.9,58,51.7,34.4z" />
        <path d="M50.2,45.3c0,0-0.1,26.9-1.3,26.9c-7.9,0.1-20.2,0.7-22.3,0.1C22.7,71.2,36.5,65.1,50.2,45.3z" />
        <path d="M41.5,51.8c0,0-19.2,18.8-20.1,17.9C15.7,64.1,6.7,55.8,5.7,53.9C3.8,50.3,17.8,55.9,41.5,51.8z" />
        <path d="M30.7,50.3c0,0-26.9-0.1-26.9-1.3C3.7,41,3,28.7,3.6,26.7C4.8,22.8,10.9,36.6,30.7,50.3z" />
        <path d="M24.2,41.6c0,0-18.9-19.2-18-20.1C11.8,15.9,20.1,6.8,22,5.8C25.6,3.9,20.1,17.9,24.2,41.6z" />
    </g>
</svg>
{{- else if (eq $icon_name "hackerone") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M7.207 0c-.4836 0-.8774.1018-1.1823.3002-.3044.2003-.4592.4627-.4592.7798v21.809c0 .2766.1581.5277.4752.7609.315.2335.7031.3501 1.1664.3501.4427 0 .8306-.1166 1.1678-.3501.3352-.231.5058-.4843.5058-.761V1.0815c0-.319-.1623-.5769-.4893-.7813C8.0644.1018 7.6702 0 7.207 0zm9.5234 8.662c-.4836 0-.8717.0981-1.1683.3007l-4.439 2.7822c-.1988.1861-.2841.4687-.2473.855.0342.3826.2108.747.5238 1.0907.3145.346.6662.5626 1.0684.6547.3963.0899.6973.041.8962-.143l1.7551-1.0951v9.7817c0 .2767.1522.5278.4607.761.3007.2335.6873.3501 1.1504.3501.463 0 .863-.1166 1.1983-.3501.3371-.2332.5058-.4843.5058-.761V9.7381c0-.3193-.165-.577-.4898-.7754-.3252-.2026-.7288-.3007-1.2143-.3007z" />
</svg>
{{- else if (eq $icon_name "hackerrank") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 35" preserveAspectRatio="xMidYMid meet" fill="currentColor"
    stroke-width="0" stroke="currentColor">
    <g>
        <path
            d="M0 32.95L3.86 32.95L7.73 32.95L7.73 27.23L7.73 21.52L11.59 21.52L15.45 21.52L15.45 27.23L15.45 32.95L19.31 32.95L23.18 32.95L23.18 17.5L23.18 2.05L19.31 2.05L15.45 2.05L15.45 7.77L15.45 13.48L11.59 13.48L7.73 13.48L7.73 7.77L7.73 2.05L3.86 2.05L0 2.05L0 17.5L0 32.95Z"
            id="i2pS2ila1d"></path>
        <path
            d="M27.19 32.95L38.63 32.95L50.06 32.95L50.06 17.5L50.06 2.05L38.63 2.05L27.19 2.05L27.19 17.5L27.19 32.95Z"
            id="dgDKP06E5"></path>
    </g>
</svg>
{{- else if (eq $icon_name "hackthebox") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="currentColor"
    stroke="none">
    <g>
        <path
            d="M11.9959.0008a1.1187 1.1187 0 00-.057.002.8993.8993 0 00-.2358.0498.9067.9067 0 00-.1652.079L1.9357 5.675a.889.889 0 00-.4444.7699c0 .006.0004.0128.0006.0192-.0002.007 0 .014 0 .0212V17.556a.889.889 0 00.469.7837l9.5983 5.5416c.018.0102.036.0197.054.0287v.002a.8568.8568 0 00.083.0348c0 .001.01.003.012.004.028.01.056.0177.085.0245.01.001.011.003.016.004.028.006.057.0112.086.0146 0 .0005.01.0009.014.001.03.003.061.005.091.005s.061-.002.091-.005c0-.0005.01-.0009.014-.001a.6831.6831 0 00.086-.0146c.01-.001.011-.002.016-.004a.9404.9404 0 00.085-.0245c0-.001.01-.003.012-.004a.8818.8818 0 00.083-.0347v-.002a1.086 1.086 0 00.054-.0287l9.5986-5.5416a.889.889 0 00.4689-.7837V6.4786c0-.009-.0006-.0172-.0008-.0258h.0003v-.008a.8886.8886 0 00-.3117-.6755c-.01-.008-.019-.0162-.029-.0241 0-.002-.01-.005-.01-.007a.8988.8988 0 00-.1074-.0705L12.4533.1267a.8872.8872 0 00-.4646-.1266zm.01 2.2523c.072 0 .1443.0187.209.056l6.5366 3.774c.2789.161.2789.5633 0 .7243l-6.5367 3.774a.4182.4182 0 01-.4182 0L5.26 6.8074c-.2788-.1609-.2789-.5633 0-.7243l6.5368-3.774a.4193.4193 0 01.209-.056zm-8.0801 6.458a.4145.4145 0 01.215.0565l6.524 3.7666a.417.417 0 01.2086.3612v7.5326c0 .3212-.3477.522-.626.3613l-6.5237-3.7666a.4172.4172 0 01-.2086-.3613V9.1288c0-.2408.1955-.414.4107-.4177zm16.1599 0c.215.004.4107.1768.4107.4177v7.5325c0 .149-.08.2868-.2087.3614l-6.5239 3.7666c-.278.1606-.6258-.0401-.6258-.3614v-7.5325c0-.149.08-.2867.2086-.3613l6.5238-3.7666a.415.415 0 01.2152-.0565z">
        </path>
    </g>
</svg>
{{- else if (eq $icon_name "imdb") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M22.3781 0H1.6218C.7411.0583.0587.7437.0018 1.5953l-.001 20.783c.0585.8761.7125 1.543 1.5559 1.6191A.337.337 0 0 0 1.6016 24h20.7971a.4579.4579 0 0 0 .0437-.002c.8727-.0768 1.5568-.8271 1.5568-1.7085V1.7098c0-.8914-.696-1.6416-1.584-1.7078A.3294.3294 0 0 0 22.3781 0zm0 .496a1.2144 1.2144 0 0 1 1.1252 1.2139v20.5797c0 .6377-.4875 1.1602-1.1045 1.2145H1.6016c-.5967-.0543-1.0645-.5297-1.1053-1.1258V1.6284C.5371 1.0185 1.0184.5364 1.6217.496h20.7564zM4.7954 8.2603v7.3636H2.8899V8.2603h1.9055zm6.5367 0v7.3636H9.6707v-4.9704l-.6711 4.9704H7.813l-.6986-4.8618-.0066 4.8618h-1.668V8.2603h2.468c.0748.4476.1492.9694.2307 1.5734l.2712 1.8713.4407-3.4447h2.4817zm2.9772 1.3289c.0742.0404.122.108.1417.2034.0279.0953.0345.3118.0345.6442v2.8548c0 .4881-.0345.7867-.0955.8954-.0609.1152-.2304.1695-.5018.1695V9.5211c.204 0 .3457.0205.4211.0681zm-.0211 6.0347c.4543 0 .8006-.0265 1.0245-.0742.2304-.0477.4204-.1357.5694-.2648.1556-.1218.2642-.298.3251-.5219.0611-.2238.1021-.6648.1021-1.3224v-2.5832c0-.6986-.0271-1.1668-.0742-1.4039-.041-.237-.1431-.4543-.3126-.6437-.1695-.1973-.4198-.3324-.7456-.421-.3191-.0808-.8542-.1285-1.7694-.1285h-1.4244v7.3636h2.3051zm5.14-1.7827c0 .3523-.0199.5762-.0544.6708-.033.0947-.1894.1424-.3046.1424-.1086 0-.19-.0477-.2238-.1351-.041-.0887-.0609-.2986-.0609-.6238v-1.9469c0-.3324.0199-.5423.0543-.6237.0338-.0808.1086-.122.2171-.122.1153 0 .2709.0412.3114.1425.041.0947.0609.2986.0609.6032v1.8926zm-2.4747-5.5809v7.3636h1.7157l.1152-.4675c.1556.1894.3251.3324.5152.4271.1828.0881.4608.1357.678.1357.3047 0 .5629-.0748.7802-.237.2165-.1562.3589-.3462.4198-.5628.0543-.2173.0887-.543.0887-.9841v-2.0675c0-.4409-.0139-.7324-.0344-.8681-.0199-.1357-.0742-.2781-.1695-.4204-.1021-.1425-.2437-.251-.4272-.3325-.1834-.0742-.3999-.1152-.6576-.1152-.2172 0-.4952.0477-.6846.1285-.1835.0887-.353.2238-.5086.4007V8.2603h-1.8309z" />
</svg>
{{- else if (eq $icon_name "instagram") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
</svg>
{{- else if (eq $icon_name "intigriti") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M19.9133 6.0364c-1.1056.574-3.7632 1.924-5.8999 3.0084-3.7738 1.9134-7.0267 3.593-7.1117 3.6674-.032.0213.0106.404.085.8611.574 3.4123 2.1473 6.4526 4.316 8.3555l.691.6165.6909-.5953c1.839-1.6158 3.3273-4.2202 4.0502-7.0585.1488-.5634.2764-1.3076.287-1.6477l.0213-.6166-2.9553-1.5308-.7335.372c-.3933.202-.7229.3934-.7229.4253 0 .0319.6698.3933 1.4883.7973l1.4882.7335-.0637.3827c-.3934 2.1686-1.6158 4.7517-2.9234 6.1868l-.606.6698-.4464-.4253c-.9248-.893-1.9347-2.615-2.5194-4.3053-.3295-.946-.7229-2.4343-.659-2.4875.0212-.0212 3.0402-1.5414 6.7077-3.391l6.6546-3.3699.2126.3508c.6697 1.0843.7229 2.5407.1382 3.7313-.6484 1.3181-1.754 1.9879-3.3698 2.0623l-.978.0425-.0638.3189c-.0319.1807-.0638.4784-.0638.6803 0 .319.032.3615.3827.4253.574.1063 1.7647-.032 2.4556-.287 1.6796-.6273 2.849-1.9135 3.3699-3.7313.4464-1.5627-.032-3.423-1.265-4.8475-.2127-.2445-.4465-.4464-.5103-.4464-.0744.0106-1.0312.4783-2.1473 1.0524zM1.3739 5.4836C.1833 6.8762-.2632 8.6196.1514 10.2354c.4677 1.8071 1.6583 3.136 3.3698 3.7737.691.2552 1.8816.3934 2.4556.287.4146-.085.4571-.202.319-1.031l-.0638-.3934-.978-.0425c-1.6265-.0744-2.7214-.7442-3.3805-2.0836-.574-1.148-.5315-2.5406.085-3.6143l.2658-.4571 3.8482 1.956 3.8588 1.956.7123-.3508c.3933-.202.7122-.404.7122-.4465 0-.0638-9.3441-4.805-9.4823-4.805-.0425 0-.2658.2233-.4996.4997zm6.3144-3.6144l-.2657.404.2338.0638c.691.1807 1.6903.9567 2.1048 1.637l.2127.3402-.5953.8824c-.5953.893-1.212 2.0304-1.212 2.2323 0 .0957.9568.6379 1.1375.6379.0426 0 .287-.404.5316-.8824.5315-1.0417.9567-1.6583 1.6583-2.4024l.4996-.5315.4465.4783c.7016.7548 1.2119 1.4883 1.6902 2.4237.2445.4678.4678.8824.489.9143.0638.0744 1.2013-.5422 1.2013-.6591 0-.1914-.6485-1.3713-1.2225-2.2111l-.5953-.8717.2232-.3508c.3295-.5316 1.2012-1.2757 1.754-1.499.2658-.1169.4784-.255.4784-.3082 0-.0638-.1063-.2445-.2445-.4146l-.2445-.2976-.5209.2445c-.3083.1488-.8717.5846-1.3394 1.0524l-.808.8079-.659-.606-.6485-.6165-.6484.6165-.6591.6166-.7548-.7654C9.3254 2.1882 8.2943 1.476 8.018 1.476c-.032 0-.1808.1807-.3296.3933z" />
</svg>
{{- else if (eq $icon_name "itchio") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.371 220.736" fill="currentColor">
    <path
        d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08C57.534 94.073 72.867 94.073 76.7 94.073zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" />
</svg>
{{- else if (eq $icon_name "juejin") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="m12 14.316 7.454-5.88-2.022-1.625L12 11.1l-.004.003-5.432-4.288-2.02 1.624 7.452 5.88Zm0-7.247 2.89-2.298L12 2.453l-.004-.005-2.884 2.318 2.884 2.3Zm0 11.266-.005.002-9.975-7.87L0 12.088l.194.156 11.803 9.308 7.463-5.885L24 12.085l-2.023-1.624Z" />
</svg>
{{- else if (eq $icon_name "kaggle") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" stroke="none">
    <path transform="matrix(.527027 0 0 .527027 -30.632288 -22.45559)" clip-path="url(#A)"
        d="M105.75 102.968c-.06.238-.298.357-.713.357H97.1c-.477 0-.89-.208-1.248-.625L82.746 86.028l-3.655 3.477v12.93c0 .595-.298.892-.892.892h-6.152c-.595 0-.892-.297-.892-.892V43.5c0-.593.297-.89.892-.89H78.2c.594 0 .892.298.892.89v36.288l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.15.713.445.12.357.09.624-.09.803L88.274 80.588l17.297 21.488c.237.238.297.535.18.892" />
</svg>
{{- else if (eq $icon_name "kakaotalk") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="m12 0c-6.667 0-10.686 4.11-11.709 8.183-1.062 4.224.793 8.271 4.855 10.689-.903 3.276-1.45 4.376-.587 4.965.968.662 2.362-.707 4.691-2.494l.957-.733c3.749.486 7.568-.593 10.272-2.913 2.27-1.948 3.52-4.553 3.52-7.334.001-5.715-5.382-10.363-11.999-10.363zm7.504 16.558c-2.454 2.106-5.965 3.049-9.388 2.524-.479-.077-2.592 1.773-4.312 2.971.194-.735.574-1.972.943-3.353.09-.336-.063-.69-.37-.854-4.527-2.431-5.362-6.396-4.633-9.297.884-3.508 4.397-7.049 10.256-7.049 5.79 0 10.5 3.976 10.5 8.862 0 2.338-1.064 4.538-2.996 6.196z" />
    <path d="m6.5 7.75h-3c-.992 0-.993 1.5 0 1.5h.75v4.25c0 .992 1.5.993 1.5 0v-4.25h.75c.992 0 .993-1.5 0-1.5z" />
    <path
        d="m10.196 8.222c-.001-.003-.004-.004-.005-.007-.246-.595-1.126-.623-1.383 0-.001.002-.003.004-.004.007l-2 5c-.154.384.033.821.418.975.958.386 1.129-.971 1.386-1.446h1.785l.411 1.028c.367.92 1.764.367 1.393-.557zm-.988 3.028.292-.731.292.731z" />
    <path d="m15.5 12.75h-1.25v-4.25c0-.992-1.5-.993-1.5 0v5c0 .414.336.75.75.75h2c.992 0 .993-1.5 0-1.5z" />
    <path
        d="m18.25 9.689v-1.189c0-.992-1.5-.993-1.5 0v5c0 .992 1.5.993 1.5 0v-1.469c1.605 1.746 1.657 2.219 2.25 2.219.63 0 .991-.747.569-1.239l-1.857-2.163 1.823-1.823c.002-.003.005-.005.007-.008.001-.001.002-.002.003-.003.681-.706-.373-1.747-1.07-1.05z" />
</svg>
{{- else if (eq $icon_name "keybase") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 76.3" fill="currentColor" stroke="none">
    <path
        d="M6.68 73.99c-.6-1.3-1.4-3.1-1.8-4l-.6-1.7-2 2.2-2 2.2-.2-4.2c-.3-6 .2-12.2 1.2-16.6 2.3-9.8 9.5-18.7 18.8-23.4l2.1-1-.5-1.5c-.3-.8-.6-2.5-.7-3.6l-.2-2.1-2.1-.2c-3.2-.3-4.9-1.2-6-3.5-.6-1.2-.6-1.4-.4-4.6.2-4.2.5-5.1 1.8-6.5 1.6-1.8 2.7-2.1 6.7-1.9 2.9.2 3.5.3 4.8.9.8.4 1.5.8 1.6.8.1 0 1-1.1 2.1-2.6l1.9-2.7 1.2.7c.7.4 1.5.9 1.9 1.1l.7.4-.6 1.5c-.3.8-.7 2.2-.8 2.9l-.2 1.4 1.7.2c6.1.6 10.7 4.3 12.4 9.9.5 1.8.5 5.3 0 7-.5 1.6-.5 1.7-.1 1.7.7 0 5.4 2.3 7.3 3.5 3.7 2.4 8 6.6 10.4 10.2 4.5 6.7 6.4 14 5.6 22-.4 4.8-1.3 8.6-2.9 12.3l-.6 1.4h-5l1.2-2.4c1.3-2.6 2.3-6.2 2.8-9.4.3-2.2.4-8.2.1-9.3l-.2-.7-1.3 1.4c-3.2 3.5-7.9 4.5-14.2 2.8-5.4-1.4-7.6-1.7-12.7-1.7-3.9 0-5.2.1-7.3.6-5.8 1.3-9.9 3.2-15.6 7.3-2.1 1.5-3.8 2.7-3.9 2.7-.1 0 .2-1 .6-2.3.4-1.3 1.1-3.4 1.5-4.8l.8-2.5-.9.9c-.5.5-1.9 1.9-3.1 3.2l-2.1 2.3.5 1.9c.6 2.5 2 5.6 3.5 7.9.6 1 1.1 1.8 1.1 1.9s-1.2.1-2.6.1h-2.6l-1.1-2.1zm8.8-24.2c4.8-5.1 8.7-9.2 8.8-9.2.1.1-.4 1.6-.9 3.3-3.3 10.4-4 12.4-3.9 12.5 0 0 1.2-.4 2.5-.9 8.5-3.7 18.4-4.2 28.9-1.4 4.7 1.2 6.5 1.2 8.8 0 1.3-.7 1.8-1.1 2.4-2.1 1.1-1.7 1.2-4.1.5-6.3-1.7-4.8-8.3-11-14.5-13.7-3.2-1.4-3.4-1.4-4.1-.7l-.6.6 2.6 3.2c1.4 1.7 2.9 3.6 3.1 4.1.6 1.2.7 3.1.1 4.3-.8 1.7-3.2 2.9-5.1 2.5-.8-.2-1.1-.1-1.9.5-2.2 1.6-4.6 1.2-6.6-1.2-1.6-1.8-2-2.7-2.1-4.5 0-.9-.3-2-.5-2.4-.3-.6-.4-1.3-.4-2.2l.1-1.4-1.3-.3c-1.8-.5-3.9-1.5-5.1-2.4-.6-.4-1.1-.8-1.3-.8s-1.5.6-2.9 1.3c-9.7 5-16 14.3-17 24.8-.1 1-.2 2.3-.3 2.8l-.1.9 1.1-1.1c.5-.5 4.9-5.1 9.7-10.2zm25.9-7.4c.9-.7 1.7-1.3 1.9-1.3.1 0 .4.3.7.7.5.8 1.4.8 1.8.1.3-.5.3-.6-5.6-7.8-3.5-4.3-4.2-5-4.7-5-1.2.1-.9 1 1 3.3l1.8 2.2-1 .8c-1.1 1-1.2 1.2-.5 1.8.5.5.6.4 1.6-.3l1.1-.7.7.6c.4.3.6.8.6.9 0 .2-.8.9-1.7 1.7-.9.7-1.6 1.5-1.6 1.7 0 .3.5 1.1 1.4 2.2.3.6.8.4 2.5-.9zm-10.3-14.2c.6-1.8 2.6-3.2 4.6-3.2 1.1 0 2.7.9 3.8 2.1l1 1.2.9-1.1c2.5-2.8 2.8-6.7.8-10.1-1.5-2.5-4.3-4-8.2-4.4-2.1-.2-2.6-.4-3.7-1.5l-.8-.8-.4.6c-.8 1.2-2.5 5.1-3 6.6-.7 2.3-.4 5.9.5 7.7.9 1.7 3.3 4 4 3.7.1.1.3-.3.5-.8zm-8.9-13.6c.2-.5.7-1.8 1.2-2.8.5-1 .9-2 .9-2.3 0-.9-1-1.3-3.7-1.5-2.4-.2-2.6-.1-3.1.4-.4.4-.6.9-.6 1.6 0 .6-.1 1.7-.2 2.6-.2 2.1.1 2.5 2.2 2.8 3.1.2 3 .2 3.3-.8zm-3.1-2.4c0-1.7.2-1.9 1.6-1.9h1.3v2.8h-2.8v-.9zm6.3 58.3c-.6-.6-.8-1-.8-2 0-1.9 1.1-3 2.9-3 1.7 0 2.9 1.2 2.9 2.9 0 1.8-1.1 2.8-3 2.9-1 0-1.4-.2-2-.8zm19.3.3a2.93 2.93 0 011.8-5.3c1.8 0 2.8 1.1 2.9 3 0 1.1-.1 1.4-.8 2s-1 .8-2 .8c-.9 0-1.5-.2-1.9-.5z" />
</svg>
{{- else if (eq $icon_name "keyoxide") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" stroke="currentColor" stroke-linecap="round"
    stroke-linejoin="round" stroke-width="1.3">
    <path
        d="m10.87 0c-0.4551 0-0.832 0.3769-0.832 0.832 0 0.4551 0.3769 0.832 0.832 0.832 0.4551 0 0.832-0.3769 0.832-0.832 0-0.4551-0.3769-0.832-0.832-0.832zm1.85 0.293c-0.5683 0-1.037 0.4688-1.037 1.037 0 0.2368 0.0807 0.4573 0.2168 0.6328-0.05687-0.007139-0.1151-0.01172-0.1738-0.01172-0.7683 0-1.398 0.6302-1.398 1.398 0 0.7683 0.6302 1.4 1.398 1.4 0.3773 0 0.7222-0.1523 0.9746-0.3984-0.00891 0.07397-0.01562 0.1483-0.01562 0.2246 0 0.5999 0.3126 1.131 0.7734 1.48l-2.586 2.012v-0.1152c0-1.817-1.482-3.299-3.299-3.299-1.817 0-3.299 1.482-3.299 3.299v6.828c-1.699e-4 -0.01435-0.001953-0.009604-0.001953 0.03516v5.883c-3.1e-6 1.819 1.482 3.301 3.301 3.301 1.73 0 3.115-1.354 3.25-3.051l3.744 2.494c1.512 1.008 3.566 0.5976 4.574-0.9141 1.008-1.512 0.5976-3.566-0.9141-4.574l-5.014-3.344 5.209-4.053c1.263-0.9824 1.63-2.72 0.9102-4.115-0.006296-0.01221-0.0141-0.02849-0.02148-0.04297 0.2572-0.2824 0.4141-0.657 0.4141-1.066 0-0.8712-0.7128-1.584-1.584-1.584-0.6345 0-1.187 0.3779-1.439 0.9199-0.08446-0.006921-0.1692-0.01237-0.2539-0.01367 0.0014-0.03013 0.003906-0.04019 0.003906-0.08008 0-1.036-0.8484-1.885-1.885-1.885-0.579 5.6e-6 -1.097 0.2653-1.443 0.6797 1.08e-4 -0.007109 0-0.01435 0-0.02148 0-0.3811-0.1542-0.7293-0.4043-0.9824 0.5684 0 1.037-0.4688 1.037-1.037 0-0.5683-0.4688-1.037-1.037-1.037zm-1.85 0.4219c0.06898 0 0.1172 0.04821 0.1172 0.1172s-0.04821 0.1172-0.1172 0.1172c-0.06898 0-0.1172-0.04821-0.1172-0.1172s0.0482-0.1172 0.1172-0.1172zm1.85 0.293c0.1822 0 0.3223 0.14 0.3223 0.3223 0 0.1822-0.14 0.3223-0.3223 0.3223-0.1822 0-0.3223-0.14-0.3223-0.3223 0-0.1822 0.14-0.3223 0.3223-0.3223zm-0.9941 1.658c0.3822 0 0.6836 0.3014 0.6836 0.6836 0 0.3822-0.3014 0.6855-0.6836 0.6855-0.3822 0-0.6836-0.3034-0.6836-0.6855 0-0.3822 0.3014-0.6836 0.6836-0.6836zm2.842 0.7402c0.6502-1.88e-5 1.17 0.5197 1.17 1.17 0 0.05687-0.005159 0.1097-0.005859 0.1914-6.61e-4 0.08173 0.01051 0.21 0.08008 0.3281 0.06857 0.1163 0.1972 0.2073 0.3047 0.2402 0.1075 0.03295 0.1919 0.03178 0.2617 0.03125 0.0602-4.678e-4 0.1197 0.005507 0.1797 0.009766 0.0172 0.6402 0.4194 1.188 0.9824 1.422 0.08721 0.03618 0.1774 0.06577 0.2715 0.08594 0.003893 8.346e-4 0.007816 0.001148 0.01172 0.001953 0.00711 0.001489 0.01434 0.002515 0.02148 0.003906 0.04462 0.008569 0.08895 0.01678 0.1348 0.02148 0.001285 1.341e-4 0.00262-1.31e-4 0.003906 0 0.05184 0.00519 0.1051 0.007812 0.1582 0.007812 0.09398 0 0.1858-0.009457 0.2754-0.02539 0.002495-4.438e-4 0.005321 4.557e-4 0.007812 0 0.003259-5.976e-4 0.006512-0.001335 0.009766-0.001953 0.08604-0.01629 0.1694-0.04058 0.25-0.07031 0.004443-0.001639 0.009247-0.002228 0.01367-0.003906 0.0038-0.00142 0.002259-6.138e-4 0.005859-0.001953 0.5338 1.086 0.2618 2.415-0.7188 3.178l-5.604 4.357a0.3573 0.3573 0 0 0 0.02148 0.5801l5.428 3.617c1.19 0.7933 1.51 2.394 0.7168 3.584-0.7933 1.19-2.394 1.51-3.584 0.7168l-4.25-2.832a0.3573 0.3573 0 0 0-0.5547 0.2969v0.3848c0 1.433-1.153 2.586-2.586 2.586-1.433 0-2.586-1.153-2.586-2.586v-5.883c0 0.02601 0.001373 0.01561 0.001953-0.03125a0.3573 0.3573 0 0 0 0-0.001953 0.3573 0.3573 0 0 0 0-0.001953v-6.828c0-1.43 1.154-2.584 2.584-2.584 1.43 0 2.584 1.154 2.584 2.584v0.8457a0.3573 0.3573 0 0 0 0.5762 0.2832l3.207-2.496s0.07527-0.04914 0.1484-0.1289c0.07317-0.07976 0.1932-0.2171 0.1641-0.4531-0.01519-0.1239-0.1002-0.2811-0.1855-0.3535-0.08537-0.07239-0.1288-0.08753-0.166-0.1133-0.3095-0.2145-0.502-0.5695-0.502-0.9609 0-0.6502 0.5177-1.17 1.168-1.17zm3.574 1.057c0.4851 0 0.8691 0.386 0.8691 0.8711 0 0.3632-0.2156 0.671-0.5273 0.8027-5.5e-4 2.323e-4 -0.001402-2.313e-4 -0.001953 0-0.008517 0.003475-0.0281 0.009073-0.03516 0.01172-0.04666 0.01751-0.09382 0.03145-0.1426 0.04102-0.002029 3.979e-4 -0.003828 0.00157-0.00586 0.001953-0.003817 6.812e-4 -0.007883-6.32e-4 -0.01172 0-0.04722 0.008255-0.09583 0.01367-0.1445 0.01367-0.06064 0-0.1188-0.006076-0.1758-0.01758s-0.1119-0.0289-0.1641-0.05078c-0.0522-0.02188-0.1021-0.04893-0.1484-0.08008s-0.08962-0.06619-0.1289-0.1055-0.07432-0.0826-0.1055-0.1289-0.0582-0.09624-0.08008-0.1484c-0.02188-0.0522-0.03928-0.1071-0.05078-0.1641-0.0115-0.05698-0.01758-0.1151-0.01758-0.1758 1e-5 -0.01046 0.001317-0.032 0.001954-0.04492 7.45e-4 -0.01496 4.8e-4 -0.03018 0.001953-0.04492 0.04418-0.4421 0.4124-0.7812 0.8672-0.7812z">
    </path>
</svg>
{{- else if (eq $icon_name "kofi") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 23 27" preserveAspectRatio="xMidYMid meet" fill="none"
    stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
</svg>
{{- else if (eq $icon_name "komoot") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round"
    stroke-linejoin="round" stroke-width="3">
    <path
        d="M24 2.5A21.5 21.5 0 0 0 7.17 37.38l10.22-10.22a7.32 7.32 0 0 1 11.79-8.34h0a7.32 7.32 0 0 1 1.43 8.34l10.22 10.22A21.5 21.5 0 0 0 24 2.5Zm0 25L10.64 40.82a21.41 21.41 0 0 0 26.72 0Z" />
</svg>
{{- else if (eq $icon_name "lastfm") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M10.599 17.211l-.881-2.393s-1.433 1.596-3.579 1.596c-1.9 0-3.249-1.652-3.249-4.296 0-3.385 1.708-4.596 3.388-4.596 2.418 0 3.184 1.568 3.845 3.578l.871 2.751c.871 2.672 2.523 4.818 7.285 4.818 3.41 0 5.722-1.045 5.722-3.801 0-2.227-1.276-3.383-3.635-3.935l-1.757-.384c-1.217-.274-1.577-.771-1.577-1.597 0-.936.736-1.487 1.952-1.487 1.323 0 2.028.495 2.147 1.679l2.749-.33c-.225-2.479-1.937-3.494-4.745-3.494-2.479 0-4.897.936-4.897 3.934 0 1.873.902 3.058 3.185 3.605l1.862.443c1.397.33 1.863.916 1.863 1.713 0 1.021-.992 1.441-2.869 1.441-2.779 0-3.936-1.457-4.597-3.469l-.901-2.75c-1.156-3.574-3.004-4.896-6.669-4.896C2.147 5.327 0 7.879 0 12.235c0 4.179 2.147 6.445 6.003 6.445 3.108 0 4.596-1.457 4.596-1.457v-.012z" />
</svg>
{{- else if (eq $icon_name "leetcode") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
</svg>
{{- else if (eq $icon_name "letterboxd") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
    <path
        d="M11.052 22.339V9.599H8.729V6.401h8.438v3.198h-2.328v12.766h5.234v-3.49h3.781v6.724H8.729v-3.26zM0 16c0 8.839 7.161 16 16 16s16-7.161 16-16S24.839 0 16 0S0 7.161 0 16z" />
</svg>
{{- else if (eq $icon_name "liberapay") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
    <g transform="translate(-78.37-208.06)">
        <path
            d="m104.28 271.1c-3.571 0-6.373-.466-8.41-1.396-2.037-.93-3.495-2.199-4.375-3.809-.88-1.609-1.308-3.457-1.282-5.544.025-2.086.313-4.311.868-6.675l9.579-40.05 11.69-1.81-10.484 43.44c-.202.905-.314 1.735-.339 2.489-.026.754.113 1.421.415 1.999.302.579.817 1.044 1.546 1.395.729.353 1.747.579 3.055.679l-2.263 9.278" />
        <path
            d="m146.52 246.14c0 3.671-.604 7.03-1.811 10.07-1.207 3.043-2.879 5.669-5.01 7.881-2.138 2.213-4.702 3.935-7.693 5.167-2.992 1.231-6.248 1.848-9.767 1.848-1.71 0-3.42-.151-5.129-.453l-3.394 13.651h-11.162l12.52-52.19c2.01-.603 4.311-1.143 6.901-1.622 2.589-.477 5.393-.716 8.41-.716 2.815 0 5.242.428 7.278 1.282 2.037.855 3.708 2.024 5.02 3.507 1.307 1.484 2.274 3.219 2.904 5.205.627 1.987.942 4.11.942 6.373m-27.378 15.461c.854.202 1.91.302 3.167.302 1.961 0 3.746-.364 5.355-1.094 1.609-.728 2.979-1.747 4.111-3.055 1.131-1.307 2.01-2.877 2.64-4.714.628-1.835.943-3.858.943-6.071 0-2.161-.479-3.998-1.433-5.506-.956-1.508-2.615-2.263-4.978-2.263-1.61 0-3.118.151-4.525.453l-5.28 21.948" />
    </g>
</svg>
{{- else if (eq $icon_name "lichess" ) -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path fill="currentColor" stroke="currentColor" stroke-linejoin="round"
        d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084C3.959 39.116-.506 27.392 4.683 17.567 9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z" />
</svg>
{{- else if (eq $icon_name "linkedin") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
</svg>
{{- else if (eq $icon_name "linktree") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path
    d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
</svg>
{{- else if (eq $icon_name "mastodon") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M21.58 13.913c-.29 1.469-2.592 3.121-5.238 3.396-1.379.184-2.737.368-4.185.276-2.368-.092-4.237-.551-4.237-.551 0 .184.014.459.043.643.308 2.294 2.317 2.478 4.22 2.57 1.922 0 3.633-.46 3.633-.46l.079 1.653s-1.344.734-3.738.918c-1.32.091-2.96-.092-4.869-.551-4.14-1.102-4.853-5.507-4.961-10.005-.034-1.285-.013-2.57-.013-3.58 0-4.589 3-5.966 3-5.966 1.513-.734 4.11-1.01 6.808-1.01h.067c2.699 0 5.296.276 6.81 1.01 0 0 3 1.377 3 5.967 0 0 .037 3.304-.419 5.69"
        stroke="currentColor" />
    <path
        d="M17.832 8.633v5h-1.978V8.78c0-1.023-.43-1.542-1.29-1.542-.95 0-1.427.616-1.427 1.834v2.655H11.17V9.072c0-1.218-.476-1.834-1.427-1.834-.86 0-1.29.52-1.29 1.542v4.852H6.475V8.633c0-1.022.26-1.834.782-2.434.538-.6 1.243-.909 2.118-.909 1.012 0 1.779.39 2.286 1.169l.492.827.493-.827c.507-.78 1.274-1.169 2.286-1.169.875 0 1.58.308 2.118.909.522.6.782 1.412.782 2.434"
        fill="currentColor" stroke="none" />
</svg>
{{- else if (eq $icon_name "matrix") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z" />
</svg>
{{- else if (eq $icon_name "medium") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.000000 76.000000" fill="currentColor" stroke-width="2"
    preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)">
        <path
            d="M0 380 l0 -380 380 0 380 0 0 380 0 380 -380 0 -380 0 0 -380z m334 85 c30 -63 57 -115 59 -115 2 0 16 30 31 68 15 37 37 88 49 115 l20 47 76 0 76 -1 -27 -20 -28 -21 0 -151 c0 -150 0 -151 27 -179 l27 -28 -109 0 -109 0 27 28 c26 27 27 32 26 143 0 131 3 134 -71 -58 -24 -62 -48 -113 -53 -113 -6 0 -17 16 -24 35 -7 19 -36 83 -64 142 l-52 108 -3 -98 c-3 -97 -2 -99 28 -133 16 -19 30 -39 30 -44 0 -6 -31 -10 -70 -10 -45 0 -70 4 -70 11 0 6 14 27 30 46 30 33 30 35 30 151 0 116 0 118 -31 155 l-30 37 75 0 76 0 54 -115z" />
    </g>
</svg>
{{- else if (eq $icon_name "microblog") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M-30.2 14.1c-1.4-.8-2.7-1.5-4.1-2.3-2.4-1.5-3.6-3.6-3.3-6.5.3-3 2.8-5.2 5.8-5.3h11c2.6 0 4.6 2.2 4.7 4.7 0 2.6-2 4.8-4.6 4.9h-2.8v.2c.2.2.5.3.7.5 1.2.7 2.4 1.3 3.6 2 2.5 1.5 3.7 4.5 2.9 7.2-.8 2.7-3.1 4.3-6.1 4.4H-33c-2.4 0-4.3-1.9-4.6-4.3-.3-2.3 1.2-4.5 3.5-5.1.6-.1 1.2-.1 1.7-.2h2.1c.1 0 .1-.1.1-.2zm4.3-3.8c-.1.3-.2.3-.2.4v3.9c0 1.1-.1 1.2-1.2 1.2h-5.1c-.4 0-.9 0-1.3.1-1.6.4-2.5 1.9-2.4 3.6.2 1.6 1.6 2.9 3.3 2.9h10.5c2.1 0 3.8-1.2 4.5-3.1.7-1.8.2-4.1-1.5-5.3-2.1-1.3-4.4-2.4-6.6-3.7zm-1.7 3.4v-4c0-1.4.1-1.5 1.4-1.5h5.3c1.5 0 2.7-1 3.1-2.4.6-2.2-1-4.2-3.4-4.3h-10.1c-2.4 0-4.3 1.3-4.9 3.4-.6 2.1.4 4.4 2.5 5.5 1.7 1 3.5 1.9 5.2 2.9.3.2.5.2.9.4zM12 2c5.5 0 10 4 10 8.9 0 1.8-.8 3.8-2.1 5.4-.9 1-1.5 2.3-1.6 3.7 0-.1-.1-.1-.2-.2-.4-.4-1.1-.7-1.7-.7-.3 0-.5 0-.8.1-1.2.4-2.4.6-3.6.6-5.5 0-10-4-10-8.9S6.5 2 12 2m0-2C5.4 0 0 4.9 0 11s5.4 10.9 12 10.9c1.4 0 2.8-.2 4.2-.7h.1c.1 0 .2 0 .3.1 1 1.3 2.5 2.3 4.2 2.7l.2-.1v-.3c-.7-.9-1-1.9-1-3s.4-2.1 1.2-2.9c1.5-1.8 2.6-4.2 2.6-6.7C24 4.9 18.5 0 12 0z" />
    <path
        d="M53.3 6.9c-.2-1-1-1.7-1.9-2-1.7-.4-8.6-.4-8.6-.4s-6.9 0-8.6.5c-1 .3-1.7 1-1.9 2-.3 1.7-.5 3.5-.5 5.3 0 1.8.1 3.6.5 5.3.3.9 1 1.7 1.9 1.9 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c1-.3 1.7-1 1.9-2 .3-1.7.5-3.5.5-5.3 0-1.8-.1-3.6-.5-5.3z" />
    <path d="m40.6 15.5 5.7-3.3-5.7-3.3z" />
    <path
        d="M12 5.4c.1 0 .3.1.3.2L13.5 9l3.7.1c.1 0 .3.1.3.2s0 .3-.1.4l-3 2.2 1.1 3.5c0 .1 0 .3-.1.4H15l-3-2.1-3 2.1h-.5c-.1-.1-.2-.2-.1-.4l1-3.4-3-2.2c-.1-.2-.1-.3-.1-.5 0-.1.2-.2.3-.2l3.7-.1 1.2-3.4c.2-.1.3-.2.5-.2z" />
</svg>
{{- else if (eq $icon_name "mixcloud") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2">
    <path
        d="M21.95 19.062c-.154 0-.31-.045-.445-.135-.369-.25-.465-.75-.225-1.11.738-1.094 1.125-2.381 1.125-3.719s-.387-2.625-1.125-3.721c-.249-.368-.145-.866.216-1.106.375-.249.87-.146 1.108.214.917 1.365 1.396 2.97 1.396 4.62 0 1.648-.479 3.254-1.396 4.619-.135.239-.39.359-.645.359l-.009-.021zM19.66 17.768c-.153 0-.308-.045-.445-.139-.369-.239-.463-.734-.215-1.094.489-.721.747-1.545.747-2.43 0-.855-.258-1.695-.747-2.431-.248-.36-.154-.854.215-1.095s.857-.15 1.106.225c.669.99 1.021 2.145 1.021 3.314 0 1.201-.352 2.34-1.021 3.315-.146.24-.406.36-.661.36v-.025zm-3.73-7.153c-.314-3.197-3.016-5.699-6.3-5.699-2.721 0-5.13 1.748-5.995 4.283C1.588 9.501 0 11.269 0 13.4c0 2.344 1.912 4.254 4.26 4.254h10.908c1.964 0 3.566-1.594 3.566-3.557 0-1.706-1.2-3.129-2.805-3.48v-.002zm-.762 5.446H4.263c-1.466 0-2.669-1.191-2.669-2.658 0-1.465 1.193-2.658 2.669-2.658.71 0 1.381.285 1.886.781.3.314.811.314 1.125 0 .3-.301.3-.811 0-1.125-.555-.542-1.231-.931-1.965-1.111.75-1.665 2.43-2.774 4.305-2.774 2.609 0 4.74 2.129 4.74 4.738 0 .512-.075 1.006-.24 1.486-.135.42.09.869.51 1.02.074.03.165.045.24.045.33 0 .645-.211.75-.54.105-.315.18-.63.225-.96.734.285 1.26 1.005 1.26 1.83 0 1.096-.885 1.979-1.965 1.979l.034-.053z" />
</svg>
{{- else if (eq $icon_name "monero") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M12 0C5.365 0 0 5.373 0 12.015c0 1.335.228 2.607.618 3.81h3.577V5.729L12 13.545l7.805-7.815v10.095h3.577c.389-1.203.618-2.475.618-3.81C24 5.375 18.635 0 12 0zm-1.788 15.307l-3.417-3.421v6.351H1.758C3.87 21.689 7.678 24 12 24s8.162-2.311 10.245-5.764h-5.04v-6.351l-3.386 3.421-1.788 1.79-1.814-1.79h-.005z" />
</svg>
{{- else if (eq $icon_name "neteasecloudmusic") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M10.98,23.65c-2.69,0-5.26-1.05-7.24-2.95C1.59,18.63,.35,15.72,.35,12.73,.35,8.21,3.21,4.11,7.46,2.52c.15-.05,.3-.08,.45-.08,.42,0,.78,.21,.93,.55,.12,.26,.13,.51,.03,.75-.12,.28-.38,.52-.7,.64-3.48,1.3-5.82,4.66-5.82,8.36,0,2.46,1.02,4.84,2.79,6.54,1.6,1.54,3.68,2.39,5.85,2.39,.1,0,.2,0,.29,0,3.49-.12,6.22-1.91,7.47-4.89,.08-.2,2.01-4.93-2.59-7.9-.41-.27-.89-.46-1.42-.58l-.6-.14,.18,.58c.21,.68,.78,2.52,.84,2.93,.07,.46,.07,.51,.1,.92v.18c0,2.3-1.89,4.19-4.22,4.19-2.2,0-3.97-1.73-4.23-4.1-.25-2.35,.74-4.4,2.73-5.61,.53-.32,1.11-.57,1.73-.75l.33-.1-.48-1.74c-.16-.54-.53-2.38,1.5-3.72,.57-.38,1.22-.57,1.91-.57,1.38,0,2.62,.74,3.12,1.23,.22,.22,.36,.56,.36,.9,0,.26-.08,.48-.23,.63-.15,.15-.37,.23-.63,.23-.33,0-.67-.13-.89-.35-.06-.05-.85-.66-1.7-.66-.31,0-.59,.08-.82,.24-.04,.03-.08,.05-.12,.08-.23,.19-.71,.73-.47,1.82l.09,.34,.02,.07h0s.35,1.29,.35,1.29h.25c1.24,.08,2.39,.42,3.32,1.01l.05,.03c4.82,3.12,4.29,8.12,3.34,10.33-1.54,3.67-4.99,5.95-9.23,6.1-.12,0-.25,0-.37,0Zm.82-15.26c-.43,.13-.84,.31-1.2,.53-.94,.57-2.01,1.68-1.79,3.71,.12,1.12,.87,2.33,2.24,2.33,1.23,0,2.24-1,2.24-2.22h0s.03-.21-.05-.71c-.07-.46-.91-3.1-1-3.4l-.1-.33-.33,.1Z" />
</svg>
{{- else if (eq $icon_name "nextcloud") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path 
        d="M12.018 6.537c-2.5 0-4.6 1.712-5.241 4.015-.56-1.232-1.793-2.105-3.225-2.105A3.569 3.569 0 0 0 0 12a3.569 3.569 0 0 0 3.552 3.553c1.432 0 2.664-.874 3.224-2.106.641 2.304 2.742 4.016 5.242 4.016 2.487 0 4.576-1.693 5.231-3.977.569 1.21 1.783 2.067 3.198 2.067A3.568 3.568 0 0 0 24 12a3.569 3.569 0 0 0-3.553-3.553c-1.416 0-2.63.858-3.199 2.067-.654-2.284-2.743-3.978-5.23-3.977zm0 2.085c1.878 0 3.378 1.5 3.378 3.378 0 1.878-1.5 3.378-3.378 3.378A3.362 3.362 0 0 1 8.641 12c0-1.878 1.5-3.378 3.377-3.378zm-8.466 1.91c.822 0 1.467.645 1.467 1.468s-.644 1.467-1.467 1.468A1.452 1.452 0 0 1 2.085 12c0-.823.644-1.467 1.467-1.467zm16.895 0c.823 0 1.468.645 1.468 1.468s-.645 1.468-1.468 1.468A1.452 1.452 0 0 1 18.98 12c0-.823.644-1.467 1.467-1.467z" />
</svg>
{{- else if (eq $icon_name "nuget") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" stroke-width="2">
    <g>
        <path
            d="M374.424959,454.856991 C327.675805,454.856991 289.772801,416.950177 289.772801,370.196324 C289.772801,323.463635 327.675805,285.535656 374.424959,285.535656 C421.174113,285.535656 459.077116,323.463635 459.077116,370.196324 C459.077116,416.950177 421.174113,454.856991 374.424959,454.856991 M205.565067,260.814741 C176.33891,260.814741 152.657469,237.109754 152.657469,207.901824 C152.657469,178.672728 176.33891,154.988907 205.565067,154.988907 C234.791225,154.988907 258.472666,178.672728 258.472666,207.901824 C258.472666,237.109754 234.791225,260.814741 205.565067,260.814741 M378.170817,95.6417786 L236.886365,95.6417786 C164.889705,95.6417786 106.479717,154.057639 106.479717,226.082702 L106.479717,367.360191 C106.479717,439.40642 164.889705,497.77995 236.886365,497.77995 L378.170817,497.77995 C450.209803,497.77995 508.577466,439.40642 508.577466,367.360191 L508.577466,226.082702 C508.577466,154.057639 450.209803,95.6417786 378.170817,95.6417786">
        </path>
        <path
            d="M84.6521577,46.0115787 C84.6521577,69.3990881 65.6900744,88.3419125 42.3260788,88.3419125 C18.9409203,88.3419125 0,69.3990881 0,46.0115787 C0,22.6452344 18.9409203,3.68124485 42.3260788,3.68124485 C65.6900744,3.68124485 84.6521577,22.6452344 84.6521577,46.0115787">
        </path>
    </g>
</svg>
{{- else if (eq $icon_name "orcid") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M128 256C198.7 256 256 198.7 256 128C256 57.3 198.7 0 128 0C57.3 0 0 57.3 0 128C0 198.7 57.3 256 128 256ZM70.9 186.2H86.3V127.5V79.0999H70.9V186.2ZM108.9 79.0999H150.5C190.1 79.0999 207.5 107.4 207.5 132.7C207.5 160.2 186 186.3 150.7 186.3H108.9V79.0999ZM124.3 172.4H148.8C183.7 172.4 191.7 145.9 191.7 132.7C191.7 111.2 178 93 148 93H124.3V172.4ZM78.6 66.8999C84.2 66.8999 88.7 62.2999 88.7 56.7999C88.7 51.2999 84.2 46.7 78.6 46.7C73 46.7 68.5 51.2 68.5 56.7999C68.5 62.2999 73 66.8999 78.6 66.8999Z"
        fill="currentColor" />
</svg>
{{- else if (eq $icon_name "osu!") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" stroke-width="2">
    <g>
        <path
            d="M 25 3 C 12.85 3 3 12.85 3 25 C 3 37.15 12.85 47 25 47 C 37.15 47 47 37.15 47 25 C 47 12.85 37.15 3 25 3 z M 25 5 C 36.028 5 45 13.972 45 25 C 45 36.028 36.028 45 25 45 C 13.972 45 5 36.028 5 25 C 5 13.972 13.972 5 25 5 z M 38 18 L 38 26 L 40 26 L 40 18 L 38 18 z M 13.798828 21.013672 C 13.611859 21.023047 13.423828 21.042313 13.236328 21.070312 C 12.140328 21.233312 11.272594 21.778766 10.683594 22.759766 C 10.273594 23.440766 10.084437 24.197234 10.023438 24.990234 C 9.9604375 25.800234 10.019438 26.597094 10.273438 27.371094 C 10.664437 28.562094 11.402078 29.409828 12.580078 29.798828 C 13.299078 30.036828 14.041203 30.059359 14.783203 29.943359 C 16.013203 29.750359 16.940859 29.104312 17.505859 27.945312 C 17.875859 27.186312 17.99 26.368266 18 25.572266 C 17.995 24.978266 17.937828 24.434344 17.798828 23.902344 C 17.456828 22.604344 16.703031 21.686234 15.457031 21.240234 C 14.915531 21.046734 14.359734 20.985547 13.798828 21.013672 z M 23.408203 21.017578 C 22.808203 21.006578 22.216391 21.056297 21.650391 21.279297 C 21.003391 21.534297 20.485219 21.944187 20.199219 22.617188 C 19.985219 23.120187 19.957391 23.649547 20.025391 24.185547 C 20.085391 24.659547 20.258047 25.078531 20.623047 25.394531 C 20.884047 25.620531 21.171187 25.804016 21.492188 25.916016 C 21.926188 26.068016 22.370687 26.187891 22.804688 26.337891 C 23.045687 26.420891 23.278813 26.530531 23.507812 26.644531 C 23.647813 26.713531 23.722719 26.849859 23.761719 27.005859 C 23.861719 27.412859 23.717984 27.732219 23.333984 27.949219 C 23.046984 28.111219 22.734063 28.162734 22.414062 28.177734 C 21.718062 28.211734 21.054203 28.053781 20.408203 27.800781 C 20.368203 27.784781 20.327156 27.770859 20.285156 27.755859 C 20.271156 27.784859 20.262859 27.801359 20.255859 27.818359 C 20.030859 28.340359 19.884219 28.883172 19.824219 29.451172 C 19.817219 29.522172 19.839344 29.550219 19.902344 29.574219 C 20.468344 29.787219 21.048391 29.936469 21.650391 29.980469 C 22.347391 30.030469 23.042656 30.025125 23.722656 29.828125 C 24.345656 29.647125 24.908562 29.355563 25.351562 28.851562 C 25.862562 28.268563 26.041234 27.574734 25.990234 26.802734 C 25.930234 25.883734 25.518453 25.210703 24.689453 24.845703 C 24.377453 24.708703 24.049516 24.612047 23.728516 24.498047 C 23.362516 24.367047 22.986859 24.257562 22.630859 24.101562 C 22.304859 23.958563 22.187594 23.610625 22.308594 23.265625 C 22.399594 23.005625 22.612609 22.900844 22.849609 22.839844 C 23.300609 22.723844 23.756125 22.749562 24.203125 22.851562 C 24.559125 22.932563 24.907484 23.053156 25.271484 23.160156 C 25.270484 23.160156 25.27625 23.151578 25.28125 23.142578 C 25.52025 22.638578 25.658656 22.106781 25.722656 21.550781 C 25.731656 21.470781 25.684719 21.462312 25.636719 21.445312 C 24.914719 21.189312 24.174203 21.031578 23.408203 21.017578 z M 29.070312 21.113281 C 28.703937 21.113156 28.339656 21.146391 27.972656 21.212891 C 27.970656 21.252891 27.966797 21.286313 27.966797 21.320312 C 27.966797 22.825312 27.96575 24.332891 27.96875 25.837891 C 27.96975 26.435891 28.004203 27.031328 28.158203 27.611328 C 28.419203 28.596328 28.944094 29.338172 29.871094 29.701172 C 30.361094 29.893172 30.875625 29.943469 31.390625 29.980469 C 32.584625 30.066469 33.749625 29.880813 34.890625 29.507812 C 34.972625 29.480813 34.998047 29.444609 34.998047 29.349609 C 34.995047 26.679609 34.996094 24.009844 34.996094 21.339844 L 34.996094 21.214844 C 34.261094 21.081844 33.540594 21.079844 32.808594 21.214844 C 32.808594 21.268844 32.807641 21.316234 32.806641 21.365234 C 32.806641 23.514234 32.807547 25.6635 32.810547 27.8125 C 32.810547 27.9195 32.780547 27.956563 32.685547 27.976562 C 32.267547 28.063563 31.846828 28.088297 31.423828 28.029297 C 30.835828 27.947297 30.445687 27.602375 30.304688 26.984375 C 30.234688 26.678375 30.186594 26.358922 30.183594 26.044922 C 30.170594 24.485922 30.174828 22.926188 30.173828 21.367188 L 30.173828 21.214844 C 29.804328 21.147844 29.436688 21.113406 29.070312 21.113281 z M 13.798828 22.865234 C 13.993828 22.850234 14.192766 22.859531 14.384766 22.894531 C 14.826766 22.973531 15.144703 23.238344 15.345703 23.652344 C 15.545703 24.063344 15.625109 24.504031 15.662109 24.957031 C 15.678109 25.148031 15.6815 25.339844 15.6875 25.464844 C 15.6795 26.076844 15.643891 26.618719 15.462891 27.136719 C 15.307891 27.583719 15.060516 27.949328 14.603516 28.111328 C 14.208516 28.251328 13.808109 28.254094 13.412109 28.121094 C 13.057109 28.003094 12.814438 27.750156 12.648438 27.410156 C 12.472437 27.049156 12.386609 26.663625 12.349609 26.265625 C 12.287609 25.607625 12.282594 24.947781 12.433594 24.300781 C 12.488594 24.064781 12.571781 23.830281 12.675781 23.613281 C 12.902781 23.140281 13.297828 22.903234 13.798828 22.865234 z M 38 28 L 38 30 L 40 30 L 40 28 L 38 28 z">
        </path>
    </g>
</svg>
{{- else if (eq $icon_name "overcast") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M12 24C5.389 24.018.017 18.671 0 12.061V12C0 5.35 5.351 0 12 0s12 5.35 12 12c0 6.649-5.351 12-12 12zm0-4.751l.9-.899-.9-3.45-.9 3.45.9.899zm-1.15-.05L10.4 20.9l1.05-1.052-.6-.649zm2.3 0l-.6.601 1.05 1.051-.45-1.652zm.85 3.102L12 20.3l-2 2.001c.65.1 1.3.199 2 .199s1.35-.05 2-.199zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c-.008 4.468 2.825 8.446 7.051 9.899l2.25-8.35c-.511-.372-.809-.968-.801-1.6 0-1.101.9-2.001 2-2.001s2 .9 2 2.001c0 .649-.301 1.2-.801 1.6l2.25 8.35c4.227-1.453 7.06-5.432 7.051-9.899 0-5.799-4.701-10.5-10.5-10.5zm6.85 15.7c-.255.319-.714.385-1.049.15-.313-.207-.4-.628-.194-.941.014-.021.028-.04.044-.06 0 0 1.35-1.799 1.35-4.35s-1.35-4.35-1.35-4.35c-.239-.289-.198-.719.091-.957.02-.016.039-.031.06-.044.335-.235.794-.169 1.049.15.1.101 1.65 2.15 1.65 5.2S18.949 17.1 18.85 17.2zm-3.651-1.95c-.3-.3-.249-.85.051-1.15 0 0 .75-.799.75-2.1s-.75-2.051-.75-2.1c-.3-.301-.3-.801-.051-1.15.232-.303.666-.357.969-.125.029.022.056.047.082.074C16.301 8.75 17.5 10 17.5 12s-1.199 3.25-1.25 3.301c-.301.299-.75.25-1.051-.051zm-6.398 0c-.301.301-.75.35-1.051.051C7.699 15.199 6.5 14 6.5 12s1.199-3.199 1.25-3.301c.301-.299.801-.299 1.051.051.3.3.249.85-.051 1.15 0 .049-.75.799-.75 2.1s.75 2.1.75 2.1c.3.3.351.799.051 1.15zm-2.602 2.101c-.335.234-.794.169-1.05-.15C5.051 17.1 3.5 15.05 3.5 12s1.551-5.1 1.649-5.2c.256-.319.715-.386 1.05-.15.313.206.4.628.194.941-.013.02-.028.04-.043.059C6.35 7.65 5 9.449 5 12s1.35 4.35 1.35 4.35c.25.3.15.75-.151 1.001z" />
</svg>
{{- else if (eq $icon_name "patreon") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 569 546" fill="currentColor" stroke="none">
    <g>
        <circle cx="362.589996" cy="204.589996" data-fill="1" r="204.589996"></circle>
        <rect data-fill="1" height="545.799988" width="100" x="0" y="0"></rect>
    </g>
</svg>
{{- else if (eq $icon_name "paypal") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M7.144 19.532l1.049-5.751c.11-.606.691-1.002 1.304-.948 2.155.192 6.877.1 8.818-4.002 2.554-5.397-.59-7.769-6.295-7.769H7.43a1.97 1.97 0 0 0-1.944 1.655L2.77 19.507a.857.857 0 0 0 .846.994h2.368a1.18 1.18 0 0 0 1.161-.969zM7.967 22.522a.74.74 0 0 0 .666.416h2.313c.492 0 .923-.351 1.003-.837l.759-4.601c.095-.523.597-.866 1.127-.819 1.86.166 5.567-.118 6.85-3.821.554-1.6.705-2.954.408-4.018"
        style="font-variation-settings:normal" stroke="currentColor" stroke-linejoin="miter" />
</svg>
{{- else if (eq $icon_name "peertube") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545" />
</svg>
{{- else if or (eq $icon_name "pgpkey") (eq $icon_name "key") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 18l2-2h2l1.36-1.36a6.5 6.5 0 1 0-3.997-3.992L2 18v4h4l2-2v-2z" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="17" cy="7" r="1" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>
{{- else if (eq $icon_name "phone") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="4" width="6" height="1" rx="0.5" fill="currentColor" />
    <path
        d="M12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20Z"
        fill="currentColor" />
    <rect x="5" y="1" width="14" height="22" rx="2" stroke="currentColor" stroke-width="2" />
</svg>
{{- else if (eq $icon_name "pinterest") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
</svg>
{{- else if (eq $icon_name "pixelfed") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path id="pixelfed"
        d="m12 .99649c-6.077 0-11.004 4.9264-11.004 11.004 0 6.077 4.9264 11.004 11.004 11.004 6.077 0 11.004-4.9264 11.004-11.004 0-6.077-4.9264-11.004-11.004-11.004zm-1.7683 6.7017h2.9133c1.9016 1e-6 3.4428 1.5006 3.4428 3.3518 0 1.8512-1.5414 3.3526-3.4428 3.3526h-2.0185l-2.8816 2.756v-7.5262c0-1.068.8896-1.9342 1.9867-1.9342z"
        fill="none" stroke="currentColor" stroke-width="1.993" />
</svg>
{{- else if (eq $icon_name "pleroma") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M6.36 0A1.868 1.868 0 004.49 1.868V24h5.964V0zm7.113 0v12h4.168a1.868 1.868 0 001.868-1.868V0zm0 18.036V24h4.168a1.868 1.868 0 001.868-1.868v-4.096Z" />
</svg>
{{- else if (eq $icon_name "pocketcasts") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M12,0C5.372,0,0,5.372,0,12c0,6.628,5.372,12,12,12c6.628,0,12-5.372,12-12 C24,5.372,18.628,0,12,0z M15.564,12c0-1.968-1.596-3.564-3.564-3.564c-1.968,0-3.564,1.595-3.564,3.564 c0,1.968,1.595,3.564,3.564,3.564V17.6c-3.093,0-5.6-2.507-5.6-5.6c0-3.093,2.507-5.6,5.6-5.6c3.093,0,5.6,2.507,5.6,5.6H15.564z M19,12c0-3.866-3.134-7-7-7c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7v2.333c-5.155,0-9.333-4.179-9.333-9.333 c0-5.155,4.179-9.333,9.333-9.333c5.155,0,9.333,4.179,9.333,9.333H19z" />
</svg>
{{- else if (eq $icon_name "printables") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.678 4.8 12 9.6v9.6l8.322-4.8V4.8L12 0ZM12 19.2l-8.322-4.8V24Z" />
</svg>
{{- else if (eq $icon_name "qq") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path transform="scale(0.04) translate(75 40)" stroke-width="50"
        d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z">
    </path>
</svg>
{{- else if (eq $icon_name "reddit") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1">
    <path
        d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
</svg>
{{- else if (eq $icon_name "raycast") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M934.302 511.971L890.259 556.017L723.156 388.902V300.754L934.302 511.971ZM511.897 89.5373L467.854 133.583L634.957 300.698H723.099L511.897 89.5373ZM417.334 184.275L373.235 228.377L445.776 300.923H533.918L417.334 184.275ZM723.099 490.061V578.209L795.641 650.755L839.74 606.652L723.099 490.061ZM697.868 653.965L723.099 628.732H395.313V300.754L370.081 325.987L322.772 278.675L278.56 322.833L325.869 370.146L300.638 395.379V446.071L228.097 373.525L183.997 417.627L300.638 534.275V634.871L133.59 467.925L89.4912 512.027L511.897 934.461L555.996 890.359L388.892 723.244H489.875L606.516 839.892L650.615 795.79L578.074 723.244H628.762L653.994 698.011L701.303 745.323L745.402 701.221L697.868 653.965Z" />
</svg>
{{- else if (eq $icon_name "researchgate") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z" />
</svg>
{{- else if (eq $icon_name "rootme") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="6.97 3.98 22.02 28.02" fill="currentColor" stroke="currentColor">
    <path
        d="m28.9 16.5c0.2-1.9-0.2-3.8-1-5.6-1.4-2.9-4-5.1-7.1-5.9-0.2 0-0.4-0.2-0.5-0.4-0.3-0.4-0.7-0.6-1.2-0.6-0.5 0.1-0.9 0.5-0.9 0.9-0.1 0.5 0.2 1 0.6 1.2 0.2 0.1 0.2 0.3 0.2 0.5v3.6c0 0.4 0.1 0.4 0.4 0.3l1.3-0.5h0.1c0.3-0.1 0.6 0.2 0.7 0.5v1.5c0 0.1-0.1 0.2-0.1 0.3-0.8 0.9-1.7 1.8-2.7 2.5l-0.2 0.2c-0.3-0.9-0.7-1.7-1.1-2.5-0.1-0.2-0.1-0.4 0-0.5 0.2-0.3 0.2-0.7 0-1s-0.6-0.4-1-0.3c-0.3 0.1-0.6 0.4-0.6 0.8s0.2 0.7 0.6 0.8c0.2 0 0.4 0.2 0.4 0.4 0 0.1 0.1 0.2 0.2 0.4l1 2.4-2.2 1.4h-0.3c-0.9-0.3-1.8-0.5-2.7-0.8-0.6-0.3-1.2-0.2-1.8 0.1-0.1 0.1-0.3 0.1-0.5 0-0.3-0.3-0.8-0.3-1.1 0-0.3 0.2-0.4 0.7-0.2 1 0.1 0.4 0.5 0.6 0.9 0.5 0.4 0 0.7-0.4 0.8-0.8v-0.2c0.4-0.1 0.8-0.4 1.1-0.4 1 0.2 2 0.6 3 0.9v0.1c-1.8 1-3.6 1.8-5.5 2.5-0.4 0.1-0.8-0.1-1-0.5-0.6-1.8-0.8-3.6-0.5-5.3 0-0.3 0.1-0.3 0.4-0.3h4.2c0.2 0 0.4 0.1 0.4 0.2 0.2 0.3 0.6 0.5 1 0.4s0.6-0.5 0.6-0.8c0-0.4-0.3-0.7-0.6-0.8-0.4-0.1-0.7 0.1-0.9 0.4-0.1 0.2-0.2 0.2-0.4 0.2h-4.4v-0.1-0.3c1-3.4 3.7-6.1 7.2-7 0.1 0 0.3 0 0.4 0.1 0.3 0.4 0.9 0.5 1.4 0.2 0.4-0.2 0.7-0.7 0.6-1.2-0.1-0.6-0.7-1-1.3-0.9-0.4 0.1-0.7 0.3-0.9 0.7l-0.3 0.3c-4.2 0.9-7.4 4.3-8.2 8.5-0.4 2-0.2 4 0.5 5.9 0.1 0.2 0.1 0.4 0 0.5-0.3 0.5-0.1 1.2 0.4 1.4 0.2 0.1 0.2 0.2 0.2 0.4v3.9c0 0.2 0.1 0.4 0.3 0.6 1 0.7 2.1 1.4 3.1 2.2 0.2 0.1 0.3 0.3 0.3 0.5v2.4c0 0.5 0.1 0.6 0.6 0.6h10.8c0.4 0 0.6-0.2 0.6-0.6v-2.4c0-0.2 0.1-0.4 0.2-0.5 1-0.7 2.1-1.4 3.1-2.2 0.2-0.1 0.3-0.4 0.3-0.6v-3.7c0-0.2 0.1-0.4 0.2-0.5 0.5-0.3 0.6-0.9 0.3-1.4-0.1-0.2-0.1-0.4 0-0.5 0.5-1 0.7-2.1 0.8-3.1zm-12.2-11.9c0.3 0 0.5 0.3 0.5 0.5 0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5 0.2-0.5 0.5-0.5zm2.6 1c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.3 0.4 0.6c0 0.2-0.2 0.4-0.4 0.4zm1.5 3.7c0 0.1-0.1 0.2-0.1 0.2l-1.3 0.5v-3.6c0.3-0.3 0.7-0.5 1.1-0.6 1 0.3 2 0.7 2.9 1.3 0.1 0.1 0.2 0.2 0.2 0.3-0.1 1.5-0.7 3-1.6 4.2v-1.1c0-0.1 0.1-0.2 0.2-0.2 0.4-0.2 0.5-0.6 0.4-1s-0.5-0.6-0.9-0.6c-0.4-0.1-0.8 0.2-0.9 0.6zm-12.1 11.8c-0.3 0-0.5-0.2-0.5-0.5s0.3-0.5 0.5-0.5c0.3 0 0.6 0.2 0.6 0.4 0 0.3-0.2 0.6-0.4 0.6 0 0.1-0.1 0.1-0.2 0zm19-0.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.3-0.5-0.5c0-0.3 0.2-0.5 0.5-0.5h0.1c0.2 0 0.4 0.2 0.4 0.5zm-0.3-1.3c0 0.2-0.2 0.3-0.3 0.3-0.4 0-0.8 0.3-0.9 0.8-0.2 0.5 0 1 0.5 1.3 0.2 0.1 0.3 0.3 0.3 0.5v3.4c0 0.2-0.1 0.4-0.3 0.5l-3.1 2.2c-0.2 0.1-0.4 0.4-0.4 0.7v2c0 0.4-0.1 0.4-0.5 0.4h-0.9-0.1c-0.2 0-0.3-0.2-0.3-0.4v-0.7c0-0.2-0.1-0.4-0.4-0.5h-0.1c-0.2 0-0.4 0.2-0.4 0.5v0.7c0 0.2-0.1 0.4-0.4 0.4h-1.4c-0.3 0-0.4-0.1-0.4-0.4v-1.1c0-0.3-0.2-0.5-0.4-0.5-0.3 0-0.4 0.2-0.4 0.5v1.1c0 0.3-0.1 0.4-0.4 0.4h-1.3c-0.3 0-0.4-0.1-0.4-0.4v-1c0-0.2-0.2-0.4-0.4-0.4s-0.4 0.2-0.4 0.5v0.7s-0.1 0.4-0.4 0.4h-1c-0.3 0-0.4-0.1-0.4-0.4v-2c0-0.3-0.1-0.6-0.4-0.8l-3-2.1c-0.2-0.1-0.2-0.3-0.2-0.5v-3.6c0-0.1 0.1-0.3 0.2-0.4 0.3-0.2 0.4-0.5 0.4-0.8 0-0.2 0.1-0.3 0.3-0.4 3-1.1 5.8-2.6 8.4-4.4 1.9-1.3 3.5-2.9 4.7-4.9 0.3-0.5 0.5-1 0.7-1.6 0.2-0.5 0.3-1.1 0.4-1.7 0.1 0.1 0.3 0.2 0.4 0.4 1.7 1.5 2.8 3.6 3.2 5.8 0.1 0.7-0.1 1.5-0.4 2.1-0.7 1.5-1.8 2.7-3.1 3.6-1.9 1.4-4.1 2.6-6.3 3.4-0.2 0.1-0.4 0.1-0.6 0-1.9-0.4-3.8-0.9-5.6-1.6l-0.2-0.1v0.1c0.2 0.2 0.5 0.4 0.7 0.6 0.2 0.1 0.3 0.3 0.2 0.5-0.1 0.4-0.1 0.7 0 1.1 0.3 1.2 1.6 1.9 2.8 1.6 0.6-0.1 1.2-0.6 1.5-1.2 0.1-0.2 0.3-0.3 0.5-0.3 0.4 0 0.8 0.2 1.1 0.5 0.4 0.5 0.9 0.9 1.4 1.4s1.2 0.6 1.8 0.2c0.9-0.5 1.9-1.1 2.8-1.6 0.3-0.2 0.5-0.5 0.5-0.9v-3c0-0.1 0-0.2 0.1-0.3 0.5-0.5 1-0.9 1.4-1.4 0.5-0.5 0.8-1 1.3-1.5 0 0.9-0.2 1.6-0.4 2.3zm-11.2 4.5c-0.3 0.6-0.9 0.8-1.5 0.6-0.7-0.2-1.1-0.8-1.1-1.6l2.6 1z">
    </path>
    <path
        d="m16.8 7.4c-0.4 0-0.7 0.2-0.9 0.6l-0.3 0.3c-0.4 0.2-0.9 0.3-1.3 0.5-0.2 0-0.3 0.2-0.3 0.4v0.9h-1c-0.2 0-0.3-0.1-0.4-0.2-0.2-0.3-0.6-0.5-1-0.4-0.3 0.1-0.6 0.4-0.6 0.8s0.3 0.7 0.6 0.8c0.4 0.1 0.8-0.1 1-0.4 0.1-0.1 0.2-0.2 0.4-0.2h1.2c0.2 0 0.3-0.1 0.3-0.3v-0.8c0-0.2 0.1-0.3 0.2-0.3l1-0.4c0.2-0.1 0.3-0.1 0.4 0.1 0.3 0.3 0.7 0.4 1 0.2s0.5-0.6 0.4-1c0-0.4-0.3-0.6-0.7-0.6z">
    </path>
    <path
        d="m18.3 26.4c-0.2-0.3-0.4-0.3-0.6 0s-0.5 0.7-0.8 1-0.2 0.4 0 0.5 0.4 0.1 0.5-0.1c0.2-0.2 0.5-0.3 0.8-0.2 0.2 0.1 0.3 0.2 0.4 0.3h0.4c0.1 0 0.1-0.2 0.2-0.3-0.1-0.1-0.1-0.2-0.2-0.3l-0.7-0.9z">
    </path>
</svg>
{{- else if (eq $icon_name "rss") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
</svg>
{{- else if (eq $icon_name "serverfault") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M24 18.185v2.274h-4.89v-2.274H24zm-24-.106h11.505v2.274H0v-2.279.005zm12.89 0h4.89v2.274h-4.89v-2.279.005zm6.221-3.607H24v2.274h-4.89l.001-2.274zM0 14.367h11.505v2.274H0v-2.274zm12.89 0h4.89v2.274h-4.89v-2.274zm6.221-3.346H24v2.273h-4.89l.001-2.273zM0 10.916h11.505v2.271H0v-2.271zm12.89 0h4.89v2.271h-4.89v-2.271zm6.22-3.609H24v2.279h-4.89V7.307zM0 7.206h11.505V9.48H0V7.201v.005zm12.89 0h4.89V9.48h-4.89V7.201v.005zm6.221-3.556H24v2.276h-4.89v-2.28l.001.004zM0 3.541h11.505v2.274H0V3.541zm12.89 0h4.89v2.274h-4.89V3.541z" />
</svg>
{{- else if (eq $icon_name "sessionmessenger") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M8.7 14.1c-1.4-.8-2.7-1.5-4.1-2.3C2.2 10.3 1 8.2 1.3 5.3 1.6 2.3 4.1.1 7.1 0h11c2.6 0 4.6 2.2 4.7 4.7 0 2.6-2 4.8-4.6 4.9h-2.8v.2c.2.2.5.3.7.5 1.2.7 2.4 1.3 3.6 2 2.5 1.5 3.7 4.5 2.9 7.2-.8 2.7-3.1 4.3-6.1 4.4H5.9c-2.4 0-4.3-1.9-4.6-4.3-.3-2.3 1.2-4.5 3.5-5.1.6-.1 1.2-.1 1.7-.2h2.1s.1-.1.1-.2zm4.2-3.8c-.1.3-.2.3-.2.4v3.9c0 1.1-.1 1.2-1.2 1.2H6.4c-.4 0-.9 0-1.3.1-1.6.4-2.5 1.9-2.4 3.6.2 1.6 1.6 2.9 3.3 2.9h10.5c2.1 0 3.8-1.2 4.5-3.1.7-1.8.2-4.1-1.5-5.3-2-1.3-4.3-2.4-6.6-3.7zm-1.6 3.4v-4c0-1.4.1-1.5 1.4-1.5H18c1.5 0 2.7-1 3.1-2.4.6-2.2-1-4.2-3.4-4.3H7.6c-2.4 0-4.3 1.3-4.9 3.4-.6 2.1.4 4.4 2.5 5.5 1.7 1 3.5 1.9 5.2 2.9.3.2.5.2.9.4z">
    </path>
</svg>
{{- else if (eq $icon_name "shutterstock") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <rect ry="5" rx="5" height="20" width="20" y="2" x="2" />
    <path d="M7.728 11.725V9.032c0-1.025.824-1.85 1.849-1.85h2.815m3.88 5.093v2.693a1.845 1.845 0 0 1-1.849 1.85h-2.815"
        stroke-linecap="square" stroke-linejoin="miter" />
</svg>
{{- else if (eq $icon_name "signal") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M 9.205253,0.64464814 9.4662637,1.7114982 A 10.69287,10.709597 0 0 0 6.5207075,2.9288165 L 5.9607465,1.9848669 A 11.571737,11.589837 0 0 1 9.2037889,0.64464631 Z m 5.624738,0.006259 -0.261912,1.06479996 a 10.69287,10.709597 0 0 1 2.942841,1.2238818 l 0.569383,-0.942681 A 11.718214,11.736545 0 0 0 14.829991,0.65091737 M 1.9779914,5.962053 A 11.718214,11.736545 0 0 0 0.63264603,9.2101106 l 1.06459877,0.26526 A 10.69287,10.709597 0 0 1 2.9192147,6.5279236 L 1.977993,5.9605859 Z M 1.3853391,12.02919 A 10.253437,10.269476 0 0 1 1.5057569,10.436088 L 0.42200799,10.267633 a 11.718214,11.736545 0 0 0 -0.003916,3.518027 L 1.5022097,13.622556 A 10.253437,10.269476 0 0 1 1.3853328,12.02919 m 16.6638462,10.065061 -0.561432,-0.93955 a 10.546392,10.56289 0 0 1 -2.941159,1.215857 l 0.262471,1.068318 a 11.718214,11.736545 0 0 0 3.24012,-1.344625 m 4.576868,-10.041387 q -8.91e-4,0.802487 -0.121883,1.593101 l 1.08375,0.165521 a 11.718214,11.736545 0 0 0 0.004,-3.518028 l -1.084119,0.166038 q 0.119225,0.79235 0.118342,1.593368 m 0.752698,2.814677 -1.066064,-0.26526 a 10.69287,10.709597 0 0 1 -1.221974,2.950381 l 0.94122,0.568806 a 11.718214,11.736545 0 0 0 1.346818,-3.253927 m -9.79326,7.691197 c -1.054817,0.160202 -2.128499,0.159006 -3.182958,-0.0036 l -0.165266,1.088381 a 11.718214,11.736545 0 0 0 3.509604,0.0041 L 13.584073,22.5603 Z m 6.962359,-4.199793 a 10.546392,10.56289 0 0 1 -2.25386,2.247973 l 0.652304,0.888303 A 11.718214,11.736545 0 0 0 21.4319,19.02011 Z M 18.313014,3.4847756 c 0.85912,0.6347312 1.617028,1.3955177 2.248854,2.2573915 L 21.447327,5.0829729 A 11.718214,11.736545 0 0 0 18.974613,2.5994032 Z M 3.4620766,5.7231078 A 10.546392,10.56289 0 0 1 5.7159424,3.470735 L 5.0577779,2.5838917 A 11.718214,11.736545 0 0 0 2.5780872,5.0604744 l 0.883991,0.6611664 z M 22.046886,5.9829545 21.102939,6.5496581 c 0.551205,0.9145983 0.961703,1.9082613 1.215422,2.9457616 L 23.385012,9.232537 A 11.718214,11.736545 0 0 0 22.046886,5.9829545 M 10.424439,1.5218471 a 10.69287,10.709597 0 0 1 3.181491,0.00355 l 0.165262,-1.08545108 a 11.718214,11.736545 0 0 0 -3.509603,-0.003905 z M 4.0067175,21.77345 1.7401226,22.299069 2.2699667,20.027168 1.2024224,19.776577 0.67111487,22.047008 A 1.0985825,1.1003011 0 0 0 1.987943,23.371772 L 4.2559977,22.850556 Z M 1.4305532,18.795363 2.5024951,19.043026 2.8704383,17.469271 A 10.546392,10.56289 0 0 1 1.6901058,14.58223 l -1.06518556,0.262884 a 11.718214,11.736545 0 0 0 1.07497456,2.791564 l -0.2708065,1.158683 z m 5.1240697,2.386763 -1.572112,0.365015 0.2478202,1.072705 1.157473,-0.268651 c 0.8783321,0.480709 1.8139217,0.844118 2.7848026,1.084332 L 9.4374532,22.367798 A 10.546392,10.56289 0 0 1 6.5648844,21.174803 Z M 12.01556,2.5050896 A 9.5210486,9.5359425 0 0 0 2.4868473,12.033352 9.5210486,9.5359425 0 0 0 3.9430616,17.103698 L 3.0232278,21.016812 6.9278739,20.104246 A 9.5239783,9.5388766 0 0 0 17.096701,3.9778221 9.5210486,9.5359425 0 0 0 12.01556,2.5050896" />
</svg>
{{- else if (eq $icon_name "sketchfab") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" fill="currentColor">
    <path
        d="m1000 0c-552.32 0-1000 447.72-1000 1000s447.68 1000 1000 1000 1000-447.72 1000-1000-447.6-1000-1000-1000zm-86.88 1595.07-431.12-248.86v-502l431.12 232.79zm76.8-636.19-510.08-270.38 510.08-294.5 510.16 294.5zm510.48 388.29-429.52 248v-516.17l429.52-232z" />
</svg>
{{- else if (eq $icon_name "slack") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z"></path>
    <line x1="12.57" y1="5.99" x2="16.15" y2="16.39"></line>
    <line x1="7.85" y1="7.61" x2="11.43" y2="18.01"></line>
    <line x1="16.39" y1="7.85" x2="5.99" y2="11.43"></line>
    <line x1="18.01" y1="12.57" x2="7.61" y2="16.15"></line>
</svg>
{{- else if (eq $icon_name "snapchat") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z" />
</svg>
{{- else if (eq $icon_name "soundcloud") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952" />
</svg>
{{- else if (eq $icon_name "sourcehut") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z">
    </path>
</svg>
{{- else if (eq $icon_name "spacehey") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" stroke="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M14 20h6v-6a3 3 0 0 0 -6 0v6z" />
    <path d="M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4z" />
</svg>
{{- else if (eq $icon_name "spotify") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
</svg>
{{- else if (eq $icon_name "stackoverflow") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M2.913 16.041v6.848h17.599v-6.848M7.16 18.696h8.925M7.65 13.937l8.675 1.8M9.214 9.124l8.058 3.758M12.086 4.65l6.849 5.66M15.774 1.111l5.313 7.162" />
</svg>
{{- else if (eq $icon_name "steam") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M-24.6 20.8c-1.4-.8-2.7-1.5-4.1-2.3-2.4-1.5-3.6-3.6-3.3-6.5.3-3 2.8-5.2 5.8-5.3h11c2.6 0 4.6 2.2 4.7 4.7 0 2.6-2 4.8-4.6 4.9h-2.8v.2c.2.2.5.3.7.5 1.2.7 2.4 1.3 3.6 2 2.5 1.5 3.7 4.5 2.9 7.2-.8 2.7-3.1 4.3-6.1 4.4h-10.6c-2.4 0-4.3-1.9-4.6-4.3-.3-2.3 1.2-4.5 3.5-5.1.6-.1 1.2-.1 1.7-.2h2.1c.1 0 .1-.1.1-.2zm4.3-3.8c-.1.3-.2.3-.2.4v3.9c0 1.1-.1 1.2-1.2 1.2h-5.1c-.4 0-.9 0-1.3.1-1.6.4-2.5 1.9-2.4 3.6.2 1.6 1.6 2.9 3.3 2.9h10.5c2.1 0 3.8-1.2 4.5-3.1.7-1.8.2-4.1-1.5-5.3-2.1-1.3-4.3-2.4-6.6-3.7zm-1.7 3.4v-4c0-1.4.1-1.5 1.4-1.5h5.3c1.5 0 2.7-1 3.1-2.4.6-2.2-1-4.2-3.4-4.3h-10.1c-2.4 0-4.3 1.3-4.9 3.4-.6 2.1.4 4.4 2.5 5.5 1.7 1 3.5 1.9 5.2 2.9.4.2.6.3.9.4z" />
    <path
        d="M53.3 6.9c-.2-1-1-1.7-1.9-2-1.7-.4-8.6-.4-8.6-.4s-6.9 0-8.6.5c-1 .3-1.7 1-1.9 2-.3 1.7-.5 3.5-.5 5.3 0 1.8.1 3.6.5 5.3.3.9 1 1.7 1.9 1.9 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c1-.3 1.7-1 1.9-2 .3-1.7.5-3.5.5-5.3 0-1.8-.1-3.6-.5-5.3z" />
    <path d="m40.6 15.5 5.7-3.3-5.7-3.3z" />
    <path
        d="M72.4-9.9c5.5 0 10 4 10 8.9 0 1.8-.8 3.8-2.1 5.4-.9 1-1.5 2.3-1.6 3.7 0-.1-.1-.1-.2-.2-.4-.4-1.1-.7-1.7-.7-.3 0-.5 0-.8.1-1.2.5-2.5.7-3.6.7-5.5 0-10-4-10-8.9s4.5-9 10-9m0-2c-6.6 0-12 4.9-12 10.9s5.4 11 12 11c1.4 0 2.8-.2 4.2-.7h.1c.1 0 .2 0 .3.1 1 1.3 2.5 2.3 4.2 2.7l.2-.1v-.3c-.7-.9-1-1.9-1-3s.4-2.1 1.2-2.9c1.5-1.8 2.6-4.2 2.6-6.7.1-6.1-5.3-11-11.8-11z" />
    <path
        d="M72.3-6.5c.1 0 .3.1.3.2l1.2 3.4 3.7.1c.1 0 .3.1.3.2s0 .3-.1.4l-3 2.2 1.1 3.5c0 .1 0 .3-.1.4h-.4l-3-2.1-3 2.1h-.4c-.1-.1-.2-.2-.1-.4L69.9 0l-3-2.2c-.1-.1-.2-.2-.1-.4 0-.1.2-.2.3-.2l3.7-.1L72-6.3c0-.1.2-.2.3-.2zM46.8-20.8c2 0 4 .6 5.6 1.6-.5-.1-1.1-.2-1.6-.2-3.2 0-5.8 2.5-6 5.6l-2.2 3.2c-.5.1-.9.2-1.4.4l-4.7-1.9c.8-5 5.2-8.7 10.3-8.7m9.9 7.2c.3 1 .5 2.1.5 3.3C57.2-4.5 52.5.2 46.7.2c-1.8 0-3.6-.5-5.1-1.3.5.2 1 .2 1.5.2 2.5 0 4.5-1.9 4.8-4.3L51-7.4c3.1-.2 5.6-2.8 5.6-6 .1-.1.1-.1.1-.2M38.3-4.2l.3.2c.1.2.2.5.3.7l-.6-.9m8.5-18.1c-6.3 0-11.5 4.9-12 11l6.4 2.7c.5-.4 1.2-.6 1.9-.6h.2l2.9-4.1v-.1c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5h-.1L46.5-6v.2c0 1.9-1.5 3.4-3.4 3.4-1.6 0-3-1.2-3.3-2.7L35.2-7c1.4 5 6 8.7 11.5 8.7 6.6 0 12-5.4 12-12s-5.3-12-11.9-12z" />
    <path
        d="M42.6-4.6 41.5-5c.2.4.5.7 1 .9 1 .4 2.1-.1 2.5-1 .2-.5.2-1 0-1.4-.2-.5-.6-.8-1-1-.5-.2-1-.2-1.4 0l1.1.5c.7.3 1 1.1.7 1.8-.3.6-1.1.9-1.8.6zm8.1-11.5c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm0 4.7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2c.1 1.1-.9 2-2 2zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-4.3 0-8-2.7-9.4-6.5L6.2 17c.3 1.3 1.5 2.4 2.9 2.4 1.6 0 2.9-1.3 2.9-2.9v-.1l3.5-2.5h.1c2.1 0 3.9-1.8 3.9-3.9 0-2.1-1.8-3.9-3.9-3.9-2.2 0-3.9 1.8-3.9 3.9v.1l-2.5 3.6H9c-.6 0-1.2.2-1.7.5L2 11.7C2.2 6.3 6.6 2 12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10zm-2.4-7.1-1.3-.5c.5-.2 1.1-.2 1.6 0s1 .7 1.2 1.2c.2.5.2 1.1 0 1.7-.5 1.1-1.8 1.7-2.9 1.2-.5-.2-.9-.6-1.1-1.1l1.3.5c.2 0 .4.1.6.1.6 0 1.2-.4 1.5-1 .4-.9 0-1.8-.9-2.1zM13 9.8c0-1.5 1.2-2.6 2.6-2.6 1.5 0 2.6 1.2 2.6 2.6 0 1.5-1.2 2.6-2.6 2.6-1.4 0-2.6-1.2-2.6-2.6z" />
    <path d="M13.7 9.8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2c-1.1-.1-2-.9-2-2z" />
</svg>
{{- else if (eq $icon_name "strava") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2">
    <path
        d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
</svg>
</svg>
{{- else if (eq $icon_name "substack") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2">
    <path
        d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
</svg>
{{- else if (eq $icon_name "tableau") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.3 59.5" fill="currentcolor">
    <path d="M28.5 40.2h3.3v-9h8.3V28h-8.3v-9h-3.3v9h-8.2v3.2h8.2z" />
    <path d="M13.2 53.2H16v-8h7.4v-2.5H16v-8.1h-2.8v8.1H5.8v2.5h7.4z" />
    <path d="M44.3 24.3h2.8v-8h7.5v-2.4h-7.5V5.8h-2.8v8.1h-7.4v2.4h7.4z" />
    <path d="M29 59.5h2.4v-5.7h5.1v-2.1h-5.1V46H29v5.7h-5v2.1h5z" />
    <path d="M13.3 24.3h2.6v-8.1h7.5v-2.3h-7.5V5.8h-2.6v8.1H5.8v2.3h7.5z" />
    <path d="M52.8 36.3h2.4v-5.6h5.1v-2.2h-5.1v-5.6h-2.4v5.6h-5v2.2h5z" />
    <path clip-rule="evenodd" d="M44.3 53.2h2.8v-8h7.5v-2.5h-7.5v-8.1h-2.8v8.1h-7.4v2.5h7.4z" fill-rule="evenodd" />
    <path d="M36.1 7.2V5.5h-5V0h-1.8v5.5h-5v1.7h5v5.5h1.8V7.2zM5 35.9h1.8v-5.5h5v-1.7h-5v-5.4H5v5.4H0v1.8l5-.1z" />
</svg>
{{- else if (eq $icon_name "telegram") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.509 1.793.997 3.592 1.48 5.388.16.36.506.494.864.498l-.002.018s.281.028.555-.038a2.1 2.1 0 0 0 .933-.517c.345-.324 1.28-1.244 1.811-1.764l3.999 2.952.032.018s.442.311 1.09.355c.324.022.75-.04 1.116-.308.37-.27.613-.702.728-1.196.342-1.492 2.61-12.285 2.997-14.072l-.01.042c.27-1.006.17-1.928-.455-2.474a1.654 1.654 0 0 0-1.034-.407z" />
</svg>
{{- else if (eq $icon_name "thingiverse") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M11.955.005C5.425-.152-.091 5.485.007 11.805c-.235 6.756 5.537 12.25 12.052 12.196C18.621 23.9 23.912 18.595 24 12.03 24.031 5.483 18.505-.18 11.955.005zm-.047 1.701a10.276 10.276 0 0 1 7.36 17.529 10.275 10.275 0 0 1-17.556-7.287C1.71 6.308 6.268 1.728 11.907 1.706zm-5.55 4.781c-.322 0-.358.033-.358.361v2.248c0 .351.04.391.398.391h3.823c.274 0 .274.004.274.265v9.736a.176.176 0 0 0 .051.146c.04.038.093.059.148.053h2.555c.247-.003.283-.035.283-.28v-9.32c0-.124.004-.239 0-.39s.055-.21.218-.21h3.9c.319.004.35-.032.35-.344V6.855c0-.34-.024-.363-.37-.363h-5.626z" />
</svg>
{{- else if (eq $icon_name "threads") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="currentColor" stroke="none">
    <path
        d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z">
    </path>
</svg>
{{- else if (eq $icon_name "threema") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor">
    <path
        d="M11.998 20.486a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zm-6.335 0a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zm12.671 0a1.757 1.757 0 1 1 0 3.514 1.757 1.757 0 0 1 0-3.514zM12 0c5.7 0 10.322 4.066 10.322 9.082 0 5.016-4.622 9.083-10.322 9.083a11.45 11.45 0 0 1-4.523-.917l-5.171 1.293 1.105-4.42c-1.094-1.442-1.733-3.175-1.733-5.039C1.678 4.066 6.3 0 12 0zm-.001 4.235A2.926 2.926 0 0 0 9.072 7.16v1.17h-.115a.47.47 0 0 0-.47.47v4.126c0 .26.21.471.47.471h6.086c.26 0 .47-.21.47-.47V8.798a.47.47 0 0 0-.47-.47h-.115v-1.17a2.927 2.927 0 0 0-2.93-2.924zm0 1.17c.972 0 1.758.786 1.758 1.754v1.17h-3.514v-1.17c0-.968.786-1.754 1.756-1.754z">
    </path>
</svg>
{{- else if (eq $icon_name "tidal") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor">
    <path
        d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996 4.004 12l4.004-4.004L12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004L12.012 12l4.004-4.004-4.004-4.004zM16.042 7.996l3.979-3.979L24 7.996l-3.979 3.979z" />
</svg>
{{- else if (eq $icon_name "tiktok") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.000000 76.000000" fill="currentColor" stroke-width="2"
    preserveAspectRatio="xMidYMid meet">
    <path d="M65.9,19.4c1.4,0.2,2.8,0.1,2.8,0.1s0,6.2,0,12.2c-6.3,0-12.1-2-16.8-5.4V51c0.1,20-24.6,29.8-38.3,15.6
    c-14.7-15.1-2.1-40.5,19-37.7v12.3c-9.5-3-17.2,8-11.2,15.9c5.8,7.7,18.3,3.6,18.3-6.1c0,0,0-48.2,0-48.2c2.4,0,9.9,0,12.2,0v1.6
    c0.7,7.4,6.1,13.4,13.3,15v0C65.4,19.3,65.6,19.4,65.9,19.4z" />
</svg>
{{- else if (eq $icon_name "tryhackme") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke-width="2"
    xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M10.7048 0c-3.164 0-5.8024 2.2853-6.3563 5.2914C2.0493 5.5007.242 7.4381.242 9.7912c0 2.4918 2.0276 4.5191 4.5195 4.5191h6.7616a.625.625 0 000-1.2497H4.7615c-1.8031 0-3.2698-1.467-3.2698-3.2694 0-1.803 1.4667-3.2696 3.2698-3.2696.6552 0 1.287.1925 1.8274.5576a.6252.6252 0 00.8677-.1676.6251.6251 0 00-.168-.8678c-.5105-.345-1.0806-.5756-1.679-.6895.5105-2.3438 2.6006-4.1046 5.0952-4.1046 2.6578 0 4.8555 1.9984 5.1739 4.571a4.489 4.489 0 00-.488.3043.625.625 0 00-.1412.8724.6256.6256 0 00.8729.1408c.5587-.4036 1.2197-.6166 1.9114-.6166 1.547 0 2.894 1.0973 3.203 2.6102a.6254.6254 0 00.7378.4865c.3378-.0689.556-.3992.4871-.7377-.428-2.091-2.2903-3.6087-4.428-3.6087-.3254 0-.6455.037-.9574.1042C16.5567 2.3282 13.8986 0 10.7048 0zm5.1918 10.6402c-.1805 0-.3345.0358-.462.1078a.913.913 0 00-.3124.2909c-.0803.1215-.139.2635-.1753.4261a2.3894 2.3894 0 00-.0535.5145c0 .1805.0178.3525.0535.5162.0363.1639.095.3075.1753.4312a.909.909 0 00.3124.2964c.1275.0732.2815.11.462.11.1806 0 .3343-.0368.4607-.11a.8974.8974 0 00.3086-.2964c.0792-.1237.1372-.2673.1728-.4312a2.3737 2.3737 0 00.0544-.5162c0-.1807-.018-.3523-.0543-.5145-.0357-.1626-.0937-.3046-.173-.4261a.901.901 0 00-.3085-.2909c-.1264-.072-.28-.1078-.4607-.1078zm6.4864 0c-.1806 0-.3347.0358-.4621.1078a.913.913 0 00-.3125.2909c-.0808.1215-.139.2635-.1753.4261a2.3894 2.3894 0 00-.0535.5145c0 .1805.0178.3525.0535.5162.0364.1639.0945.3075.1753.4312a.909.909 0 00.3125.2964c.1274.0732.2815.11.4621.11.1807 0 .334-.0368.4605-.11a.8974.8974 0 00.3086-.2964c.0793-.1237.1372-.2673.1729-.4312a2.3737 2.3737 0 00.0543-.5162c0-.1807-.018-.3523-.0543-.5145-.0357-.1626-.0936-.3046-.1729-.4261a.9011.9011 0 00-.3086-.2909c-.1265-.072-.2798-.1078-.4605-.1078zm-8.5372.0682l-.8407.6175.3141.4294.4762-.3678v1.8773h.603v-2.5564zm6.4863 0l-.8413.6175.3146.4294.4762-.3678v1.8773h.6031v-2.5564zm-4.4355.4442c.0797 0 .1438.0284.1932.0848.0493.0564.0874.1263.114.2093a1.312 1.312 0 01.0542.2691 2.803 2.803 0 01.014.2637c0 .0818-.0048.1712-.014.2689a1.3044 1.3044 0 01-.0543.2707c-.0265.083-.0646.1529-.1139.2093-.0494.0569-.1135.0852-.1932.0852-.0792 0-.1443-.0283-.1947-.0852-.051-.0564-.09-.1263-.1178-.2093a1.244 1.244 0 01-.0557-.2707 2.7355 2.7355 0 01-.0146-.269c0-.0792.0049-.167.0146-.2636a1.249 1.249 0 01.0557-.269c.0278-.0831.0668-.153.1178-.2094.0504-.0564.1155-.0848.1947-.0848zm6.4864 0c.0793 0 .1436.0284.193.0848.0493.0564.0874.1263.114.2093.0266.083.0444.1732.0543.2691.0092.0966.014.1844.014.2637a2.91 2.91 0 01-.014.2689 1.3176 1.3176 0 01-.0543.2707c-.0266.083-.0647.1529-.114.2093-.0494.0569-.1137.0852-.193.0852-.0791 0-.1444-.0283-.1948-.0852-.051-.0564-.09-.1263-.1176-.2093a1.2445 1.2445 0 01-.056-.2707 2.7355 2.7355 0 01-.0146-.269c0-.0792.0049-.167.0146-.2636a1.2484 1.2484 0 01.056-.269c.0276-.0831.0666-.153.1176-.2094.0504-.0564.1157-.0848.1948-.0848zm-2.1915 3.5112c-.1806 0-.3347.0364-.4621.108a.9076.9076 0 00-.3125.2913c-.0808.1215-.1387.263-.1751.4257a2.3826 2.3826 0 00-.0541.5143c0 .1806.0183.3525.0541.5164.0364.1639.0943.3075.1751.4316a.9092.9092 0 00.3125.2956c.1274.0738.2815.1102.4621.1102.1807 0 .3336-.0364.46-.1102a.8922.8922 0 00.3087-.2956c.0797-.124.1371-.2677.1735-.4316a2.3755 2.3755 0 00.0543-.5164c0-.1801-.018-.352-.0543-.5143-.0364-.1627-.0938-.3042-.1735-.4257a.8904.8904 0 00-.3088-.2913c-.1263-.0716-.2792-.108-.4599-.108zm-6.4016.0684l-.8413.6177.3143.4296.4765-.3684v1.8775h.6033v-2.5564zm2.1252 0l-.8413.6177.314.4296.4768-.3684v1.8775h.6033v-2.5564zm2.116 0l-.8407.6177.3135.4296.4768-.3684v1.8775h.603v-2.5564zm2.1604.4442c.0792 0 .1438.028.1932.085.0493.0565.0874.1265.114.2095.026.083.0444.1725.0537.2691.0097.096.0146.1839.0146.263 0 .082-.0049.1715-.0146.2691a1.3243 1.3243 0 01-.0537.2706c-.0266.083-.0647.153-.114.2095-.0494.0569-.114.085-.1932.085-.0797 0-.1441-.0281-.195-.085-.0506-.0565-.0898-.1265-.1174-.2095a1.2443 1.2443 0 01-.0558-.2706 2.6765 2.6765 0 01-.0146-.269c0-.0792.0048-.1671.0146-.263a1.2413 1.2413 0 01.0558-.2692c.0276-.083.0668-.153.1173-.2095.051-.057.1154-.085.1951-.085zm-6.7291 3.0723c-.1312 0-.243.0264-.3358.0785a.6615.6615 0 00-.2268.2111c-.0586.0885-.1009.1914-.127.3096a1.6979 1.6979 0 00-.0394.3732c0 .1313.013.2562.0394.375.0261.1188.0684.2235.127.313a.6535.6535 0 00.2268.2152c.0927.0532.2046.0797.3358.0797.1307 0 .2424-.0265.334-.0797a.6501.6501 0 00.2241-.2152c.0575-.0895.0996-.1942.1258-.313.026-.1188.039-.2437.039-.375 0-.1306-.013-.2555-.039-.3732-.0262-.1182-.0683-.2211-.1258-.3096a.658.658 0 00-.2241-.2111c-.0916-.0521-.2033-.0785-.334-.0785zm3.0859 0c-.1314 0-.243.0264-.3358.0785a.6612.6612 0 00-.2268.2111c-.0586.0885-.101.1914-.127.3096a1.6895 1.6895 0 00-.0394.3732c0 .1313.0128.2562.0394.375.026.1188.0684.2235.127.313a.6532.6532 0 00.2268.2152c.0927.0532.2044.0797.3358.0797.1307 0 .2423-.0265.334-.0797a.6496.6496 0 00.224-.2152c.0574-.0895.0993-.1942.1258-.313a1.7415 1.7415 0 00.039-.375 1.724 1.724 0 00-.039-.3732c-.0265-.1182-.0684-.2211-.1259-.3096a.6575.6575 0 00-.224-.2111c-.0916-.0521-.2032-.0785-.334-.0785zm5.1077 0c-.1312 0-.2428.0264-.3356.0785a.6612.6612 0 00-.2268.2111c-.0586.0885-.1008.1914-.127.3096a1.6977 1.6977 0 00-.0396.3732c0 .1313.0132.2562.0397.375.0261.1188.0683.2235.127.313a.6532.6532 0 00.2267.2152c.0928.0532.2044.0797.3356.0797.1307 0 .2426-.0265.3342-.0797a.6496.6496 0 00.224-.2152c.0575-.0895.0992-.1942.1259-.313.026-.1188.039-.2437.039-.375 0-.1306-.013-.2555-.039-.3732-.0267-.1182-.0684-.2211-.126-.3096a.6575.6575 0 00-.2239-.2111c-.0916-.0521-.2035-.0785-.3342-.0785zm-6.658.0498l-.611.4487.2279.3112.3462-.2669v1.3627h.4375v-1.8557zm3.0677 0l-.6106.4487.2282.3112.3462-.2669v1.3627h.4377v-1.8557zm5.1082 0l-.6109.4487.2285.3112.346-.2669v1.3627h.4377v-1.8557zm-9.7115.3228c.0575 0 .1041.0205.14.0612.0358.0412.0633.0917.0823.152a.9604.9604 0 01.0397.1952c.007.07.0102.134.0102.1915 0 .0597-.0031.1247-.0102.1952a.954.954 0 01-.0397.197c-.019.0602-.0465.1107-.0824.1519-.0358.0412-.0824.0612-.1399.0612-.058 0-.1053-.02-.1416-.0612-.037-.0412-.065-.0917-.0852-.152a.8863.8863 0 01-.0407-.1969 1.9609 1.9609 0 01-.0108-.1952c0-.0575.0037-.1215.0108-.1915a.893.893 0 01.0407-.1952c.0202-.0603.0483-.1108.0852-.152.0363-.0407.0836-.0612.1416-.0612zm3.0859 0c.0575 0 .1041.0205.14.0612a.421.421 0 01.0821.152.9392.9392 0 01.0397.1952c.007.07.0103.134.0103.1915 0 .0597-.0033.1247-.0103.1952a.9302.9302 0 01-.0397.197.4211.4211 0 01-.0822.1519c-.0358.0412-.0824.0612-.14.0612-.058 0-.1053-.02-.1417-.0612a.4192.4192 0 01-.085-.152.8458.8458 0 01-.0407-.1969 1.9645 1.9645 0 01-.011-.1952c0-.0575.004-.1215.011-.1915a.8487.8487 0 01.0407-.1952.4196.4196 0 01.085-.152c.0364-.0407.0837-.0612.1418-.0612zm5.1077 0c.0575 0 .1044.0205.1402.0612a.421.421 0 01.0822.152.9483.9483 0 01.0398.1952c.007.07.0102.134.0102.1915 0 .0597-.0032.1247-.0102.1952a.9427.9427 0 01-.0398.197.421.421 0 01-.0822.1519c-.0358.0412-.0827.0612-.1402.0612-.058 0-.1051-.02-.1415-.0612-.0368-.0412-.065-.0917-.0857-.152a.9503.9503 0 01-.04-.1969 1.9645 1.9645 0 01-.011-.1952c0-.0575.0039-.1215.011-.1915a.9589.9589 0 01.04-.1952c.0207-.0603.0489-.1108.0857-.152.0363-.0407.0835-.0612.1415-.0612zm-1.6842 1.8138c-.1312 0-.2428.0266-.3356.0787a.659.659 0 00-.2268.211c-.0586.0883-.1008.1914-.127.3097a1.7304 1.7304 0 00-.0396.3733c0 .1312.0137.256.0397.3746.026.119.0683.2237.127.3137a.656.656 0 00.2267.2148c.0928.0532.2044.0797.3356.0797.1307 0 .2426-.0265.3342-.0797a.6475.6475 0 00.224-.2148c.0576-.09.0998-.1948.1259-.3137.026-.1187.039-.2434.039-.3746 0-.1307-.013-.2557-.039-.3733-.0261-.1183-.0683-.2214-.126-.3098a.6504.6504 0 00-.2239-.2109c-.0916-.052-.2035-.0787-.3342-.0787zm3.0627 0c-.1313 0-.243.0266-.3358.0787a.6641.6641 0 00-.2268.211c-.0586.0883-.101.1914-.127.3097a1.7218 1.7218 0 00-.0394.3733c0 .1312.0134.256.0395.3746.026.119.0683.2237.1269.3137a.6609.6609 0 00.2268.2148c.0928.0532.2045.0797.3358.0797s.2424-.0265.334-.0797a.6475.6475 0 00.224-.2148c.0575-.09.1-.1948.1259-.3137a1.7398 1.7398 0 00.0396-.3746c0-.1307-.0135-.2557-.0396-.3733-.026-.1183-.0684-.2214-.126-.3098a.6504.6504 0 00-.2239-.2109c-.0916-.052-.2027-.0787-.334-.0787zm-1.5448.05l-.6109.448.2284.3124.346-.2675v1.3626h.4378v-1.8555zm-1.5179.3228c.0575 0 .1041.0206.14.0613a.4206.4206 0 01.0826.1517.9575.9575 0 01.0396.1953c.007.07.0102.134.0102.1916 0 .0597-.0032.1245-.0102.195a.9512.9512 0 01-.0396.197.4218.4218 0 01-.0826.1519c-.0359.0412-.0825.0612-.14.0612-.058 0-.1052-.02-.1415-.0612-.0368-.0412-.065-.0917-.085-.152a.9149.9149 0 01-.0408-.1969 1.9608 1.9608 0 01-.011-.195c0-.0575.004-.1217.011-.1916a.9232.9232 0 01.0407-.1953c.0202-.0603.0483-.1105.085-.1517.0364-.0407.0836-.0613.1416-.0613zm3.0627 0c.0575 0 .104.0206.1398.0613a.4208.4208 0 01.0826.1517.939.939 0 01.0394.1953c.0071.07.0104.134.0104.1916 0 .0597-.0033.1245-.0104.195a.9296.9296 0 01-.0394.197.4218.4218 0 01-.0826.1519c-.0357.0412-.0823.0612-.1398.0612-.0575 0-.1054-.02-.1417-.0612-.037-.0412-.065-.0917-.085-.152a.9065.9065 0 01-.0408-.1969 1.9495 1.9495 0 01-.0103-.195c0-.0575.0033-.1217.0103-.1916a.9145.9145 0 01.0407-.1953c.02-.0603.0481-.1105.085-.1517.0364-.0407.0843-.0613.1418-.0613zm-9.7123.1855c-.091 0-.1686.0182-.2326.0545a.4563.4563 0 00-.157.146c-.0408.0613-.0702.133-.0881.2149a1.1685 1.1685 0 00-.0271.2587c0 .0907.0086.1773.027.2598.018.082.0474.1546.0881.217a.4589.4589 0 00.157.1487c.064.037.1417.0557.2327.0557.0907 0 .1677-.0188.2311-.0557a.4504.4504 0 00.1558-.1487c.0402-.0624.0688-.135.0873-.217a1.2187 1.2187 0 00.0272-.2598c0-.0911-.0093-.1774-.0272-.2587-.0185-.082-.0471-.1536-.0873-.2148a.4479.4479 0 00-.1558-.146c-.0634-.0364-.1403-.0546-.231-.0546zm1.0519.0346l-.423.3102.1577.2166.2398-.185v.9442h.3037v-1.286zm-1.0519.2236c.0396 0 .0724.0141.0973.0429a.2841.2841 0 01.057.105.689.689 0 01.0276.1352c.0044.0489.007.0927.007.1328 0 .0407-.0027.0862-.007.135a.684.684 0 01-.0277.1362.2845.2845 0 01-.057.1053c-.0248.0288-.0576.043-.0972.043a.1247.1247 0 01-.098-.043.2976.2976 0 01-.0592-.1053.612.612 0 01-.0283-.1361 1.391 1.391 0 01-.0069-.135c0-.0402.0021-.084.007-.1329a.6197.6197 0 01.0282-.1353.2973.2973 0 01.0592-.105.1248.1248 0 01.098-.0428zm3.7749 1.394c-.0907 0-.1681.0178-.2321.0542a.4517.4517 0 00-.1574.1463c-.0407.0608-.07.1326-.088.2144a1.1691 1.1691 0 00-.0276.2587c0 .0905.0092.1774.0277.26.0179.0824.0472.1545.0879.2168a.4562.4562 0 00.1574.1493c.064.0368.1414.0547.232.0547.0912 0 .1683-.0179.2318-.0547a.451.451 0 00.1556-.1493.6636.6636 0 00.0868-.2169 1.1889 1.1889 0 00.0277-.26c0-.0906-.0092-.1773-.0277-.2586-.0179-.0818-.0473-.1536-.0868-.2144a.4461.4461 0 00-.1556-.1463c-.0635-.0364-.1406-.0543-.2317-.0543zm1.0522.034l-.423.3109.1578.2158.2398-.1849v.9444h.3033v-1.2861zm-1.0522.2236c.0401 0 .0726.014.0976.0427a.3008.3008 0 01.057.1054.6431.6431 0 01.027.135 1.31 1.31 0 01.0077.1329c0 .0412-.0027.0863-.0077.135a.655.655 0 01-.027.1367.3066.3066 0 01-.057.1054c-.025.0282-.0575.0421-.0976.0421-.0396 0-.0728-.0139-.0977-.042a.2928.2928 0 01-.0592-.1055.6182.6182 0 01-.028-.1366 1.3641 1.3641 0 01-.0077-.1351c0-.0401.0029-.0841.0077-.1328a.6122.6122 0 01.028-.135.2874.2874 0 01.0592-.1055c.0249-.0287.0581-.0427.0977-.0427z" />
</svg>
{{- else if (eq $icon_name "tumblr") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z" />
</svg>
{{- else if (eq $icon_name "twitch") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
</svg>
{{- else if (eq $icon_name "twitter") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
    </path>
</svg>
{{- else if (eq $icon_name "unsplash") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40">
    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"
        d="M37.892,13.5h-4.486 l-1.143-3.306C31.707,8.581,30.189,7.5,28.483,7.5h-9.045c-1.706,0-3.224,1.081-3.781,2.694L14.515,13.5H9.108 c-2.545,0-4.608,2.063-4.608,4.608v16.785c0,2.545,2.063,4.608,4.608,4.608h28.785c2.545,0,4.608-2.063,4.608-4.608V18.108 C42.5,15.563,40.437,13.5,37.892,13.5z" />
    <circle cx="24" cy="26" r="7.5" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" />
</svg>
{{- else if (eq $icon_name "vimeo") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457a315.06 315.06 0 003.501-3.1279c1.579-1.368 2.765-2.085 3.5539-2.159 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.5069.5389 2.45 1.1309 3.674 1.7759 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.8679 3.434-5.7568 6.7619-5.6368 2.4729.06 3.6279 1.664 3.4929 4.7969z" />
</svg>
{{- else if or (eq $icon_name "vk") (eq $icon_name "vkontakte") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M3.37413 3.37413C0 6.74826 0 12.1788 0 23.04V24.96C0 35.8212 0 41.2517 3.37413 44.6259C6.74826 48 12.1788 48 23.04 48H24.96C35.8212 48 41.2517 48 44.6259 44.6259C48 41.2517 48 35.8212 48 24.96V23.04C48 12.1788 48 6.74826 44.6259 3.37413C41.2517 0 35.8212 0 24.96 0H23.04C12.1788 0 6.74826 0 3.37413 3.37413ZM8.10012 14.6001C8.36012 27.0801 14.6001 34.5801 25.5401 34.5801H26.1602V27.4401C30.1802 27.8401 33.22 30.7801 34.44 34.5801H40.1201C38.5601 28.9001 34.4599 25.7601 31.8999 24.5601C34.4599 23.0801 38.0599 19.4801 38.9199 14.6001H33.7598C32.6398 18.5601 29.3202 22.1601 26.1602 22.5001V14.6001H21V28.4401C17.8 27.6401 13.7601 23.7601 13.5801 14.6001H8.10012Z"
        fill="currentColor" />
</svg>
{{- else if (eq $icon_name "wantedly") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M18.453 14.555c-.171-.111-.658-.764-2.006-3.982a9.192 9.192 0 0 0-.237-.526l-.274-.664-2.362-5.702H8.85l2.362 5.702 2.362 5.706 2.181 5.267a.196.196 0 0 0 .362 0l2.373-5.682a.1.1 0 0 0-.037-.119zm-8.85 0c-.171-.111-.658-.764-2.006-3.982a8.971 8.971 0 0 0-.236-.525l-.276-.665-2.36-5.702H0l2.362 5.702 2.362 5.706 2.181 5.267a.196.196 0 0 0 .362 0l2.374-5.682a.098.098 0 0 0-.038-.119ZM24 6.375a2.851 2.851 0 0 1-2.851 2.852 2.851 2.851 0 0 1-2.852-2.852 2.851 2.851 0 0 1 2.852-2.851A2.851 2.851 0 0 1 24 6.375Z" />
</svg>
{{- else if (eq $icon_name "wechat") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M17 10C20.3142 10 23 12.2165 23 14.95C23 16.4867 22.1513 17.8595 20.8182 18.767V21L18.6756 19.7042C18.1265 19.835 17.5642 19.9007 17 19.9C13.6858 19.9 11 17.6835 11 14.95C11 12.2165 13.6858 10 17 10Z" />
    <path
        d="M10.7657 15.5978C10.033 15.8089 9.24728 15.9231 8.43285 15.9231C7.4893 15.9251 6.55199 15.7679 5.65934 15.4578L3.12367 17V13.9835C1.81018 12.8183 1 11.2223 1 9.46154C1 5.89262 4.3278 3 8.43285 3C12.4487 3 15.7202 5.76769 15.8657 9.23V9.48092M9.49469 7.30769H9.50531M6.30918 7.30769H6.3198M14.8039 13.7692H14.8145M17.9894 13.7692H18" />
</svg>
{{- else if (eq $icon_name "whatsapp") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 380" fill="currentColor">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M307.546 52.5655C273.709 18.685 228.706 0.0171895 180.756 0C81.951 0 1.53846 80.404 1.50408 179.235C1.48689 210.829 9.74646 241.667 25.4319 268.844L0 361.736L95.0236 336.811C121.203 351.096 150.683 358.616 180.679 358.625H180.756C279.544 358.625 359.966 278.212 360 179.381C360.017 131.483 341.392 86.4547 307.546 52.5741V52.5655ZM180.756 328.354H180.696C153.966 328.346 127.744 321.16 104.865 307.589L99.4242 304.358L43.034 319.149L58.0834 264.168L54.5423 258.53C39.6304 234.809 31.749 207.391 31.7662 179.244C31.8006 97.1036 98.6334 30.2707 180.817 30.2707C220.61 30.2879 258.015 45.8015 286.145 73.9665C314.276 102.123 329.755 139.562 329.738 179.364C329.703 261.513 262.871 328.346 180.756 328.346V328.354ZM262.475 216.777C257.997 214.534 235.978 203.704 231.869 202.209C227.761 200.713 224.779 199.966 221.796 204.452C218.814 208.939 210.228 219.029 207.615 222.011C205.002 225.002 202.389 225.372 197.911 223.128C193.434 220.885 179.003 216.158 161.891 200.902C148.578 189.024 139.587 174.362 136.975 169.875C134.362 165.389 136.7 162.965 138.934 160.739C140.945 158.728 143.412 155.505 145.655 152.892C147.899 150.279 148.638 148.406 150.133 145.423C151.629 142.432 150.881 139.82 149.764 137.576C148.646 135.333 139.691 113.287 135.952 104.323C132.316 95.5909 128.621 96.777 125.879 96.6309C123.266 96.5019 120.284 96.4762 117.293 96.4762C114.302 96.4762 109.454 97.5935 105.346 102.08C101.238 106.566 89.6691 117.404 89.6691 139.441C89.6691 161.478 105.716 182.785 107.959 185.776C110.202 188.767 139.544 234.001 184.469 253.408C195.153 258.023 203.498 260.782 210.004 262.845C220.731 266.257 230.494 265.776 238.212 264.624C246.816 263.335 264.71 253.786 268.44 243.326C272.17 232.866 272.17 223.893 271.053 222.028C269.936 220.163 266.945 219.037 262.467 216.794L262.475 216.777Z"></path>
</svg>
{{- else if or (eq $icon_name "wikipedia") (eq $icon_name "wiki") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80" fill="currentColor">
    <path d="M93.868704,0.909104 L93.868704,3.048056 C91.047359,3.549147 88.911824,4.435559 87.462095,5.707293 C85.385249,7.595808 82.936537,10.486281 81.33006,14.378719 L48.644587,81.09089 L46.469872,81.09089 L13.656938,13.511576 C12.12874,10.043075 10.051174,7.923395 9.424242,7.152531 C8.444628,5.957874 7.2397099,5.023288 5.8095009,4.34877 C4.3792666,3.674401 2.449446,3.24083 0.0200327,3.048056 L0.0200327,0.909104 L31.947914,0.909104 L31.947914,3.048056 C28.26456,3.394989 26.508521,4.011623 25.411397,4.89796 C24.31421,5.784446 23.765632,6.921365 23.765658,8.308721 C23.765632,10.235773 24.666866,13.241865 26.469366,17.327004 L50.70176,63.285559 L74.394451,17.905099 C76.236043,13.434562 77.763937,10.332122 77.764,8.597768 C77.763937,7.48019 77.195762,6.410715 76.059496,5.389341 C74.923078,4.368114 73.637249,3.645496 70.933604,3.221484 C70.737619,3.183021 70.404566,3.125211 69.934406,3.048056 L69.934406,0.909104 L93.868704,0.909104 Z" />
    <path d="M121.979968,0.909104 L121.979968,3.048056 C119.158628,3.549147 117.023098,4.435559 115.573368,5.707293 C113.496518,7.595808 111.047808,10.486281 109.441328,14.378719 L80.755855,81.09089 L78.581141,81.09089 L48.268207,13.511576 C46.740008,10.043075 44.662443,7.923395 44.035511,7.152531 C43.055896,5.957874 41.850979,5.023288 40.42077,4.34877 C38.990535,3.674401 37.694909,3.24083 35.265495,3.048056 L35.265495,0.909104 L66.559183,0.909104 L66.559183,3.048056 C62.875829,3.394989 61.11979,4.011623 60.022666,4.89796 C58.925479,5.784446 58.376901,6.921365 58.376926,8.308721 C58.376901,10.235773 59.278135,13.241865 61.080635,17.327004 L82.813029,63.285559 L102.505718,17.905099 C104.347308,13.434562 105.875208,10.332122 105.875268,8.597768 C105.875208,7.48019 105.307028,6.410715 104.170768,5.389341 C103.034348,4.368114 101.114328,3.645496 98.410678,3.221484 C98.214698,3.183021 97.881638,3.125211 97.411478,3.048056 L97.411478,0.909104 L121.979968,0.909104 Z" />
</svg>
{{- else if (eq $icon_name "wordpress") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
</svg>
{{- else if (eq $icon_name "x") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
    </path>
</svg>
{{- else if (eq $icon_name "xda") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path
        d="M13.84 3.052V0h7.843v17.583H13.84v-3.024h4.591V3.052zM5.569 14.53V3.024h4.592V0H2.318v17.583H6.98L10.16 24v-9.483z" />
</svg>
{{- else if (eq $icon_name "xing") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path
        d="M313.8 303.9L469 32H365L209.4 303.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4z"
        fill="currentColor" />
    <path
        d="M221.9 216.2L163 113a2 2 0 0 0-2-1H65l58.9 104.4a1.13 1.13 0 0 1 .1.8L43 352h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2z" />
</svg>
{{- else if (eq $icon_name "xmpp") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path
        d="m24 3.2-3.2 1.2-1 .3-3.1.9v.6c0 3.4-1.7 7.6-4.6 10.5-2.8-3-4.5-7-4.5-10.4v-.6l-3.1-.8-.8-.3L0 3.2c.1 5.7 4.8 11.7 10.5 15-1.3 1-2.8 1.8-4.3 2.2v.3c.4-.1.8-.1 1.3-.2.1 0 .3 0 .4-.1 1.4-.3 2.7-.8 4-1.4.4.2.8.4 1.2.5.1 0 .2.1.3.1.2.1.4.2.6.2 1.2.5 2.6.8 3.9.9v-.3c-1.7-.4-3.2-1.3-4.5-2.3C19.2 14.9 23.8 9 24 3.2z">
    </path>
</svg>
{{- else if (eq $icon_name "ycombinator") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="1">
    <path
        d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" />
</svg>
{{- else if (eq $icon_name "youtube") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
    </path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
</svg>
{{- else if (eq $icon_name "zcal") -}}
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" stroke-width="2">
    <path
        d="M 6.3361243,0.07808093 C 5.8180004,0.26764401 5.5778938,0.65939444 5.5778938,1.3291631 v 0.657135 L 4.0993445,2.0368425 C 2.8735383,2.0747533 2.5196977,2.137941 2.0773961,2.3654147 1.4328997,2.7066112 0.81367829,3.4395676 0.63675749,4.0587918 0.5609351,4.3620871 0.52302343,7.71094 0.54829756,13.347115 c 0.0379117,7.923511 0.0631858,8.858662 0.25274319,9.199865 0.24010655,0.442301 0.65713395,0.947789 0.79614215,0.947789 0.050549,0 0.22747,0.113734 0.4043899,0.252743 0.3159299,0.252744 0.5181249,0.252744 10.0339192,0.252744 h 9.692714 l 0.556036,-0.417027 C 22.587534,23.35576 22.96665,22.913458 23.14357,22.610167 L 23.4595,22.041494 V 13.069097 4.0967026 L 23.168845,3.565943 C 23.004562,3.275291 22.688632,2.8961743 22.461163,2.7192545 22.031499,2.3906822 21.121622,1.9862981 20.919428,2.0242088 c -0.06319,0.012634 -0.581311,0.012634 -1.149984,0 L 18.720559,2.011575 V 1.506083 c 0,-1.18789452 -0.909878,-1.83238624 -1.88294,-1.3395374 -0.417027,0.22746432 -0.644496,0.68240244 -0.644496,1.3395374 V 2.011575 H 12.149226 8.1053295 V 1.53136 c 0,-1.02360844 -0.8972396,-1.76920805 -1.7692052,-1.45327907 z M 5.5778938,4.7159268 c 0,0.9477869 0.2780183,1.4153683 0.9225148,1.5291004 C 7.4355589,6.4219471 8.1053295,5.7269014 8.1053295,4.5642839 V 3.907149 h 4.0438965 4.043897 v 0.7835008 c 0.01264,0.8340548 0.176921,1.1752608 0.720319,1.478556 0.568673,0.3032858 1.326903,0.063178 1.630196,-0.5054921 0.101097,-0.2021968 0.176921,-0.6697687 0.176921,-1.0615191 V 3.907149 h 0.985699 c 0.89724,0 1.023611,0.025277 1.415364,0.3664734 l 0.442301,0.3664829 0.03791,3.5384066 0.03791,3.5510451 -0.417028,0.126371 c -0.227469,0.06319 -0.644495,0.202195 -0.922514,0.315929 -0.480212,0.176921 -3.829064,1.377453 -4.486197,1.604922 -0.176921,0.05055 -0.796142,0.278019 -1.39009,0.480214 l -1.07416,0.379114 -0.06319,-2.641169 -0.06318,-2.6538124 -0.40439,-0.4043842 C 12.275598,8.3933386 11.808022,8.4059819 10.190464,9.0125629 9.4954189,9.2653042 8.5349935,9.6065101 8.0421437,9.78343 c -0.859328,0.290652 -2.9065504,1.023608 -3.9175251,1.402725 -0.2780173,0.1011 -0.7329564,0.265384 -1.0109737,0.353844 -0.2780183,0.101097 -0.6065848,0.214832 -0.7203198,0.26538 -0.2148315,0.08846 -0.227469,-0.126371 -0.227469,-3.3362094 0,-2.8054559 0.037912,-3.5005015 0.1895583,-3.8037873 C 2.6839809,4.0208811 2.9872724,3.907149 4.3394511,3.907149 h 1.2384427 z m 5.3076142,9.5410662 c 0,2.577983 0.01264,2.666443 0.290655,2.982373 0.429665,0.518124 1.175258,0.556036 2.363153,0.126372 1.630196,-0.581311 4.423012,-1.579648 6.065845,-2.173595 0.871965,-0.303292 1.680745,-0.593947 1.807117,-0.631859 0.214831,-0.06319 0.227469,0.101097 0.189557,3.437313 l -0.03791,3.500498 -0.35384,0.303292 -0.353842,0.303292 H 11.90912 2.9619982 L 2.6207951,21.763475 C 2.4438743,21.586554 2.2543169,21.308537 2.2164053,21.169528 c -0.025274,-0.151646 -0.037912,-1.680744 -0.025274,-3.3994 l 0.037911,-3.146658 0.4423016,-0.151646 c 0.429664,-0.151646 2.3126032,-0.821416 5.3076145,-1.882939 0.7961422,-0.278018 1.7439301,-0.606585 2.0851336,-0.732957 0.353841,-0.126371 0.669772,-0.227469 0.732956,-0.227469 0.05055,-0.01264 0.08846,1.175257 0.08846,2.628534 z" />
</svg>
{{- else if (eq $icon_name "zhihu") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path
        d="m13.3334,3.60098l0,17.1471l1.79582,0l0.75424,2.13703l3.18459,-2.13703l3.93584,0l0,-17.1471l-9.6705,0zm7.41375,14.87538l-1.79283,0l-2.24777,1.50849l-0.53276,-1.50849l-0.53875,0l0,-12.53483l5.10911,0l0,12.53483l0.00299,0zm-8.56906,-7.18927l-3.97475,0c0.06285,-1.34387 0.1287,-3.12174 0.19754,-5.17496l3.91788,0l-0.00299,-0.24244c0,-0.01796 -0.00599,-0.43998 -0.06884,-0.87097c-0.06285,-0.44896 -0.19754,-1.04457 -0.62854,-1.04457l-6.5727,0c0.13169,-0.61657 0.46991,-2.08615 0.87995,-2.80747l0.19155,-0.33522l-0.3861,-0.02095c-0.02394,0 -0.58663,-0.02694 -1.23912,0.31726c-1.06851,0.56868 -1.5474,1.68807 -1.75691,2.52612c-0.55072,2.18791 -1.33489,3.70837 -1.66712,4.35786c-0.09877,0.19155 -0.15863,0.30529 -0.18557,0.38311c-0.05387,0.14666 -0.02394,0.29332 0.0838,0.38909c0.31427,0.28434 1.14334,-0.0868 1.15232,-0.08979c0.01796,-0.00898 0.03891,-0.01796 0.06585,-0.02993c0.41603,-0.18856 1.64916,-0.74826 2.08914,-2.52911l1.69705,0c0.02095,0.96376 0.09278,4.14236 0.0868,5.17496l-4.22018,0l-0.06285,0.0449c-0.69139,0.50582 -0.91288,1.8916 -0.92185,1.95146l-0.0419,0.27536l4.99837,0c-0.36814,2.34355 -0.79315,3.3941 -1.01763,3.81313c-0.11074,0.20951 -0.21849,0.41902 -0.32025,0.62255c-0.63752,1.26306 -1.29898,2.56802 -3.7802,4.5973c-0.10775,0.0838 -0.20951,0.23944 -0.14367,0.41005c0.07183,0.18856 0.27835,0.27237 0.73629,0.27237c0.16162,0 0.35318,-0.00898 0.58065,-0.02993c1.49352,-0.13169 3.01698,-0.53875 4.04359,-2.6219c0.50882,-1.05056 0.94879,-2.14601 1.31394,-3.25941l4.08549,4.78886l0.14965,-0.35916c0.02394,-0.05687 0.56868,-1.38578 0.15264,-2.87032l-0.01497,-0.05387l-3.23547,-3.68143l-0.65847,0.49684c0.19155,-0.78118 0.31726,-1.49352 0.37413,-2.12805l4.74995,0l0,-0.23944c0,-1.20021 -0.55371,-1.91255 -0.57466,-1.94248l-0.07183,-0.08979z" />
</svg>
{{- else if (eq $icon_name "jamendo") -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">
    <path style="stroke-width:1.7"
        d="M 11.953964,1.9577206 C 8.9486891,3.6582881 5.9434143,5.3588555 2.9381394,7.059423 c 0,3.325368 0,6.650735 0,9.976103 2.9643942,1.765865 5.9287884,3.531729 8.8931826,5.297594 3.002478,-1.73905 6.004955,-3.478101 9.007433,-5.217151 0,-3.360254 0,-6.720509 0,-10.0807628 C 17.877158,5.342711 14.915561,3.6502158 11.953964,1.9577206 Z" />
     <path d="M 6.7394985,14.712082 8.3520207,11.408709" />
     <path d="M 9.2716212,14.767353 11.902927,9.4304828" />
     <path d="M 13.170768,11.935987 14.59425,9.3677519" />
     <path d="M 14.54983,14.574583 17.177574,9.4459113" />
</svg>
{{- else if $icon_name -}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>
{{- end -}}
````

## File: themes/PaperMod/layouts/partials/toc.html
````html
{{- $headers := findRE "<h[1-6].*?>(.|\n])+?</h[1-6]>" .Content -}}
{{- $has_headers := ge (len $headers) 1 -}}
{{- if $has_headers -}}
<div class="toc">
    <details {{if (.Param "TocOpen") }} open{{ end }}>
        <summary accesskey="c" title="(Alt + C)">
            <span class="details">{{- i18n "toc" | default "Table of Contents" }}</span>
        </summary>

        <div class="inner">
            {{- if (.Param "UseHugoToc") }}
            {{- .TableOfContents -}}
            {{- else }}
            {{- $largest := 6 -}}
            {{- range $headers -}}
            {{- $headerLevel := index (findRE "[1-6]" . 1) 0 -}}
            {{- $headerLevel := len (seq $headerLevel) -}}
            {{- if lt $headerLevel $largest -}}
            {{- $largest = $headerLevel -}}
            {{- end -}}
            {{- end -}}

            {{- $firstHeaderLevel := len (seq (index (findRE "[1-6]" (index $headers 0) 1) 0)) -}}

            {{- $.Scratch.Set "bareul" slice -}}
            <ul>
                {{- range seq (sub $firstHeaderLevel $largest) -}}
                <ul>
                    {{- $.Scratch.Add "bareul" (sub (add $largest .) 1) -}}
                    {{- end -}}
                    {{- range $i, $header := $headers -}}
                    {{- $headerLevel := index (findRE "[1-6]" . 1) 0 -}}
                    {{- $headerLevel := len (seq $headerLevel) -}}

                    {{/* get id="xyz" */}}
                    {{- $id := index (findRE "(id=\"(.*?)\")" $header 9) 0 }}

                    {{- /* strip id="" to leave xyz, no way to get regex capturing groups in hugo */ -}}
                    {{- $cleanedID := replace (replace $id "id=\"" "") "\"" "" }}
                    {{- $header := replaceRE "<h[1-6].*?>((.|\n])+?)</h[1-6]>" "$1" $header -}}

                    {{- if ne $i 0 -}}
                    {{- $prevHeaderLevel := index (findRE "[1-6]" (index $headers (sub $i 1)) 1) 0 -}}
                    {{- $prevHeaderLevel := len (seq $prevHeaderLevel) -}}
                    {{- if gt $headerLevel $prevHeaderLevel -}}
                    {{- range seq $prevHeaderLevel (sub $headerLevel 1) -}}
                    <ul>
                        {{/* the first should not be recorded */}}
                        {{- if ne $prevHeaderLevel . -}}
                        {{- $.Scratch.Add "bareul" . -}}
                        {{- end -}}
                        {{- end -}}
                        {{- else -}}
                        </li>
                        {{- if lt $headerLevel $prevHeaderLevel -}}
                        {{- range seq (sub $prevHeaderLevel 1) -1 $headerLevel -}}
                        {{- if in ($.Scratch.Get "bareul") . -}}
                    </ul>
                    {{/* manually do pop item */}}
                    {{- $tmp := $.Scratch.Get "bareul" -}}
                    {{- $.Scratch.Delete "bareul" -}}
                    {{- $.Scratch.Set "bareul" slice}}
                    {{- range seq (sub (len $tmp) 1) -}}
                    {{- $.Scratch.Add "bareul" (index $tmp (sub . 1)) -}}
                    {{- end -}}
                    {{- else -}}
                </ul>
                </li>
                {{- end -}}
                {{- end -}}
                {{- end -}}
                {{- end }}
                <li>
                    <a href="#{{- $cleanedID -}}" aria-label="{{- $header | plainify | safeHTML -}}">{{- $header | plainify | safeHTML -}}</a>
                    {{- else }}
                <li>
                    <a href="#{{- $cleanedID -}}" aria-label="{{- $header | plainify | safeHTML -}}">{{- $header | plainify | safeHTML -}}</a>
                    {{- end -}}
                    {{- end -}}
                    <!-- {{- $firstHeaderLevel := len (seq (index (findRE "[1-6]" (index $headers 0) 1) 0)) -}} -->
                    {{- $firstHeaderLevel := $largest }}
                    {{- $lastHeaderLevel := len (seq (index (findRE "[1-6]" (index $headers (sub (len $headers) 1)) 1) 0)) }}
                </li>
                {{- range seq (sub $lastHeaderLevel $firstHeaderLevel) -}}
                {{- if in ($.Scratch.Get "bareul") (add . $firstHeaderLevel) }}
            </ul>
            {{- else }}
            </ul>
            </li>
            {{- end -}}
            {{- end }}
            </ul>
            {{- end }}
        </div>
    </details>
</div>
{{- end }}
````

## File: themes/PaperMod/layouts/partials/translation_list.html
````html
{{- if .IsTranslated -}}
{{- if (ne .Layout "search") }}
{{- if or .Params.author site.Params.author (.Param "ShowReadingTime") (not .Date.IsZero) }}&nbsp;|&nbsp;{{- end -}}
{{- end }}
{{- i18n "translations" | default "Translations" }}:
<ul class="i18n_list">
    {{- range .Translations }}
    <li>
        <a href="{{ .Permalink }}">
            {{- if (and site.Params.displayFullLangName (.Language.LanguageName)) }}
            {{- .Language.LanguageName | emojify -}}
            {{- else }}
            {{- .Lang | title -}}
            {{- end -}}
        </a>
    </li>
    {{- end }}
</ul>
{{- end -}}
````

## File: themes/PaperMod/layouts/shortcodes/collapse.html
````html
{{ if .Get "summary" }}
{{ else }}
{{ warnf "missing value for param 'summary': %s" .Position }}
{{ end }}
<p><details {{ if (eq (.Get "openByDefault") true) }} open=true {{ end }}>
  <summary markdown="span">{{ .Get "summary" | markdownify }}</summary>
  {{ .Inner | markdownify }}
</details></p>
````

## File: themes/PaperMod/layouts/shortcodes/figure.html
````html
<figure{{ if or (.Get "class") (eq (.Get "align") "center") }} class="
           {{- if eq (.Get "align") "center" }}align-center {{ end }}
           {{- with .Get "class" }}{{ . }}{{- end }}"
{{- end -}}>
    {{- if .Get "link" -}}
        <a href="{{ .Get "link" }}"{{ with .Get "target" }} target="{{ . }}"{{ end }}{{ with .Get "rel" }} rel="{{ . }}"{{ end }}>
    {{- end }}
    <img loading="lazy" src="{{ .Get "src" }}{{- if eq (.Get "align") "center" }}#center{{- end }}"
         {{- if or (.Get "alt") (.Get "caption") }}
         alt="{{ with .Get "alt" }}{{ . }}{{ else }}{{ .Get "caption" | markdownify| plainify }}{{ end }}"
         {{- end -}}
         {{- with .Get "width" }} width="{{ . }}"{{ end -}}
         {{- with .Get "height" }} height="{{ . }}"{{ end -}}
    /> <!-- Closing img tag -->
    {{- if .Get "link" }}</a>{{ end -}}
    {{- if or (or (.Get "title") (.Get "caption")) (.Get "attr") -}}
        <figcaption>
            {{ with (.Get "title") -}}
                {{ . }}
            {{- end -}}
            {{- if or (.Get "caption") (.Get "attr") -}}<p>
                {{- .Get "caption" | markdownify -}}
                {{- with .Get "attrlink" }}
                    <a href="{{ . }}">
                {{- end -}}
                {{- .Get "attr" | markdownify -}}
                {{- if .Get "attrlink" }}</a>{{ end }}</p>
            {{- end }}
        </figcaption>
    {{- end }}
</figure>
````

## File: themes/PaperMod/layouts/shortcodes/inTextImg.html
````html
{{- $Img := (.Get "url") }}
{{- $height := (.Get "height") }}
{{- $alt := (.Get "alt") }}

<img class="in-text" height="{{ $height | default `15` }}" src="{{$Img}}" alt="{{$alt}}">
````

## File: themes/PaperMod/layouts/shortcodes/ltr.html
````html
{{ $.Scratch.Set "md" false }}

{{ if .IsNamedParams }}
{{ $.Scratch.Set "md" (.Get "md") }}
{{ else }}
{{ $.Scratch.Set "md" (.Get 0) }}
{{ end }}

<div dir="ltr">
  {{ if eq ($.Scratch.Get "md") false }}
    {{ .Inner }}
  {{ else }}
    {{ .Inner | markdownify }}
  {{ end }}
</div>
````

## File: themes/PaperMod/layouts/shortcodes/rawhtml.html
````html
<!-- raw html -->
{{- .Inner -}}
````

## File: themes/PaperMod/layouts/shortcodes/rtl.html
````html
{{ $.Scratch.Set "md" false }}

{{ if .IsNamedParams }}
{{ $.Scratch.Set "md" (.Get "md") }}
{{ else }}
{{ $.Scratch.Set "md" (.Get 0) }}
{{ end }}

<div dir="rtl">
  {{ if eq ($.Scratch.Get "md") false }}
    {{ .Inner }}
  {{ else }}
    {{ .Inner | markdownify }}
  {{ end }}
</div>
````

## File: themes/PaperMod/layouts/404.html
````html
{{- define "main" }}
<div class="not-found">404</div>
{{- end }}{{/* end main */ -}}
````

## File: themes/PaperMod/layouts/robots.txt
````
User-agent: *
{{- if hugo.IsProduction | or (eq site.Params.env "production") }}
Disallow:
{{- else }}
Disallow: /
{{- end }}
Sitemap: {{ "sitemap.xml" | absURL }}
````

## File: themes/PaperMod/.git
````
gitdir: ../../.git/modules/themes/PaperMod
````

## File: themes/PaperMod/go.mod
````
module github.com/adityatelange/hugo-PaperMod

go 1.12
````

## File: themes/PaperMod/LICENSE
````
MIT License

Copyright (c) 2020 nanxiaobei and adityatelange
Copyright (c) 2021-2025 adityatelange

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: themes/PaperMod/README.md
````markdown
<h1 align=center>Hugo PaperMod | <a href="https://adityatelange.github.io/hugo-PaperMod/" rel="nofollow">Demo</a></h1>

<h4 align=center>☄️ Fast | ☁️ Fluent | 🌙 Smooth | 📱 Responsive</h4>
<br>

> Hugo PaperMod is a theme based on [hugo-paper](https://github.com/nanxiaobei/hugo-paper/tree/4330c8b12aa48bfdecbcad6ad66145f679a430b3).<br>
> The goal of this project is to add more features and customization to the og theme.

**Documentation** can be found here: [**📚 Wiki**](https://github.com/adityatelange/hugo-PaperMod/wiki)

**ExampleSite** can be found here: [**exampleSite**](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite). Demo is built up with [exampleSite](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite) as source.

[![hugo-papermod](https://img.shields.io/badge/Hugo--Themes-@PaperMod-blue)](https://themes.gohugo.io/themes/hugo-papermod/)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=>=v0.146.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.146.0)
[![Discord](https://img.shields.io/discord/971046860317921340?label=Discord&logo=discord)](https://discord.gg/ahpmTvhVmp)
[![GitHub](https://img.shields.io/github/license/adityatelange/hugo-PaperMod)](https://github.com/adityatelange/hugo-PaperMod/blob/master/LICENSE)
![code-size](https://img.shields.io/github/languages/code-size/adityatelange/hugo-PaperMod)
[![X (formerly Twitter) URL](https://img.shields.io/badge/-Share%20on%20X-gray?style=flat&logo=x)](https://x.com/intent/tweet/?text=Checkout%20Hugo%20PaperMod%20%E2%9C%A8%0AA%20fast,%20clean,%20responsive%20Hugo%20theme.&url=https://github.com/adityatelange/hugo-PaperMod&hashtags=Hugo,PaperMod)


---

<p align="center">
  <kbd><img src="https://user-images.githubusercontent.com/21258296/114303440-bfc0ae80-9aeb-11eb-8cfa-48a4bb385a6d.png" alt="Mockup image" title="Mockup"/></kbd>
</p>

---

## Features/Mods 💥

-   Uses Hugo's asset generator with pipelining, fingerprinting, bundling and minification by default.
-   3 Modes:
    -   [Regular Mode.](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#regular-mode-default-mode)
    -   [Home-Info Mode.](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#home-info-mode)
    -   [Profile Mode.](https://github.com/adityatelange/hugo-PaperMod/wiki/Features#profile-mode)
-   Table of Content Generation (newer implementation).
-   Archive of posts.
-   Social Icons (home-info and profile-mode).
-   Social-Media Share buttons on posts.
-   Menu location indicator.
-   Multilingual support. (with language selector).
-   Taxonomies.
-   Cover image for each post (with Responsive image support).
-   Light/Dark theme (automatic theme switch a/c to browser theme and theme-switch button).
-   SEO Friendly.
-   Multiple Author support.
-   Search Page with Fuse.js
-   Other Posts suggestion below a post
-   Breadcrumb Navigation.
-   Code Block Copy buttons.
-   Hugo's Chroma syntax highlighter.
-   No webpack, nodejs and other dependencies are required to edit the theme.

Read Wiki For More Details => **[PaperMod - Features](https://github.com/adityatelange/hugo-PaperMod/wiki/Features)**

---

## Install/Update 📥

Read Wiki For More Details => **[PaperMod - Installation](https://github.com/adityatelange/hugo-PaperMod/wiki/Installation)**

---

## FAQs / How To's Guide 🙋

Read Wiki For More Details => **[PaperMod-FAQs](https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs)**

---

## Social-Icons/Share-Icons 🖼️

Read Wiki For More Details => **[PaperMod-Icons](https://github.com/adityatelange/hugo-PaperMod/wiki/Icons)**

---

## Release Changelog 📃

Release ChangeLog has info about stuff added: **[Releases](https://github.com/adityatelange/hugo-PaperMod/releases)**

---

## [Pagespeed Insights (100% ?)](https://pagespeed.web.dev/report?url=https://adityatelange.github.io/hugo-PaperMod/) 👀

---

## Support 🫶

-   Star 🌟 this repository.
-   Help spread the word about PaperMod by sharing it on social media and recommending it to your friends. 🗣️
-   You can also sponsor 🏅 on [Github Sponsors](https://github.com/sponsors/adityatelange) / [Ko-Fi](https://ko-fi.com/adityatelange).

---

## Special Thanks 🌟

-   [**Highlight.js**](https://github.com/highlightjs/highlight.js)
-   [**Fuse.js**](https://github.com/krisk/fuse)
-   [**Feather Icons**](https://github.com/feathericons/feather)
-   [**Simple Icons**](https://github.com/simple-icons/simple-icons)
-   **All Contributors and Supporters**

---

## Stargazers over time 📈

[![Stargazers over time](https://starchart.cc/adityatelange/hugo-PaperMod.svg?background=%23ffffff00&axis=%23858585&line=%236b63ff)](https://starchart.cc/adityatelange/hugo-PaperMod)
````

## File: themes/PaperMod/theme.toml
````toml
# theme.toml template for a Hugo theme
# See https://github.com/gohugoio/hugoThemes#themetoml for an example

name = "PaperMod"
license = "MIT"
licenselink = "https://github.com/adityatelange/hugo-PaperMod/blob/master/LICENSE"
description = "A fast, clean, responsive Hugo theme"
homepage = "https://adityatelange.github.io/hugo-PaperMod/"
demosite = "https://adityatelange.github.io/hugo-PaperMod/"
tags = [
  "responsive",
  "simple",
  "clean",
  "light",
  "dark",
  "blog",
  "minimalist",
  "highlight.js",
  "search"
]
features = [
  "responsive",
  "single-column",
  "blog",
  "cover-image",
  "table-of-contents",
  "opengraph",
  "highlight.js",
  "favicon",
  "archive",
  "share-icons",
  "cover",
  "multilingual",
  "social-icons",
  "minified-assets",
  "theme-toggle",
  "menu-location-indicator",
  "scroll-to-top",
  "search"
]
min_version = "0.146.0"

[author]
  name = "Aditya Telange"
  homepage = "https://github.com/adityatelange/"

# If porting an existing theme
[original]
  name = "Paper"
  author = "nanxiaobei"
  homepage = "https://github.com/nanxiaobei"
  repo = "https://github.com/nanxiaobei/hugo-paper/"
````

## File: archetypes/default.md
````markdown
+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++
````

## File: content/blog/abobrinha/_index.md
````markdown
---
title: "Abobrinha"
description: "Conteúdos leves, curiosidades e reflexões."
---

# Abobrinha

Aqui você encontra curiosidades, reflexões e conteúdos diversos.
````

## File: content/blog/ferramentas-de-estudo/_index.md
````markdown
---
title: "Ferramentas de Estudo"
description: "Dicas e ferramentas para potencializar seus estudos."
---

# Ferramentas de Estudo

Descubra ferramentas e métodos para estudar melhor.
````

## File: content/blog/inteligencia-artificial/_index.md
````markdown
---
title: "Inteligência Artificial"
description: "Artigos sobre Inteligência Artificial."
---

# Inteligência Artificial

Aqui você encontra artigos e novidades sobre IA.
````

## File: content/blog/_index.md
````markdown
---
title: "Blog"
description: "Navegue pelos artigos do SherlockRamos organizados por categoria."
---

# Blog

Escolha uma categoria para explorar:

- [Inteligência Artificial](/blog/inteligencia-artificial/)
- [Ferramentas de Estudo](/blog/ferramentas-de-estudo/)
- [Abobrinha](/blog/abobrinha/)
````

## File: content/contato/_index.md
````markdown
---
title: "Contato"
description: "Entre em contato pelas redes sociais."
---

# Contato

Entre em contato pelas redes sociais:

- [Twitter](https://twitter.com/GatoMaconhado_)
- [Instagram](https://instagram.com/prof.gabrielramos)
- [GitHub](https://github.com/profgabrielramos-ai)
````

## File: content/posts/my-first-post.md
````markdown
+++
title = 'My First Post'
date = 2024-01-14T07:07:07+01:00
draft = true
+++
## Introduction

This is **bold** text, and this is *emphasized* text.

Visit the [Hugo](https://gohugo.io) website!
````

## File: docs/analise-e-melhorias-ux-ui.md
````markdown
# Análise e Melhorias de UX/UI para o Blog SherlockRamos

Este relatório apresenta uma análise abrangente da interface atual do blog SherlockRamos e propõe melhorias específicas para otimizar a experiência do usuário jovem, com base em princípios de design centrado no usuário e melhores práticas da indústria.

## Análise da Interface Atual

### Pontos Fortes Identificados

**Estrutura e Organização**
- Arquitetura de informação clara com categorização bem definida (Inteligência Artificial, Ferramentas de Estudo, Abobrinha)
- Navegação principal simplificada e direta
- Implementação de tema claro/escuro que atende às preferências modernas dos usuários
- Design responsivo básico implementado

**Aspectos Técnicos Positivos**
- Estrutura semântica adequada com uso correto de tags HTML
- Implementação de acessibilidade básica com atributos ARIA
- Performance otimizada com minificação de CSS e JavaScript
- SEO estruturado com meta tags apropriadas

### Falhas e Oportunidades de Melhoria

**Experiência do Usuário**
- Interface excessivamente minimalista pode parecer monótona para usuários jovens
- Falta de elementos interativos e engajamento visual
- Ausência de personalização e gamificação
- Navegação por categorias limitada sem filtros avançados
- Carência de elementos que incentivem o compartilhamento social

**Interface do Usuário**
- Paleta de cores conservadora (#131D4F, #EFE4D2) não reflete vibrância esperada pelo público jovem
- Tipografia padrão sem personalidade visual distintiva
- Ausência de elementos gráficos modernos (ícones, ilustrações, animações)
- Layout excessivamente textual com pouco conteúdo visual

## Necessidades dos Usuários e Objetivos de Negócio

### Perfil do Usuário Jovem

**Características Comportamentais**
- Atenção limitada (8-12 segundos médios)
- Preferência por conteúdo visual e interativo
- Expectativa de carregamento rápido (menos de 3 segundos)
- Uso predominante de dispositivos móveis (70-80% do tráfego)
- Engajamento através de redes sociais

**Necessidades Específicas**
- Descoberta fácil de conteúdo relevante
- Experiência de leitura otimizada para mobile
- Funcionalidades de compartilhamento integradas
- Personalização da experiência
- Feedback visual imediato nas interações

### Alinhamento com Objetivos de Negócio

**Engajamento e Retenção**
- Aumentar tempo de permanência no site
- Reduzir taxa de rejeição
- Incentivar retorno de visitantes
- Construir comunidade em torno do conteúdo

**Crescimento e Alcance**
- Facilitar compartilhamento nas redes sociais
- Melhorar posicionamento em mecanismos de busca
- Expandir base de leitores jovens
- Estabelecer autoridade no nicho de tecnologia e educação

## Propostas de Melhorias UX/UI

### Navegação e Layout

**Sistema de Navegação Aprimorado**
- Implementação de mega menu com prévia do conteúdo
- Breadcrumbs visuais com ícones representativos
- Barra de pesquisa com sugestões automáticas e filtros
- Menu hambúrguer otimizado para mobile com animações suaves

**Layout Modular e Dinâmico**
- Grid cards responsivo para apresentação de posts
- Sidebar com widgets interativos (posts populares, tags trending)
- Hero section com rotação de conteúdo em destaque
- Footer expandido com mapa do site visual

**Arquitetura de Informação Melhorada**
```
Homepage
├── Hero Section (conteúdo destacado)
├── Posts em Destaque (grid responsivo)
├── Categorias Visuais (cards com ícones)
├── Newsletter/CTA
└── Footer Expandido

Post Individual
├── Header com breadcrumbs
├── Conteúdo principal (tipografia otimizada)
├── Sidebar relacionados
├── Área de comentários/engajamento
└── CTA próximo post
```

### Acessibilidade e Responsividade

**Melhorias de Acessibilidade**
- Implementação de skip links para navegação por teclado
- Contraste de cores conforme WCAG 2.1 AA (mínimo 4.5:1)
- Alt text descritivo para todas as imagens
- Navegação por landmarks semânticos
- Suporte completo para leitores de tela

**Responsividade Avançada**
- Breakpoints otimizados: 320px, 768px, 1024px, 1440px
- Imagens responsivas com lazy loading
- Menu touch-friendly com alvos de pelo menos 44px
- Tipografia fluida usando clamp() para melhor legibilidade
- Orientação portrait/landscape específica para tablets

### Design Visual e Identidade

**Nova Paleta de Cores**
```css
:root {
  --primary: #6C63FF;      /* Roxo vibrante */
  --secondary: #FF6B6B;    /* Coral energético */
  --accent: #4ECDC4;       /* Turquesa moderno */
  --neutral-dark: #2D3748; /* Cinza escuro */
  --neutral-light: #F7FAFC; /* Branco suave */
  --success: #48BB78;      /* Verde confirmação */
  --warning: #ED8936;      /* Laranja atenção */
}
```

**Sistema Tipográfico Hierárquico**
- Fonte principal: Inter (moderna e legível)
- Fonte secundária: Fira Code (para código)
- Escala tipográfica harmônica (1.25 - Perfect Fourth)
- Line-height otimizado: 1.6 para texto corrido, 1.2 para títulos

**Elementos Gráficos e Iconografia**
- Conjunto de ícones personalizado no estilo outlined
- Ilustrações isométricas para categorias
- Micro-interações com CSS animations
- Gradientes sutis para elementos de destaque

## Justificativas e Referências

### Princípios de Design Aplicados

**Lei de Fitts**
Aumentar o tamanho dos alvos de clique (botões, links) para 44px+ melhora significativamente a usabilidade móvel, especialmente para usuários jovens que navegam rapidamente.

**Gestalt - Proximidade e Agrupamento**
O agrupamento visual de elementos relacionados através de whitespace adequado e cards delimitados melhora a escaneabilidade do conteúdo.

**Lei de Miller**
Limitação das opções de menu principal a 7±2 itens para reduzir carga cognitiva e facilitar tomada de decisão.

### Cases de Sucesso

**Medium.com**
- Interface limpa com foco no conteúdo
- Sistema de recomendação baseado em interesses
- Micro-interações que incentivam engajamento

**Notion.so**
- Design modular e flexível
- Paleta de cores vibrante mas profissional
- Excelente experiência móvel

**Discord**
- UI otimizada para usuários jovens
- Dark mode como padrão
- Elementos gamificados de engajamento

### Melhores Práticas da Indústria

**Performance Web**
- Core Web Vitals otimizados (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Implementação de Service Workers para cache offline
- Critical CSS inline para above-the-fold content

**Experiência Móvel**
- Mobile-first design approach
- Touch gestures intuitivos (swipe, pinch-to-zoom)
- Orientação automática de conteúdo

## Ferramentas e Metodologias Recomendadas

### Fase de Pesquisa e Planejamento

**Pesquisa de Usuários**
- **Hotjar** para análise de heatmaps e gravações de sessão
- **Google Analytics 4** para comportamento de usuário
- **Typeform** para surveys de satisfação e feedback

**Design System e Prototipagem**
- **Figma** para design colaborativo e sistema de componentes
- **Principle** ou **Framer** para prototipagem de micro-interações
- **Zeroheight** para documentação do design system

### Implementação e Desenvolvimento

**Framework e Ferramentas**
- **Hugo** (manter atual) com tema customizado
- **Tailwind CSS** para sistema de design consistente
- **Alpine.js** para interatividade leve
- **Intersection Observer API** para lazy loading e animações

**Performance e Monitoramento**
- **Lighthouse CI** para auditoria contínua de performance
- **WebPageTest** para análise detalhada de carregamento
- **Sentry** para monitoramento de erros em produção

### Metodologia de Implementação

**Processo Iterativo**
1. **Semana 1-2**: Pesquisa de usuários e análise de dados
2. **Semana 3-4**: Wireframes e arquitetura de informação
3. **Semana 5-6**: Design visual e sistema de componentes
4. **Semana 7-8**: Prototipagem interativa e testes de usabilidade
5. **Semana 9-12**: Desenvolvimento e implementação
6. **Semana 13-14**: Testes A/B e otimizações

**Métricas de Sucesso**
- Redução de 30% na taxa de rejeição
- Aumento de 40% no tempo médio de sessão
- Melhoria de 25% na taxa de conversão para newsletter
- Score de acessibilidade 90+ no Lighthouse
- Core Web Vitals em verde para 95% das páginas

## Conclusão

A reformulação proposta para o blog SherlockRamos visa criar uma experiência moderna, acessível e envolvente para o público jovem, mantendo a qualidade do conteúdo educacional. As melhorias sugeridas são baseadas em dados, princípios de design estabelecidos e melhores práticas da indústria, garantindo que o site não apenas atenda às expectativas dos usuários atuais, mas também seja escalável para futuras necessidades de crescimento.

A implementação gradual dessas melhorias, combinada com monitoramento contínuo de métricas de usuário, assegurará que o blog se posicione como uma referência moderna no nicho de tecnologia e educação para jovens.
````

## File: .gitignore
````
public/
````

## File: .gitmodules
````
[submodule "themes/PaperMod"]
	path = themes/PaperMod
	url = https://github.com/adityatelange/hugo-PaperMod.git
````

## File: .github/workflows/hugo.yaml
````yaml
# Sample workflow for building and deploying a Hugo site to GitHub Pages
name: Deploy Hugo site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches:
      - master

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.147.9
      HUGO_ENVIRONMENT: production
      TZ: America/Los_Angeles
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Install Dart Sass
        run: sudo snap install dart-sass
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Cache Restore
        id: cache-restore
        uses: actions/cache/restore@v4
        with:
          path: |
            ${{ runner.temp }}/hugo_cache
          key: hugo-${{ github.run_id }}
          restore-keys: hugo-
      - name: Configure Git
        run: git config core.quotepath false
      - name: Build with Hugo
        run: |
          hugo \
            --gc \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/" \
            --cacheDir "${{ runner.temp }}/hugo_cache"
      - name: Cache Save
        id: cache-save
        uses: actions/cache/save@v4
        with:
          path: |
            ${{ runner.temp }}/hugo_cache
          key: ${{ steps.cache-restore.outputs.cache-primary-key }}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
````

## File: assets/css/custom.css
````css
:root {
  --primary: #131D4F;
  --secondary: #EFE4D2;
  --accent1: #254D70;
  --accent2: #954C2E;
  --font-family: 'Inter', 'Roboto', 'Montserrat', sans-serif;
  --background-dark: #0a1d37;
}

body {
  font-family: var(--font-family);
  background-color: var(--background-dark);
  background-image: repeating-linear-gradient(45deg,
    rgba(255, 255, 255, 0.05) 0,
    rgba(255, 255, 255, 0.05) 2px,
    transparent 2px,
    transparent 4px);
  color: var(--primary);
}

a,
.navbar a {
  color: var(--accent1);
  transition: color 0.2s;
}

a:hover,
.navbar a:hover {
  color: var(--accent2);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--primary);
  font-family: var(--font-family);
}

nav {
  background: var(--primary);
  color: var(--secondary);
}

button,
.button {
  background: var(--accent1);
  color: var(--secondary);
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  font-family: var(--font-family);
  cursor: pointer;
  transition: background 0.2s;
}

button:hover,
.button:hover {
  background: var(--accent2);
}

/* Melhorias de UX/UI */
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2em 1em;
}

::-webkit-scrollbar {
  width: 8px;
  background: var(--secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 4px;
}
````

## File: content/_index.md
````markdown
---
title: "SherlockRamos"
description: "Bem-vindo ao blog SherlockRamos! Aqui você encontra conteúdos sobre Inteligência Artificial, Ferramentas de Estudo e Abobrinhas."
---
````

## File: archetypes/post.md
````markdown
+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
summary = 'Resumo do post'
tags = []
categories = []
+++
````

## File: README.md
````markdown
# SherlockRamos Blog

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/profgabrielramos-ai/sherlockramosblog?utm_source=oss&utm_medium=github&utm_campaign=profgabrielramos-ai%2Fsherlockramosblog&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

Bem-vindo ao repositório do blog SherlockRamos! Este projeto é um blog pessoal construído com o [Hugo](https://gohugo.io/), um gerador de sites estáticos rápido e flexível, utilizando o tema **PaperMod**.

## Tecnologias Utilizadas

*   **Hugo**: Framework para geração de sites estáticos.
*   **PaperMod**: Tema rápido e responsivo para Hugo.
*   **Git**: Controle de versão.
*   **GitHub Pages**: Hospedagem do site.

## Funcionalidades

*   Blog com categorias e tags.
*   Página inicial personalizável com modo de perfil.
*   Estilização customizável via CSS.
*   Integração com ícones de redes sociais.
*   Suporte a Markdown para criação de conteúdo.

## Primeiros Passos

Para configurar e executar o projeto localmente, siga as instruções abaixo.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

*   **Git**: Para clonar o repositório.
*   **Hugo**: Versão `0.148.1` ou superior. Você pode instalá-lo via Homebrew (macOS) ou seguindo as instruções no [site oficial do Hugo](https://gohugo.io/installation/).
    ```bash
    brew install hugo
    ```
*   **Node.js e npm**: Necessário para o `dart-sass` (se o tema usar Sass para compilação de CSS).
    ```bash
    npm install -g dart-sass
    ```

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/profgabrielramos-ai/sherlockramosblog.git
    cd sherlockramosblog
    ```

2.  **Inicialize e atualize os submódulos do Git:**
    O tema PaperMod é incluído como um submódulo.
    ```bash
    git submodule update --init --recursive
    ```

### Desenvolvimento Local

Para visualizar o site em seu ambiente de desenvolvimento local:

```bash
hugo server -D
```

O site estará disponível em `http://localhost:1313/`. Quaisquer alterações nos arquivos de conteúdo ou configuração serão automaticamente recarregadas.

## Personalização

### Cores e Fontes

As principais personalizações de estilo são definidas em `assets/css/custom.css`.

1.  Abra o arquivo `assets/css/custom.css`.
2.  Edite as variáveis CSS no bloco `:root` para ajustar as cores e a família tipográfica:
    ```css
    :root {
      --primary: #131D4F;   /* Cor principal */
      --secondary: #EFE4D2; /* Cor secundária/fundo */
      --accent1: #254D70;   /* Cor de destaque 1 */
      --accent2: #954C2E;   /* Cor de destaque 2 */
      --font-family: 'Inter', 'Roboto', 'Montserrat', sans-serif; /* Fontes */
    }
    ```
3.  Salve o arquivo.

### Botões na Página Inicial

Os botões exibidos na página inicial (no modo de perfil) são configurados em `config.yaml`, dentro de `params.profileMode.buttons`.

Para adicionar ou modificar botões:

```yaml
params:
  profileMode:
    buttons:
      - name: "Twitter"
        url: "https://x.com/GatoMaconhado_"
      - name: "GitHub"
        url: "https://github.com/sherlockramos"
      - name: "Novo Botão"
        url: "https://example.com"
```

Cada item precisa de um `name` (texto do botão) e um `url` (link ao clicar).

### Ícones Sociais

Os ícones de redes sociais no rodapé são configurados em `config.yaml`, dentro de `params.socialIcons`.

```yaml
params:
  socialIcons:
    - name: "Twitter"
      url: "https://twitter.com/GatoMaconhado_"
    - name: "Instagram"
      url: "https://instagram.com/prof.gabrielramos"
    - name: "GitHub"
      url: "https://github.com/profgabrielramos-ai"
```

### Modo de Perfil

O `profileMode` é ativado em `config.yaml` e permite configurar o título, subtítulo, imagem e botões da página inicial.

```yaml
params:
  profileMode:
    enabled: true
    title: "SherlockRamos"
    subtitle: "Bem-vindo ao blog do Sherlock Ramos"
    imageUrl: "https://pbs.twimg.com/profile_images/1848910652808613888/r81-u5pP_400x400.jpg"
    imageTitle: "Foto de Sherlock Ramos"
    imageWidth: 120
    imageHeight: 120
    buttons:
      # ... seus botões aqui
```

## Gerenciamento de Conteúdo

### Criando Novas Postagens

Para criar uma nova postagem de blog, você pode usar o comando do Hugo com o arquétipo `post`:

```bash
hugo new content/blog/minha-nova-postagem.md
```

Isso criará um novo arquivo Markdown em `content/blog/minha-nova-postagem.md` com o front matter pré-definido pelo arquétipo `archetypes/post.md`.

### Estrutura de Conteúdo

As postagens são organizadas em `content/blog/`. Cada categoria de blog (ex: `inteligencia-artificial`) deve ter um arquivo `_index.md` dentro de seu diretório para que o Hugo a reconheça como uma seção.

## Implantação (Deployment)

Este projeto está configurado para ser implantado automaticamente no [GitHub Pages](https://pages.github.com/) através de um workflow do GitHub Actions (`.github/workflows/hugo.yaml`).

Qualquer push para o branch `master` acionará o processo de build e deploy. Certifique-se de que as configurações de ambiente do GitHub Pages permitam o deploy do branch `master`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar bugs ou sugerir melhorias, e enviar Pull Requests com suas contribuições.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
````

## File: config.yaml
````yaml
baseURL: "https://profgabrielramos-ai.github.io/"
languageCode: "pt-br"
title: "SherlockRamos"
theme: "PaperMod"
defaultContentLanguage: "pt"
pagination:
  pagerSize: 10

caches:
  images:
    dir: ":cacheDir/images"

params:
  profileMode:
    enabled: true
    title: "SherlockRamos" # default will be site title
    subtitle: "Bem-vindo ao blog do Sherlock Ramos"
    imageUrl: "https://pbs.twimg.com/profile_images/1848910652808613888/r81-u5pP_400x400.jpg"
    imageTitle: "Foto de Sherlock Ramos"
    imageWidth: 120
    imageHeight: 120
    buttons:
      - name: "Twitter"
        url: "https://x.com/GatoMaconhado_"
      - name: "GitHub"
        url: "https://github.com/sherlockramos"
  socialIcons:
    - name: "Twitter"
      url: "https://twitter.com/GatoMaconhado_"
    - name: "Instagram"
      url: "https://instagram.com/prof.gabrielramos"
    - name: "GitHub"
      url: "https://github.com/profgabrielramos-ai"
  assets:
    favicon: "images/favicon.ico"
    customCSS: ["css/custom.css"]
  defaultTheme: "auto"
  ShowBreadCrumbs: true
  ShowReadingTime: true
  ShowShareButtons: true
  ShowPostNavLinks: true

menu:
  main:
    - identifier: home
      name: Home
      url: /
      weight: 1
    - identifier: blog
      name: Blog
      url: /blog/
      weight: 2
    - identifier: contato
      name: Contato
      url: /contato/
      weight: 3

markup:
  goldmark:
    renderer:
      unsafe: true
    extensions:
      table: true
      linkify: true
      strikethrough: true
      taskList: true
      typographer: true
````
