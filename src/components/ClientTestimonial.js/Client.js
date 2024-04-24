import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import clientImage from '../../assets/avatar/avatar-1.png';
import './Client.css'; // Import custom CSS styles for testimonials

const Client = () => {
  return (
    <div className=''>
      <div className='section-title'>
        <h1 className='section-heading'>Testimonial</h1>
        <h5 className='section-subheading'>WHAT OUR CLIENTS ARE SAYING</h5>
      </div>
      <div className="testimonial-slider">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true} // Set loop to true for infinite loop
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          navigation={true}
          keyboard={true}
          cssMode={true}
        >
          <SwiperSlide>
            <div className="testimonial">
              <img className="client-image" src={clientImage} alt="Client" />
              <FaQuoteLeft style={{color:"blue" ,fontSize:"2rem"}}/>
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum nulla vel mauris
                efficitur, quis lobortis turpis varius.
              </p>
              
              <p className="testimonial-author">John Doe</p>
              <p className="testimonial-company">Company ABC</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <img className="client-image" src={clientImage} alt="Client" />
              <FaQuoteLeft style={{color:"blue" ,fontSize:"2rem"}}/>
              <p className="testimonial-text">
                Vivamus quis justo eu nunc malesuada posuere. Sed commodo odio id est sollicitudin malesuada.
              </p>
             
              <p className="testimonial-author">Jane Smith</p>
              <p className="testimonial-company">Company XYZ</p>
            </div>
          </SwiperSlide>
          {/* Add more testimonials as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
