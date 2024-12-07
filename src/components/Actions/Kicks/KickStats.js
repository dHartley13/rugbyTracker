import React, { useState, useEffect } from 'react';

function KickStats({ outcome, resetStates }) {
  const [successfulKicks, setSuccessfulKicks] = useState(0);
  const [missedKicks, setMissedKicks] = useState(0);

  // Update the stats based on the outcome
  useEffect(() => {
    if (outcome === 'successful') {
      setSuccessfulKicks(prevSuccessfulKicks => prevSuccessfulKicks + 1);
    } else if (outcome === 'unsuccessful') {
      setMissedKicks(prevMissedKicks => prevMissedKicks + 1);
    }

  }, [outcome]);

   // After updating the stats, reset the parent state
   useEffect(() => {
    if (outcome) {
      resetStates(); 
    }
  }, [outcome, resetStates]);
  
  return (
    <div className="kick-stats-container">
      <div className="kick-stats-item">
        <h2>Kick Stats</h2>
        <p>Successful Kicks: {successfulKicks}</p>
        <p>Missed Kicks: {missedKicks}</p>
      </div>
    </div>
  );
}

export default KickStats;