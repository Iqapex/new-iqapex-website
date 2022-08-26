import React, {useContext} from 'react'
import classes from './Testimonial.module.css'
import {FaQuoteLeft} from 'react-icons/fa'
import male from '../../assets/avatar/male.png'
import female from '../../assets/avatar/female.png'
// import { Avatar } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { mouseContext } from '../../context/mouseContext'

const Testimonial = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  function createSlide(name, identity, comment, gender, link='') {
    return (
      <SwiperSlide>
        <div className={classes.testimonial}>
          <span onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}><img src={gender === 'male' ? male : female} alt={gender} className={classes.avatar}/></span>
          <h2 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{name}</h2>
          <h4>{identity}</h4>
          <p>
            <FaQuoteLeft style={{opacity: 0.2, fontSize: '2rem'}} /> &nbsp;{comment}
            {link.length !== 0 && <a target='_blank' rel="noreferrer" href="https://blog.internshala.com/2021/11/pursuing-a-career-in-materials-science-taking-the-road-less-travelled/" style={{color: 'blue', textDecoration: 'underline'}}>Pursuing a career in materials science: Taking the road less travelled | Internshala blog</a>}
          </p>
        </div>
      </SwiperSlide>
    );
  }
  
  return (
    <div className={classes.section}>
        <h1 className={classes.heading}>Know How IQApex Labs is Transforming Lives around the World</h1>

        <div className={classes.testimonials}>
          <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            // navigation={true}
            pagination={{clickable: true}}  
            >
              {createSlide("Meghana Hegde", "IIM Kozhikode", "I wish to convey my gratitude to team IQApex for providing the opportunity to work in  your organization. It was a pleasant experience and it helped me sharpen my research skills during this period. I also learned to use vital tools that are helpful for any type of research. I wish to thank Mr. Arjun Sir for constantly supporting me throughout the period and accommodating all my requests. I had a fruitful time with your organization.", "female")}

              {createSlide("Ayush Chaudhary", "IIT Indore", "It was a wonderful experience for me, and I have been able to learn a lot of new things during the time.Overall, I have been able to become a better version of myself, thanks to you.", "male")}

              {createSlide("Harsh Sinha", "IIT Guwahati", "I gained much knowledge at IQApex and have really enjoyed it. Mentors respond immediately and are very supportive.", "male")}

              {createSlide("Bidisha Bhattacharya", "NIT Durgapur-M.Tech Power Electronics and Machine Drives", "The innovative projects that your team demonstrates are really appreciable and unique of their own kind. Looking forward to working with your team with many such exciting products.", "female")}

              {createSlide("Simran Malik", "MS - National University Singapore", "", "female", "Pursuing a career in materials science: Taking the road less travelled | Internshala blog")}

              {createSlide("Jayasmita Roy", "MSc - Entrepreneurship & Innovation - Skema Business School, France", "Mr. Arjun is someone that you will enjoy working with because of his pretty wide skill set to tackle all problems.He has a creative mind and always has a solution out of the box.With a dedicated team of individuals he is doing great in technological space specially in hardware.", "female")}

              {createSlide("Hritika Dey", "Institute of Engineering and Management - Kolkata", "The innovative project “IoT based Anti Theft Burglar System”,  our team has made in the 2nd year of B.Tech  under the guidance of Mr.Arjun was worth commendable.", "female")}

              {createSlide("Hrithik Ghatny", "Oracle, System Engineer", "Thank you team IQApex for the wonderful experience and opportunity that you had given me during the completion of my Engg. degree. I’ve learnt a lot & also grown my confidence in my professional life as well. Training as a newbie was a lot of work for you.Thank you for your time and patience", "male")}

              {createSlide("Ananda Mukherjee", "M.Tech, CSE IIT Guwahati", "Life in IQApex - we learnt how to build things from very basics to industrial level that can be used in the real world. Besides technical skills, we learnt how to work in a team and other soft skills such as presenting your project, modeling it, and so on. Mr. Arjun Sir we found a great teacher, mentor, and guide. His warmth is enough to motivate anyone to learn new skills. He always encourages us to get out of one's comfort zone and try out new things. My experience in the R&D department at IQApex Labs is a lifetime experience. We learnt a lot about sensors and IoT here.", "male")}

              {createSlide("Arijit Mandal", "Probationary Officer, SBI", "I cannot forget the time I spent with IQApex Labs. Working in R&D department at IQApex Labs was one of the most important and integral parts of my Engineering degree. I learnt a lot of practical approaches to IOT problems in the process and completed one very good project. The team of IQApex Labs is very helpful and very rich in their knowledge. The journey was beautiful,If possible I want to work with the team once again.", "male")}

              {createSlide("Pratik Sarode", "Graduate Trainee in Quality Management and Methods Dept. in BOSCH Ltd., Nashik Plant", "I would like to thank Team IQApex for support and cooperation. The mentors were so friendly and frank that I never had a burden on me also when I was talking with the CEO. Sir gave me sufficient time to complete my work and also helped me from time to time. Lots of research specific things were the main point of learning.", "male")}

              {createSlide("Yadhu Nair", "Msc, Amrita School of Engineering, Coimbatore", "Thank you so much for acknowledging my work. I personally had a good time working with you and learned a lot while working and its been a privilege to work with you company.", "male")}

              {createSlide("Samadrita Chanda", "Msc. Economics-St.Xavier’s College,Kolkata", "The experience of conducting research and analyzing with secondary data played a key role during my masters. Therefore,I’m glad to work with the team and life in IQApex went fruitful.", "female")}

          </Swiper>
        </div>
    </div>
  )
}

export default Testimonial