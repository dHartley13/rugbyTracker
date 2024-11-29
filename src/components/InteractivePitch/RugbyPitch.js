import React, { useState } from 'react';
import PitchSelection from './PitchSelection';
import ActionMenu from '../ActionMenu/ActionMenu';
import ScrumStats from '../Actions/ScrumStats';
import KickStats from '../Actions/KickStats';
import LineoutStats from '../Actions/LineoutStats';

function RugbyPitch() {
  // State to store selected area and action type
  const [selectedArea, setSelectedArea] = useState(null);
  const [actionType, setActionType] = useState(null);

  // handle selectedArea onClick event
  const handleAreaSelect = (area) => {
    setSelectedArea(area); // Fixed the issue here
    setActionType(null);
  };

  const handleActionSelect = (action) => {
    setActionType(action);
  };

  return (
    <div>
      <h1>Rugby Performance Tracker</h1>

      {/* Rugby pitch with clickable sections */}
      <PitchSelection onAreaSelect={handleAreaSelect} />

      {/* Display action menu when area is selected */}
      {selectedArea && !actionType && ( <ActionMenu onActionSelect={handleActionSelect} /> )}

      {/* Display local stats based on selected action */}
      {actionType === 'scrum' && <ScrumStats />}
      {actionType === 'kick' && <KickStats />}
      {actionType === 'lineout' && <LineoutStats />}
    </div>
  );
}

export default RugbyPitch;
