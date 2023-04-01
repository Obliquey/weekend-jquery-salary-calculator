$(document).ready(onReady);

// create employees array of employee objects
let employees = [];
let totalSalaries = 0;

function onReady() {
    // create input submission function to retrieve and store user data
    $('#submitButton').on('click', submitInfo); 

    // create function to push submitted data to table
    $('#submitButton').on('click', pushInfo);

    // create function to listen for deleteButton clicks, remove targeted employee
    $('#tableBody').on('click', '.deleteButton', removeEmployee);

    // create function that uses employee info to calculate monthly costs and pushes this to the DOM
    $('#submitButton').on('click', calculateCost);

    // create function that removes employee salary from totalCost.


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
    salaryInput = Number(salaryInput.replace(/,/g, ''));

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

    $('#tableBody').append(
        `<tr>
            <td>${employees[employees.length-1].firstName}</td>
            <td>${employees[employees.length-1].lastName}</td>
            <td>${employees[employees.length-1].id}</td>
            <td>${employees[employees.length-1].title}</td>
            <td>$${formattedSalary}</td>
            <td>
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
    $(this).parent().parent().remove();

} //end removeEmployee

function calculateCost() {
    // Add most recent employee info to running salary total
    totalSalaries += employees[employees.length - 1].salary;

    if (totalSalaries > 20000) {
        $('#totalCost').css('background-color', 'red');
    }

    // convert totalSalaries to formatted string for pushing to DOM
    let postedSalaryTotal = totalSalaries.toLocaleString("en-US");

    $('#specificTotal').text(`$${postedSalaryTotal}`);
} //end calculateCost
// function printInfo() {
//     console.log(employees);
// }

