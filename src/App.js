import React, { useState } from 'react';
import PitchSelection from './components/InteractivePitch/PitchSelection.js'; 
import './App.css';

function App() {
  const [outcome, setOutcome] = useState(null);

  const resetStates = () => {
    setOutcome(null); // Reset outcome after updating stats
  };

  return (
    <div className="App">
      <PitchSelection/>
    </div>
  );
}

export default App;