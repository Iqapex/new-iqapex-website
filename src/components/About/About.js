import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import about from "../../assets/img/istockphoto-1402604850-170667a.webp";
import classes from './About.module.css';

const About = () => {
  const [showContent, setShowContent] = useState(false);
  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const circle = button.querySelector('::before');
    button.classList.add(classes['hover']);
  };

  const handleMouseLeave = (e) => {
    const button = e.currentTarget;
    button.classList.remove(classes['hover']);
  };  
  
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the section is in the viewport
      if (sectionTop < windowHeight * 0.75) {
        setShowContent(true); // Show content when section is in viewport
      } else {
        setShowContent(false); // Hide content when section is not in viewport
      }
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className={classes.section} >
      <div className="section-title">
        <h1 className="section-heading">About Us</h1>
        <h5 className="section-subheading">WHO WE ARE</h5>
      </div>

      <Element id ="about" className={`${classes['about-content']} ${showContent ? classes.show : ''}` }>
        <div className={classes['about-image']}>
          <img src={about} alt="About Us" />
        </div>
        <div className={classes['about-text']}>
          <p>
            IQApex Labs is mainly an IT service and software development firm.
            We are focused on web & mobile app development, blockchain
            development, digital marketing etc. We have already worked on a
            variety range of services almost in every domain. Apart from these
            services, we are also known for our research-based product
            development expertise.
          </p>
          <button  onClick={() => window.location.href = '/aboutUs'}>Learn More</button>
        </div>
      </Element>
    </div>
  );
};

export default About;
