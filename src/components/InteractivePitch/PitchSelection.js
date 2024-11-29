import React from 'react';
import './Pitch.css';
import PitchSVG from './PitchSVG';

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
      const position = {x, y};
      onAreaSelect(area, position);
    }
  };

  return (
    <div className='pitchWrapper'>
      <PitchSVG onClick={handleClick}/>
    </div>
  );
}

export default PitchSelection;