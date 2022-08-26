import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './NotFound.css'
import notfound from '../assets/vector/not-found.png'

const NotFound = () => {
  document.title = 'IQApex Labs | Page Not Found'

  return (
    <>
      <Navbar />
      <div className='notfound'>
        <p style={{textAlign: 'center', fontSize: '20px', fontFamily: 'var(--poppins-font)', color: 'var(--primary-color)', fontWeight: '500'}}>This page doesn't exist <br /> Please check your URL or return to  
          <NavLink to='/' style={{fontSize: '18px', fontFamily: 'var(--poppins-font)', color: 'var(--secondary-color)'}}> IQApex Home</NavLink>
        </p>
        <img src={notfound} alt="" style={{width: '400px', height: '300px'}} />
        {/* <NavLink to='/' style={{fontSize: '18px', fontFamily: 'var(--poppins-font)', color: 'var(--secondary-color)'}}>Back To Home</NavLink> */}
      </div>
      <Footer />
    </>
  )
}

export default NotFound