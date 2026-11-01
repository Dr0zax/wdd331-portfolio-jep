# WDD 331R Portfolio

**Student:** Andrew Jeppesen<br>
**Semester:** Fall 2026<br>
**Live site:** [dr0zax.github.io/wdd331-portfolio-jep](https://dr0zax.github.io/wdd331-portfolio-jep/)<br>
**Repository:** [github.com/Dr0zax/wdd331-portfolio-jep](https://github.com/Dr0zax/wdd331-portfolio-jep)

## Overview

This repository contains my portfolio for WDD 331R: Advanced CSS. The home page links to course assignments, and the root stylesheet demonstrates a layered CSS architecture using design tokens, base rules, layout rules, components, and utilities. The site also includes a persistent light/dark theme preference.

The site is deployed automatically to GitHub Pages when changes are pushed to `main`. GitHub Actions publishes the repository contents to the `website` branch.

## Project structure

```text
.
├── index.html                         # Portfolio home page
├── css/                               # Shared root-site stylesheet source
│   ├── main.css                       # CSS import entry point
│   ├── tokens/                        # Colors, variables, and design tokens
│   ├── base/                          # Reset and element-level styles
│   ├── layout/                        # Page layout styles
│   ├── components/                    # Reusable interface component styles
│   └── utilities/                     # Small, single-purpose utility classes
├── dist/
│   └── styles.css                     # Generated, bundled stylesheet
├── js/
│   └── theme-preferences.js           # Theme preference persistence
├── unit-1/
│   └── custom-properties/             # Custom properties and nesting
├── unit-2/
│   ├── custom-media/                  # Custom media query assignment
│   └── layered-components/            # Cascade layers and components
├── unit-3/
│   ├── blend-modes-demo/              # Blend modes teaching demo
│   └── visual-effects/                # Visual effects showcase
├── unit-4/
│   ├── grid-layouts/                  # Editorial and card grid layouts
│   └── display-contents/              # display: contents demonstration
├── postcss.config.cjs                 # PostCSS plugin configuration
├── package.json                       # Project metadata and scripts
├── pnpm-lock.yaml                     # Locked dependency versions
└── .github/workflows/
    └── deploy-website.yml             # GitHub Pages deployment workflow
```

Each assignment folder is self-contained. The root portfolio page uses the shared stylesheet in `css/`, while assignment pages keep their own HTML, CSS, JavaScript, and image assets.

## Assignments

### Unit 1

- [Custom Properties and Nesting](unit-1/custom-properties/index.html) · [Live page](https://dr0zax.github.io/wdd331-portfolio-jep/unit-1/custom-properties/index.html)

### Unit 2

- [Custom Media](unit-2/custom-media/index.html) · [Live page](https://dr0zax.github.io/wdd331-portfolio-jep/unit-2/custom-media/index.html)
- [Layered Components](unit-2/layered-components/index.html) · [Live page](https://dr0zax.github.io/wdd331-portfolio-jep/unit-2/layered-components/index.html)

### Unit 3

- [Blend Modes](unit-3/blend-modes-demo/index.html) · [Live page](https://dr0zax.github.io/wdd331-portfolio-jep/unit-3/blend-modes-demo/index.html)
- [Visual Effects](unit-3/visual-effects/index.html) · [Live page](https://dr0zax.github.io/wdd331-portfolio-jep/unit-3/visual-effects/index.html)

### Unit 4

- [Editorial Grid Layout](unit-4/grid-layouts/editorial.html) · [Live page](https://dr0zax.github.io/wdd331-portfolio-jep/unit-4/grid-layouts/editorial.html)
- [Card Grid Layout](unit-4/grid-layouts/cards.html) · [Live page](https://dr0zax.github.io/wdd331-portfolio-jep/unit-4/grid-layouts/cards.html)
- [Display: Contents](unit-4/display-contents/index.html) · [Live page](https://dr0zax.github.io/wdd331-portfolio-jep/unit-4/display-contents/index.html)

## CSS architecture

`css/main.css` is the source entry point. It declares the cascade layer order and imports styles in this order:

1. `tokens` — shared colors, spacing, typography, and other variables
2. `base` — resets and element defaults
3. `layout` — page-level structure and spacing
4. `components` — styles for reusable interface pieces
5. `utilities` — small overrides and helper classes

Keep source styles in these folders rather than editing `dist/styles.css` directly. The `dist` file is generated output.

## Build tool

The project uses [PostCSS](https://postcss.org/) with these plugins:

- `postcss-import` bundles imported CSS files into one output file.
- `cssnano` minifies the bundled CSS for production.
- `postcss-cli` provides the command-line build runner.

## Setup and build

Install dependencies from the project root:

```bash
pnpm install
```

Build the root stylesheet:

```bash
pnpm run build:css
```

This reads `css/main.css` and writes the bundled, minified result to `dist/styles.css`. Re-run the build after changing any imported stylesheet.

## Deployment

The workflow in `.github/workflows/deploy-website.yml` runs on pushes to `main` and deploys the repository root to the `website` branch using GitHub Pages.
