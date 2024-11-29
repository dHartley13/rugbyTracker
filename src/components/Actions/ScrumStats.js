import react, { useState } from 'react';

function ScrumStats() {

const [scrumsWon, setScrumsWon] = useState(0);
const [scrumsLost, setScrumLost] = useState(0);

const handleScrumWin = () => setScrumsWon(scrumsWon + 1);
const handleScrumLoss = () => setScrumLost(scrumsLost + 1);

// JSX to render the UI
  return (
    <div>
      <h2>Scrum Stats</h2>
      <p>Scrums Won: {scrumsWon}</p>
      <p>Scrums Lost: {scrumsLost}</p>
      <button onClick={handleScrumWin}>Scrum Won</button>
      <button onClick={handleScrumLoss}>Scrum Lost</button>
    </div>
  );
}

export default ScrumStats;