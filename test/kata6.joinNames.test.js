const { joinNames } = require("../src");
const { simpsons, willows, witches, castaways } = require("../data/kata6.joinNamesData");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(simpsons)).toBe("Bart, Lisa & Maggie.");
    expect(joinNames(willows)).toBe("Mole, Rat, Toad & Badger.");
    expect(joinNames(witches)).toBe("Weatherwax, Ogg, Garlick, Nitt, Tick, Treason, Level & Aching.");
  });
  test("returns a string consisting of a single name when the argument is an array of one name", () => {
    expect(joinNames(castaways)).toBe("Wilson.");
  })
});
