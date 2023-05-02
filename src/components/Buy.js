import React from 'react';
import "../css/Buy.css";
import Buys from './Buys';
import Homes from './Homes';

const createBuy = (BuyTerm) => {
  return (
      <Buys 
          key={BuyTerm.id}
          img={BuyTerm.img}
          bed={BuyTerm.bed}
          bath={BuyTerm.bath}
          price={BuyTerm.price}
          address={BuyTerm.address}
      />
  )
}

const Buy = () => {
  return (
    <>
      <div className='buy'>
        <div className='buy__container'>
          <div className='buy__map'>

          </div>
          <div className='buy__wrapper'>
            {Homes.map(createBuy)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Buy;