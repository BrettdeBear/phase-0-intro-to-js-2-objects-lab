// Write your solution in this file!
const employee = {
    name: "Brett",
    streetAddress: "addressHere",
};
employee.name = "Sam";
function updateEmployeeWithKeyAndValue(employee, streetAddress, addressHere) {
    return {
        ...employee,
        [streetAddress]: "11 Broadway",
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, addressHere) {
    employee[streetAddress] = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
};