import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo-footer.png'
import classes from './Footer.module.css'
import {FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {MdCall} from 'react-icons/md'
import { mouseContext } from '../../context/mouseContext'
import FooterCard from './FooterCard'

const Footer = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  const expertiseArr = [['Product Engineering', 'product-engineering'], ['Expertise Solutions', 'expertise-solutions'], ['Talent Partnership', 'talent-partnership']]
  // const usefulArr = [['About Us', 'about-us'], ['Blogs', 'blogs'], ['Careers', 'careers']]
  const usefulArr = [['Careers', 'careers']]

  return (
    <footer className={classes['footer-container']}>

        <div className={classes['footer-content']}>
          <div className={classes.logo}>
              <NavLink to='/' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                  <img src={logo} alt="logo" />
              </NavLink>
          </div>

          <div className={classes['card-container']}>
            
            <FooterCard title='Our Expertise' links={expertiseArr} />
            <FooterCard title='Useful Links' links={usefulArr} />

            <div className={`${classes['footer-card']} ${classes.address}`}>
              <h3>Get in Touch</h3>
              <div className={classes.info}>
                <div className={classes['info-card']}>
                    <span className={classes['circle-icon']}><FaMapMarkerAlt className={classes.icon} /></span>
                    <p>
                      <span>Address 1 - </span>1-A, Mohan Kunja Apartment, Ground Floor, North, Biman Nagar, Kaikhali, Kolkata, West Bengal 700052 
                      <br /><br />
                      <span>Address 2 - </span>Ashutosh Nagar, Vivekananda Road, North 24 Parganas, Barrackpore, West Bengal 743133
                    </p>
                </div>
                <div className={classes['info-card']}>
                    <span className={classes['circle-icon']}><GrMail className={classes.icon} /></span>
                    <p>contact@iqapexlabs.com</p>
                </div>
                <div className={classes['info-card']}>
                    <span className={classes['circle-icon']}><MdCall className={classes.icon} /></span>
                    <p>+91 87777 65809</p>
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
        <p className={classes.copyright}>&copy;2022 IQApex Labs, All Rights Reserved</p>

    </footer>
  )
}

export default Footer