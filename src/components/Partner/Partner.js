import React, { useContext } from 'react';
import classes from './Partner.module.css';
import { mouseContext } from '../../context/mouseContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import imgg from '../../assets/partners/bitabox.png'
import imggg from '../../assets/partners/partner-5.png'
import img66 from '../../assets/partners/partner-6.png'
import img1 from '../../assets/partners/startup-india.png';
import img2 from '../../assets/partners/msme.png';
import img3 from '../../assets/partners/Biswa_Bangla.jpg';
import img4 from '../../assets/img/nasscom.jpg';
import bita from '../../assets/img/bita.png'
import img5 from '../../assets/img/bcc.jpg'
import img6 from '../../assets/partners/iqponics.png'
import img9 from '../../assets/img/ISI.png'
import img7 from '../../assets/img/STPI.png'
import img8 from '../../assets/partners/STPINEXT.png'
import img10 from '../../assets/partners/agro.jpg'
import img12 from '../../assets/partners/healing.png'
import img11 from '../../assets/partners/iitkgpagribusinesstbi.png'
import img15 from '../../assets/partners/stcht.png'
import img14 from '../../assets/img/bongobd.svg'
import img13 from '../../assets/partners/zamsof.jpg'
import img16 from '../../assets/partners/digital.png'
import img17 from '../../assets/partners/phonepay.webp'
// (import all other images similarly)

const Partner = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(mouseContext);

  const images = [
    img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img15,img16,img17 // (add all other images here in order)
  ];

  return (
    <>
      <div className='section-title'>
        <h1 className='section-heading'>We Are Recognised & Trusted By</h1>
        <h5 className='section-subheading'>THE COUNT IS GOING ON</h5>
      </div>
      <div className={classes.partners}>
      <Swiper
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={6000}
  breakpoints={{
    320: {   // Very small mobile screens
      slidesPerView: 2,  // Show 2 logos
      spaceBetween: 10,  // Smaller space between logos
    },
    480: {   // Small mobile screens
      slidesPerView: 3,  // Show 3 logos
      spaceBetween: 15,  // Adjust space between logos
    },
    640: {   // Medium mobile screens
      slidesPerView: 4,  // Show 4 logos
      spaceBetween: 20,
    },
    768: {   // Tablets
      slidesPerView: 5,  // Show 5 logos
      spaceBetween: 30,
    },
    1024: {  // Desktop
      slidesPerView: 6,  // Show 6 logos
      spaceBetween: 40,
    },
  }}
  modules={[Autoplay]}
>
  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <div className={classes.partner}>
        <img
          src={image}
          alt="Partner Logo"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </>
  );
};

export default Partner;
