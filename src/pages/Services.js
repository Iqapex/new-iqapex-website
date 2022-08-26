import React from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer/Footer'
import OurServices from '../components/OurServices/OurServices'

const Services = () => {
  document.title = 'IQApex Labs | Services'
  
  return (
    <>
      <OurServices />
      <BackToTop />
      <Footer />
    </>
  )
}

export default Services