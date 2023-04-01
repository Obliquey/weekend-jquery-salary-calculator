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
    // get user input to push again, probably a better way to do this rather than taking data twice
    // --------!FIGURE OUT BETTER WAY!---------
    let firstNameInput = $('#firstName').val();
    let lastNameInput = $('#lastName').val();
    let idInput = Number($('#id').val());
    let titleInput = $('#title').val();
    let salaryInput = Number($('#salary').val());

    // push information to the table
    $('#tableBody').append(
        `<tr>
            <td>${firstNameInput}</td>
            <td>${lastNameInput}</td>
            <td>${idInput}</td>
            <td>${titleInput}</td>
            <td>${salaryInput}</td>
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

