import React from 'react';
import linkedinLogo from "../img/linkedinLogo.svg";
import githubLogo from "../img/githubLogo.svg";

function Footer() {
  return (
    <div className='footer_container'>
        <h3>Copyright © 2023. All rights are reserved</h3>
        <div className='logo_container'>
            <a href='https://www.linkedin.com/in/viktor-zbodulja-4b0408228/' target='_blank'><img src={linkedinLogo} alt='linkedin logo' /></a>
            <a href='https://github.com/ViktorZbodulja' target='_blank'><img src={githubLogo} alt='github logo' /></a>
        </div>
    </div>
  )
}

export default Footer