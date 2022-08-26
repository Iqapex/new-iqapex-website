import React, {useContext} from 'react'
import classes from './ClientTestimonial.module.css'
import client1 from '../../assets/avatar/client-1.png'
import client2 from '../../assets/avatar/client-2.png'
import client3 from '../../assets/avatar/client-3.png'
import client4 from '../../assets/avatar/client-4.png'
import client5 from '../../assets/avatar/client-5.png'
import allstar from '../../assets/avatar/5star.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFlip } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { mouseContext } from '../../context/mouseContext'

const picsArr = [client1, client2, client3, client4, client5]

const ClientTestimonial = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)
  let index = -1

  function createSlide(name, identity, comment, avatar) {
    index = index + 1;


    return (
      <SwiperSlide>
        <div className={classes.testimonial}>
          <div className={classes['testimonial-left']}>
            <img src={allstar} alt="5-star-review" className={classes.star} />
            <img src={picsArr[index]} className={classes.avatar} alt={avatar} />
            <h2 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{name}</h2>
            <h5>{identity}</h5>
          </div>
          <p onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{comment}</p>
        </div>
      </SwiperSlide>
    );
  }
  
  return (
    <div className={classes.section}>
        <div className='section-title'>
          <h1 className='section-heading'>Testimonial</h1>
           <h5 className='section-subheading'>WHAT OUR CLIENTS ARE SAYING</h5>
        </div>
        <div className={classes.testimonials}>
          <Swiper 
            modules={[Navigation, Pagination, Autoplay, EffectFlip]}
            effect={"flip"}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            navigation={true}
            >

              {createSlide("Subrata Pathak", "Associate Engg at Bharat Electronics, Ex - Chear, Indian Navy", "Thank You for the software development which was timely executed and successfully presented as per the requirement.I personally thank Team IQApex for timely delivery of hardware product and immense support as and when required.The work done by the IQApex team is commendable.", "../../assets/avatar/client-1.png")}

              {createSlide("Himalaya Mukherjee", "Project Manager at Golicit", "I have been working on the project for quite some time now. The timeline for the front end will be communicated through my team. I am thankful to your team for providing the support.I have been working with your team for the duration of this project and I am thankful to Team IQApex for their rigorous work on this project. The response during the time of bugs was truly invaluable. Finally a huge thank you to all of the IQApex team for a job well executed.", "../../assets/avatar/client-1.png")}

              {createSlide("Aman Gupta", "Product Manager at Moglix", "Great Going Team IQApex. Your Team’s dedication & Hard Work in the R & D Department, especially hardware attracts me the most. Wishing you all the best with the GreenLife IQponic venture !!!", "../../assets/avatar/client-1.png")}

              {createSlide("Brojen Kumar Singh", "Self-Employed", "The web based app developed by Team IQApex has taken my business to new heights.I have received so many positive reviews from my customers.Thank You for such great efforts.", "../../assets/avatar/client-1.png")}

              {createSlide("Arun Kumar Singh", "National Yoga Trainer", "The work couldn’t have been done in a better way.The team has handled the project very professionally and understood all my requirements.Wish you all the best for future ventures.", "../../assets/avatar/client-1.png")}

          </Swiper>
        </div>
    </div>
  )
}

export default ClientTestimonial
