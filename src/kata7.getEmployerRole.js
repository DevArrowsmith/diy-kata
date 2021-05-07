const getEmployerRole = (employeeName, employees) => {
    return employees.find(employee => employee.name === employeeName).role;
};

module.exports = getEmployerRole;