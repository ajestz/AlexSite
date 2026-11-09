document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        if (!validateData()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

// Helper function to show validation status
function showValidationStatus(inputElement, messageElement, isValid, message) {
    if (isValid) {
        inputElement.classList.remove("is-invalid");
        inputElement.classList.add("is-valid");
        messageElement.textContent = '';  // Clear message for valid fields
    } else {
        inputElement.classList.remove("is-valid");
        inputElement.classList.add("is-invalid");
        messageElement.textContent = message;  // Show error message
    }
}

// Validate each field
function validateData() {
    let isValid = true;

    // Validate First Name (alphabet characters, minimum 2 chars, no NULL)
    const firstName = document.getElementById('firstName');
    const firstNameMsg = document.getElementById('firstNameMsg');
    const firstNameValue = firstName.value.trim();
    const namePattern = /^[A-Za-z'-]+$/;
    if (firstNameValue === '') {
        showValidationStatus(firstName, firstNameMsg, false, 'First name is required.');
        isValid = false;
    } else if (firstNameValue.length < 2 || !namePattern.test(firstNameValue)) {
        showValidationStatus(firstName, firstNameMsg, false, 'First name must be at least 2 characters long and contain only letters, hyphens, or apostrophes.');
        isValid = false;
    } else {
        showValidationStatus(firstName, firstNameMsg, true, '');
    }

    // Validate Last Name (same rules as First Name)
    const lastName = document.getElementById('lastName');
    const lastNameMsg = document.getElementById('lastNameMsg');
    const lastNameValue = lastName.value.trim();
    if (lastNameValue === '') {
        showValidationStatus(lastName, lastNameMsg, false, 'Last name is required.');
        isValid = false;
    } else if (lastNameValue.length < 2 || !namePattern.test(lastNameValue)) {
        showValidationStatus(lastName, lastNameMsg, false, 'Last name must be at least 2 characters long and contain only letters, hyphens, or apostrophes.');
        isValid = false;
    } else {
        showValidationStatus(lastName, lastNameMsg, true, '');
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailMsg = document.getElementById('emailMsg');
    const emailValue = email.value.trim();
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(emailValue)) {
        showValidationStatus(email, emailMsg, false, 'Please enter a valid email address.');
        isValid = false;
    } else {
        showValidationStatus(email, emailMsg, true, '');
    }

    // Validate Phone Number (10 digits, no hyphens, no parentheses)
    const phone = document.getElementById('phone');
    const phoneMsg = document.getElementById('phoneMsg');
    const phoneValue = phone.value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (phoneValue === '') {
        showValidationStatus(phone, phoneMsg, false, 'Phone number is required.');
        isValid = false;
    } else if (!phonePattern.test(phoneValue)) {
        showValidationStatus(phone, phoneMsg, false, 'Phone number must be exactly 10 digits and contain no hyphens or parentheses.');
        isValid = false;
    } else {
        showValidationStatus(phone, phoneMsg, true, '');
    }

    // Validate Username (minimum 6 characters)
    const username = document.getElementById('username');
    const usernameMsg = document.getElementById('usernameMsg');
    const usernameValue = username.value.trim();
    if (usernameValue.length < 6) {
        showValidationStatus(username, usernameMsg, false, 'Username must be at least 6 characters long.');
        isValid = false;
    } else {
        showValidationStatus(username, usernameMsg, true, '');
    }

    // Validate Password (minimum 6 characters)
    const password = document.getElementById('password');
    const passwordMsg = document.getElementById('passwordMsg');
    const passwordValue = password.value.trim();
    if (passwordValue.length < 6) {
        showValidationStatus(password, passwordMsg, false, 'Password must be at least 6 characters long.');
        isValid = false;
    } else {
        showValidationStatus(password, passwordMsg, true, '');
    }

    // Validate Comments (cannot be NULL)
    const comments = document.getElementById('comments');
    const commentsMsg = document.getElementById('commentsMsg');
    const commentsValue = comments.value.trim();
    if (commentsValue === '') {
        showValidationStatus(comments, commentsMsg, false, 'Comments are required.');
        isValid = false;
    } else {
        showValidationStatus(comments, commentsMsg, true, '');
    }

    return isValid; // Return true if all validations pass
}