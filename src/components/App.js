import React from 'react'
import Banner from './Banner'

const Welcome = () => (
  <p>
    Welcome. My site is currently under construction. To
    get in contact with me for web development services,
    see <a href="https://www.linkedin.com/in/tanner-evins-30770741">my
    LinkedIn profile</a>.
  </p>
)

const App = ({ children }) => (
  <div>
    <Banner />
    <div className="main-content">{children || <Welcome />}</div>
  </div>
)

export default App
