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
    test("returns an error if a non-number value is passed in", () => {
        expect(humanCatDogYears(true)).toBe("Non-number value entered. Please enter a number.");
        expect(humanCatDogYears([1, 2, 3])).toBe("Non-number value entered. Please enter a number.");
        expect(humanCatDogYears("Coffee")).toBe("Non-number value entered. Please enter a number.");
    });
    test("returns an error if NaN is passed in", () => {
        expect(humanCatDogYears(NaN)).toBe("Non-number value entered. Please enter a number.");
    });
    test("returns an error if a negative number is passed in", () => {
        expect(humanCatDogYears(-1)).toBe("Please enter a positive number.");
        expect(humanCatDogYears(-0.1)).toBe("Please enter a positive number.");
        expect(humanCatDogYears(-120)).toBe("Please enter a positive number.");
    });
});
