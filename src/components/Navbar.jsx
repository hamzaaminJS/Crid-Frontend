import React from 'react'
import {Link} from 'react-router-dom'
import Burger from '../assets/burger-menu.png'
import X from '../assets/x.png'

function Navbar({LogoSrc, BurgerSrc, displayCTA}) {
  const fadeInAnimation = (element) => {
    element.style.opacity = 0
    setTimeout(()=>{element.style.opacity = 1}, 1);
  }
  const fadeOutAnimation = (element) => {
    element.style.opacity = 0
  }

  const toggleNav = () => {
    const toggleNav = document.querySelector('.toggle-nav')
    if(toggleNav.style.display === '' || toggleNav.style.display === 'none' ){
      fadeInAnimation(toggleNav)
      toggleNav.style.display = 'block'
    }else{
      fadeOutAnimation(toggleNav)
      setTimeout(()=>{toggleNav.style.display = 'none'}, 400);
      
    }
  }
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
        <img src={BurgerSrc} alt="" className="burger" onClick={toggleNav}/>
        </div>
        <div className="toggle-nav" onClick={toggleNav}>
          <img src={X} alt="" className="x" onClick={toggleNav}/>
          <div className="toggle-nav-links">
              <Link to="/" className="link">Home</Link>
              <Link to="/why-us" className="link">Why Crid?</Link>
              <Link to="/contact" className="link">Contact</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar