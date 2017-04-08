import React from 'react'
import { Link } from 'react-router'

const Nav = () => (
    <div>
        <ul role="nav">
            { false && <li><Link to='/resume'>Resume</Link></li> }
        </ul>
    </div>
)

export default Nav
