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
            <h2>San Francisco, CA</h2>
            <p>In ac volutpat vulputate sit dapibus vulputate fames hendrerit hendrerit vulputate tortor velit viverra neque amet urna tempus.</p>
            <div className="contact-info">
              <div className="info-item">
                <FiMapPin />
                <span>794 Mcallister St <br /> San Francisco, California (CA), 94102</span>
              </div>
              <div className="info-item">
                <FiPhone />
                <span>(522) 862 - 1573</span>
              </div>
              <div className="info-item">
                <FiMail />
                <span>sanfrancisco@techfy.com</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={off2} alt="Office 2" className="office-image" />
          <div className="right-content">
            <h2>New York, NY</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec feugiat velit. Phasellus vestibulum, lectus nec aliquet ullamcorper.</p>
            <div className="contact-info">
              <div className="info-item">
                <FiMapPin />
                <span>123 Broadway Ave <br /> New York, New York (NY), 10001</span>
              </div>
              <div className="info-item">
                <FiPhone />
                <span>(555) 123 - 4567</span>
              </div>
              <div className="info-item">
                <FiMail />
                <span>newyork@techfy.com</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={off3} alt="Office 3" className="office-image" />
          <div className="right-content">
            <h2>Los Angeles, CA</h2>
            <p>Quisque tincidunt lacus et velit sollicitudin, quis fermentum lorem ultrices. Cras in magna neque. Pellentesque habitant morbi tristique senectus.</p>
            <div className="contact-info">
              <div className="info-item">
                <FiMapPin />
                <span>456 Hollywood Blvd <br /> Los Angeles, California (CA), 90001</span>
              </div>
              <div className="info-item">
                <FiPhone />
                <span>(333) 456 - 7890</span>
              </div>
              <div className="info-item">
                <FiMail />
                <span>losangeles@techfy.com</span>
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
