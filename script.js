$(document).ready(onReady);

// create employees array of employee objects
let employees = [];
let totalSalaries = 0;

function onReady() {
    // create input submission function to retrieve and store user data
    $('#submitButton').on('click', submitInfo); 

    // create function to push submitted data to table
    $('#submitButton').on('click', pushInfo);

    // create function that uses employee info to calculate monthly costs and pushes this to the DOM
    $('#submitButton').on('click', addUpCost);

    // create function to listen for deleteButton clicks, remove targeted employee
    $('#tableBody').on('click', '.deleteButton', removeEmployee);


} //end onReady

// Do I need to worry about non-number + non-string input, and rejecting it? ---STRETCH GOAL?---
function submitInfo(event) {
    event.preventDefault();

    // retrieve employee data, store as variables
    let firstNameInput = $('#firstName').val();
    let lastNameInput = $('#lastName').val();
    let idInput = Number($('#id').val());
    let titleInput = $('#title').val();
    let salaryInput = $('#salary').val();

    // In case salary was submitted with commas 
    salaryInput = salaryInput.replace(/,/g, '');
    if (salaryInput.charAt(0) == '$') {
        salaryInput = Number(salaryInput.slice(1, salaryInput.length));
    }

    // push data to employees array as full object
    employees.push ({
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        salary: salaryInput,
    });
} //end submitInfo

function pushInfo() {
    // push latest employeeObject to the table using object properties
    let num = employees[employees.length - 1].salary;
    let formattedSalary = num.toLocaleString("en-US");

    // just realizing that I could probably have been more accurate to stick this entire thing in a for loop.Then, each time an employee is added or removed, the table would automatically update as it re-runs the for loop, adding the employees currently in the array to the table.
    $('#tableBody').append(
        `<tr>
            <td id="tableFirstName">${employees[employees.length-1].firstName}</td>
            <td id="tableLastName">${employees[employees.length-1].lastName}</td>
            <td id="tableID">${employees[employees.length-1].id}</td>
            <td id="tableTitle">${employees[employees.length-1].title}</td>
            <td id="tableSalary">$${formattedSalary}</td>
            <td id="deleteButtons">
                <button class="deleteButton">Remove</button>
            </td>
        </tr>`
    );

    // clear form submission fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');

} //end pushInfo

function removeEmployee() {

    //  Retrieve removed employee info, to use in subtracting from employees array and total monthly cost
    let removedEmployeeName = $(this).parent().siblings("#tableFirstName").text();
    let removedEmployeeID = $(this).parent().siblings("#tableID").text();

    // format salary for subtraction from total
    let removedEmployeeSalary = $(this).parent().siblings("#tableSalary").text();
    removedEmployeeSalary = removedEmployeeSalary.replace('$', '');
    removedEmployeeSalary = Number(removedEmployeeSalary.replace(/,/g, ''));

    // calculate and post updated total monthly cost
    totalSalaries -= removedEmployeeSalary;

    if (totalSalaries < 20000) {
        $('#totalCost').css('background-color', 'white')
    };
    let postedSalaryTotal = totalSalaries.toLocaleString('en-US');

    $('#specificTotal').text(`$${postedSalaryTotal}`);

    // Remove deleted employee from global array
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].firstName == removedEmployeeName && employees[i].id == removedEmployeeID) {
            employees = employees.splice([i], 1);
        }
    };

    $(this).parent().parent().remove();
} //end removeEmployee

function addUpCost() {
    // Add most recent employee info to running salary total
    totalSalaries += employees[employees.length - 1].salary;

    // another idea would be to use a for loop on the employees array, so that each time an employee is added or removed it runs, totalling up the employees.salaries and pushing the total to the DOM
    if (totalSalaries > 20000) {
        $('#totalCost').css('background-color', 'red');
    }

    // convert totalSalaries to formatted string for pushing to DOM
    let postedSalaryTotal = totalSalaries.toLocaleString("en-US");

    $('#specificTotal').text(`$${postedSalaryTotal}`);
} //end calculateCost
