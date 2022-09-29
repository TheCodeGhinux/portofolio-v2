import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo2.svg'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
// import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {

  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
    <nav id='nav' >
      <div className="logo-con">
        <div className="logo-img-con">
          <a href="#home"><img src={logo} alt="" className='logo-img' /></a>
        </div>
      </div>

      <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
              : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

      </div>


     


      <div className={click ? "nav-menu active" : "nav-links"}>
        <div className='links-con' >
          <Link activeClassName="active"  to="header" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Home</Link>

          <Link activeClassName="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>

          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}>Skills</Link>

          <Link to="services" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu} >Services</Link>

          <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu} >Portfolio</Link>

        </div>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu} className='contact' >Contact</Link>
      </div>
    </nav>
  )
}

export default Nav