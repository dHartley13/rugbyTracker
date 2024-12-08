import React, { useEffect, useState } from 'react';
import './Pitch.css';
import PitchSVG from './PitchSVG';
import ActionMenu from '../Actions/Menus/ActionMenu';
import OutcomeMenu from '../Actions/Menus/OutcomeMenu';
import selectStatCounter from '../Actions/Helpers/StatHelper';
import KickStats from '../Actions/Kicks/KickStats.js';
import ScrumStats from '../Actions/Scrums/ScrumStats.js';
import LineoutStats from '../Actions/Lineouts/LineoutStats.js';


// The PitchSection component's sole job is to represent a section of the pitch and handle clicks (or interactions) within that section.

const PitchSelection = () => {

  const [selectedArea, setSelectedArea] = useState("");
  const [actionMenuPosition, setActionMenuPosition] = useState( {x: 0, y:0 });
  const [selectedAction, setSelectedAction] = useState(null);
  const [outcomeMenuPosition, setOutcomeMenuPosition] = useState(null);
  const [selectedOutcome, setSelectedOutcome] = useState(null);

  // State for storing stats for Kick, Scrum, and Lineout
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

    selectStatCounter(selectedAction, selectedOutcome, KickStats, ScrumStats, LineoutStats);
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