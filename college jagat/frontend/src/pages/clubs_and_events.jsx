import React, { useState, useEffect } from 'react'
import '../style/clubs_&_events.scss'
import Navbar1 from '../components/navbar1'
import Footer from '../components/footer'

const clubs_and_events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json_data_file/event_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar1 />
    <div className="events">
      <div className="event-heading">
      <h1>Upcoming Events</h1>
      </div>
      <div className="events-container">
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h3>{event.title}</h3>
            <p>Date : {event.date}</p>
            <p>Time : {event.time}</p>
            <p>Location : {event.location}</p>
            <p>Description : {event.description}</p>
            <p>Club : {event.club}</p>
            <p>Fill Form : <a href={event.link}>Click Here</a></p>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};


export default clubs_and_events
