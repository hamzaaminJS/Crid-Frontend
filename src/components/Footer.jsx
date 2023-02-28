import React from 'react'
import Logo from '../assets/logo.png'
import Statue from '../assets/statue.png'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="footer-container white-text">
          <div className="footer-cta">
            <div className="cta">
              <h1 className="heading-one">Intrested? <br /> Contact Us!</h1>
              <p className="paragraph-one">Click contact now to email us, it's free! We'll get back to you as soon as we see it.</p>
              <Link to="/contact">
                <button className="main-button">
                    Contact Us
                </button>
              </Link>
            </div>
            <div className="statue-container"><img src={Statue} alt="" className='footer-img' /></div>
          </div>
          
          <div className="footer-navigation">
            <img src={Logo} alt="" className="footer-logo" />
            <div className="footer-links">
              <div className="footer-links-column">
                <h3 className="heading-three">Learn More</h3>
                <Link to="/" className="link">Home</Link>
                <Link to="/why-us" className="link">Why Us</Link>
                <Link to="/why-us" className="link">Case Studies</Link>
              </div>
              <div className="footer-links-column">
                <h3 className="heading-three">Shop</h3>
                <Link to="/soon" className="link">Courses</Link>
                <Link to="/soon" className="link">Templates</Link>
                <Link to="/soon" className="link">Books</Link>
              </div>
              <div className="footer-links-column">
                <h3 className="heading-three">Copyright</h3>
                <p className="paragraph-two">This website is made by us</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer