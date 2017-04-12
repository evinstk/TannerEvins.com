import React from 'react'
import Banner from '../components/Banner'
import { connect } from 'react-redux'

const Welcome = () => (
  <p>
    Welcome. My site is currently under construction. To
    get in contact with me for web development services,
    see <a href="https://www.linkedin.com/in/tanner-evins-30770741">my
    LinkedIn profile</a>.
  </p>
)

const ServerErrorMessage = () => (
    <p>
      Sorry, an error occurred on the server. Please refresh your
      browser.  If the problem persists, try again later.
    </p>
)

const App = connect(
    ({ serverError }) => ({ serverError })
)(
    ({ children, serverError }) => {
        const content = serverError ? <ServerErrorMessage /> : (children || <Welcome />)
        return (
            <div>
              <Banner />
              <div className="main-content">{content}</div>
            </div>
        )
    }
)

export default App
