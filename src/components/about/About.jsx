import React from 'react'
import './about.css'
import img from '../../assets/ghaj.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
      <div className="img-con">
        <div className="about-img-con">
          <img src={img} alt="ghajini" className='about-img' />
        </div>
      </div>
      <div className="about-me-con">
        <div className="about-me-header">
          <h4>ABOUT ME</h4>
        </div>
        <div className="about-me-title">
          <h2>Web Developer</h2>
        </div>
        <div className="about-me-text">
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ad eligendi maxime ea est, adipisci iure porro similique iusto praesentium quis rem? Mollitia molestias veritatis delectus omnis incidunt sequi laboriosam. <br/>
          <br/>

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, cum! Accusantium tempora nihil totam similique quam odio, non magnam atque sit molestias ipsa obcaecati quod, corporis ullam cum inventore illo.
          
          </h4>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About