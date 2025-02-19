import React from 'react';
import './Unit1contents.css';
import { useNavigate } from 'react-router-dom';


function Unit1contents() {

    const navigate = useNavigate();
  
    // Function to handle the click event
    const goToLevel1 = () => {
        navigate("/Unit1-Level1"); // Now this is called when the button is clicked
    };
    const goToLevel2 = () => {
        navigate("/Unit1-Level2"); // Now this is called when the button is clicked
    };
    const goToLevel3 = () => {
        navigate("/Unit1-Level3"); // Now this is called when the button is clicked
    };
    const goToLevel4 = () => {
        navigate("/Unit1-Level4"); // Now this is called when the button is clicked
    };
    const goToContents = () => {
        navigate("/Table-Of-Contents"); // Now this is called when the button is clicked
    };
    return (
        <div className='gradient_background45'>
            {/* Discover and Explore Buttons */}
            <div className='header-row'>
                <button className="discover-button" onClick={goToContents}>Discover</button> {/* Larger font for Discover */}
                <button className="explore-button">Explore {">>"}</button> {/* Right-aligned Explore */}
            </div>

            {/* Levels */}
            <div className='unit-row'>
                <button style={{ border: '2px solid white' }} onClick={goToLevel1}>Level 1</button>
                <h3>Filesystem Structure (cd, ls, clear)</h3>
            </div>
            <div className='unit-row'>
                <button style={{ border: '2px solid #D2CAFF' }} onClick={goToLevel2}>Level 2</button>
                <h3>Creating and viewing (mkdir, touch, cat)</h3>
            </div>
            <div className='unit-row'>
                <button style={{ border: '2px solid #B0A3FF' }} onClick={goToLevel3}>Level 3</button>
                <h3>Moving and removing (pwd, mv, cp, rm)</h3>
            </div>
            <div className='unit-row'>
                <button style={{ border: '2px solid #907CFF' }} onClick={goToLevel4}>Level 4</button>
                <h3>Adding complexity (options and flags)</h3>
            </div>
            <div className='unit-row'>
                <button style={{ border: '2px solid #4F30FF' }}>Play</button>
                <h3>Combine skills from levels 1-4</h3>
            </div>
            <div className="content-art"></div>
        </div>
    );
}

export default Unit1contents;
