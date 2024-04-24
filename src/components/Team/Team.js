import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import member1 from '../../assets/avatar/client-3.png';
import member2 from '../../assets/avatar/client-4.png';
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
            name="John Doe"
            designation="CEO"
            image={member1}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Jane Smith"
            designation="Marketing Manager"
            image={member1}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Alice Johnson"
            designation="Lead Developer"
            image={member2}
          />
        </div>
        <div className="team-member-slide">
          <TeamMember
            name="Bob Williams"
            designation="Creative Director"
            image={member2}
          />
        </div>
        {/* Add more TeamMember components as needed */}
      </Slider>
      </div>
    </div>
  );
};

export default Team;
