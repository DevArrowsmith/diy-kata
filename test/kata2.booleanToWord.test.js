const { TestScheduler } = require("jest");
const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns a string", () => {
    expect(typeof(booleanToWord(true))).toBe("string");
    expect(typeof(booleanToWord(false))).toBe("string");
  });
  test(`returns the string "Yes" when passed the boolean true`, () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  test(`returns the string "No" when passed the boolean false`, () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
