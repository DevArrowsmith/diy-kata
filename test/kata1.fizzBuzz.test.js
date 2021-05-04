const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toMatch("Fizz");
    expect(fizzBuzz(9)).toMatch("Fizz");
    expect(fizzBuzz(22146)).toMatch("Fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {});

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {});

  test("returns the number when it isn't a multiple of 3 or 5", () => {});
});
