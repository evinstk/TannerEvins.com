import React from 'react'
import { Link } from 'react-router'

const Nav = () => (
  <nav className="site-nav">
    <ul>
      <li><Link to="/resume" activeClassName="active">Resume</Link></li>
    </ul>
  </nav>
)

export default Nav
