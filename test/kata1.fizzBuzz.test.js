const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toMatch("Fizz");
    expect(fizzBuzz(9)).toMatch("Fizz");
    expect(fizzBuzz(22146)).toMatch("Fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toMatch("Buzz");
    expect(fizzBuzz(110)).toMatch("Buzz");
    expect(fizzBuzz(410)).toMatch("Buzz");
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toMatch("FizzBuzz");
    expect(fizzBuzz(105)).toMatch("FizzBuzz");
    expect(fizzBuzz(690)).toMatch("FizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {});
});
