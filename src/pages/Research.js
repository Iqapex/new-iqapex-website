import React from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer/Footer'
import RndD from '../components/Research/RndD'

const Research = () => {
  document.title = 'IQApex Labs | Research & Development'

  return (
    <div>
        <RndD />
        <BackToTop />
        <Footer />
    </div>
  )
}

export default Research