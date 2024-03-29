// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
//The console below will log the add employee button
console.log(addEmployeesBtn)
let addEmployee = true;
//The empty array below will collect all of the employees once we "push". ML
const employees = []

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  //Using a while loop since there isn't a fixed number of iterations. ML
  while (addEmployee) {
    const firstName = prompt("Enter First Name:");
    console.log("First Name", firstName);
    const lastName = prompt("Enter Last Name:");
    console.log("Last Name", lastName);
    const salary = parseFloat(prompt("Enter Salary"));
    console.log("Salary", salary);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

    employees.push(employee);
    const continueInput= prompt("Would you like to add an employee? (Yes/No)");
    console.log("(Yes/No)", continueInput)
    addEmployee = continueInput === 'yes';
  }
  return employees;
}

// TODO: Calculate and display the average salary
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  //Create a "let" to zero out the salary. ML
  //Need a "for" loop that goes through each employee in the array and references back to the total salary. ML
  //Once the loop goes through then I'll need to get the average and then reference back to the HTML. ML
  //Set the display to text so that it shows the average. ML
  //Console.log it to show the average. ML
  let totalSalary = 0;
  for (let index=0;index < employeesArray.length; index++){
    totalSalary += employeesArray[index].salary;
  }
  const averageSalary = totalSalary/employeesArray.length;
  const displayAverageSalary = document.querySelector('#employee-table');
  displayAverageSalary.textContent = `Avarage Salary: ${averageSalary.toLocaleString}`;
  console.log (`Avarage Salary: ${averageSalary.toLocaleString()}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //Need to create an index between 0 and the original array to be able to make a selection. ML
  //Create an random index to actually pull the employee. ML
  //Reference back to the HTML element. ML
  //Add in what you want to display (first/last name and salary).ML
  //Need a console.log to show a random employee selected. ML
const randomIndex= Math.floor(Math.random()*employeesArray.length);
const randomEmployee=employeesArray[randomIndex];
const randomEmployeeElement= document.querySelector('#employee-table');
randomEmployeeElement.textContent= `Random Employee: ${randomEmployee.firstName}, ${randomEmployee.lastName}, ${randomEmployee.salary.toLocaleString()}`;
console.log (`Random Employee: ${randomEmployee.firstName}, ${randomEmployee.lastName}, ${randomEmployee.salary.toLocaleString()}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
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
