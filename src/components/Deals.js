import React from 'react';
import "../css/Deals.css";
import Houses from "../components/Houses";
import Homes from '../components/Homes';


const createDeal = (HomesTerm) => {
    return (
        <Houses 
            key={HomesTerm.id}
            img={HomesTerm.img}
            bed={HomesTerm.bed}
            bath={HomesTerm.bath}
            price={HomesTerm.price}
            address={HomesTerm.address}
        />
    )
}

const Deals = () => {  
    return (
    <>
        <section id='deals'>
            <div className='deals__container'>
                <div className='deals__header'>
                    <h1>Newest Deals</h1>
                </div>
                <div className='deals__wrapper'>
                    {Homes.map(createDeal)}
                </div>
            </div>
            <div className='dealsContainer__maps'>
                <iframe src="https://my.atlistmaps.com/map/73e12fe2-e405-46a6-9fc0-ce030ebdf9c9?share=true" allow="geolocation 'self' https://my.atlistmaps.com" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
        </section>
    </>
  )
}

export default Deals;