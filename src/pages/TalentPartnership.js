import React from 'react'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer/Footer'
import TalentPartner from '../components/TalentPartner/TalentPartner'

const TalentPartnership = () => {
  document.title = 'IQApex Labs | Talent Partnership'

  return (
    <>
      <TalentPartner />
      <BackToTop />
      <Footer />
    </>
  )
}

export default TalentPartnership