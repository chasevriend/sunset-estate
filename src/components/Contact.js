import React from 'react';
import "../css/Contact.css";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <>
        <div className='contact'>
            <h1 className='text-center text-5xl p-10'>
                Contact Us
            </h1>
            <div className='contact__container'>
                <div className='contact__content'>
                    <h2 className='text-4xl py-5 font-semibold'>Need additional information?</h2>
                    <p className='text-xl py-2 text-gray-600 font-medium'>The realest real estate company out here! Reach 
                    out to us with any questions or concerns.</p>
                    <p className='text-2xl py-5 font-semibold'>
                        <PhoneIcon 
                            style={{fontSize: '25px', marginRight: '5px'}}
                        />
                        (123) 456 - 7890
                    </p>
                    <p className='text-2xl font-semibold'>
                        <EmailIcon 
                            style={{fontSize: '25px', marginRight: '5px'}}
                        />
                        contact@sunsetestates.com
                    </p>
                </div>
                <div className='contact__form'>
                    <form className='contactForm'>
                        <label>Full Name <b>*</b></label>
                        <input type='text' placeholder='First Last' required />

                        <label>Email <b>*</b></label>
                        <input type='text' placeholder='youremail@example.com' required />

                        <label>Tell us about it <b>*</b></label>
                        <textarea placeholder='Write Here..' required />
                    </form>
                    <button className='bg-blue-700 text-2xl text-white py-5 font-bold'>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact