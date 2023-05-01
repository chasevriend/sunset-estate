import React from 'react';
import "../css/Hero.css";
import HeroHouse from "../images/heroHouse.png";

const Hero = () => {
  return (
    <>
        <section id='hero'>
            <div className='hero__container'>
                <div className='hero__content'>
                    <h1>Find Your <b className='blue-700'>Dream </b>Home</h1>
                    <p>The best site to find you your dream home in Orange County, CA. 
                    Find and contact local sellers.</p>
                    <button className='bg-blue-700'>Search Now</button>
                </div>
                <div className='hero__right'>
                    <img src='https://o.remove.bg/downloads/528b26f2-da6d-475b-b830-17206ae9c054/house-real-estate-estate-agent-property-window-house-removebg-preview.png' alt='' className='heroRight__img' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero