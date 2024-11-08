// src/pages/Homepage/Homepage.jsx
import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  
  // Function to handle the click event
  const handleStartClick = () => {
    navigate("/Table-Of-Contents"); // Now this is called when the button is clicked
  };

  return (
    <div className='gradient_background'>
      <h2 className='title'>Navigator</h2>
      <h4 className='description'>Learn the Command Line</h4>
      <button className='start-button' onClick={handleStartClick}>Start</button> {/* Pass the function here */}
    </div>
  );
};

export default Homepage;
