import React from "react";
import "../css/Deals.css";

const Houses = (props) => { 
    return (
        <>     
            <div className='deals__cell'>
            <img src={props.img} alt='' className="dealsCell__img"/>
                <div className='dealsCell__content'>
                    <span>
                        <p className='deals__beds'>{props.bed} beds</p>
                        <p className='deals__baths'>{props.bath} baths</p>
                    </span>
                    <p className='deals__price'>${props.price}</p>
                    <p className='deals__addy'>{props.address}</p>
                </div>
            </div>
        </>
    )
}


export default Houses;