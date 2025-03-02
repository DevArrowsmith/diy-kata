const { getEmployerRole } = require("../src");
const { employees } = require("../data/kata7.getEmployerRoleData");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Satti', employees)).toBe("Developer");
    expect(getEmployerRole('Jenny', employees)).toBe("Sales Associate");
    expect(getEmployerRole('Javid', employees)).toBe("Human Recommended Reading Assistant");
  });
});
