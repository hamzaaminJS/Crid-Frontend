import React, {useEffect, useRef} from 'react'
import * as Scroll from 'react-scroll';

import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from '../components/Navbar'
import LogoLight from '../assets/logo-light.png'
import Mouse from '../assets/mouse.svg'
import Team from '../assets/team.svg'
import Comment from '../assets/comment.svg'
import Design from '../assets/design.svg'
import Price from '../assets/price.svg'
import Footer from '../components/Footer'
import BurgerDark from '../assets/burger-dark.svg'

function WhyUs() {
    
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
      traceRef.current.style.border = "1px solid rgba(0, 0, 0, 0.450)"
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

    const scroll = Scroll.animateScroll;

    useEffect(() => {
        scroll.scrollToTop();
        AOS.init({duration: 1000, delay: 100})
    }, [])

  return (
    <div className="why-us-page light" onMouseMove={handleMouseMove}>
    <div className="trace" ref={traceRef}></div>
        <div className="hero-section">
            <Navbar BurgerSrc={BurgerDark} LogoSrc={LogoLight} displayCTA/>
            <div className="page-header">
                <div className="why-us-header">
                    <h1 className="heading-one">Why Choose Us</h1>
                    <p className="paragraph-one">Discover what sets us apart from the rest</p>
                </div>
                <img src={Mouse} alt="" className="scroll-img" />
            </div>
        </div>
        <div className="dark-container" data-aos="fade-up">
          <div className="inside-dark">
            <h1 className="heading-one">Elevate Your Business with CRID's Top-Notch Web Design Services</h1>
            <div className="paragraph-dark">
              <p className="paragraph-one">Are you looking for a web design agency that can help take your business to the next level? At CRID, we understand that you have plenty of options to choose from. That's why we strive to provide our clients with an exceptional experience, from start to finish.</p>
            </div>
          </div>
        </div>
        <div className="convince-section">
            <h2 className="heading-two" data-aos="fade-up">Here are just a few reasons why you should choose us for your web design and branding needs</h2>
            <div className="icon-info-column">
                <div className="icon-info-row">
                    <div className="icon-info" data-aos="fade-up">
                        <img src={Team} alt="" className="icon-info-img" />
                    <h3 className="heading-three">Experienced team</h3>
                        <p className="paragraph-two"> Our team of experienced designers and developers have the skills and knowledge needed to bring your vision to life. We have worked with a wide range of clients, from small businesses to large corporations, and we know what it takes to deliver exceptional results.</p>
                    </div>
                    <div className="icon-info" data-aos="fade-up">
                        <img src={Price} alt="" className="icon-info-img" />
                    <h3 className="heading-three">Affordable pricing</h3>
                        <p className="paragraph-two">We believe that great design should be accessible to all businesses, regardless of size. That's why we offer affordable pricing options to help you get the results you need without breaking the bank.</p>
                    </div>
                </div>
                <div className="icon-info-row">
                    <div className="icon-info" data-aos="fade-up">
                        <img src={Comment} alt="" className="icon-info-img" />
                    <h3 className="heading-three">Communication and collaboration</h3>
                        <p className="paragraph-two">We believe that communication and collaboration are key to a successful project. That's why we keep you involved every step of the way, from the initial consultation to the final launch. We want you to be completely satisfied with the end result, and we'll work tirelessly to make that happen.</p>
                    </div>
                    <div className="icon-info" data-aos="fade-up">
                        <img src={Design} alt="" className="icon-info-img" />
                    <h3 className="heading-three">Custom design</h3>
                        <p className="paragraph-two">We understand that every business is unique, which is why we take a custom approach to every project we work on. Our team will work closely with you to understand your needs and goals, and then develop a design that truly represents your brand.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default WhyUs