// function for cast functionality from '00:05' to miliseconds;
const castDurationToMiliseconds = (duration) => {
    const default_value = 0;
    if (duration) {
        const up = duration.split(':');
        if (up.length === 2) {
    
            const minutes = up[0], seconds = up[1];
    
            return {
                mins: minutes * 60000,
                secs: seconds * 1000,
                decoded: (minutes * 60000) + (seconds * 1000)
            }
    
    
        } else default_value;
    
    }

    return default_value;
};

module.exports = {
    castDurationToMiliseconds
}