import React from 'react';

function CountsDisplay({ sectionCounts, selectedArea, totalCounts }) {
  return (
    <div>
      {/* Display Local Counts for Selected Area */}
      {selectedArea && (
        <div>
          <h4>Local Counts for {selectedArea}:</h4>
          <p>Scrums: {sectionCounts[selectedArea].scrums}</p>
          <p>Lineouts: {sectionCounts[selectedArea].lineouts}</p>
          <p>Kicks: {sectionCounts[selectedArea].kicks}</p>
        </div>
      )}

      {/* Display Total Counts Across All Areas */}
      <div>
        <h3>Total Counts Across All Areas:</h3>
        <p>Scrums: {totalCounts.scrums}</p>
        <p>Lineouts: {totalCounts.lineouts}</p>
        <p>Kicks: {totalCounts.kicks}</p>
      </div>
    </div>
  );
}

export default CountsDisplay;