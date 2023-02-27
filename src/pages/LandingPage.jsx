import React, {useEffect} from 'react'
import {Link, animateScroll as scroll } from "react-scroll";
import {Link as Linkk} from 'react-router-dom'

import Navbar from '../components/Navbar';


import Logo from '../assets/logo.png'
import Burger from '../assets/burger-menu.png'
import HeroImage from '../assets/hero.jpg'
import HeroEffects from '../assets/hero-effects-1.png'
import InfoShowCaseImageOne from '../assets/landing-1.jpg'
import InfoShowCaseImageTwo from '../assets/landing-2.jpg'
import InfoShowCaseImageThree from '../assets/landing-3.jpg'
import ArrowRight from '../assets/arrow-right.png'
import Statue from '../assets/statue.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function LandingPage({title}) {
  // Intiating the animate on scroll library
  useEffect(() => {
    AOS.init({duration: 1000, delay: 100})
    document.title = title
  })
  return (
    <div className="landing-page dark">
      <div className="hero-section">
        <Navbar LogoSrc={Logo} displayCTA/>
        <div className="hero-container">
          <h1 className="heading-one">Stunning Websites. <br /> Proven Results.</h1>
          <p className="paragraph-one">Maximize Your Online Potential and Transform Your Website into a Lead-Generating Powerhouse.</p>
          <div className="buttons">
            <Linkk to="/contact">
              <button className="main-button">
                  Contact Us
              </button>
            </Linkk>
            <Link className="outline-button"
                activeClass="active"
                to="info"
                spy={true}
                smooth={true}
                offset={-200}
                duration={1000}
            >Learn More</Link>
          </div>
          <div className="hero-image-container">
            <img src={HeroImage} alt="" className="hero-img" />
          </div>
        </div>
      </div>
      <div className="testimonial-section" id="reviews">
        <div className="testimonial-container" data-aos="fade-up">
          <div className="inside-testimonial">
            <h1 className="heading-one">We Let Our Clients Do the Talking</h1>
            <div className="testimonial">
              <h3 className="heading-three">Sabry Ga3far</h3>
              <p className="paragraph-two">I'd recommend Hamza anytime. We had a somewhat vague idea about how our website project should look, but Hamza understood what we said and delivered 95% of what we wanted on the first try! After a few adjustments, it was perfect. <br />
              Communicating with Hamza is very easy and it's a positive relationship where Hamza always listens but also comes with his own professional and valuable suggestions. He's highly recommended as a freelancer.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-section" id="info">
        <div className="info-section-container">
          <div className="info-image-container">
            <div className="info" data-aos="fade-up">
              <h2 className="heading-two">Unlock Your Online Potential</h2>
              <p className="paragraph-two">
              Whether you're looking to establish a new online presence or revamp your existing one, we've got you covered. Our team of experienced web designers and developers offer a full range of web solutions, including website design, website development, and branding, to help you achieve your business goals and reach your target audience.
              </p>
              <div className="arrowed-link">
                <a href="#" className="link">Visit Examples</a>
                <img src={ArrowRight} alt="" className="arrow" />
              </div>
            </div>
            <img src={InfoShowCaseImageOne} alt="" className="info-image" data-aos="fade-up" data-aos-delay="400"/>
          </div>
          <div className="info-image-container reverse-flex">
            <div className="info" data-aos="fade-up" data-aos-delay="400">
              <h2 className="heading-two">Unlock Your Online Potential</h2>
              <p className="paragraph-two">
              Whether you're looking to establish a new online presence or revamp your existing one, we've got you covered. Our team of experienced web designers and developers offer a full range of web solutions, including website design, website development, and branding, to help you achieve your business goals and reach your target audience.
              </p>
              <div className="arrowed-link">
                <a href="#" className="link">Visit Examples</a>
                <img src={ArrowRight} alt="" className="arrow" />
              </div>
            </div>
            <img src={InfoShowCaseImageTwo} alt="" className="info-image" data-aos="fade-up" />
          </div>
          <div className="info-image-container">
            <div className="info" data-aos="fade-up">
              <h2 className="heading-two">Unlock Your Online Potential</h2>
              <p className="paragraph-two">
              Whether you're looking to establish a new online presence or revamp your existing one, we've got you covered. Our team of experienced web designers and developers offer a full range of web solutions, including website design, website development, and branding, to help you achieve your business goals and reach your target audience.
              </p>
              <div className="arrowed-link">
                <a href="#" className="link">Visit Examples</a>
                <img src={ArrowRight} alt="" className="arrow" />
              </div>
            </div>
            <img src={HeroImage} alt="" className="info-image" data-aos="fade-up" data-aos-delay="400" />
          </div>
          <div className="info-image-container reverse-flex">
            <div className="info" data-aos="fade-up" data-aos-delay="400">
              <h2 className="heading-two">Unlock Your Online Potential</h2>
              <p className="paragraph-two">
              Whether you're looking to establish a new online presence or revamp your existing one, we've got you covered. Our team of experienced web designers and developers offer a full range of web solutions, including website design, website development, and branding, to help you achieve your business goals and reach your target audience.
              </p>
              <div className="arrowed-link">
                <a href="#" className="link">Visit Examples</a>
                <img src={ArrowRight} alt="" className="arrow" />
              </div>
            </div>
            <img src={InfoShowCaseImageThree} alt="" className="info-image" data-aos="fade-up" />
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-cta">
            <div className="cta">
              <h1 className="heading-one">Intrested? <br /> Contact Us!</h1>
              <p className="paragraph-one">Click contact now to email us, it's free! We'll get back to you as soon as we see it.</p>
              <button className="main-button">Contact Us</button>
            </div>
            <div className="statue-container"><img src={Statue} alt="" className='footer-img' /></div>
          </div>
          
          <div className="footer-navigation">
            <img src={Logo} alt="" className="footer-logo" />
            <div className="footer-links">
              <div className="footer-links-column">
                <h3 className="heading-three">Learn More</h3>
                <a href="#" className="link">Home</a>
                <a href="#" className="link">Why Us</a>
                <a href="#" className="link">Case Studies</a>
              </div>
              <div className="footer-links-column">
                <h3 className="heading-three">Shop</h3>
                <a href="#" className="link">Courses</a>
                <a href="#" className="link">Templates</a>
                <a href="#" className="link">Books</a>
              </div>
              <div className="footer-links-column">
                <h3 className="heading-three">Copyright</h3>
                <p className="paragraph-two">This website is made by us</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage