import React from 'react'
import honors from '../data/honors'

const Honor = ({
  honor,
  className,
}: {
  honor: typeof honors[0],
  className: string,
}) => (
  <div className={className}>
    <div className="honor-title">{honor.honor}</div>
    <div className="honor-content">
      <div className="honor-alias">{honor.alias}</div>
      <div className="honor-position">{honor.position}</div>
    </div>
  </div>
)

export default Honor
