import React from 'react'

const Honor = ({ honor, className }) => (
  <div className={className}>
    <div className="honor-title">{honor.honor}</div>
    <div className="honor-content">
      <div className="honor-alias">{honor.alias}</div>
      <div className="honor-position">{honor.position}</div>
    </div>
  </div>
)

export default Honor
