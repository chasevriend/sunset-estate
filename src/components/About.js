import React from 'react';
import "../css/About.css";

const About = () => {
  return (
    <>
        <section id='about'>
            <h1 className='about__title'>See how Sunset Estates can help</h1>
            <div className='about__container'>
                <div className='about__cell'>
                  <img src='https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg' alt='' className='about__img' />
                  <h3>Buy a Home</h3>
                  <p>With over 10+ of the most luxurious homes for sale available in Orange County, CA. 
                  Sunset Estates can match you with a house you can call home.</p>
                </div>
                <div className='about__cell'>
                  <img src='https://www.trulia.com/images/icons/txl3/illustrations/RentAHome.svg' alt='' className='about__img' />
                  <h3>Sell a Home</h3>
                  <p>With our filters and custom keyword search, we can help you easily sell your home 
                  for a price you'll love.</p>
                </div>
                <div className='about__cell'>
                  <img src='https://www.trulia.com/images/icons/txl3/illustrations/Neighborhoods.svg' alt='' className='about__img' />
                  <h3>See Neighborhoods</h3>
                  <p>With more neighborhood insights than any other real estate website, we've captured
                  the color and diversity of communities.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default About