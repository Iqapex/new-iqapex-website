import React, {useContext} from 'react'
import classes from './Partner.module.css'
import img1 from '../../assets/partners/brick.54298af026c4e8ff4d60.jpg'
import img2 from '../../assets/partners/comp-f.d9f02e1aee92875c66df.png'
import img3 from '../../assets/partners/comp-ff.e10f99562590e8995892.png'
import img4 from '../../assets/partners/bitabox.png'
import img5 from '../../assets/partners/partner-5.png'
import biswa_bangla from '../../assets/partners/Biswa_Bangla.jpg'
import img6 from '../../assets/partners/partner-6.png'
import img7 from '../../assets/partners/startup-india.png'
import img8 from '../../assets/partners/msme.png'
import nasscom from '../../assets/img/nasscom.jpg'
import bita from '../../assets/img/bita.png'
import bcc from '../../assets/img/bcc.jpg'
import green from '../../assets/img/green.jpg'
import ISI from '../../assets/img/ISI.png'
import STPI from '../../assets/img/STPI.png'
import STCHTT from '../../assets/img/STCHTT.png'
import { mouseContext } from '../../context/mouseContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Partner = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  const createSlide = (image) => {
    return(
      <SwiperSlide className={classes.partnerflex}>
        <div className={classes.partner}>
          <img src={image} alt="partner" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
        </div>
      </SwiperSlide>
    )
  }

  return (
  <>
    <div className='section-title'>
      <h1 className='section-heading'>We Are Recognised & Trusted By</h1>
      <br></br>
      <h5 className='section-subheading'>THE COUNT IS GOING ON</h5>
    </div>
    <div className={classes.partners}>
      <Swiper 
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          525: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        modules={[Autoplay]}
        >
          {createSlide(img1)}
          {createSlide(img3)}
          {createSlide(img4)}
          {createSlide(img8)}
          {createSlide(biswa_bangla)}
          {createSlide(img7)}
          {createSlide(img2)}
          {createSlide(img5)}
          {createSlide(img6)}
          {createSlide(green)}
          {createSlide(nasscom)}
          {createSlide(bita)}
          {createSlide(bcc)}
          {createSlide(ISI)}
          {createSlide(STCHTT)}
          {createSlide(STPI)}
      </Swiper>
    </div>
  </>
  )
}

export default Partner