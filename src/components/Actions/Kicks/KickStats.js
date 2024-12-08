import React, { useState, useEffect } from 'react';

function KickStats({ outcome }) {
  const [successfulKicks, setSuccessfulKicks] = useState(0);
  const [missedKicks, setMissedKicks] = useState(0);

  useEffect(() => {
    console.log('Outcome changed:', outcome);
    if (outcome === 'Won') {
      setSuccessfulKicks((prevsuccessfulKicks) => prevsuccessfulKicks + 1);
    } else if (outcome === 'Lost') {
      setMissedKicks((prevmissedKicks) => prevmissedKicks + 1);
    }
  }, [outcome]);


  return (
    <div className="kick-stats-container">
      <div className="kick-stats-item">
        <p>Successful Kicks: {successfulKicks}</p>
        <p>Missed Kicks: {missedKicks}</p>
      </div>
    </div>
  );
}

export default KickStats;