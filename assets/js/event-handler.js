function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');

    if (elUsername.value.length < 5) {
        elMsg.innerHTML = 'Username must be 5 characters or more';
        console.log("Username too short: " + elUsername.value.length + " characters entered.");
    } else {
        elMsg.innerHTML = '';
    }
}
function checkPassword() {
    var elPassMsg = document.getElementById('password-feedback');
    var elPassword = document.getElementById('password');

    if (elPassword.value.length < 8) {
        elPassMsg.innerHTML = 'Password must be at least 8 characters long';
        console.log("Password too short: " + elPassword.value.length + " characters entered.");
    } else {
        elPassMsg.innerHTML = '';
    }
}