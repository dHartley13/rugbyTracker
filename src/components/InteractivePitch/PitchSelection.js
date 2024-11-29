import React from 'react';
import './Pitch.css';

// The PitchSection component's sole job is to represent a section of the pitch and handle clicks (or interactions) within that section.

function PitchSelection({ onAreaSelect }) {

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    let area = '';

    // Assign areas - TODO: align it with real areas of rugby pitch (22m, 10m, 5m etc)
    if (x > 0 && x < 266 && y > 0 && y < 200) {
      area = 'leftDefensive'; // Left Half Defensive Section
    } else if (x > 267 && x < 533 && y > 0 && y < 200) {
      area = 'middleDefensive';
    } else if (x > 534 && x < 800 && y > 0 && y < 200) {
      area = 'rightDefensive';
    } else if (x > 0 && x < 266 && y > 200 && y < 400) {
      area = 'leftAttacking'; // Left Half Attacking Section
    } else if (x > 267 && x < 533 && y > 200 && y < 400) {
      area = 'middleAttacking';
    } else if (x > 534 && x < 800 && y > 200 && y < 400) {
      area = 'rightAttacking';
    }

    if (area) {
      onAreaSelect(area);
    }
  };

  return (
    <svg
      width="800"
      height="400"
      viewBox="0 0 800 400" // Added for responsive scaling
      onClick={handleClick} // Handle the click event
      className="pitch-svg"
    >
      {/* Defining the sections of the rugby pitch as clickable areas */}
      <rect className="pitch-area" width="33.33%" height="50%" />
      <rect className="pitch-area" x="33.33%" width="33.33%" height="50%" />
      <rect className="pitch-area" x="66.66%" width="33.33%" height="50%" />
      <rect className="pitch-area" y="50%" width="33.33%" height="50%" />
      <rect className="pitch-area" x="33.33%" y="50%" width="33.33%" height="50%" />
      <rect className="pitch-area" x="66.66%" y="50%" width="33.33%" height="50%" />
    </svg>
  );
}

export default PitchSelection;