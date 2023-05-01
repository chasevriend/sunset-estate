import React from "react";
import "../css/Deals.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';

const Houses = (props) => { 
    return (
        <>     
            <div className='deals__cell'>
            <img src={props.img} alt='' className="dealsCell__img"/>
            
                <div className='dealsCell__content'>
                    <span>
                        <p className='deals__beds'>
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
                        <p className='deals__baths'>
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
                    <p className='deals__price text-blue-700'>${props.price}</p>
                    <p className='deals__addy'>
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
        </>
    )
}


export default Houses;