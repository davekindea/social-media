import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./event.css"
const Event = () => {
  
  // Example data for today's events and upcoming events
  const [newEvent, setNewEvent] = useState({ date: '', time: '', title: '' });
  const [upcomingEvents, setUpcomingEvents] = useState([
    { date: 'Tomorrow', time: '09:00 AM', title: 'Training Session' },
    { date: 'June 25th', time: '11:00 AM', title: 'Conference Call' },
    { date: 'July 1st', time: '01:00 PM', title: 'Business Lunch' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    setUpcomingEvents([...upcomingEvents, { ...newEvent }]);
    setNewEvent({ date: '', time: '', title: '' });
  };

  return (
    <div className='Events'>
      <Link to="/home"><h1>back to hopme</h1></Link>
      <div className='today-event'>
        <h1>Today's Events</h1>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.time}</td>
                <td>{event.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='Upcoming-event'>
        <h1>Upcoming Events</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='Add-more'>
        <div className='add-more'>
        <div className='add-more-event'>
        <FontAwesomeIcon icon={faPlus} />
        <h1>Add New Event</h1>
        </div>
        </div>
        <form onSubmit={handleAddEvent}>
          <input
            type='text'
            name='date'
            placeholder='Date'
            value={newEvent.date}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='time'
            placeholder='Time'
            value={newEvent.time}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={newEvent.title}
            onChange={handleInputChange}
          />
          <button type='submit'>Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default Event;
