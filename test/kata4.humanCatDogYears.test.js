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
    test("the second value in the array is the first value in cat years", () => {
        expect(humanCatDogYears(0)[1]).toBe(0);
        expect(humanCatDogYears(1)[1]).toBe(15);
        expect(humanCatDogYears(2)[1]).toBe(24);
        expect(humanCatDogYears(3)[1]).toBe(28);
        expect(humanCatDogYears(8)[1]).toBe(48);
    });
    test("the third value in the array is the first value in dog years", () => {
        expect(humanCatDogYears(0)[2]).toBe(0);
        expect(humanCatDogYears(1)[2]).toBe(15);
        expect(humanCatDogYears(2)[2]).toBe(24);
        expect(humanCatDogYears(3)[2]).toBe(29);
        expect(humanCatDogYears(8)[2]).toBe(54);
    });
});
