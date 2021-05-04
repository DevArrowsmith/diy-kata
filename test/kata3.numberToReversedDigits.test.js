const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(3692)).toStrictEqual([2, 9, 6, 3]);
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
  });
  test("return an error if a non-number value is passed in", () => {
    expect(numberToReversedDigits(true)).toBe("Non-number value entered. Please enter a number.");
    expect(numberToReversedDigits([1, 2, 3])).toBe("Non-number value entered. Please enter a number.");
    expect(numberToReversedDigits("Coffee")).toBe("Non-number value entered. Please enter a number.");
  });
});
