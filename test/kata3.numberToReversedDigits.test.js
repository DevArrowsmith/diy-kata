const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(3692)).toStrictEqual([2, 9, 6, 3]);
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
  });
});
