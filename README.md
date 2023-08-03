# React scroll-into-view

[![CI](https://github.com/dominikbulaj/react-scroll-into-view/actions/workflows/build.yml/badge.svg)](https://github.com/dominikbulaj/react-scroll-into-view/actions/workflows/build.yml)
[![npm version](https://img.shields.io/npm/v/react-scroll-into-view)](https://www.npmjs.com/package/react-scroll-into-view)
[![bundlephobia](https://badgen.net/bundlephobia/minzip/react-scroll-into-view)](https://bundlephobia.com/package/react-scroll-into-view)
[![tree shakable](https://badgen.net/bundlephobia/tree-shaking/react-scroll-into-view)](https://bundlephobia.com/package/react-scroll-into-view)

Fast & declarative way for scrolling to any element on page. Weights less than 600B (minified + gzipped)!

## Idea behind

While developing landing page we needed way to scroll page to focus on registration form. It was obvious we will use [element.scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) we just need find nice way how to.
This is just simple React element that provides declarative way to scroll to any element on page when it's clicked.

## Demo

Check out that [codesandbox](https://codesandbox.io/s/14lxm6jmm7) example

## Installation

```
yarn add react-scroll-into-view
```

or if you use npm:

```
npm i --save react-scroll-into-view
```

## How to use

First import it

```
import ScrollIntoView from 'react-scroll-into-view'
```

Then use it

```
<ScrollIntoView selector="#footer">
  <button className="mdl-button mdl-js-button mdl-button--raised">
    Jump to bottom
  </button>
</ScrollIntoView>

<!-- somewhere down on our page we have our target element -->
<div id="footer">Scroll target element</div>
```

## Props

| Name          | Type                                                                         | Default | Description                                                                                                                                                                                                                                                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children      | `React.ReactNode`                                                            |         | The content of the component                                                                                                                                                                                                                                                                                                                                        |
| selector      | `string`                                                                     |         | **Required**. Valid [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to element to which we want to scroll                                                                                                                                                                                                                            |
| smooth        | `boolean`                                                                    | true    | Scroll behavior; when true - transition animation will be smooth. Same as setting `scrollOptions.behavior = smooth`                                                                                                                                                                                                                                                 |
| style         | `React.CSSProperties`                                                        |         | CSS styles passed to element <br><br>**NOTE** prior v1.4.0 default value was `{display: 'inline'}`                                                                                                                                                                                                                                                                  |
| alignToTop    | `boolean`                                                                    | false   | Whether top of the element should be aligned to the top of the visible area. Default: aligns to bottom of element                                                                                                                                                                                                                                                   |
| className     | `string`                                                                     |         | Optional class name to be applied to element                                                                                                                                                                                                                                                                                                                        |
| onClick       | Function with signature:<br>`(event: React.MouseEvent<HTMLElement>) => void` |         | Callback fired on click                                                                                                                                                                                                                                                                                                                                             |
| scrollOptions | `ScrollIntoViewOptions`                                                      | {}      | Scroll options. See `scrollIntoViewOptions` on [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters). Only valid properties will be used.<br><br> Accepts options: <li> `behavior` (values: `auto` or `smooth`)<li> `block` (`start`, `center`, `end`, or `nearest`)<li> `inline` (`start`, `center`, `end`, or `nearest`) |

## Changelog

Please check [releases](https://github.com/dominikbulaj/react-scroll-into-view/releases) tab for full details
