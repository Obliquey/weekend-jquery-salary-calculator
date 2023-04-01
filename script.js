$(document).ready(onReady);

// create employees array of employee objects
let employees = [];

function onReady() {
    // create input submission function to retrieve and store user data
    $('#submitButton').on('click', submitInfo); 

    // create function to push submitted data to table
    $('#submitButton').on('click', pushInfo);
    // $('#submitButton').on('click', printInfo); //test funciton



}

// Do I need to worry about non-number + non-string input, and rejecting it? ---STRETCH GOAL?---
function submitInfo(event) {
    event.preventDefault();

    // retrieve employee data, store as variables
    let firstNameInput = $('#firstName').val();
    let lastNameInput = $('#lastName').val();
    let idInput = Number($('#id').val());
    let titleInput = $('#title').val();
    let salaryInput = Number($('#salary').val());
    
    // push data to employees array as full object
    employees.push ({
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        salary: salaryInput,
    })

}

function pushInfo() {
    // push latest employeeObject to the table using object properties
    $('#tableBody').append(
        `<tr>
            <td>${employees[employees.length-1].firstName}</td>
            <td>${employees[employees.length-1].lastName}</td>
            <td>${employees[employees.length-1].id}</td>
            <td>${employees[employees.length-1].title}</td>
            <td>${employees[employees.length-1].salary}</td>
            <td><button class="deleteButton">Remove</button></td>
        </tr>`
    );

    // clear form submission fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');

}


// function printInfo() {
//     console.log(employees);
// }

