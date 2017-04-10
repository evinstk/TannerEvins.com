import React from 'react'
import Nav from '../containers/Nav'
import { Link } from 'react-router'

const Banner = () => (
  <div className="banner">
    <Link to='/'>
      <div className="header">tannerevins.com</div>
    </Link>
    <Nav />
  </div>
)

export default Banner
