import React, { useState } from 'react';

//TODO: figure out what to do with kicks for territory 

function KickStats() {
  // State for tracking kicks made for each type
  const [kicksMade, setKicksMade] = useState(0);
  const [penaltyKicksMade, setPenaltyKicksMade] = useState(0);
  const [conversionKicksMade, setConversionKicksMade] = useState(0);

  // State to track the selected kick type
  const [kickType, setKickType] = useState('penalty'); // default kick type is 'penalty'

  // Event handlers for updating the state
  const handleKickMade = () => {
    if (kickType === 'penalty') {
      setPenaltyKicksMade(penaltyKicksMade + 1);
    } else if (kickType === 'conversion') {
      setConversionKicksMade(conversionKicksMade + 1);
    }
    setKicksMade(kicksMade + 1);
  };

  return (
    <div>
      <h2>Kick Stats</h2>
      
      {/* Kick Type Selector */}
      <div>
        <label>
          <input
            type="radio"
            value="penalty"
            checked={kickType === 'penalty'}
            onChange={() => setKickType('penalty')}
          />
          Penalty
        </label>
        <label>
          <input
            type="radio"
            value="conversion"
            checked={kickType === 'conversion'}
            onChange={() => setKickType('conversion')}
          />
          Conversion
        </label>
      </div>
      
      {/* Display Kick Stats */}
      <p>Total Kicks Made: {kicksMade}</p>
      <p>Penalty Kicks Made: {penaltyKicksMade}</p>
      <p>Conversion Kicks Made: {conversionKicksMade}</p>

      {/* Button to register a successful kick */}
      <button onClick={handleKickMade}>Kick Made</button>
    </div>
  );
}

export default KickStats;