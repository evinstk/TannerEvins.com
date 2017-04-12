import React from 'react'
import { Link } from 'react-router'

const Nav = () => (
  <nav className="site-nav">
    <ul role="nav">
      <li><Link to='/resume'>Resume</Link></li>
    </ul>
  </nav>
)

export default Nav
