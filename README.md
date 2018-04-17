# React scroll-into-view
Declarative way for scrolling into view any page element

## Idea behind
While developing landing page we needed way to scroll page to focus on registration form. It was obvious we will use [element.scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) we just need find nice way how to.
This is just simple React element that provides declarative way to scroll to any element on page when it's clicked.

## Changelog
See [releases](releases) tab

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

Than use it
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
| style | Object | `{display: 'inline'}` | CSS styles passed to element 

## TODO
* tests
* support for all [element.scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) parameters
* demo