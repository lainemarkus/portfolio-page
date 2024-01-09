import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';


const Contact = () => {
    return (
        <section id="contact">
            <h2 className="subheading"><span className='bold'>Contact me</span></h2>
            <h3>Would I be a fit for your team? I would be happy to tell more about myself!</h3>
            <div className="contact-container">
           
                <div className="contact-item">
                    <div className="icon"><StaticImage src="../images/phone.png" alt="kuva"/></div>
                    <div className="contact-text">
                        <p>+358 445227762</p>
                    </div>
                    
                </div>
                <div className="contact-item">
                    <div className="icon"><StaticImage src="../images/email.png" alt="kuva"/></div>
                    <div className="contact-text">
                        <p>laine.markus(a)outlook.com</p>
                    </div>
                    
                </div>
                <div className="contact-item">
                    <div className="icon"><StaticImage src="../images/github.png" alt="kuva"/></div>
                    <div className="contact-text">
                        <a href="https://github.com/lainemarkus/lainemarkus" target="_blank" rel="noreferrer">My Github</a>
                    </div>
                    
                </div>
                <div className="contact-item">
                    <div className="icon"><StaticImage src="../images/linkedin.png" alt="kuva"/></div>
                    <div className="contact-text">
                        <a href="https://www.linkedin.com/in/laine-markus/" target="_blank" rel="noreferrer">My LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="cv-item">

            </div>
        </section>
    )
}

export default Contact