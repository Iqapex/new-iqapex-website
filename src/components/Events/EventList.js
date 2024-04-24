// EventList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';

export const events = [
    { name: "Event 1", date: "April 20, 2024", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Event 2", date: "April 25, 2024", desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Event 3", date: "May 1, 2024", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { name: "Event 4", date: "May 5, 2024", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { name: "Event 5", date: "May 10, 2024", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: "Event 6", date: "May 15, 2024", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Event 7", date: "May 20, 2024", desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Event 8", date: "May 25, 2024", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { name: "Event 9", date: "May 30, 2024", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { name: "Event 10", date: "June 5, 2024", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
];

const EventList = () => {
    return (
        <div className="event-list">
            {events.map((event, index) => (
                <div className="event" key={index}>
                    <div className="event-header">
                        <p style={{color:"#B6EADA"}}>{event.date}</p>
                        <h2>{event.name}</h2>
                        
                    </div>
                    <p className="event-desc">{event.desc}</p>
                    <Link to={`/events/${index}`} className="event-link">View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default EventList;
