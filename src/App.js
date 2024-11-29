import React from 'react';
import ScrumStats from './components/Actions/ScrumStats';
import KickStats from './components/Actions/KickStats';
import LineoutStats from './components/Actions/LineoutStats';
import RugbyPitch  from './components/Pitch/RugbyPitch';


function App() {
  return (
    <div className="App">
      <h1>Rugby Performance Tracker</h1>
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