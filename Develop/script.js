// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = [];

const collectEmployees = function () {
  let keepGoing = true;
  // TODO: Get user input to create and return an array of employee objects

  while (keepGoing) {
    const firstName = prompt("please enter the employee's first name");
    const lastName = prompt("please enter the employee's last name");
    let salary = prompt("please enter the employee's salary");


    // employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    }
    // push employee to employeesarray
    employeesArray.push(employee);
    keepGoing = confirm("would you like to add another employee");
    // ok = true, cancel = false
  }
  return employeesArray;
}
console.log(employeesArray);

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let avTotal = 0;
  const numberEmployees = employeesArray.length;

  for (const employee of employeesArray){
    avTotal += employee.salary;
  }
  console.log(avTotal);
  console.log(numberEmployees);
  
const avgSalary = avTotal / numberEmployees;
console.log(`Your employees have an average of ${avgSalary}`)
console.log(avgSalary);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
