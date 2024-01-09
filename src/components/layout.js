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
      
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="#about" className={navLinkText}>
              <span className='bold'>About me</span>
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="#projects" className={navLinkText}>
              <span className='bold'>My Portfolio</span> 
            </Link>
          </li>
          <li className={navLinkItem} >
            <Link to="#contact" className={navLinkText}>
              <span className='bold'>Contact me</span> 
            </Link>
          </li>
        </ul>
      </nav>




      



      <main>
        {props.children}
      </main>
    </div>
  )
}
export default Layout
