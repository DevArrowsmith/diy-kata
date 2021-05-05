const humanCatDogYears = number => {
    const ages = [number];
    let catYears = 0;
    
    for (let i = 0; i < number + 1; i++) {
        if (i === 1) {
            catYears += 15;
        };
        if (i === 2) {
            catYears += 9;
        };
        if (i > 2) {
            catYears += 4;
        };
    }

    ages.push(catYears, 1);
    return ages;
};

module.exports = humanCatDogYears;
