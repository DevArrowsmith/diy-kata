const { TestScheduler } = require("jest");
const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns a string", () => {
    expect(typeof(booleanToWord(true))).toBe("string");
    expect(typeof(booleanToWord(false))).toBe("string");
  })
});
