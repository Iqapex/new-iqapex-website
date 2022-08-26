import React from 'react'
import About from '../components/About/About'
import BackToTop from '../components/BackToTop'
import ClientTestimonial from '../components/ClientTestimonial.js/ClientTestimonial'
import Footer from '../components/Footer/Footer'
// import GoToTop from '../components/GoToTop'
import Header from '../components/Header/Header'
import Impact from '../components/Impact/Impact'
import Partner from '../components/Partner/Partner'
import Product from '../components/Product/Product'
import Services from '../components/Service/Service'

const Home = () => {
  document.title = "IQApex Labs | IT Company | Software Development | We Are Think-Tank"
  
  return (
    <>
    {/* <GoToTop /> */}
      <Header />
      <About />
      <Services />
      <Product />
      <Impact />
      {/* <Testimonial /> */}
      <ClientTestimonial />
      <Partner />
      <BackToTop/>
      <Footer />
    </>
  )
}

export default Home