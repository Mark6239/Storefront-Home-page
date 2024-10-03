document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateUsername() {
    const username = document.getElementById('username');
    const errorText = document.getElementById('usernameError');
    if (username.value.trim() === "") {
        errorText.textContent = "Username is required.";
        username.classList.add('is-invalid');
    } else {
        errorText.textContent = "";
        username.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const errorText = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        errorText.textContent = "Please enter a valid email (e.g. joe@test.com).";
        email.classList.add('is-invalid');
    } else {
        errorText.textContent = "";
        email.classList.remove('is-invalid');
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const errorText = document.getElementById('passwordError');
    if (password.value !== confirmPassword.value) {
        errorText.textContent = "Passwords do not match.";
        confirmPassword.classList.add('is-invalid');
    } else {
        errorText.textContent = "";
        confirmPassword.classList.remove('is-invalid');
    }
}

function validateForm() {
    validateUsername();
    validateEmail();
    validatePassword();
}
