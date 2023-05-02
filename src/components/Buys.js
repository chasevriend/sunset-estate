import React from 'react';
import Homes from './Homes';
import "../css/Buy.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';

const Buys = (props) => {
  return (
    <>
        <div className='buy'>
          <div className='buy__container'>
            <div className='buy__map'>

            </div>
            <div className='buy__listings'>
              
              <div className='buy__cell'>

                <img src={props.img} alt='' className="buyCell__img"/>

                <div className='buy__content'>
                  <span>
                    <p className='buy__beds'>
                        <BedIcon 
                            style={{ 
                            fontSize: '15px',
                            marginRight: '5px',
                            marginBottom: '2px',
                            borderColor: 'red',
                            }}
                        />
                        {props.bed} beds
                    </p>
                    <p className='buy__baths'>
                        {props.bath} baths
                        <BathtubIcon 
                        style={{
                            fontSize: '15px',
                            marginLeft: '5px',
                            marginBottom: '2px'
                        }}
                        />
                    </p>
                  </span>
                  <p className='buy__price text-blue-700'>${props.price}</p>
                  <p className='buy__addy'>
                        <LocationOnIcon 
                            style={{ 
                                fontSize: '18px',
                                marginRight: '5px',
                                marginBottom: '2px'
                                }}
                        />
                        {props.address}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Buys