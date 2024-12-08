import KickStats from '../Kicks/KickStats.js';
import ScrumStats from '../Scrums/ScrumStats.js';
import LineoutStats from '../Lineouts/LineoutStats.js';


const selectStatCounter = (selectedAction, selectedOutcome) => {
    switch (selectedAction) {
      case 'Kick':
        if (selectedOutcome === 'Successful') {
          KickStats({ outcome: 'Successful' });
        } else if (selectedOutcome === 'Missed') {
          KickStats({ outcome: 'Missed' });
        }
        break;
      case 'Scrum':
        if (selectedOutcome === 'Won') {
          ScrumStats({ outcome: 'Won' });
        } else if (selectedOutcome === 'Lost') {
          ScrumStats({ outcome: 'Lost' });
        }
        break;
      case 'Lineout':
        if (selectedOutcome === 'Won') {
          LineoutStats({ outcome: 'Won' });
        } else if (selectedOutcome === 'Lost') {
          LineoutStats({ outcome: 'Lost' });
        }
        break;
      default:
        console.error('Unknown action selected');
    }
  };
  
  export default selectStatCounter;