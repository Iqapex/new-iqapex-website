import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import member1 from '../../assets/team/member1.jpg';
import member2 from '../../assets/team/member2.png';
import member3 from '../../assets/team/member3.jpeg';
import member4 from '../../assets/team/member4.jpeg';
import member5 from '../../assets/team/member5.jpg';
import member6 from '../../assets/team/member6.jpeg';
import member7 from '../../assets/team/member7.jpeg';
import member8 from '../../assets/team/member8.jpeg';
import member9 from '../../assets/team/member9.jpg';
import member10 from '../../assets/team/member10.jpeg';

import './Team.css'; // Your custom CSS for Team section

const TeamMember = ({ name, designation, image }) => (
  <div className="team-member">
    <img src={image} alt={name} className="team-member-image" />
    <div className="team-member-details">
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-designation">{designation}</p>
    </div>
  </div>
);

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="team-section" style={{top:"-5rem"}}>
      <div className='section-title'style={{top:"-5rem"}}>
        <h1 className='section-heading' >Our Team</h1>
        <h5 className='section-subheading'>The People who made it posible</h5>
      </div>
      <div className="slider-container">
      <Slider {...settings}>
        <div className="team-member-slide">
          <TeamMember
            name="Arjun Dutta"
            designation="Founder & CEO"
            image={member1}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="NG Dutta"
            designation="Co-Founder & Treasurer"
            image={member2}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Madhumita Sarkar"
            designation="Operations"
            image={member3}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Rahul Kumar"
            designation="Supply-Chain Lead"
            image={member4}
          />
        </div>
         <div className="team-member-slide">
          <TeamMember
            name="Prabhat Singh"
            designation="Marketing Lead"
            image={member5}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Subhabrata Pathak"
            designation="Hardware Advisor"
            image={member6}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Abhilekh Verma"
            designation="Advisor"
            image={member7}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Viswajeet Kumar"
            designation="Advisor"
            image={member8}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Ankur Bhattacharjee"
            designation="Advisor"
            image={member9}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Sneha Shaw"
            designation="HR"
            image={member10}
          />
        </div>
        {/* Add more TeamMember components as needed */}
      </Slider>
      </div>
    </div>
  );
};

export default Team;
