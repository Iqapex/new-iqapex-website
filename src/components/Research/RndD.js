import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './RndD.module.css'
import bgimg from '../../assets/img/rnd-bg.jpg'
import RndDHexaCard from './RndDHexaCard'
import {GiAtom} from 'react-icons/gi'
import {FaUserGraduate} from 'react-icons/fa'
import {CgToolbox} from 'react-icons/cg'
import Testimonial from '../Testimonial/Testimonial'
import RnDOffers from './RnDOffers'
import RnDAbout from './RnDAbout'
import RnDCommunity from './RnDCommunity'
import RnDMember from './RnDMember'
import member1 from '../../assets/img/soumya.jpeg'
import member2 from '../../assets/img/kriti.png'
import member3 from '../../assets/img/samrat.PNG'

const RndD = () => {
  return (
    <>
      <PageHeader heading="R&D Is Our Backbone" bgimg={bgimg} />

      <main className={classes.content}>
        <div className={classes.about}>
          <h1>Bringing Academics & Industry Together</h1>
          <RnDAbout />
        </div>

        <div className={`${classes.about} ${classes['about-cards']}`}>
          <h1>We Offer Research & Development Services for Corporates and Education for Youths</h1>
          <div className={classes.cards}>
            <RndDHexaCard heading="Research" content='The foundation of our business has always been research and innovation. We have been continually developing a number of patentable or patent-eligible technologies and academic/research articles.' Icon={GiAtom} />

            <RndDHexaCard heading="Development" content='We support businesses and startups by allowing them to concentrate on running their operations while we handle the creation of software, hardware, or hybrid products, as well as system integration.' Icon={CgToolbox} />

            <RndDHexaCard heading="Education" content='By developing practical, industry-oriented skills, we are bridging the gap between academia and industry and increasing the employability of young people in technology and engineering.' Icon={FaUserGraduate} />
          </div>
        </div>

        <div className={`${classes.about} ${classes.aboutbg}`}>
          <h1>One-on-One Classes</h1>
          <RnDOffers />
        </div>

        <div className={`${classes.about} ${classes.membersbg}`}>
          <h1>Meet Our R&D Team</h1>

          <div className={classes.members}>

            <RnDMember avatar={member1} altImg='soumyabrata' name='Soumyabrata Ghosh' role='Head of R&D, IQApex Labs' />
            <RnDMember avatar={member2} altImg='kriti' name='Kriti Sharma' role='Researcher at R&D' />
            <RnDMember avatar={member3} altImg='samratroy' name='Samrat Roy' role='Researcher at R&D' />
          </div>
        </div>

        <Testimonial />

        <div className={`${classes.about} ${classes['community-section']}`}>
          <h1>Want To Join Our R&D Community?</h1>
          <RnDCommunity />
        </div>

      </main>
    </>
  )
}

export default RndD