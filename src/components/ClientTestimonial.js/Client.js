import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import clientImage from '../../assets/avatar/avatar.png';
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
              Thank You for the software development which was timely executed and successfully presented as per the requirement.I personally thank Team IQApex for timely delivery of hardware product and immense support as and when required.The work done by the IQApex team is commendable.
              </p>
            
              
              <p className="testimonial-author">Subrata Pathak</p>
              <p className="testimonial-company">Associate Engg at Bharat Electronics, Ex - Chear, Indian Navy</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <img className="client-image" src={clientImage} alt="Client" />
              <FaQuoteLeft style={{color:"blue" ,fontSize:"2rem"}}/>
              <p className="testimonial-text">
              I have been working on the project for quite some time now. The timeline for the front end will be communicated through my team. I am thankful to your team for providing the support.I have been working with your team for the duration of this project and I am thankful to Team IQApex for their rigorous work on this project. The response during the time of bugs was truly invaluable. Finally a huge thank you to all of the IQApex team for a job well executed.
              </p>
             
              <p className="testimonial-author">Himalaya Mukherjee</p>
              <p className="testimonial-company">Project Manager at Golicit</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <img className="client-image" src={clientImage} alt="Client" />
              <FaQuoteLeft style={{color:"blue" ,fontSize:"2rem"}}/>
              <p className="testimonial-text">
              Great Going Team IQApex. Your Team's dedication & Hard Work in the R & D Department, especially hardware attracts me the most. Wishing you all the best with the GreenLife IQponic venture !!!
              </p>
             
              <p className="testimonial-author">Aman Gupta</p>
              <p className="testimonial-company">Product Manager at Moglix</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <img className="client-image" src={clientImage} alt="Client" />
              <FaQuoteLeft style={{color:"blue" ,fontSize:"2rem"}}/>
              <p className="testimonial-text">
              The web based app developed by Team IQApex has taken my business to new heights.I have received so many positive reviews from my customers.Thank You for such great efforts.
              </p>
             
              <p className="testimonial-author">Brojen Kumar Singh</p>
              <p className="testimonial-company">Import/Export</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <img className="client-image" src={clientImage} alt="Client" />
              <FaQuoteLeft style={{color:"blue" ,fontSize:"2rem"}}/>
              <p className="testimonial-text">
              The work couldn’t have been done in a better way.The team has handled the project very professionally and understood all my requirements.Wish you all the best for future ventures.
              </p>
             
              <p className="testimonial-author">Arun Kumar Singh</p>
              <p className="testimonial-company">National Yoga Trainer</p>
            </div>
          </SwiperSlide>

          {/* Add more testimonials as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
