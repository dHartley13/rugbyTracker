import React, { useState } from 'react';

function LineoutStats() {
  // State to track lineouts won and lost
  const [lineoutsWon, setLineoutsWon] = useState(0);
  const [lineoutsLost, setLineoutsLost] = useState(0);

  // Event handlers to update state
  const handleLineoutWin = () => setLineoutsWon(lineoutsWon + 1);
  const handleLineoutLoss = () => setLineoutsLost(lineoutsLost + 1);

  return (
    <div>
      <h2>Lineout Stats</h2>
      <p>Lineouts Won: {lineoutsWon}</p>
      <p>Lineouts Lost: {lineoutsLost}</p>
      <button onClick={handleLineoutWin}>Lineout Won</button>
      <button onClick={handleLineoutLoss}>Lineout Lost</button>
    </div>
  );
}

export default LineoutStats;
