const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(15, 10)).toBe("I should be there in 1.5 hours.");
    expect(reachDestination(271.22, 80)).toBe("I should be there in 3.5 hours.");
  });


  test("returns the string with singular 'hour' when arrival will be in one hour", () => {
    expect(reachDestination(80, 80)).toBe("I should be there in 1 hour.");
  });
});