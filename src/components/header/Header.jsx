import React from 'react'
import './header.css'


const Header = () => {
  return (
    <section id="header">
      <div className="header-con">
        <div className="header-text">
          <div className="intro-con">
            <h1 className="intro">I have lots of things to prove to <br />myself. One is I can live my life <br/>fearlessly, and Love without limits</h1>
            <h3 className="into-subtext">Web developer, Problem solver, and Beautiful</h3>

            <div className="hero-btn">
              <button className='intro-btn' >Creator joruney</button>
              <button className='contact-btn' >Contact</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Header