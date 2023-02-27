import React from 'react'
import Burger from '../assets/burger-menu.png'

function Navbar({LogoSrc}) {
  return (
    <nav>
        <div className="nav-header">
        <img src={LogoSrc} alt="" className="logo" />
        <div className="nav-links">
            <a href="#" className="link">Home</a>
            <a href="#" className="link">Why Crid?</a>
            <a href="#" className="link">Contact</a>
            <a href="#" className="link">Sign Up</a>
            <button className="secondary-button">Get Free Quote</button>
        </div>
        <img src={Burger} alt="" className="burger" />
        </div>
    </nav>
  )
}

export default Navbar