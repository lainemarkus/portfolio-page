import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image'




const myModal = (props) => {

    if (!props.show) {
        return null
    }
    const data = props.data;

    console.log(data)

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-image">
                    <GatsbyImage image={getImage(data.frontmatter.image)} alt="kuva"/>
                   
                </div>
                <div className="modal-footer">
                    <h2 className="modal-heading">{data.frontmatter.title}</h2>
                    <h3 className="modal-subheading">{data.frontmatter.subtitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: data.rawMarkdownBody.replace(/\n/g, '<br/>') }} />
                    <p><a href={data.frontmatter.link} target="_blank" rel="noreferrer">{data.frontmatter.link_text}</a></p>
                    <p><a href={data.frontmatter.github} target="_blank" rel="noreferrer">{data.frontmatter.github_text}</a></p>
                    <div className="modal-buttons">
                        <button className="button" onClick={props.onClose}>Close</button>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default myModal