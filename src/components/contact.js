import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';


const Contact = () => {
    return (
        <section id="contact">
            <h2 className="subheading">Contact me</h2>
            <h3>Would I be a good fit for your team? Want to hear more about me? Contact me and let's create something cool together!</h3>
            <div className="contact-container">
           
                <div className="contact-item">
                    <div className="icon"><StaticImage src="../images/phone.png"/></div>
                    <div className="contact-text">
                        <p>+358 44 5227762</p>
                    </div>
                    
                </div>
                <div className="contact-item">
                    <div className="icon"><StaticImage src="../images/email.png"/></div>
                    <div className="contact-text">
                        <p>markus.laine(a)aalto.fi</p>
                    </div>
                    
                </div>
                <div className="contact-item">
                    <div className="icon"><StaticImage src="../images/github.png"/></div>
                    <div className="contact-text">
                        <a href="https://github.com/lainemarkus/lainemarkus" target="_blank" rel="noreferrer">My Github</a>
                    </div>
                    
                </div>
                <div className="contact-item">
                    <div className="icon"><StaticImage src="../images/linkedin.png"/></div>
                    <div className="contact-text">
                        <a href="https://www.linkedin.com/in/laine-markus/" target="_blank" rel="noreferrer">My LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="cv-item">
                <p>Want to know more about me and my background? Download my CV!</p>
                <a download href="images/email.png"><button>Download CV</button></a>
            </div>
        </section>
    )
}

export default Contact