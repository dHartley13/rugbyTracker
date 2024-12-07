import React, { useState } from 'react';
import './OutcomeMenu.css';

const OutcomeMenu = ({ position, action, onOutcomeSelect }) => {
    const [selectedOutcome, setSelectedOutcome]=useState(null);

    const handleOutcomeSelect = (outcome) => {
        setSelectedOutcome(outcome);

        onOutcomeSelect(action, outcome);
    }

    const getOutcomesForAction = (action) => {
        switch (action) {
            case 'Lineout throw':
                return ['Won', 'Lost'];
            case 'Scrum':
                return ['Won', 'Lost'];
            case 'Kick':
                return ['Successful', 'Missed']
            default:
                return [];    

        }
    };

    const outcomes = getOutcomesForAction(action)

    return (
        <div 
            className="radial-menu"
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
            }}
        >
        {outcomes.map((outcome) => (
            <button key={outcome} onClick={() => handleOutcomeSelect(outcome)}>
              {outcome}
            </button>
          ))}

        </div>
    );
};

export default OutcomeMenu; 