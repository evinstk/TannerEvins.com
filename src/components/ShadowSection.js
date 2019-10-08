import React from 'react'
import PropTypes from 'prop-types'

const ShadowSection = ({ title, children, className }) => (
  <div className={`shadow-section ${className}`}>
    <div className="section-title">{title}</div>
    <div className="content">
      {children}
    </div>
  </div>
)

ShadowSection.propTypes = {
  title: PropTypes.any.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string
}

export default ShadowSection
