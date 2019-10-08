import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CollapsibleSection extends Component {
  constructor(props) {
    super(props)
    this.state = {isCollapsed: true}
    this.toggle =this.toggle.bind(this)
  }

  toggle() {
    this.setState(prev => ({
      isCollapsed: !prev.isCollapsed
    }))
  }

  render() {
    const { title, children } = this.props
    const isCollapsed = this.state.isCollapsed
    return (
      <div className="collapsible-section">
        <div className="title" onClick={this.toggle}>{title}</div>
        {!isCollapsed && <ul className="content">{children}</ul>}
      </div>
    )
  }
}

CollapsibleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default CollapsibleSection
