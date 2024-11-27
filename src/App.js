import React from 'react';
import ScrumStats from './components/ScrumStats';
import KickStats from './components/KickStats';
import LineoutStats from './components/LineoutStats';
import RugbyPitch from './components/RugbyPitch';
import rugbyPitch from './assets/Rugby_Pitch.svg';  // Import the SVG file

function App() {
  return (
    <div className="App">
      <h1>Rugby Performance Tracker</h1>
      <div className="pitch-container">
        <img src={rugbyPitch} alt="Rugby Pitch" /> {/* Render the pitch image */}
      </div>
      <div className="stats-container">
        <ScrumStats />
        <KickStats />
        <LineoutStats />
        <RugbyPitch />
      </div>
    </div>
  );
}

export default App;