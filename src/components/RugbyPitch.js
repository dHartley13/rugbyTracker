import React, { useState } from 'react';
import ScrumStats from './ScrumStats';
import KickStats from './KickStats';
import LineoutStats from './LineoutStats';
import Rugby_Pitch from './Rugby_Pitch';

function RugbyPitch() {
  // State to store selected area, action type, and event markers
  const [selectedArea, setSelectedArea] = useState(null);
  const [actionType, setActionType] = useState(null); 
  const [events, setEvents] = useState([]); // Store the events with coordinates and action type
  const [eventMenuPosition, setEventMenuPosition] = useState(null);

  // Function to handle when a section is selected (onClick event)
  const handleAreaSelect = (area, e) => {
    setSelectedArea(area);
    setActionType(null); // Reset action type until the user selects one

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setEventMenuPosition({x, y});

    console.log("selection click at ", {x, y});

    setActionType(null);
  };

  const handleActionSelect = (action) => {
    setActionType(action);
    console.log("action selected:", action)
  
  
  if (eventMenuPosition && actionType) {
    setEvents((prevEvents) => [
      ...prevEvents, 
      { ...eventMenuPosition, action: actionType, outcome }
    ]);
  }

  setEventMenuPosition(null);
  };
  return (
    <div>
      <h1>Rugby Performance Tracker</h1>

        {/* Overlay for Clickable Areas */}
        <svg
          width="800"
          height="400"
          style={{ position: 'relative'}}
          onClick={handleAreaSelect}
        >
           {/* Defining sections as clickable areas */}
           <rect width="33.33%" height="50%" fill="lightgreen" />
           <rect x="33.33%" width="33.33%" height="50%" fill="lightblue" />
           <rect x="66.66%" width="33.33%" height="50%" fill="lightyellow" />
           <rect y="50%" width="33.33%" height="50%" fill="lightgreen" />
           <rect x="33.33%" y="50%" width="33.33%" height="50%" fill="lightblue" />
           <rect x="66.66%" y="50%" width="33.33%" height="50%" fill="lightyellow" />
        </svg>

        {/* Display event menu when a section is selected */}

        {eventMenuPosition && (
          <div
            style={{
              position: 'absolute',
              left: eventMenuPosition.x + 'px',
              top: eventMenuPosition.y + 'px',
              backgroundColor: 'white',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
        >


          <h3>Selected Area: {selectedArea}</h3>
          <button onClick={() => handleActionSelect('scrum')}>Scrum</button>
          <button onClick={() => handleActionSelect('lineout')}>Lineout</button>
          <button onClick={() => handleActionSelect('kick')}>Kick</button>
        </div>
      )}

      {/* Display options for won/lost after event selection */}
      {actionType && (
        <div
          style={{
            position: 'absolute', 
            left: eventMenuPosition.x + 'px',
            top: eventMenuPosition.y + 30 + 'px',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        >

        <h3>Was the event won or lost?</h3>
          <button onClick={() => handleOutcomeSelect('won')}>Won</button>
          <button onClick={() => handleOutcomeSelect('lost')}>Lost</button>
        </div>
      )}
        {/* Display recorded events with markers */}
      <svg width="800" height="400" style={{ position: 'absolute', pointerEvents: 'none' }}>
      {events.map((event, index) => (
        <circle
          key={index}
          cx={event.x}
          cy={event.y}
          r="5"
          fill={
            event.action === 'scrum' ? 'red' :
            event.action === 'lineout' ? 'blue' :
            'green'
          }
        />
      ))}
    </svg>

    {/* Display the stats */}
    <div>
      <ScrumStats />
      <KickStats />
      <LineoutStats />
    </div>
  </div>
);
}

export default RugbyPitch;
