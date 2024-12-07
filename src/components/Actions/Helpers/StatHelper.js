

const selectStatCounter = (action, outcome, KickStats, ScrumStats, LineoutStats) => {

    switch (action) {
        case 'Kick':
            KickStats({outcome});
            break;
        case 'Scrum':
            ScrumStats({outcome});
            break;
        case 'Lineout':
            LineoutStats({outcome})
            break;
        default:
            console.error('unkown action selected');
};
}

export default selectStatCounter
