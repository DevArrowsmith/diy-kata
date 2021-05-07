const reachDestination = (distance, speed) => {
    const arrivalTime = Math.round(2 * distance / speed)/2;
    return `I should be there in ${arrivalTime} hours.`
};

module.exports = reachDestination;
