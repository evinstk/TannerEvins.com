import React from 'react'
import Nav from '../containers/Nav'

const Welcome = <p>
  Welcome. My site is currently under construction. To
  get in contact with me for web development services,
  see <a href="https://www.linkedin.com/in/tanner-evins-30770741">my
  LinkedIn profile</a>.</p>

const App = ({ children }) => (
    <div>
        <h1>tannerevins.com</h1>
        <Nav />
        <div>{children || Welcome}</div>
    </div>
)

export default App
