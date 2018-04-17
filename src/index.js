import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'

const defaultStyle = {
  display:'inline',
}

const ScrollInto = ({ children, scrollIntoView, style }) => (
  <div style={{...defaultStyle, style}} onClick={scrollIntoView}>
    {children}
  </div>
)

ScrollInto.propTypes = {
  selector: PropTypes.string.isRequired,
  smooth: PropTypes.bool,
  style: PropTypes.object,
}

ScrollInto.defaultProps = {
  smooth: true,
  style: {}
}

export default compose(
  withHandlers({
    scrollIntoView: ({ selector, smooth = true }) => e => {
      const behavior = smooth ? 'smooth' : 'instant'
      const el = document.querySelector(selector)
      el.scrollIntoView({ behavior })
    }
  })
)(ScrollInto)
