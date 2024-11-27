import React, { useState } from 'react';
import ScrumStats from './ScrumStats';
import KickStats from './KickStats';
import LineoutStats from './LineoutStats';

function RugbyPitch() {
  // State to store selected area and action
  const [selectedArea, setSelectedArea] = useState(null);
  const [actionType, setActionType] = useState(null); // To track what action the user is performing (scrum, lineout, kick)

  // Function to handle when a section is selected
  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setActionType(null); // Reset action type until user selects one

    // Open radial menu or show options based on the selected area
    // For simplicity, I'll just set actionType directly here
  };

  // Function to handle the action based on selected area
  const handleActionSelect = (action) => {
    setActionType(action);
  };

  return (
    <div>
      <h1>Rugby Performance Tracker</h1>

      {/* Rugby Pitch SVG with Clickable Sections */}
      <svg
        width="800"
        height="400"
        onClick={(e) => {
          // Example logic to determine which section was clicked
          const x = e.nativeEvent.offsetX;
          const y = e.nativeEvent.offsetY;

          // Define the areas based on predefined sections (you can use coordinates here)
          if (x > 0 && x < 266 && y > 0 && y < 200) {
            handleAreaSelect('leftDefensive'); // Left Half Defensive Section
          } else if (x > 267 && x < 533 && y > 0 && y < 200) {
            handleAreaSelect('middleDefensive');
          } else if (x > 534 && x < 800 && y > 0 && y < 200) {
            handleAreaSelect('rightDefensive');
          } else if (x > 0 && x < 266 && y > 200 && y < 400) {
            handleAreaSelect('leftAttacking'); // Left Half Attacking Section
          } else if (x > 267 && x < 533 && y > 200 && y < 400) {
            handleAreaSelect('middleAttacking');
          } else if (x > 534 && x < 800 && y > 200 && y < 400) {
            handleAreaSelect('rightAttacking');
          }
        }}
      >
        {/* Defining sections as clickable areas */}
        <rect width="33.33%" height="50%" fill="lightgreen" onClick={() => handleAreaSelect('leftDefensive')} />
        <rect x="33.33%" width="33.33%" height="50%" fill="lightblue" onClick={() => handleAreaSelect('middleDefensive')} />
        <rect x="66.66%" width="33.33%" height="50%" fill="lightyellow" onClick={() => handleAreaSelect('rightDefensive')} />
        <rect y="50%" width="33.33%" height="50%" fill="lightgreen" onClick={() => handleAreaSelect('leftAttacking')} />
        <rect x="33.33%" y="50%" width="33.33%" height="50%" fill="lightblue" onClick={() => handleAreaSelect('middleAttacking')} />
        <rect x="66.66%" y="50%" width="33.33%" height="50%" fill="lightyellow" onClick={() => handleAreaSelect('rightAttacking')} />
      </svg>

      {/* Display action menu based on selected area */}
      {selectedArea && (
        <div>
          <h3>Selected Area: {selectedArea}</h3>
          <button onClick={() => handleActionSelect('scrum')}>Scrum</button>
          <button onClick={() => handleActionSelect('lineout')}>Lineout</button>
          <button onClick={() => handleActionSelect('kick')}>Kick</button>
        </div>
      )}

      {/* Display the relevant stats based on selected action */}
      {actionType && (
        <div>
          {actionType === 'scrum' && <ScrumStats />}
          {actionType === 'kick' && <KickStats />}
          {actionType === 'lineout' && <LineoutStats />}
        </div>
      )}
    </div>
  );
}

export default RugbyPitch;
