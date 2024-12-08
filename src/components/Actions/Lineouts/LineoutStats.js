import React, { useState, useEffect } from 'react';

function LineoutStats({ outcome }) {
  const [wonLineouts, setWonLineouts] = useState(0);
  const [lostLineouts, setLostLineouts] = useState(0);

  // Update the stats based on the outcome
  useEffect(() => {
    if (outcome === 'Won') {
      setWonLineouts(prevWonLineouts => prevWonLineouts + 1);
    } else if (outcome === 'Lost') {
      setLostLineouts(prevLostLineouts => prevLostLineouts + 1);
    }

  }, [outcome]);


  return (
    <div className="lineout-stats-container">
      <div className="lineout-stats-item">
        <p>Lineouts Won: {wonLineouts}</p>
        <p>Lineouts Lost: {lostLineouts}</p>
      </div>
    </div>
  );
}

export default LineoutStats;