import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/MOORTHYrm" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.linkedin.com/in/moorthy-rm-b48481b1/" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials