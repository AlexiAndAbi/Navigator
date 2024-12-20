import React from 'react';
import './unit1.css';

function Unit1() {
  return (
    <div className="gradient_background">
       <button className="intro-button">Level 1</button> {/* Larger font for Discover */}
        <div className='content'>
          <p >Welcome to Navigator, a sea themed, text-based adventure game designed to help students learn command line prompts.</p>
          <p >Each level will be comprised of several learning pages. These will include many learn by doing examples. Each level concludes with a short mini-game.</p>
          <p >At the end of each unit there will be a longer challenge game in which points can be earned. A score of 80 points is recommended before continuing to the next unit. </p>
          <p >In Level 1 we will cover the basics. No computer skills or coding experience is required.</p>
        </div>
    </div>
  );
}

export default Unit1;
