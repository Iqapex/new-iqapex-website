import React, { useEffect, useState, useContext } from 'react'
import {IoMdArrowDropup} from 'react-icons/io'
import { mouseContext } from '../context/mouseContext'

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false)
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            setBackToTop(true)
        }else{
            setBackToTop(false)
        }
      })
    
      return () => {
        window.removeEventListener('scroll', null)
      }
    }, [])
    
  return (
    <>
        {backToTop && <div style={{
            position: 'fixed',
            bottom: '55px',
            right: '25px',
            width: '50px',
            height: '50px',
            border: 'none',
            boxShadow: 'inset 1px 1px 2px 2px rgba(0,0,0,0.1)',
            borderRadius: '50%',
            backgroundColor: 'var(--secondary-color)',
            zIndex: '999',
            cursor: 'pointer',
            transition: 'all 1s ease-in'
        }} onClick={scrollUp} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <IoMdArrowDropup style={{fontSize: '2rem', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff'}} />
        </div>}
    </>
  )
}

export default BackToTop