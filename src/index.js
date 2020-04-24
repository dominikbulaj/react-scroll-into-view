import PropTypes from 'prop-types'
import React from 'react'

const ScrollInto = ({
  children,
  selector,
  smooth = true,
  style = {},
  alignToTop = false,
  className = '',
  onClick
}) => {
  const scrollIntoView = () => {
    const behavior = smooth ? 'smooth' : 'instant'
    const options = { behavior }
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
  onClick: PropTypes.func
}

export default ScrollInto
