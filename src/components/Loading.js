import React from 'react'
import logo from '../assets/img/iqapex-logo-old.png'
import Navbar from './Navbar/Navbar'

const Loading = () => {
  return (
    <>
      <Navbar />
      <div style={{display: 'grid', placeItems: 'center', minHeight: '100vh'}}>
          <img src={logo} alt="Loading..." />
      </div>
    </>
  )
}

export default Loading