import React from 'react'
import { SocialIcon } from 'react-social-icons'

const iconColor = '#888'

const Welcome = () => (
  <div className="welcome">
    <div className="content">
      <div className="center">
        <img alt="logo" src="/apple-touch-icon.png" />
      </div>
      <div className="center">
        <div className="site-name">TannerEvins.com</div>
        <div className="description">Front-end Web Development</div>
        <div className="social">
          <SocialIcon color={iconColor} url="https://www.linkedin.com/in/tanner-evins-30770741/" />
          <SocialIcon color={iconColor} url="https://github.com/evinstk" />
          <SocialIcon color={iconColor} url="https://www.facebook.com/tanner.evins.3" />
        </div>
      </div>
    </div>
  </div>
)

export default Welcome
