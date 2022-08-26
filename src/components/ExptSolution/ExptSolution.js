import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './ExptSolution.module.css'
import esimg1 from '../../assets/vector/footer-3.png'
import esimg2 from '../../assets/vector/footer-2.png'
import esimg3 from '../../assets/vector/footer-11.png'
import esimg4 from '../../assets/vector/footer-9.png'
import headerImg from '../../assets/vector/exp-sol.jpg'
import ExpSection from './ExpSection'

const ExptSolution = () => {
  return (
    <>
      <PageHeader heading='Complex problems. Simple solutions.' bgimg={headerImg} />

      <div className={classes.container}>
        <div className={classes.desc}>
            <p>We assist our enterprise clients in developing collaboration and enterprise portals, building identity and access management systems, and provide business intelligence and analytic solutions to better manage their businesses. No matter how complicated a project becomes, we have always provided our clients with high-quality solutions.</p>
            <p style={{margin: '1rem'}}>If you're looking for simple and straightforward, yet process driven and methodical solutions, you are at the right place.</p>
        </div>

        <div className={classes.cards}>

          <ExpSection title="Learn fast. Deliver faster." content="With our on-site/off-site flexibility, we can shorten project time by an average of 23%*, preventing unnecessary time wastage while also saving you time and money." cardImage={esimg1} />

          <ExpSection title="Multi-dimensional approach." content="Every piece of software we develop has a fundamental framework of design, technology, domain expertise and  subject-matter knowledge behind it. This framework improves user experience while also lowering technological hurdles. Additionally, our domain experience reduces the learning curve for initiatives in related industries and domains, accelerating momentum. As a result, you get a multidimensional solution to a one-dimensional problem." cardImage={esimg2} />

          <ExpSection title="Confidentiality. Guaranteed." content="We provide you with everything you need for peace of mind, including a local presence in the USA, a strict NDA adherence policy, signed contracts, a guarantee of confidentiality. and much more." cardImage={esimg3} />

          <ExpSection title="One. Stop. Shop." content="We have created more than 120 products over the past few years for platforms that are cloud-enabled, mobile, and web-based. Every new project we work on is built upon the expertise and skills gained by more than 2,000 man hours of design, domain, and technological experience which we have acquired through hard work and extensive research." cardImage={esimg4} />

        </div>
      </div>
    </>
  )
}

export default ExptSolution