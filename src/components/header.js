import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-container">
        
                <h1 className="heading"><span className='bold'>MARKUS</span> LAINE</h1>
                <h3><span className='bold'>product</span> management, <span className='bold'>UI/UX</span> design, <span className='bold'>we</span> development.</h3>
            </div>
            <div className="header-img-container">
                <StaticImage id="profile-img" src="../images/profile-img.png" alt="image" width={300} placeholder="blurred" layout="fixed" />
            </div>
        </header>
    )
}

export default Header