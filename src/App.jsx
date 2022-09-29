import React from 'react';
import './index.css'
import Header from './components/header/Header'
import Nav from './components/Navbar/nav'
import Navigation from './components/Navbar/navigation'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Clients from './components/clients/Clients'


const App = () => {
  return (
    <>
      <Nav />
      <Navigation/>
      <main className="container">
        <Header />
        <About />
        <Clients/>
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
    
      </main>
      <Footer />
    </>
  )
}

export default App