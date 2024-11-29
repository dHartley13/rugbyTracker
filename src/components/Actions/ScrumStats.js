import React, { useState, useEffect } from 'react';

function ScrumStats({ outcome, resetStates }) {
  const [scrumsWon, setScrumsWon] = useState(0);
  const [scrumsLost, setScrumsLost] = useState(0);

  useEffect(() => {
    if (outcome === 'successful') {
      setScrumsWon((prevScrumsWon) => prevScrumsWon + 1);
    } else if (outcome === 'unsuccessful') {
      setScrumsLost((prevScrumsLost) => prevScrumsLost + 1);
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
      <p>Scrums Won: {scrumsWon}</p>
      <p>Scrums Lost: {scrumsLost}</p>
    </div>
  );
}

export default ScrumStats;