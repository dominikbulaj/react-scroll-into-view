import React from 'react'
import PropTypes from 'prop-types'

const ScrollInto = ({ children, selector, smooth = true, style = {}, alignToTop = false, className = '' }) => {

  const scrollIntoView = _ => {
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

  return <div style={style} className={className} onClick={scrollIntoView}>
    {children}
  </div>
}

ScrollInto.propTypes = {
  selector: PropTypes.string.isRequired,
  smooth: PropTypes.bool,
  style: PropTypes.object,
  alignToTop: PropTypes.bool,
  className: PropTypes.string
}

export default ScrollInto
