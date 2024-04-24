import React from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer/Footer'
import Inv from '../components/Investor/Inv'

function Investors() {
    document.title = 'IQApex Labs | Investors'
  return (
    <div>
      <Inv/>
      <BackToTop />
      <Footer />


    </div>
  )
}

export default Investors
