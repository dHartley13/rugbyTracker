import React, { useState } from 'react';
import './Pitch.css';
import PitchSVG from './PitchSVG';
import ActionMenu from '../Actions/Menus/ActionMenu';


// The PitchSection component's sole job is to represent a section of the pitch and handle clicks (or interactions) within that section.

const PitchSelection = () => {

  const [selectedArea, setSelectedArea] = useState("");
  const [menuPosition, setMenuPosition] = useState( {x: 0, y:0 });

  const handleZoneClick = (zoneId) => (event) => {
    const x = event.clientX;
    const y = event.clientY;

    console.log("Zone Passed to pictchselection:", zoneId);
    console.log("Mouse position passed to pitch selection:", x, y);  // Log the mouse position


    setMenuPosition({x, y});
    setSelectedArea(zoneId);
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

      <PitchSVG onZoneClick={handleZoneClick} /> {/* Pass the click handler */}
      {selectedArea && (
        <ActionMenu position={menuPosition} selectedArea={selectedArea} /> /* Pass selectedArea */
      )}
      </div>
      
  );
}

export default PitchSelection;