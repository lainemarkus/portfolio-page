import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-container">
        
                <h1 className="heading">Markus Laine</h1>
                <h3>Passionate tech student with a diverse skillset, driven to create and manage impactful digital solutions.</h3>
            </div>
            <div className="header-img-container">
                <StaticImage id="profile-img" src="../images/profile-img.png" alt="image" width={300} placeholder="blurred" layout="fixed" />
            </div>
        </header>
    )
}

export default Header