import PropTypes from 'prop-types'
import React from 'react'

const validScrollOptions = (scrollOptions) => {
  const options = {}
  if (scrollOptions instanceof Object) {
    Object.entries(scrollOptions).forEach(([key, val]) => {
      switch (key) {
        case 'behavior': // auto or smooth
          if (val === 'auto' || val === 'smooth') {
            options[key] = val
          }

        case 'block': // start, center, end, or nearest
        case 'inline': // start, center, end, or nearest
          if (
            val === 'start' ||
            val === 'center' ||
            val === 'end' ||
            val === 'nearest'
          ) {
            options[key] = val
          }

        default:
      }
    })
  }
  return options
}

const ScrollInto = ({
  children,
  selector,
  smooth = true,
  style = {},
  alignToTop = false,
  className = '',
  onClick,
  scrollOptions = {}
}) => {
  const scrollIntoView = () => {
    const behavior = smooth ? 'smooth' : 'instant'
    const options = {
      behavior,
      // provided scrollOptions are valid - we can use them
      ...validScrollOptions(scrollOptions)
    }

    // Scroll to top
    if (alignToTop) {
      options.block = 'start'
      options.inline = 'nearest'
    }

    const el = document.querySelector(selector)
    el.scrollIntoView(options)
  }

  /**
   * Click event handler
   * When provided (optional) `onClick` property which is a function it will call it and wait 16ms (single frame) to use
   * `scrollIntoView` as e.g. MaterialUI Menu changes `body` element style to `overflow: hidden` blocking
   * `scrollIntoView`
   */
  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      onClick(event)
      setTimeout(scrollIntoView, 1e3 / 60)
    } else {
      scrollIntoView()
    }
  }

  return (
    <div style={style} className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

ScrollInto.propTypes = {
  selector: PropTypes.string.isRequired,
  smooth: PropTypes.bool,
  style: PropTypes.object,
  alignToTop: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  scrollOptions: PropTypes.shape({
    behavior: PropTypes.oneOf(['auto', 'smooth']),
    block: PropTypes.oneOf(['start', 'center', 'end', 'nearest']),
    inline: PropTypes.oneOf(['start', 'center', 'end', 'nearest'])
  })
}

export default ScrollInto
