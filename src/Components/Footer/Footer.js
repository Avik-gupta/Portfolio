import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/Constants'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='bg'>
       <div className='footerwrapper'>
          <div className='footer-logo'>
             <h3>Ayush Gupta</h3>
          </div>

          <div className='nav-links'>
                <Link to='aboutUs' duration={1000}>About</Link>
                <Link to='education' duration={1000}>Education</Link>
                <Link to='experience' duration={1000}>Experience</Link>
                <Link to='skills' duration={1000}>Skills</Link>
                <Link to='contactus' duration={1000}>Contact us</Link>
          </div>

          <div className='icons'>
             <a href={Bio.insta} target="_blank" ><InstagramIcon className='iconssss'/></a>
             <a href={Bio.linkedin} target="_blank" ><LinkedInIcon className='iconssss'/></a>
             <a href={Bio.github} target="_blank"><GitHubIcon className='iconssss'/></a>
          </div>

          <div className='copyright'>
             <h4>  &copy; 2023 ,  Ayush Gupta. All rights reserved.</h4>
          </div>
       </div>
    </div>
  )
}

export default Footer