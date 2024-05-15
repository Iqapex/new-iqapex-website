// Office.js
import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { A11y, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';
import off1 from "../../assets/img/contact-us.jpg";
import off2 from "../../assets/img/digital-marketing.jpg";
import off3 from "../../assets/img/invention.jpg";
import './Office.css';

// Import Swiper modules

// Install Swiper modules


const Office = () => {
  return (
    <>
    <div className='section-title'>
        <h1 className='section-heading'>Our Offices</h1>
        <h5 className='section-subheading'>Visit Us at</h5>
      </div>
    <Swiper
      spaceBetween={90}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     
      
      Keyboard={true}
      modules={[Navigation, Pagination, Scrollbar,A11y,Keyboard]}
      
    >
      <SwiperSlide>
        <div className="slide-content">
          <img src={off1} alt="Office 1" className="office-image" />
          <div className="right-content">
            <h2> Kaikhali, Kolkata</h2>
            <p> Mohan Kunja Apartment, Ground Floor, Biman Nagar, Kaikhali, Kolkata, West Bengal 700052</p>
            <div className="contact-info">
              <div className="info-item">
                <FiMapPin />
                <span>794 Mcallister St <br /> San Francisco, California (CA), 94102</span>
              </div>
              <div className="info-item">
                <FiPhone />
                <span>+91 87777 65809</span>
              </div>
              <div className="info-item">
                <FiMail />
                <span>contact@iqapexlabs.com</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={off2} alt="Office 2" className="office-image" />
          <div className="right-content">
            <h2>Barrackpore, West Bengal</h2>
            <p>Ashutosh Nagar, Vivekananda Road, North 24 Parganas, Barrackpore, West Bengal 743133</p>
            <div className="contact-info">
              <div className="info-item">
                <FiMapPin />
                <span>123 Broadway Ave <br /> New York, New York (NY), 10001</span>
              </div>
              <div className="info-item">
                <FiPhone />
                <span>+91 87777 65809</span>
              </div>
              <div className="info-item">
                <FiMail />
                <span>contact@iqapexlabs.com</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
    </>
  );
};

export default Office;
