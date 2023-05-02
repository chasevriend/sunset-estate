import React from 'react';
import "../css/Sell.css";

const Sell = () => {
  return (
    <>
        <div className='sell__container'>
            <h1>Sell Your Home</h1>
            <div className='sell'>
                <form className='sell__form'>
                    <label>Home Address <b>*</b></label>
                    <input type='text' placeholder='Home Address' required />

                    <span>
                        <div>
                            <label>Beds <b>*</b></label>
                            <input type='number' placeholder='beds' required />
                        </div>
                        <div>
                            <label>Baths <b>*</b></label>
                            <input type='number' placeholder='baths' required />
                        </div>
                    </span>

                    <label>Asking Price <b>*</b></label>
                    <input type='number' placeholder='$' required />

                    <label>House Description</label>
                    <textarea placeholder='Description..' />

                    <label>Photos <b>*</b></label>
                    <input type="file" alt="Submit" width="48" height="48" required />
                </form>
                <button className='form__btn bg-blue-700'>Post Listing</button>
            </div>
        </div>
    </>
  )
}

export default Sell;