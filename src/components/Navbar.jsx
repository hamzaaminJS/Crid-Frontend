import React from 'react'
import {Link} from 'react-router-dom'
import Burger from '../assets/burger-menu.png'

function Navbar({LogoSrc, BurgerSrc, displayCTA}) {
  return (
    <nav>
        <div className="nav-header">
        <Link to="/">
          <img src={LogoSrc} alt="" className="logo" />
        </Link>
        <div className="nav-links">
            <Link to="/" className="link">Home</Link>
            <Link to="/why-us" className="link">Why Crid?</Link>
            <Link to="/contact" className="link">Contact</Link>
            {displayCTA ? 
                <Link to="/contact">
                  <button className="secondary-button">Get Your Website</button>
                </Link>
              : null
            }
        </div>
        <img src={Burger} alt="" className="burger" />
        </div>
    </nav>
  )
}

export default Navbar