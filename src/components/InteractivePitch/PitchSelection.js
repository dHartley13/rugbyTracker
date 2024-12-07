import React, { useState } from 'react';
import './Pitch.css';
import PitchSVG from './PitchSVG';

// The PitchSection component's sole job is to represent a section of the pitch and handle clicks (or interactions) within that section.

const PitchSelection = () => {

  const [selectedArea, setSelectedArea] = useState("");

  const handleZoneClick = (zoneId) => {
    setSelectedArea(zoneId);  // Set the area selected when a zone is clicked
    console.log("Zone selected:", zoneId); // Log the selected area (for debugging)
  };
  return (
    <div className="pitchWrapper">
      {/* Stats Section - Rendered above the pitch */}
      <div className="statsContainer">
        <div className="stat">
          <h2>Scrum Stats</h2>
          <p>Scrums Won: 0</p>
          <p>Scrums Lost: 0</p>
        </div>
        <div className="stat">
          <h2>Kick Stats</h2>
          <p>Successful Kicks: 0</p>
          <p>Missed Kicks: 0</p>
        </div>
        <div className="stat">
          <h2>Lineout Stats</h2>
          <p>Lineouts Won: 0</p>
          <p>Lineouts Lost: 0</p>
        </div>
      </div>
      <PitchSVG onZoneClick={handleZoneClick} />
      </div>
      
  );
}

export default PitchSelection;