import React from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer/Footer'
import OurProducts from '../components/OurProducts/OurProducts'

const Products = () => {
  document.title = 'IQApex Labs | IQVerse'

  return (
    <>
      <OurProducts />
      <BackToTop />
      <Footer />
    </>
  )
}

export default Products