// Achievement.js
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import './Figures.css';


function Figures() {
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
      <div className='section-title' style={{top:"-4rem",position:"relative"}}>
        <h1 className='section-heading'>Key Operating Figures</h1>
        
      </div>
      <Element id="achievements" name="achievements" className={`achievements ${showAchievements ? 'show' : ''}`} style={{top:"-4rem",position:"relative"}}>
        <div className="achievement-card">
          <h3 className="achievement-title">Revenue</h3>
          <p className="achievement-number">₹80L</p>
        </div>
        <div className="achievement-card">
          <h3 className="achievement-title">Order Book</h3>
          <p className="achievement-number">₹95L</p>
        </div>
        <div className="achievement-card">
          <h3 className="achievement-title">Operating Income</h3>
          <p className="achievement-number">₹10L</p>
        </div>
        <div className="achievement-card">
          <h3 className="achievement-title">Net Income</h3>
          <p className="achievement-number">₹50L</p>
        </div>
      </Element>
    </div>
  );
}

export default Figures;
