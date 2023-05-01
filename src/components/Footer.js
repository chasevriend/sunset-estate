import React from 'react';
import "../css/Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <>
        <section id='footer'>
            <div className='footer__container bg-gray-900'>
                <h3>Sunset Estates</h3>
                <span>
                    <a href='/'>Home</a>
                    <a href='/About'>About</a>
                    <a href='/Buy'>Buy</a>
                    <a href='/Sell'>Sell</a>
                    <a href='/Contact'>Contact</a>
                </span>
                <p>Sunset Estates is not a real business or service. This is a software development 
                project created by Chase Vriend.</p>
                <IconButton>
                  <GitHubIcon 
                    style={{fontSize: '50px'}}
                  />
                </IconButton>
            </div>
        </section>
    </>
  )
}

export default Footer;