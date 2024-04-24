import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import Office from '../components/Offices/Office'

const Contact = () => {
  document.title = 'IQApex Labs | Contact Us'
  
  return (
    <>
      <ContactUs />
      <Office/>
      <Footer />
    </>
  )
}

export default Contact