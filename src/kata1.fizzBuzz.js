const fizzBuzz = number => {
    if(!(number%3) && !(number%5)) {
        return "FizzBuzz";
    }
    if (!(number%3)) {
        return "Fizz";
    }
    if (!(number%5)) {
        return "Buzz";
    }
    return number;    
};

module.exports = fizzBuzz;