import React from 'react'
import classes from './About.module.css'
// import mission from '../../assets/img/mission.png'
import {IoRocket, IoDiamond, IoTelescope} from 'react-icons/io5'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className={classes.section}>
      <div className='section-title'>
        <h1 className='section-heading'>About Us</h1>
        <h5 className='section-subheading'>WHO WE ARE</h5>
      </div>

      <div className={classes['about-text']}>
        <p>We are a design and development firm based in Pune. We are focused on web and mobile app development. We have worked on a range of products including e-commerce, ed-tech, fintech, marketplace, delivery, streaming and chat etc.</p>
      </div>

      <div className={classes['about-card']}>

        <AboutCard heading='Mission' subheading='To Bring inspiration and innovation to every corner of the World.Starting from legal to travel to entertainment sectors and so on,our mission is to help unleash the potential of every team. Our mission statement speaks to the power of collaboration and the company’s devotion to facilitating teamwork and best services to our potential clients.' Icon={IoRocket} />
 
        <AboutCard heading='Vision' subheading='Our vision is to create a better everyday life for many people – for our clients, but also for our co-workers who come up with innovation-solution driven ventures offering a wide range of well-designed solutions at sustainable prices such that as many people as possible will be able to afford them.' Icon={IoDiamond} />

        <AboutCard heading='Values' subheading='Core Value which plays as DNA behind our company’s mission, vision, and purpose—the beliefs, ethics and fundamental principles which guides our employees and clients at every level of business operation.' Icon={IoTelescope} />

      </div>
    </div>
  )
}

export default About