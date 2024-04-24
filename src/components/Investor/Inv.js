import React from 'react'
import aboutbg from "../../assets/img/about-bg.jpg"
import PageHeader from '../PageHeader/PageHeader'
import Date from './Date'
import Figures from './Figures'
import './Inv.css'
function Inv() {
  return (
    <div>
      <div style={{width:"100vw"}}>
         <PageHeader className="bgclass" heading='Get to Know our investors' bgimg={aboutbg} />
        
      
    </div>
    <Figures/>
    <Date/>
    </div>
  )
}

export default Inv
