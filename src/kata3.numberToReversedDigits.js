const numberToReversedDigits = number => {
    return number.toString().split("").reverse().map(numeral => Number(numeral));
};
    
module.exports = numberToReversedDigits;
