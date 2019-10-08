import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav className="site-nav">
    <ul>
      <li><Link to="/resume" activeClassName="active">Resume</Link></li>
    </ul>
  </nav>
)

export default Nav
