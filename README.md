# react-scroll-into-view

[![CI](https://github.com/dominikbulaj/react-scroll-into-view/actions/workflows/build.yml/badge.svg)](https://github.com/dominikbulaj/react-scroll-into-view/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/react-scroll-into-view)](https://www.npmjs.com/package/react-scroll-into-view)
[![downloads](https://img.shields.io/npm/dw/react-scroll-into-view)](https://npmcharts.com/compare/react-scroll-into-view)

A small React component that scrolls to a target element using `Element.scrollIntoView()` — in a fast, declarative way.

- Declarative wrapper around [`element.scrollIntoView`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- Works with any clickable child (button, link, custom component)
- Supports smooth scrolling and native `scrollIntoView` options

---

## Demo

Try the CodeSandbox example:  
https://codesandbox.io/s/14lxm6jmm7

---

## Installation

Pick your package manager:

```/dev/null/install.sh#L1-12
# npm
npm install react-scroll-into-view

# yarn
yarn add react-scroll-into-view

# pnpm
pnpm add react-scroll-into-view

# bun
bun add react-scroll-into-view
```

---

## Quick start

### 1) Import

```/dev/null/usage.tsx#L1-3
import ScrollIntoView from 'react-scroll-into-view'
```

### 2) Use it

```/dev/null/usage.tsx#L1-15
<ScrollIntoView selector="#footer">
  <button>
    Jump to bottom
  </button>
</ScrollIntoView>

{/* somewhere down the page */}
<div id="footer">Scroll target element</div>
```

---

## How it works

`ScrollIntoView` renders a wrapper element that listens for clicks. When clicked, it finds the element matching `selector` and calls `scrollIntoView()` with the provided options.

If you need more control, pass `scrollOptions` (recommended) rather than relying on legacy booleans.

---

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` |  | Content rendered inside the component. |
| `selector` | `string` |  | **Required.** A valid [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) pointing to the target element to scroll to. |
| `smooth` | `boolean` | `true` | When `true`, uses smooth scrolling (equivalent to `scrollOptions.behavior = 'smooth'`). |
| `style` | `React.CSSProperties` |  | Styles applied to the wrapper element. **Note:** prior to `v1.4.0`, the default was `{ display: 'inline' }`. |
| `alignToTop` | `boolean` | `false` | When `true`, aligns the top of the target to the top of the visible area. When `false`, aligns to the bottom. (Maps to `scrollIntoView` “block” alignment behavior.) |
| `className` | `string` |  | Class name applied to the wrapper element. |
| `onClick` | `(event: React.MouseEvent<HTMLElement>) => void` |  | Optional click callback (called in addition to scrolling). |
| `scrollOptions` | `ScrollIntoViewOptions` | `{}` | Passed to `element.scrollIntoView(options)`. See MDN: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters. Common fields: `behavior` (`auto`/`smooth`), `block` (`start`/`center`/`end`/`nearest`), `inline` (`start`/`center`/`end`/`nearest`). Only valid properties are used. |

---

## Examples

### Scroll with explicit options (recommended)

```jsx
<ScrollIntoView selector="#footer">
  <button >
    Jump to bottom
  </button>
</ScrollIntoView>

<!-- somewhere down on our page we have our target element -->
<div id="footer">Scroll target element</div>
```

### Disable smooth scrolling

```jsx
<!-- NOTE selector "body" targets the entire page and scrolls to the top of the screen -->
<ScrollIntoView selector="body" smooth={false}>
  <button>Back to top</button>
</ScrollIntoView>
```

---

## Changelog

See GitHub releases:  
https://github.com/dominikbulaj/react-scroll-into-view/releases
