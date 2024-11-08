import React from 'react';
import "./TableContents.css";
import { useNavigate } from 'react-router-dom';


const TableContents = () => {
  const navigate = useNavigate();
  
  // Function to handle the click event
  const handleStartClick = () => {
    navigate("/Unit1-Contents"); // Now this is called when the button is clicked
  };

  return (
    <div className='gradient_background'>
      <div className='unit-row'>
        <button style={{ border: '2px solid white' }} onClick={handleStartClick}>Unit 1: Discover</button> {/* Purple border */}
        <h3>Basic command line prompts</h3>
      </div>
      <div className='unit-row'>
        <button style={{ border: '2px solid #D2CAFF' }}>Unit 2: Explore</button> {/* Red border */}
        <h3>Remote server and file transfer</h3>
      </div>
      <div className='unit-row'>
        <button style={{ border: '2px solid #B0A3FF' }}>Unit 3: Pirates!</button> {/* Orange border */}
        <h3>Permissions</h3>
      </div>
      <div className='unit-row'>
        <button style={{ border: '2px solid #907CFF' }}>Unit 4: The High Seas</button> {/* Blue border */}
        <h3>Coming soon...</h3>
      </div>
      <div className='unit-row'>
        <button style={{ border: '2px solid #a259ff' }}>Unit 5: Treasure</button> {/* Green border */}
        <h3>Coming soon...</h3>
      </div>
    </div>
  );
};

export default TableContents;
