const numberToReversedDigits = number => {
    if (typeof(number) === "number" && !isNaN(number)) {
        return number.toString().split("").reverse().map(numeral => Number(numeral));
    } else return "Non-number value entered. Please enter a number."
};
    
module.exports = numberToReversedDigits;
