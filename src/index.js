import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'

const ScrollInto = ({ children, scrollIntoView }) => (
  <div onClick={scrollIntoView}>
    {children}
  </div>
)

ScrollInto.propTypes = {
  selector: PropTypes.string.isRequired,
  smooth: PropTypes.bool,
}

ScrollInto.defaultProps = {
  smooth: true,
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
