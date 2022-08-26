import React, {useContext} from 'react'
import classes from './Header.module.css'
// import headerImage from '../../assets/img/header.png'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
import { mouseContext } from '../../context/mouseContext'

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  return (
    <div className={classes.header}>
      <Navbar />
        <motion.div className={classes['header-info']}
          initial={{opacity: 0}}
          animate={{opacity: 1, scale: [0, 1.1, 1]}}
          transition={{duration: 1.2}}>
          <h1 className={classes.heading}data-text='Your Passion, Our Creation' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Your Passion, Our Creation</h1>
          <p className={classes.subheading}>India's Unique Product Research & Service Based Company</p>

          <NavLink to='/contact-us' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Contact Us</NavLink>
        </motion.div>
        {/* <img className={classes.show} src={headerImage} style={{height: '120px'}} alt="headerImage" /> */}
    </div>
  )
}

export default Header