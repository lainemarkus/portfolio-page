import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
    return (
        <section id="about">
            <h2 className="subheading"><span className='bold'>About me</span></h2>
            <div className="about-container">     
                <div className="about-content">
                    <p>As an Information Networks Master’s student with a passion for digital services and products, development, and IT service management, 
                        I consider my diverse skillset a valuable asset in the fast-changing digital world. I am looking to bring value through improved 
                        digital solutions and products, focusing on sustainable business practices and creating a positive impact on society. My studies 
                        in business and strategy complement my technical knowledge, offering a holistic approach to digital solutions. With strong 
                        problem-solving skills, a creative and team-oriented mindset, and enthusiasm for learning and growth, I am confident in my ability 
                        to work with innovative solutions that stand out and truly make a difference. Thank you for visiting my portfolio; I hope you enjoy 
                        my perspective and recognize the value I could bring.</p>

                    <p></p>

                </div>
                <div id="graphic-container">
                  <StaticImage id="about-img" src="../images/about-img.png" alt="image" width={400} placeholder="blurred" layout="fixed" />
 


              
                </div>
            </div>
        </section>
    )
}

export default About