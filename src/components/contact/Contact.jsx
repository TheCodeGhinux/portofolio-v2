import React from 'react'
import './contact.css'
import {FaMailBulk} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaMailBulk className='contact__opiton-icon' />
            <h4>Email</h4>
            {/* <h5>ilebryson@gmail.com</h5> */}
            <a href="mailto:ilebryson@gmail.com" target= "_blank" rel='noreferrer'>Send a message</a>
          </article>
          
          <article className="contact__option">
            <FaTwitter className='contact__opiton-icon' />
            <h4>Twiter</h4>
            <h5>AyoOfLagos</h5>
            <a href="https://twitter.com/ayooflagos" target= "_blank" rel='noreferrer'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__opiton-icon' />
            <h4>Whatsapp</h4>
            {/* <h5>+234</h5> */}
            <a href="https://api.whatsapp.com/send?phone+2348140273725" target= "_blank" rel='noreferrer'>Send a message</a>
          </article>

        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        </form>
      </div>
    </section>
  )
}

export default Contact