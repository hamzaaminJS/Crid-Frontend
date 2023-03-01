import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import LogoLight from '../assets/logo-light.png'
import BurgerDark from '../assets/burger-dark.svg'

function Contact() {
    const [email, setEmail] = useState({'budget': '1k-5k', 'projectType': 'Website Design'})

    const handleChange = (e) => {
        setEmail({...email, [e.target.name]: e.target.value})
    }

    const sendEmail = async () => {
        const fetched = await fetch(`https://criddesign.com/emails`, {
            method: 'POST', 
            body: JSON.stringify({
                ...email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
         })

        const res = await fetched.json()

        if(res.success) {
            setEmail({'budget': email.budget, 'projectType': email.projectType})
        }
        console.log(res)
    }

    const toggleButtons = (type) => (className) => (e) => {
        let buttons = document.querySelectorAll('.' + className)
        if(type === 'single'){
            buttons.forEach(button => {
                button.classList.remove('toggle-dark')
            })
        }
        e.target.classList.toggle('toggle-dark')

        if(type === 'multiple'){
            let innerHTMLArray = []
            buttons.forEach(button => {
                if(button.classList.contains('toggle-dark')){
                    innerHTMLArray.push(button.innerHTML)
                }
            })

            if(className === 'work-toggle'){
                setEmail({...email, 'projectType': innerHTMLArray.join(", ")})
            }
        }

        if(type === 'single'){
            if(className === 'budget-toggle'){
                setEmail({...email, 'budget': e.target.innerHTML})
            }
        }
    }
  return (
    <div className="light contact-page">
        <Navbar BurgerSrc={BurgerDark} LogoSrc={LogoLight}/>
        <div className="contact-container">
            <div className="contact-header">
                <h1 className="heading-one">Contact Us</h1>
                <p className="paragraph-one">Tell us about yourself and your project</p>
            </div>
            <div className="form-container">
                <div className="project-details-container">
                    <div className="label-value">
                        <label className="heading-four">Project Budget - USD</label>
                        {
                            email.budget === "Free!" ? 
                            <p className="info">* We will be choosing one of you to give away a free custom website!</p>
                            : null
                        }
                        <div className="toggle-buttons">
                            <button className="toggle-button budget-toggle" onClick={toggleButtons('single')('budget-toggle')}>Free!</button>
                            <button className="toggle-button budget-toggle" onClick={toggleButtons('single')('budget-toggle')}>1k</button>
                            <button className="toggle-button toggle-dark budget-toggle" onClick={toggleButtons('single')('budget-toggle')}>1k-5k</button>
                            <button className="toggle-button budget-toggle" onClick={toggleButtons('single')('budget-toggle')}>5k-10k</button>
                            <button className="toggle-button budget-toggle" onClick={toggleButtons('single')('budget-toggle')}>10k+</button>
                        </div>
                    </div>
                    <div className="label-value">
                        <label className="heading-four">Work Requested</label>
                        <div className="toggle-buttons">
                            <button className="toggle-button toggle-dark work-toggle" onClick={toggleButtons('multiple')('work-toggle')}>Website Design</button>
                            <button className="toggle-button work-toggle" onClick={toggleButtons('multiple')('work-toggle')}>Website Development</button>
                        </div>
                    </div>
                    <div className="label-value">
                        <label className="heading-four">Tell us about your project</label>
                        <textarea value={email.projectDescription || ""} onChange={handleChange} className='project-description' name="projectDescription" id="description" cols="30" rows="10" placeholder='If you want, write some information about your project to help us more understand your needs, this is optional because We’ll learn about when we contact you.' />
                    </div>
                </div>
                <div className="personal-details-container">
                    <div className="label-value">
                        <label className="heading-four">Name your project</label>
                        <input value={email.projectName || ""} name='projectName' placeholder='Travel Website' type="text" className='input' onChange={handleChange}/>
                    </div>
                    <div className="label-value">
                        <label className="heading-four">Your Name</label>
                        <input value={email.clientName || ""} name='clientName' placeholder='Mike Tyson' type="text" className='input' onChange={handleChange}/>
                    </div>
                    <div className="label-value">
                        <label className="heading-four">Email</label>
                        <input value={email.email || ""} name='email' placeholder='miketyson@gmail.com' type="text" className='input' onChange={handleChange}/>
                    </div>
                    <button onClick={sendEmail} className="submit secondary-button">Send Email</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact