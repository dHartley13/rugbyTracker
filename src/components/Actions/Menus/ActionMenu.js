import React from 'react';
import './ActionMenu.css'; 

const ActionMenu = ({ position, selectedArea, onActionSelect }) => {
  console.log('Selected Area:', selectedArea); 

  const getActionOptions = () => {
    switch(selectedArea) {
      case '22m_rightside_lefthalf_lineout':
        return ['lineout throw'];
      case '22m left side left half lineout':
        return ['lineout throw'];
      default:
        return ['Scrum', 'Kick'];
    }
  };

  const actionOptions = getActionOptions();

  return (
    <div
      className="radial-menu"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
    {actionOptions.map((action) => (
      <button key={action} onClick={() => onActionSelect(action)}>
        {action}
      </button>
    ))}
 
    </div>
  );
};

export default ActionMenu;