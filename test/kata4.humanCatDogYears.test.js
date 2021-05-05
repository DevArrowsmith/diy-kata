const { humanCatDogYears } = require("../src");

describe ("humanCatDogYears", () => {
    test("returns an array", () => {
        expect(Array.isArray(humanCatDogYears(1))).toBeTruthy();
    });
    test("returns an array containing 3 elements", () => {
        expect(humanCatDogYears(1).length).toEqual(3);
    });
});
