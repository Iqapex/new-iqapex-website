import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { MdCall } from 'react-icons/md'
import logo from '../../assets/img/iqapex-logo-3.png'
import { mouseContext } from '../../context/mouseContext'
import classes from './Footer.module.css'
import FooterCard from './FooterCard'

const Footer = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  const expertiseArr = [['Product Engineering', 'product-engineering'], ['Expertise Solutions', 'expertise-solutions'], ['Talent Partnership', 'talent-partnership']]
  const usefulArr = [['Careers', 'careers'], ['Announcements'], ['Partners with us']]
  const industries = [['Information Technology'], ['E-commerce & Retail'], ['AR/VR in Manufacturing'], ['Travel & Logistics'], ['Sustainability & Climate change']]

  const addresses = [
    "Shyamnagar, Kolkata, West Bengal, India",
    "Sector V, Kolkata, West Bengal, India",
    "Jayanagar, Karnataka, India, 560011",
    "Rajendranagar, Hyderabad, India, 500030",
    "Borjhar, Guwahati near Airport, India, 781015"
  ]

  return (
    <footer className={classes['footer-container']}>
      <div className={classes['footer-content']}>
        <div className={classes['footer-columns']}>
          <FooterCard title='Our Expertise' links={expertiseArr} />
          <FooterCard title='Useful Links' links={usefulArr} />
          <FooterCard title="Industries" links={industries}/>
          
          <div className={`${classes['footer-card']} ${classes.address}`}>
            <h3>Get in Touch</h3>
            <div className={classes.info}>
              {addresses.map((address, index) => (
                <div key={index} className={classes['info-card']}>
                  <span className={classes['circle-icon']}><FaMapMarkerAlt className={classes.icon} /></span>
                  <p>
                    <span></span>{address}
                  </p>
                </div>
              ))}
              <div className={classes['info-card']}>
                <span className={classes['circle-icon']}><GrMail className={classes.icon} /></span>
                <p>contact@iqapexlabs.com</p>
              </div>
              <div className={classes['info-card']}>
                <span className={classes['circle-icon']}><MdCall className={classes.icon} /></span>
                <p>+91 62895 69385</p>
              </div>
            </div>
            <div className={classes['social-media']}>
              <span onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><a href="https://www.facebook.com/IQApexLabs" target="_blank" rel="noreferrer"><FaFacebook className={classes.fb}/></a></span>
              <span onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><a href="https://www.instagram.com/iqapexlabs" target="_blank" rel="noreferrer"><FaInstagram className={classes.insta}/></a></span>
              <span onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><a href="https://www.linkedin.com/company/iqapex-labs/" target="_blank" rel="noreferrer"><FaLinkedinIn className={classes.linkedin} /></a></span>
            </div>
          </div>
        </div>
      </div>

      <p className={classes.copyright}>&copy; 2024 IQApex Labs, All Rights Reserved</p>
    </footer>
  )
}

export default Footer
