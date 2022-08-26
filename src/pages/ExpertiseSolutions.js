import React from 'react'
import BackToTop from '../components/BackToTop'
import ExptSolution from '../components/ExptSolution/ExptSolution'
import Footer from '../components/Footer/Footer'

const ExpertiseSolutions = () => {
  document.title = 'IQApex Labs | Expertise Solutions'

  return (
    <>
      <ExptSolution />
      <BackToTop />
      <Footer />
    </>
  )
}

export default ExpertiseSolutions