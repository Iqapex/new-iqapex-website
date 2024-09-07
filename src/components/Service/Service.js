import React, {useContext} from 'react'
import classes from './Service.module.css'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Dots } from '../../assets/vector/dots.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// import required modules
import { EffectCards } from "swiper";

import { mouseContext } from '../../context/mouseContext'

const Service = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  function createSlide(heading, count) {
    return (
      <SwiperSlide className={classes['swiper-slide']} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <h2>{count}</h2>
        <h1>{heading}</h1>
      </SwiperSlide>
    );
  }

  return (
    <div className={classes.section}>
      <div className='section-title'>
        <h1 className='section-heading'>Our Services</h1>
        <h5 className='section-subheading'>WHAT WE PROVIDE</h5>
      </div>

      <div className={classes['service-info']}>
        {/* <ServiceSvg className={classes.serviceblob} /> */}
        <Dots className={classes.dots1} />
        <Swiper
          modules={[EffectCards, Pagination, Autoplay]}
          effect={"cards"}
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          // grabCursor={true}
          className={`${classes.swiper} mySwiper`}
        >
         
          {createSlide("Web Development", '01')}
          {createSlide("App Development", '02')}
          {createSlide("Digital Marketing", '03')}
          {createSlide("Blockchain Development", '04')}
          {createSlide("Creative Design", '05')}

        </Swiper>
        <Dots className={classes.dots2} />
        <NavLink to='/services' className={classes['view-more']} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>View All Services</NavLink>
      </div>
    </div>
  )
}

export default Service
