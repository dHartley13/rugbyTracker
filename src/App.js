import React from 'react';
import { ReactSVG } from 'react-svg';
import ScrumStats from './components/ScrumStats';
import KickStats from './components/KickStats';
import LineoutStats from './components/LineoutStats';
import RugbyPitch  from './components/RugbyPitch';
import Rugby_Pitch from './components/Rugby_Pitch';

function App() {
  return (
    <div className="App">
      <h1>Rugby Performance Tracker</h1>
      <div className="pitch-container">
        <Rugby_Pitch width="100" height="100"/>
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