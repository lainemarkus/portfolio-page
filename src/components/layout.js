import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import '../styles/global.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="#about" className={navLinkText}>
              About Me
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              My Projects
            </Link>
          </li>
          <li className={navLinkItem} >
            <Link to="/" className={navLinkText} >
              <span className="bold red">Contact Me</span>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout
