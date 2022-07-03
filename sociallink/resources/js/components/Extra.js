import React from 'react';
import ReactDOM from 'react-dom';
import LandingView from './companyaboutpage/LandingView';
import {IoLogoFacebook,IoLogoInstagram,IoLogoGithub,IoLogoWhatsapp} from 'react-icons/io';
function Extra() {
  return (
    <div className='title-landing-page'>
        <h3>Network Automation</h3>
        <h1>Social Link</h1>
        <span className='block'></span>
        <p>We Are an Agency That Work to Provide Application For Better Solution For Network Need </p>
        <p>Around The World</p>
        <div className='socialmedia'>
            <a><IoLogoFacebook/></a>
            <a><IoLogoInstagram/></a>
            <a><IoLogoWhatsapp/></a>
            <a><IoLogoGithub/></a>
        </div>
    </div>
  )
}

export default Extra
if (document.getElementById('extra')) {
    ReactDOM.render(<Extra />, document.getElementById('extra'));
}