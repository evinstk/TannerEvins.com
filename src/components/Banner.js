import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router'

const Banner = () => (
  <header className="banner">
    <Link to='/' className="logo">tannerevins.com</Link>
    <Nav />
  </header>
)

export default Banner
