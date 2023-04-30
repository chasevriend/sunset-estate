import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../css/Nav.css";

const Nav = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    }
  
    return (
    <>
        <nav>
            {/* Mobile Nav */}
            <div className={`mobile-nav ${nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className="mobile-nav__close">
                    <p className='mobile-nav__XBtn'>X</p>
                </div>
                <ul className='mobile-nav__links'>
                    <li>
                        <Link onClick={openNav} to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to='/About'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to='/Buy'>
                            Buy
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to='/Sell'>
                            Sell
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to='/Contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Desktop Nav */}
            <div className='nav'>
                <a href='/'>
                    <div className='nav__left'>
                        <p>Sunset Estates</p>
                    </div>
                </a>
                <div className='nav__middle'>
                    <a href='/'>Home</a>
                    <a href='/About'>About</a>
                    <a href='/Buy'>Buy</a>
                    <a href='/Sell'>Sell</a>
                    <a href='/Contact'>Contact</a>
                </div>
                <div className='nav__right'>
                    <button className='navRight__btn bg-blue-700'>Register</button>
                </div>

                {/* Mobile Hamburger */}
                <div className='mobile-nav__hamburger' onClick={openNav}>
                    <svg viewBox="0 0 100 80" width="40" height="40" className="mobile-nav__hamburgerIcon">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </div>
            </div>  
        </nav>
    </>
  )
}

export default Nav