// Write your solution in this file!
const employee = {
    name: "Kula",
    streetAddress: "63 Abrams Ct",
};

function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    return {
        ...employee,
        [streetAddress]: "11 Broadway",
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return {
        newEmployee,
    }
    }

    function destructivelyDeleteFromEmployeeByKey(employee, name) {
        delete employee.name;
        return employee;
    }