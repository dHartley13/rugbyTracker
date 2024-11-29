import React from 'react';
import './ActionMenu.css'; // Import the CSS for styling the radial menu

const ActionMenu = ({ position, onActionSelect }) => {
  return (
    <div
      className="radial-menu"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <button onClick={() => onActionSelect('scrum')}>Scrum</button>
      <button onClick={() => onActionSelect('lineout')}>Lineout</button>
      <button onClick={() => onActionSelect('kick')}>Kick</button>
    </div>
  );
};

export default ActionMenu;