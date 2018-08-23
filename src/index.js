import React from 'react'
import PropTypes from 'prop-types'
import {compose, defaultProps, withHandlers} from 'recompose'

const defaultStyle = {
  display: 'inline',
}

const ScrollInto = ({children, scrollIntoView, style}) => (
  <div style={{...defaultStyle, ...style}} onClick={scrollIntoView}>
    {children}
  </div>
)

ScrollInto.propTypes = {
  selector: PropTypes.string.isRequired,
  smooth: PropTypes.bool,
  style: PropTypes.object,
  alignToTop: PropTypes.bool,
}

export default compose(
  defaultProps({
    smooth: true,
    style: {},
    alignToTop: false
  }),
  withHandlers({
    scrollIntoView: ({selector, smooth, alignToTop}) => _ => {
      const behavior = smooth ? 'smooth' : 'instant'
      const options = {behavior}
      // scroll to top
      if (alignToTop) {
        options.block = 'start'
        options.inline = 'nearest'
      }

      const el = document.querySelector(selector)
      el.scrollIntoView(options)
    }
  })
)(ScrollInto)
