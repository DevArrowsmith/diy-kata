const humanCatDogYears = number => {

    if (typeof(number) !== "number" || isNaN(number)) {
        return "Non-number value entered. Please enter a number."
    };

    if (number < 0) {
        return "Please enter a positive number."
    };

    const ages = [number];
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 0; i < Math.floor(number) + 1; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        };
        if (i === 2) {
            catYears += 9;
            dogYears += 9;
        };
        if (i > 2) {
            catYears += 4;
            dogYears += 5;
        };
    }

    ages.push(catYears, dogYears);
    return ages;
};

module.exports = humanCatDogYears;
