const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");


describe ("humanCatDogYears", () => {
    test("returns an array", () => {
        expect(Array.isArray(humanCatDogYears(1))).toBeTruthy();
    })
});
