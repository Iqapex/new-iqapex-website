import React from 'react'
import aboutbg from "../../assets/img/about-bg.jpg"
import PageHeader from '../PageHeader/PageHeader'
import FirstPara from './FirstPara'
import SecondPara from './SecondPara'

function AboutUs() {
  return (
    <div style={{width:"100vw"}}>
         <PageHeader className="bgclass" heading='Get to Know Us' bgimg={aboutbg} />
         <FirstPara/>
         <SecondPara/>
      
    </div>
  )
}

export default AboutUs
