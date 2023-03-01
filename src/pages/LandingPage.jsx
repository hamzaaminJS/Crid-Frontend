import React, {useEffect, useRef} from 'react'
import {Link, animateScroll as scroll } from "react-scroll";
import {Link as Linkk} from 'react-router-dom'

import Navbar from '../components/Navbar';
import DarkContainer from '../components/DarkContainer';
import Footer from '../components/Footer';


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

function LandingPage() {
  const traceRef = useRef(null);

  const handleMouseMove = (event) => {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    traceRef.current.style.left =
      event.clientX - traceRef.current.offsetWidth / 2 + scrollX + "px";
    traceRef.current.style.top =
      event.clientY - traceRef.current.offsetHeight / 2 + scrollY + "px";
    traceRef.current.style.opacity = 1;
  };

  const handleMouseOverText = () => {
    traceRef.current.style.height = "8rem";
    traceRef.current.style.width = "8rem";
    traceRef.current.style.border = "1px solid rgb(255, 255, 255)"
  };

  const handleMouseOutOfText = () => {
    traceRef.current.style.width = "0rem";
    traceRef.current.style.height = "0rem";
    traceRef.current.style.border = "1px solid rgba(255, 255, 255, 0)"
  };

  useEffect(() => {
    const mouseOverText = () => {
      const text = document.querySelectorAll('button, Link, a, .link')
  
      text.forEach(one => {
        one.addEventListener("mouseover", handleMouseOverText)
        one.addEventListener("mouseout", handleMouseOutOfText)
      })
    }
    mouseOverText()
  }, [])

  const testimonials = "I'd recommend Hamza anytime. We had a somewhat vague idea about how our website project should look, but Hamza understood what we said and delivered 95% of what we wanted on the first try! After a few adjustments, it was perfect. Communicating with Hamza is very easy and it's a positive relationship where Hamza always listens but also comes with his own professional and valuable suggestions. He's highly recommended as a freelancer."
  // Intiating the animate on scroll library
  useEffect(() => {
    AOS.init({duration: 1000, delay: 100})
  })
  return (
    <div className="landing-page dark" onMouseMove={handleMouseMove}>
    <div className="trace" ref={traceRef}></div>
      <div className="hero-section">
        <Navbar BurgerSrc={Burger} LogoSrc={Logo} displayCTA/>
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
            <img src={HeroImage} alt="Modern Website Design" className="hero-img"/>
          </div>
        </div>
      </div>
      <div className="testimonial-section" id="reviews">
        <DarkContainer SubHeader='Fredrik E.' Paragraph={testimonials} Header='We Let Our Clients Do the Talking' data-aos="fade-up"/>
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
                <a href="/contact" className="link">Start Now</a>
                <img src={ArrowRight} alt="" className="arrow" />
              </div>
            </div>
            <img src={InfoShowCaseImageOne} alt="Entrepreneur Website Design" className="info-image" data-aos="fade-up" data-aos-delay="400"/>
          </div>
          <div className="info-image-container reverse-flex">
            <div className="info" data-aos="fade-up" data-aos-delay="400">
              <h2 className="heading-two">Stand Out with Custom Website Design</h2>
              <p className="paragraph-two">
              In today's digital age, your website is often the first impression potential customers have of your business. At our agency, we understand the importance of creating a website that not only looks great, but also effectively represents your brand and sets you apart from the competition. Our custom website design process is tailored to your unique needs and goals, ensuring that your website stands out and effectively communicates your brand's message.
              </p>
              <div className="arrowed-link">
                <a href="/contact" className="link">Start Now</a>
                <img src={ArrowRight} alt="" className="arrow" />
              </div>
            </div>
            <img src={InfoShowCaseImageTwo} alt="Entrepreneur Website Design" className="info-image" data-aos="fade-up" />
          </div>
          <div className="info-image-container">
            <div className="info" data-aos="fade-up">
              <h2 className="heading-two">Drive Results with Our Website Development Services</h2>
              <p className="paragraph-two">
              A stunning website design is only the first step. Our team of experienced developers can help you take your website to the next level, with features like custom functionality, e-commerce integration, and responsive design. Whether you're looking to increase conversions, generate leads, or build your brand, we have the expertise and experience to help you achieve your goals.
              </p>
              <div className="arrowed-link">
                <a href="/contact" className="link">Start Now</a>
                <img src={ArrowRight} alt="" className="arrow" />
              </div>
            </div>
            <img src={HeroImage} alt="Beautiful Modern Website Design" className="info-image" data-aos="fade-up" data-aos-delay="400" />
          </div>
          <div className="info-image-container reverse-flex">
            <div className="info" data-aos="fade-up" data-aos-delay="400">
              <h2 className="heading-two">Elevate Your Brand with Our Comprehensive Branding Services.</h2>
              <p className="paragraph-two">
              Your brand is more than just your logo and color scheme. It's the essence of who you are as a business, and it's what sets you apart from your competitors. Our branding services go beyond just creating a logo and color scheme - we work with you to develop a comprehensive brand strategy that encompasses everything from your mission and values to your target audience and messaging. Whether you're launching a new brand or looking to revitalize an existing one, we have the expertise and experience to help you elevate your brand and stand out in your industry.
              </p>
              <div className="arrowed-link">
                <a href="/contact" className="link">Start Now</a>
                <img src={ArrowRight} alt="" className="arrow" />
              </div>
            </div>
            <img src={InfoShowCaseImageThree} alt="Startup Website Design" className="info-image" data-aos="fade-up" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage