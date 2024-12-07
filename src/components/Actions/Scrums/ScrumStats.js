import React, { useState, useEffect } from 'react';

function ScrumStats({ outcome }) {
  const [scrumsWon, setScrumsWon] = useState(0);
  const [scrumsLost, setScrumsLost] = useState(0);

  useEffect(() => {
    if (outcome === 'Won') {
      setScrumsWon((prevScrumsWon) => prevScrumsWon + 1);
    } else if (outcome === 'Lost') {
      setScrumsLost((prevScrumsLost) => prevScrumsLost + 1);
    }
  }, [outcome]);


  return (
    <div className="scrum-stats-container">
      <div className="scrum-stats-item">
        <h2>Scrum Stats</h2>
        <p>Scrums Won: {scrumsWon}</p>
        <p>Scrums Lost: {scrumsLost}</p>
      </div>
    </div>
  );
}

export default ScrumStats;