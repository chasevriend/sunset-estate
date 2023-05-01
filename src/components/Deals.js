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

const Deals = (props) => {  
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
        </section>
    </>
  )
}

export default Deals;