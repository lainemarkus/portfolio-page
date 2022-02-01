import React, { useState } from 'react';
import Modal from './modal.js'
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const Projects = ( {content} ) => {


    const projects = content
    const [show, setShow] = useState(false);
    const [currentData, setCurrentData] = useState(null);

    const displayModal = (p) => {
        setShow(!show)
        setCurrentData(p

        ) 
    }

    return (
   
        <section id="projects" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="500">    
            <h2 className="subheading">My Projects</h2>
            <h3>Here are some projects that I've been working on. Take a look!</h3>
            <div id="projects-container">
                

                <div className="grid-container">
                
               { 
                  projects.map( (project, key) => (
                    <div key={key} className="grid-item" onClick={() => displayModal(project) }>
                      <div className="grid-image">
                        <GatsbyImage image={getImage(project.frontmatter.image)} alt="kuva"/>
                      </div>
                      <div className="grid-footer">
                        <h3>{project.frontmatter.title}</h3>
                        <p>{project.frontmatter.subtitle}</p>
                        <button onClick={() => displayModal(project)}>Read more</button>
                      </div>
                    </div>
                  ))
                           
                  }
                </div>
               
            </div>
           
          <Modal data={currentData} onClose = {() => setShow(false)} show={show}  />        

        </section>

    )
}

Projects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      
        frontmatter: PropTypes.object.isRequired,
      
    }).isRequired
  ).isRequired,
}

export default Projects