import React from 'react'
import Navbar from '../components/Navbar'
import LogoLight from '../assets/logo-light.png'
import Mouse from '../assets/mouse.svg'
import Team from '../assets/team.svg'
import Comment from '../assets/comment.svg'
import Design from '../assets/design.svg'
import Price from '../assets/price.svg'
import Footer from '../components/Footer'

function WhyUs() {
  return (
    <div className="why-us-page light">
        <div className="hero-section">
            <Navbar LogoSrc={LogoLight}/>
            <div className="page-header">
                <div className="why-us-header">
                    <h1 className="heading-one">Why Choose Us</h1>
                    <p className="paragraph-one">Discover what sets us apart from the rest</p>
                </div>
                <img src={Mouse} alt="" className="scroll-img" />
            </div>
        </div>
        <div className="dark-container">
          <div className="inside-dark">
            <h1 className="heading-one">Elevate Your Business with CRID's Top-Notch Web Design Services</h1>
            <div className="paragraph-dark">
              <p className="paragraph-one">Are you looking for a web design agency that can help take your business to the next level? At CRID, we understand that you have plenty of options to choose from. That's why we strive to provide our clients with an exceptional experience, from start to finish.</p>
            </div>
          </div>
        </div>
        <div className="convince-section">
            <h2 className="heading-two">Here are just a few reasons why you should choose us for your web design and branding needs</h2>
            <div className="icon-info-column">
                <div className="icon-info-row">
                    <div className="icon-info">
                        <img src={Team} alt="" className="icon-info-img" />
                    <h3 className="heading-three">Experienced team</h3>
                        <p className="paragraph-two"> Our team of experienced designers and developers have the skills and knowledge needed to bring your vision to life. We have worked with a wide range of clients, from small businesses to large corporations, and we know what it takes to deliver exceptional results.</p>
                    </div>
                    <div className="icon-info">
                        <img src={Price} alt="" className="icon-info-img" />
                    <h3 className="heading-three">Affordable pricing</h3>
                        <p className="paragraph-two">We believe that great design should be accessible to all businesses, regardless of size. That's why we offer affordable pricing options to help you get the results you need without breaking the bank.</p>
                    </div>
                </div>
                <div className="icon-info-row">
                    <div className="icon-info">
                        <img src={Team} alt="" className="icon-info-img" />
                    <h3 className="heading-three">Experienced team</h3>
                        <p className="paragraph-two"> Our team of experienced designers and developers have the skills and knowledge needed to bring your vision to life. We have worked with a wide range of clients, from small businesses to large corporations, and we know what it takes to deliver exceptional results.</p>
                    </div>
                    <div className="icon-info">
                        <img src={Price} alt="" className="icon-info-img" />
                    <h3 className="heading-three">Affordable pricing</h3>
                        <p className="paragraph-two">We believe that great design should be accessible to all businesses, regardless of size. That's why we offer affordable pricing options to help you get the results you need without breaking the bank.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default WhyUs