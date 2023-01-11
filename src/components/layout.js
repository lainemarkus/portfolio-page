import React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText

} from './layout.module.css'
import '../styles/global.css'

const Layout = (props) => {


  return (
    <div className={container}>
      


      <a href="#" className="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>


      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="#about" className={navLinkText}>
              <span className='bold'>About</span> Me
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="#projects" className={navLinkText}>
              <span className='bold'>My</span> Projects
            </Link>
          </li>
          <li className={navLinkItem} >
            <Link to="#contact" className={navLinkText}>
              <span className='bold'>Contact</span> Me
            </Link>
          </li>
        </ul>
      </nav>




      <div className="mobile-nav">
        <a href="#" class="nav__trigger"><span class="nav__icon"></span></a>
        <nav class="nav">
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="#" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to="#about" className={navLinkText}>About Me</Link></li>
            <li className={navLinkItem}><Link to="#projects" className={navLinkText}>My Projects</Link></li>
            <li className={navLinkItem}><Link to="#contact" className={navLinkText}>Contact Me</Link></li>
          </ul>
        </nav>
      </div>



      <main>
        {props.children}
      </main>
    </div>
  )
}
export default Layout
