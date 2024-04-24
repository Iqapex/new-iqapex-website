import { React, useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Image from '../../assets/vector/community-image.png';
import './FirstPara.css';

function FirstPara() {
    const [showContent, setShowContent] = useState(false);

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
  }, []);
  return (
    <div style={{top:"-80px"}}>
        <div className="section ">
      <div className="section-title">
        
        <h5 className="section-subheading">
Fostering Innovation and Collective Wisdom for a Brighter Future</h5>
      </div>

      <Element id ="about" className={`${"about-content"} ${showContent ?"show" : ''}` }>
       
        <div className='about-text1'>
          <p>
            IQApex Labs is mainly an IT service and software development firm.
            We are focused on web & mobile app development, blockchain
            development, digital marketing etc. We have already worked on a
            variety range of services almost in every domain. Apart from these
            services, we are also known for our research-based product
            development expertise.
          </p>
          
        </div>
        <div className='about-image'>
          <img src={Image} alt="About Us" />
        </div>
      </Element>
    </div>

</div>
      
    
  )
}

export default FirstPara
