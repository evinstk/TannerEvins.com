import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className="site-nav">
    <ul>
      <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
    </ul>
  </nav>
)

export default Nav
