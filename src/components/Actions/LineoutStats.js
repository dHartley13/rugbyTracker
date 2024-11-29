import React, { useState, useEffect } from 'react';

function LineoutStats({ outcome, resetStates }) {
  const [wonLineouts, setWonLineouts] = useState(0);
  const [lostLineouts, setLostLineouts] = useState(0);

  // Update the stats based on the outcome
  useEffect(() => {
    if (outcome === 'successful') {
      setWonLineouts(prevWonLineouts => prevWonLineouts + 1);
    } else if (outcome === 'unsuccessful') {
      setLostLineouts(prevLostLineouts => prevLostLineouts + 1);
    }

  }, [outcome]);

   // After updating the stats, reset the parent state
   useEffect(() => {
    if (outcome) {
      resetStates(); 
    }
  }, [outcome, resetStates]);
  

  return (
    <div>
    <h2>Scrum Stats</h2>
      <p>Lineouts Won: {wonLineouts}</p>
      <p>Lineouts Lost: {lostLineouts}</p>
    </div>
  );
}

export default LineoutStats;