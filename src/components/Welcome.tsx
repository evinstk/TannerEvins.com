import React from 'react'
import {
  FaLinkedin,
  FaGithub,
  FaFacebook
} from 'react-icons/fa';

const Welcome = () => (
  <div className="welcome">
    <div className="content">
      <div className="center">
        <img alt="logo" src="/apple-touch-icon.png" />
      </div>
      <div className="center">
        <div className="site-name">TannerEvins.com</div>
        <div className="description">Full Stack Web Development</div>
        <div className="social">
          <a href="https://www.linkedin.com/in/tanner-evins-30770741/"><FaLinkedin /></a>
          <a href="https://github.com/evinstk"><FaGithub /></a>
          <a href="https://www.facebook.com/tanner.evins.3"><FaFacebook /></a>
        </div>
      </div>
    </div>
  </div>
)

export default Welcome
