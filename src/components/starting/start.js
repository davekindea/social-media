import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you import Link from react-router-dom
import Home from '../assets/home.webp';
import './start.css'; // Import the CSS file

const Start = () => {
  return (
    <div className="full-screen-container">
      <div className="full-screen-image">
        <img src={Home} alt="Home" />
      </div>
      <div className="centered-content">
        <h1 className="start-head">
          Welcome <br /> to our <br /> Social Media
        </h1>
        <Link to="/login">
          <button className="start-button">
            Start Chatting
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Start;
