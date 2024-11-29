import React from 'react';
import './OutcomeMenu.css';

const OutcomeMenu = ({ onOutcomeSelect }) => {
    return (
        <div 
            className="radial-menu"
            style={{
                top: '${position.y}px',
                left: '${position.x}px',
            }}
        >
            <button onClick={() => onOutcomeSelect('successful')}>Successful</button>
            <button onClick={() => onOutcomeSelect('unsuccessful')}>Unsuccessful</button>
        </div>
    );
};

export default OutcomeMenu; 