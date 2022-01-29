import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';


const About = () => {
    return (
        <section id="about">
            <h2 className="subheading">About me</h2>
            <div className="about-container">     
                <div className="about-content">
                    <p>I’m a third year student in <span className="bold">Aalto University</span> and on my second year studying <span className="bold">Information Networks.</span> At Information Networks I’m getting a diverse skillset that combines technical, business, design and teamworking skills without forgetting the societal and user-driven aspects. <a href="https://informaatioverkostot.fi/">Read more about <span className="bold">Information Networks.</span></a> </p>

                    <p>I’m minoring in Computer Science and particularly interested in Web based Applications and Services. </p>

                    <p>I’m looking forward to learning more about <span className="bold">Web Development </span> as well as <span className="bold">UX/UI Design</span> and <span className="bold">Visual Design.</span> I’m also interested in learning opportunities with Service Development and Growth Hacking. </p>

                    <p>I am a social and active person and I like to challenge myself. Although I’m still a rough diamond, I thrive to learn more and enhance my skills. I also like to take it easy somethimes and have fun with my friends. I’m also active in our student guild Athene and and enjoy doing voluntary work for our amazing community.</p>
                </div>
                <div id="graphic-container">
                    <StaticImage src="../images/graphic.png" alt="graphic" width={200} placeholder="blurred" layout="fixed"/>
                </div>
            </div>
        </section>
    )
}

export default About