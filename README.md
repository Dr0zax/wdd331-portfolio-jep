# WDD 331R Portfolio

**Student:** Andrew Jeppesen  
**Semester:** Fall 2026  
**Live Site:** [View Site](https://dr0zax.github.io/wdd331-portfolio-jep/)

## Overview

This repository contains my portfolio for WDD 331R: Advanced CSS. The home page links to course assignments, while the root stylesheet demonstrates a layered CSS architecture using design tokens, base rules, layout rules, components, and utilities.

The site is deployed automatically to GitHub Pages from the `main` branch. The GitHub Actions workflow publishes the repository contents to the `website` branch.

## Project structure

```text
.
├── index.html                    # Portfolio home page
├── css/
│   ├── main.css                  # Root stylesheet and import entry point
│   ├── tokens/                   # Colors, variables, and design tokens
│   ├── base/                     # Reset and element-level styles
│   ├── layout/                   # Page layout styles
│   ├── components/               # Reusable interface component styles
│   └── utilities/                # Small, single-purpose utility classes
├── dist/
│   └── styles.css                # Generated, bundled, minified stylesheet
├── unit-1/
│   └── custom-properties/        # Custom properties and nesting assignment
├── unit-2/
│   └── layered-components/       # Layered components assignment
├── postcss.config.cjs            # PostCSS plugin configuration
├── package.json                  # Project metadata and build scripts
├── pnpm-lock.yaml                # Locked dependency versions
└── .github/workflows/
    └── deploy-website.yml        # GitHub Pages deployment workflow
```

Each assignment folder is intentionally self-contained. The root portfolio page uses the shared stylesheet in `css/`, while assignment pages keep their own HTML and CSS examples.

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

- `postcss-import` bundles the imported CSS files into one output file.
- `cssnano` minifies the bundled CSS for production.
- `postcss-cli` provides the command-line build runner.

## Setup and build

Install dependencies from the project root:

```bash
npm install
```

Build the root stylesheet:

```bash
npm run build:css
```

This reads `css/main.css` and writes the bundled, minified result to `dist/styles.css`. Re-run the build after changing any imported stylesheet.

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
