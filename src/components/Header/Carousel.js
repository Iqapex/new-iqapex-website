import React from 'react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import comm from '../../assets/img/community.jpg';
import focus from '../../assets/img/focused.jpg';
import Nav from '../NavNew/Nav';
import Temp from '../Temp';
import classes from './Carousel.css';

const Carousel = () => {
  return (
    <>
    <Temp/>
    <div className={classes.header}>
      <Nav />
     
      <Swiper
        className={classes.swiper_container}
        loop={true} // Set loop to true for infinite loop
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        slidesPerView={1}
        speed={1000}
        pagination={{ clickable: true }}
        navigation={true}
        keyboard={true}
        scrollbar={{ draggable: false }}
        modules={[Pagination, Autoplay, Navigation, Keyboard]}
        style={{ height: "100vh", width: "100vw",top:"5.5rem"}} // Set height to 100vh for fullscreen
        cssMode={true}
        spaceBetween={90}
        mousewheel={true}
      >
        <div className='carousel' >
          <SwiperSlide>
            <img className="image" src={comm} alt="Image 1" style={{ height: "100vh", width: "100vw" }} />
            <div className="carousel-text ">
              <h2>Slide 1</h2>
              <p>Text for slide 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="image" src={focus} alt="Image 2" style={{ height: "100vh", width: "100vw" }} />
            <div className="carousel-text">
              <h2>Slide 2</h2>
              <p>Text for slide 2</p>
            </div>
          </SwiperSlide>
        </div>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
    </>
  );
};

export default Carousel;
