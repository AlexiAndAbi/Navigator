import React from 'react';
import './unit1.css';

function Unit1() {
  return (
    <div className="gradient_background">
      <div>
      {/* Intro Box */}
      <div className="intro-box">
        <h1>Intro</h1>
      </div>

      {/* Description */}
      {/* Uncomment this section if you want to include it */}
       <div>
        <h4 className="description1">
          Welcome to Navigator, a sea-themed, text-based adventure game designed to help you learn command line prompts.

          Each level will consist of several learning pages, and each page will include many interactive examples. All levels conclude with a short mini-game.

          At the end of each unit, there will be a longer challenge game in which points can be earned. A score of 80 points is recommended before continuing to the next unit.

          In Level 1, we will cover the basics. No computer skills or coding experience is required.
        </h4>
      </div> 
      </div>
    </div>
  );
}

export default Unit1;
