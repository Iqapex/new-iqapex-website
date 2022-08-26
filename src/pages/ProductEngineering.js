import React from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer/Footer'
import ProdEngg from '../components/ProdEngg/ProdEngg'

const ProductEngineering = () => {
  document.title = 'IQApex Labs | Product Engineering'

  return (
    <>
      <ProdEngg />
      <BackToTop />
      <Footer />
    </>
  )
}

export default ProductEngineering