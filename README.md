# React scroll-into-view
[![Build Status](https://travis-ci.org/dominikbulaj/react-scroll-into-view.svg?branch=master)](https://travis-ci.org/dominikbulaj/react-scroll-into-view)
[![npm](https://img.shields.io/npm/v/react-scroll-into-view.svg)](https://www.npmjs.com/package/react-scroll-into-view)
[![bundlephobia](https://badgen.net/bundlephobia/minzip/react-scroll-into-view)](https://bundlephobia.com/result?p=react-scroll-into-view)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Fast & declarative way for scrolling to any element on page. Weights only ~450 B minified + gzipped

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
| Name | Type | Default | Description
| --- | --- | --- | ---
| selector | String | | **Required**. Valid [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to element to which we want to scroll
| smooth | Boolean | true | Scroll behaviour; when true - transition animation will be smooth. Otherwise instant.
| style | Object | {} | CSS styles passed to element <br>**NOTE** prior v1.4.0 default value was `{display: 'inline'}`
| alignToTop | Boolean | false | Whether top of the element should be aligned to the top of the visible area. Default: aligns to bottom of element
| className | String | | Optional class name to be applied to element
| onClick| Function | | Callback fired on click

## Changelog
Please check [releases](https://github.com/dominikbulaj/react-scroll-into-view/releases) tab for full details

## TODO
* support for all [element.scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) parameters