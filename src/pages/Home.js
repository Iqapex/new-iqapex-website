import React from 'react'
import About from '../components/About/About'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer/Footer'
// import GoToTop from '../components/GoToTop'
import Achievement from '../components/Achievements/Achievement'
import Client from '../components/ClientTestimonial.js/Client'
import Carousel from '../components/Header/Carousel'
import Partner from '../components/Partner/Partner'
import Services from '../components/Service/Service'

const Home = () => {
  document.title = "IQApex Labs | IT Company | Software Development | We Are Think-Tank"
  
  return (
    <>
    {/* <GoToTop /> */}
      <Carousel/>
      <About />
      <Services />
      {/* <Product /> */}
      <Achievement/>
      {/* <Testimonial /> */}
      <Client />
   
      <Partner />
      <BackToTop/>
      <Footer />
    </>
  )
}

export default Home