import React, { useState } from 'react';
import PitchSelection from './PitchSelection';
import ActionMenu from '../Actions/ActionMenu';
import OutcomeMenu from '../OutcomeMenu';
import ScrumStats from '../Actions/Scrums/ScrumStats';
import KickStats from '../Actions/Kicks/KickStats';
import LineoutStats from '../Actions/Lineouts/LineoutStats';


// Helper function to reset state
const resetStates = (setSelectedArea, setActionType, setOutcome) => {
  setSelectedArea(null);  // Reset selected area
  setActionType(null);     // Reset action type
  setOutcome(null);        // Reset outcome
};

function RugbyPitch() {
  // State to store selected area and action type
  const [selectedArea, setSelectedArea] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [position, SetPosition] = useState(null);
  const [outcome, setOutcome] = useState(null);


  // handle selectedArea onClick event
  const handleAreaSelect = (area, position) => {
    setSelectedArea(area); 
    setActionType(null);
    setOutcome(null);
    SetPosition(position);
  };

  const handleActionSelect = (action) => {
    setActionType(action);
  };

  // Handle outcome selection
  const handleOutcomeSelect = (outcome) => {
    setOutcome(outcome);
  };

  return (
    <div>
      <h1>Rugby Performance Tracker</h1>

      {/* Rugby pitch with clickable sections */}
      <PitchSelection onAreaSelect={handleAreaSelect} />

      {/* Display action menu when area is selected */}
      {selectedArea && !actionType && ( 
        <ActionMenu 
          position={position} 
          onActionSelect={handleActionSelect} 
          /> 
        )}

      {/* Display outcome menu when action type is selected */}
      {actionType && !outcome && (
        <OutcomeMenu position={{position}} onOutcomeSelect={handleOutcomeSelect} />
      )}

      {/* record counts and reset states for next iteration */}
      {actionType === 'scrum' && (
        <ScrumStats 
          outcome={outcome} 
          resetStates={(setSelectedArea, setActionType, setOutcome)}
        /> )}

      {actionType === 'kick' && (
        <KickStats 
          outcome={outcome} 
          resetStates={(setSelectedArea, setActionType, setOutcome)}
          /> 
        )
      }
      {actionType === 'lineout' && ( 
        <LineoutStats 
        outcome={outcome}
        resetStates={(setSelectedArea, setActionType, setOutcome)} 
        /> 
      )}
      
    </div>
  );
}

export default RugbyPitch;
