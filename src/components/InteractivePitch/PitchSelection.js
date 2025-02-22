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
    if (x > 0 && x < 266 && y > 0 && y < 536) {
       area = 'leftDefensive'; // Top-left quarter
    }  else if (x > 267 && x < 533 && y > 0 && y < 536) {
       area = 'middleDefensive'; // Top-middle quarter
    } else if (x > 534 && x < 800 && y > 0 && y < 536) {
      area = 'rightDefensive'; // Top-right quarter
    } else if (x > 0 && x < 266 && y >= 537 && y < 1073) {
      area = 'leftAttacking'; // Bottom-left quarter
    } else if (x > 267 && x < 533 && y >= 537 && y < 1073) {
      area = 'middleAttacking'; // Bottom-middle quarter
    } else if (x > 534 && x < 800 && y >= 537 && y < 1073) {
      area = 'rightAttacking'; // Bottom-right quarter
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