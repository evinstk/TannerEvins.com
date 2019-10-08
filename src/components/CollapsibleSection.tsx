import React, { Component } from 'react'

interface ICollapsibleSection {
  title: string;
  children: JSX.Element;
}

interface ICollapsibleSectionState {
  isCollapsed: boolean;
}

class CollapsibleSection extends Component<ICollapsibleSection, ICollapsibleSectionState> {
  constructor(props: ICollapsibleSection) {
    super(props)
    this.state = {isCollapsed: true}
  }

  toggle = () => {
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

export default CollapsibleSection
