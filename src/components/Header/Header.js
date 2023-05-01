import React, {useContext } from 'react'
import classes from './Header.module.css'
// import headerImage from '../../assets/img/header.png'
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
import { mouseContext } from '../../context/mouseContext';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules for swiper 
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import journey from '../../assets/img/journey.jpg';
import community from '../../assets/img/community.jpg';
import invention from '../../assets/img/invention.jpg';
import support from '../../assets/img/support.jpg';
import focused from '../../assets/img/focused.jpg';



const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext);
  return (
    <div className={classes.header}>
      <Navbar />
        {/* <motion.div className={classes['header-info']}
          initial={{opacity: 0}}
          animate={{opacity: 1, scale: [0, 1.1, 1]}}
          transition={{duration: 1.2}}>
          <h1 className={classes.heading}data-text='Your Passion, Our Creation' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Your Passion, Our Creation</h1>
          <p className={classes.subheading}>India's Unique Product Research & Service Based Company</p>

          <NavLink to='/contact-us' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Contact Us</NavLink>
        </motion.div> */}
        {/* <img className={classes.show} src={headerImage} style={{height: '120px'}} alt="headerImage" /> */}

        <Swiper
         autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
    
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ width:"85rem",height:"39rem",'&hover':{
          opacity:"0.5"
        }}}
      >
        <SwiperSlide >
        <motion.div className="container" whileHover={{ scale: 1.2 , opacity:0.8}}>
           <div  className={classes.sliderjs} style={{ backgroundImage: `url(${journey})`}} >
           
      <motion.div className={classes['header-info']} initial={{opacity: 0}} animate={{opacity: 1, scale: [0, 1.1, 1]}} transition={{duration: 1.2}}>
          <h1 className={classes.heading}data-text='Your Passion, Our Creation' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Your Passion, Our Creation</h1>
          <p className={classes.subheading}>India's Unique Product Research & Service Based Company</p>
          <NavLink to='/contact-us' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Contact Us</NavLink>
        </motion.div>

           </div>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide >
        <motion.div className="container" whileHover={{ scale: 1.2 , opacity:0.8}}>
           <div  className={classes.sliderjs} style={{ backgroundImage: `url(${community})`}} >
           
      <motion.div className={classes['header-info']} initial={{opacity: 0}} animate={{opacity: 1, scale: [0, 1.1, 1]}} transition={{duration: 1.2}}>
          <h1 className={classes.heading}data-text='Community' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Community</h1>
        </motion.div>

           </div>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide >
        <motion.div className="container" whileHover={{ scale: 1.2 , opacity:0.8}}>
           <div  className={classes.sliderjs} style={{ backgroundImage: `url(${focused})`}} >
           
      <motion.div className={classes['header-info']} initial={{opacity: 0}} animate={{opacity: 1, scale: [0, 1.1, 1]}} transition={{duration: 1.2}}>
          <h1 className={classes.heading}data-text='Focused' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Focused</h1>
        </motion.div>

           </div>
        </motion.div>
        </SwiperSlide>



        <SwiperSlide >
        <motion.div className="container" whileHover={{ scale: 1.2 , opacity:0.8}}>
           <div  className={classes.sliderjs} style={{ backgroundImage: `url(${invention})`}} >
           
      <motion.div className={classes['header-info']} initial={{opacity: 0}} animate={{opacity: 1, scale: [0, 1.1, 1]}} transition={{duration: 1.2}}>
          <h1 className={classes.heading}data-text='Invention' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Invention</h1>
        </motion.div>

           </div>
        </motion.div>
        </SwiperSlide>

        <SwiperSlide >
        <motion.div className="container" whileHover={{ scale: 1.2 , opacity:0.8}}>
           <div  className={classes.sliderjs} style={{ backgroundImage: `url(${support})`}} >
           
      <motion.div className={classes['header-info']} initial={{opacity: 0}} animate={{opacity: 1, scale: [0, 1.1, 1]}} transition={{duration: 1.2}}>
          <h1 className={classes.heading}data-text='Support' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Support</h1>
        </motion.div>

           </div>
        </motion.div>
        </SwiperSlide>

      
     
      </Swiper>


    </div>
  )
}

export default Header