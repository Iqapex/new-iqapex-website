import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Autoplay, EffectCube, Keyboard, Mousewheel, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import innovate from '../../assets/img/Innovation.jpeg'
import invention from '../../assets/img/invention.jpg'
import journey from '../../assets/img/journey.jpg'
import research from '../../assets/img/research.webp'
import support from '../../assets/img/support.jpg'
import { mouseContext } from '../../context/mouseContext'
import Navbar from '../Navbar/Navbar'
import classes from './Header.module.css'


const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(mouseContext);
  
  
 
  
  return (
    <div className={classes.header}>
      <Navbar />
      <div className={classes.carousel}>
        <Swiper
          autoplay={{
            delay: 8000,
            disableOnInteraction: true,
          }}
          cssMode={true}
          navigation={true}
          pagination={{
            clickable:true
          }}
          
          loop={true}
          slidesPerView={"auto"}
          scrollbar={{ draggable: true }}
          spaceBetween={90}
          mousewheel={true}
       
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard,EffectCube]}
          className="mySwiper"
          style={{ width: "95%", height: "36rem", marginTop: "3rem" }}
        >
          <SwiperSlide>
            <motion.div className="container">
              <div className={classes.sliderjs} style={{ backgroundImage: `url(${journey})` }}>
                <motion.div className={classes['header-info']} initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [0, 1.1, 1] }} transition={{ duration: 1.2 }}>
                  <h1 className={classes.heading} data-text='Your Passion, Our Creation' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Your Passion, Our Creation</h1>
                  <p className={classes.subheading}>India's Unique Product Research & Service Based Company</p>
                  <NavLink to='/contact-us' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Contact Us</NavLink>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div className="container" whileHover={{ scale: 1.2, opacity: 0.8 }}>
              <div className={classes.sliderjs} style={{ backgroundImage: `url(${research})` }}>
                <motion.div className={classes['header-info']} initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [0, 1.1, 1] }} transition={{ duration: 1.2 }}>
                  <h1 className={classes.heading} data-text='Community' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Community</h1>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div className="container" whileHover={{ scale: 1.2, opacity: 0.8 }}>
              <div className={classes.sliderjs} style={{ backgroundImage: `url(${innovate})` }}>
                <motion.div className={classes['header-info']} initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [0, 1.1, 1] }} transition={{ duration: 1.2 }}>
                  <h1 className={classes.heading} data-text='Focused' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Focused</h1>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div className="container" whileHover={{ scale: 1.2, opacity: 0.8 }}>
              <div className={classes.sliderjs} style={{ backgroundImage: `url(${invention})` }}>
                <motion.div className={classes['header-info']} initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [0, 1.1, 1] }} transition={{ duration: 1.2 }}>
                  <h1 className={classes.heading} data-text='Invention' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Invention</h1>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div className="container" whileHover={{ scale: 1.2, opacity: 0.8 }}>
              <div className={classes.sliderjs} style={{ backgroundImage: `url(${support})` }}>
                <motion.div className={classes['header-info']} initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [0, 1.1, 1] }} transition={{ duration: 1.2 }}>
                  <h1 className={classes.heading} data-text='Support' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Support</h1>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>

        </Swiper>
     {/*  <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>*/}
      </div>
    </div>
  )
}

export default Header;
