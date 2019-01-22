import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.png'
import './header.css'

const Header = ({ siteTitle }) => (
 

    <div className='menu-container'>
    <Link to="">
        <img className='logo'src={logo} alt="logo Kids And Coconuts" />
    </Link>

        <nav>
        
            <Link to="blog"><div className='menu-item'>Blog</div></Link>
            <Link to=""><div className='menu-item'>Over ons</div></Link>
            <Link to="page-2"><div className='menu-item'>Babbeltje doen?</div></Link>
        
        </nav>
   </div>   
  
  



)

export default Header
