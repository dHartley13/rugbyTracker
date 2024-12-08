

const selectStatCounter = (selectedAction, selectedOutcome, KickStats, ScrumStats, LineoutStats) => {

    switch (selectedAction) {
        case 'Kick':
            return <KickStats outcome={selectedOutcome} />;
        case 'Scrum':
            return <ScrumStats outome={selectedOutcome} />;
        case 'Lineout':
            return <LineoutStats outcome={selectedOutcome}/>;
        default:
            console.error('unkown action selected');
            return null;
};
}

export default selectStatCounter
