import React, {useContext} from 'react'
import classes from './ServiceCard.module.css'
import { SwiperSlide } from "swiper/react";
import { mouseContext } from '../../context/mouseContext'

const ServiceCard = ({heading, image}) => {
  const {mouseEnterHandler, mouseLeaveHandler, className} = useContext(mouseContext)

  return (
    <SwiperSlide className={classes['swiper-slide']} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <h1>{heading}</h1>
    </SwiperSlide>
  )
}

export default ServiceCard