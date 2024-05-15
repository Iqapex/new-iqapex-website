import React from 'react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import comm from '../../assets/img/together.jpg';
import focus from '../../assets/img/journey.jpg';
import invention from '../../assets/img/invention.jpg';
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
            <img className="image" src={comm} alt="Image 1" style={{ height: "100vh", width: "100vw",aspectRatio:"16/9" }} />
            <div className="carousel-text ">
              <h2>Transforming Ideas into Reality</h2>
              <p>Welcome to IQApex Labs, your one-stop solution to all your IT service and software development needs. We specialize in web and mobile app development, blockchain development, and digital marketing. Our team of experts is dedicated to providing you with innovative, research-based solutions that transform your ideas into reality. Let us help you take your business to the next level.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="image" src={focus} alt="Image 2" style={{ height: "100vh", width: "100vw" ,aspectRatio:"16/9"}} />
            <div className="carousel-text">
              <h2>Your Passion, Our Creation</h2>
              <p>We provide  Software Development tailored digital marketing solutions that help businesses increase their online visibility, engage their target audience, and drive conversions.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="image" src={invention} alt="Image 3" style={{ height: "100vh", width: "100vw",aspectRatio:"16/9" }} />
            <div className="carousel-text">
              <h2>Research-based Product Development</h2>
              <p>We provide research-based product development expertise that helps businesses bring innovative products to market quickly and cost-effectively.
</p>
            </div>
          </SwiperSlide>

        </div>
        
      </Swiper>
    </div>
    </>
  );
};

export default Carousel;
