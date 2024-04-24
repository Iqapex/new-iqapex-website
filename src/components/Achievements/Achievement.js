// Achievement.js
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import './Achievement.css';


function Achievement() {
  const [showAchievements, setShowAchievements] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const achievementsSection = document.getElementById('achievements');
      const sectionTop = achievementsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setShowAchievements(true);
      } else {
        setShowAchievements(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='section-title'>
        <h1 className='section-heading'>Our Achievements</h1>
        <h5 className='section-subheading'>Things we have achieved</h5>
      </div>
      <Element id="achievements" name="achievements" className={`achievements ${showAchievements ? 'show' : ''}`}>
        <div className="achievement-card">
          <h3 className="achievement-title">Clients Served</h3>
          <p className="achievement-number">70+</p>
        </div>
        <div className="achievement-card">
          <h3 className="achievement-title">Projects Completed</h3>
          <p className="achievement-number">100+</p>
        </div>
        <div className="achievement-card">
          <h3 className="achievement-title">Awards Received</h3>
          <p className="achievement-number">10+</p>
        </div>
        <div className="achievement-card">
          <h3 className="achievement-title">Team Members</h3>
          <p className="achievement-number">50+</p>
        </div>
      </Element>
    </div>
  );
}

export default Achievement;
