import React, { useState } from 'react';
import './Pitch.css';
import PitchSVG from './PitchSVG';
import ActionMenu from '../Actions/Menus/ActionMenu';
import OutcomeMenu from '../Actions/Menus/OutcomeMenu';
import KickStats from '../Actions/Kicks/KickStats.js';
import ScrumStats from '../Actions/Scrums/ScrumStats.js';
import LineoutStats from '../Actions/Lineouts/LineoutStats.js';



const PitchSelection = () => {

  const [selectedArea, setSelectedArea] = useState("");
  const [actionMenuPosition, setActionMenuPosition] = useState({x: 0, y:0 });
  const [selectedAction, setSelectedAction] = useState(null);
  const [outcomeMenuPosition, setOutcomeMenuPosition] = useState(null);
  const [selectedOutcome, setSelectedOutcome] = useState(null);

  const [kickStats, setKickStats] = useState({ successful: 0, missed: 0 });
  const [scrumStats, setScrumStats] = useState({ won: 0, lost: 0 });
  const [lineoutStats, setLineoutStats] = useState({ won: 0, lost: 0 });



  const handleZoneClick = (zoneId, event) => {
    const x = event.clientX;
    const y = event.clientY;

    setActionMenuPosition({x, y});
    setSelectedArea(zoneId);
  };

  const handleActionSelect = (action) => {
    setSelectedAction(action);

    setOutcomeMenuPosition(actionMenuPosition);
  };

  const handleOutcomeSelect = (outcome) => {
    setSelectedOutcome(outcome);
  };

  


  return (
    <div className="pitchWrapper">

    <div className="statsContainer">
      {/* Display stats, initialized to 0 on load */}
      <div className="stat">
        <h2>Scrum Stats</h2>
        <ScrumStats outcome={selectedOutcome} />
      </div>
      <div className="stat">
        <h2>Kick Stats</h2>
        <KickStats outcome={selectedOutcome} />
      </div>
      <div className="stat">
        <h2>Lineout Stats</h2>
        <LineoutStats outcome={selectedOutcome} />
      </div>
    </div>
      

      <PitchSVG onZoneClick={handleZoneClick} /> {/* Pass the click handler */}

      {selectedArea && !selectedAction && (
        <ActionMenu
          position={actionMenuPosition}
          selectedArea={selectedArea}
          onActionSelect={handleActionSelect}
        />
      )}

      {selectedAction && (
        <OutcomeMenu
          position={outcomeMenuPosition}
          action={selectedAction}
          onOutcomeSelect={handleOutcomeSelect}
        />
      )}
    </div>
  );
};

export default PitchSelection;