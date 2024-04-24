import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer/Footer'
import Team from '../components/Team/Team'

const About = () => {
  document.title = 'IQApex Labs | About'
  
  return (
    <>

      <AboutUs/>
      <Team/>
      <BackToTop />
      <Footer />
    </>
  )
}

export default About