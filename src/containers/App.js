import React from 'react'
import Banner from '../components/Banner'
import { connect } from 'react-redux'
import { SocialIcon } from 'react-social-icons'

const iconColor = '#888'

const Welcome = () => (
  <div className="welcome">
    <div className="content">
      <div className="center">
        <img src="/apple-touch-icon.png" />
      </div>
      <div className="center">
        <div className="site-name">TannerEvins.com</div>
        <div className="description">Front-end & UX</div>
        <div className="social">
          <SocialIcon color={iconColor} url="https://www.linkedin.com/in/tanner-evins-30770741/" />
          <SocialIcon color={iconColor} url="https://github.com/evinstk" />
          <SocialIcon color={iconColor} url="https://www.facebook.com/tanner.evins.3" />
        </div>
      </div>
    </div>
  </div>
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
