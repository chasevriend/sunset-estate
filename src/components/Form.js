import React from 'react';
import "../css/Form.css";

const Form = () => {
  return (
    <>
        <section id='home'>
            <div className='form__banner'>
                <form className='form__container'>
                    <span>
                        <label>Location <b>*</b></label>
                        <select>
                            <option>Location..</option>
                            <option>Orange County, CA</option>
                        </select>
                    </span>
                    <span>
                        <label>Property Type <b>*</b></label>
                        <select>
                            <option>Property Type..</option>
                            <option>House</option>
                        </select>
                    </span>
                    <span>
                        <label>Max Price</label>
                        <input type='number' placeholder='Min Price..' />
                    </span>

                    <button type='submit' className='form__btn bg-blue-700'>Search</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Form