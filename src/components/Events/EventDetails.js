// EventDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PageHeader from '../PageHeader/PageHeader';
import { events } from './EventList';

const EventDetails = () => {
    const { id } = useParams(); // Get the event ID from URL params
    const event = events[id]; // Fetch the corresponding event from the events array

    return (
        <div>
            <div style={{width:"100vw"}}>
         <PageHeader className="bgclass" heading={event.name} bgimg={event} />
        
      
    </div>
            <div style={{color:"white"}}>
            <p>Date: {event.date}</p>
            <p> {event.desc}</p>
            </div>
            <Footer/>
        </div>
    );
};

export default EventDetails;
