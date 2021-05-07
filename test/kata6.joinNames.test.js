const { joinNames } = require("../src");
const { simpsons, willows, witches } = require("../data/kata6.joinNamesData");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(simpsons)).toBe("Bart, Lisa & Maggie.");
    expect(joinNames(willows)).toBe("Mole, Rat, Toad & Badger.");
    expect(joinNames(witches)).toBe("Weatherwax, Ogg, Garlick, Nitt, Tick, Treason, Level & Aching.");
  });
});
