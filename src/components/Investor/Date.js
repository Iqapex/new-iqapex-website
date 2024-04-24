// Date.js
import React from 'react';
import './Date.css'; // Import CSS file for styling

const Date = () => {
  // Sample data containing dates and events
  const eventsData = [
    { date: '2024-04-16', event: 'Event A' },
    { date: '2024-04-17', event: 'Event B' },
    { date: '2024-04-18', event: 'Event C' },
    // Add more dates and events as needed
  ];

  return (
    <>
    <h5 className="section-subheading" style={{marginLeft:"2rem"}} >IMPORTANT DATES</h5>
    <div className="date-container"style={{top:"3rem",position:"relative"}}>
    
    
        
    
      {eventsData.map(({ date, event }) => (
        <div className="date-item" key={date}>
          <div className="date">{date}</div>
          <div className="event">{event}</div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Date;
