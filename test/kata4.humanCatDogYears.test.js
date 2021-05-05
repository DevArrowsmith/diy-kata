const { humanCatDogYears } = require("../src");

describe ("humanCatDogYears", () => {
    test("returns an array", () => {
        expect(Array.isArray(humanCatDogYears(1))).toBeTruthy();
    });
    test("returns an array containing 3 elements", () => {
        expect(humanCatDogYears(1).length).toBe(3);
    });
    test("all elements in the array are numbers", () => {
        expect(humanCatDogYears(1).map(e => typeof(e))).toStrictEqual(["number", "number", "number"]);
    });
    test("all elements in the array are not NaN", () => {
        expect(humanCatDogYears(1).map(e => Number.isNaN(e))).toStrictEqual([false, false, false]);
    });
});
