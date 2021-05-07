const { getEmployerRole } = require("../src");
const { employees } = require("../data/kata7.getEmployerRoleData");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Satti')).toBe("Developer");
    expect(getEmployerRole('Jenny')).toBe("Sales Associate");
    expect(getEmployerRole('Javid')).toBe("Human Recommended Reading Assistant");
  });
});
