$(document).ready(onReady);

function onReady() {
    $('#submitButton').on('click', submitInfo); // create input submission function to retrieve user data

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

    // clear form submission fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');

}
