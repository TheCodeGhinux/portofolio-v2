import React from 'react'
import './nav.css'
import logo from '../../assets/logo2.svg'
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
// import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <div className="logo-con">
        <div className="logo-img-con">
          <a href="#home"><img src={logo} alt="" className='logo-img' /></a>
        </div>
      </div>


     


      <div className="nav-links">
        <div className='links-con' >
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </div>
        <a className='contact' href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Nav