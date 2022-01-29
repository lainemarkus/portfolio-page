import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <h2 className="subheading">Hi there!</h2>
                <h1 className="heading">I'm Markus Laine.</h1>
                <h3>Student and Talent in the making, Interested in User Friendly Tech, Design and Services.</h3>
            </div>
            <div className="header-img-container">
                <StaticImage id="profile-img" src="../images/profile-img.png" alt="image" width={300} placeholder="blurred" layout="fixed" />
            </div>
        </header>
    )
}

export default Header