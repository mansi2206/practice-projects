const form = document.getElementById("signupForm");

const emailInp = document.getElementById("email");
const emailError = document.getElementById("emailError");

const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const formStatus = document.getElementById("formStatus");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, errorE1, message) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorE1.textContent = message;
}

function clearError(input, errorE1) {
    input.classList.add('valid');
    input.classList.remove('invalid');
    errorE1.textContent = " ";
}

function validateEmail() {
    const value = emailInp.value.trim();

    if (value === " ") {
        showError(emailInp, emailError, "Email is requried.");
        return false;
    }

    if (!emailPattern.test(value)) {
        showError(emailInp, emailError, "Please enter a valid email address.");
        return false;
    }
    clearError(emailInp, emailError);
}

function validatePassword() {
    const value = passwordInput.value;

    if (value === "") {
        showError(passwordInput, passwordError, "Password is required.");
        return false;
    }
    if (value.length < 8) {
        showError(passwordInput, passwordError, "Password must be atleas 8 characters.");
        return false;
    }
    if (!/[A-Z]/.test(value)) {
        showError(passwordInput, passwordError, "Password must include an uppercase.");
        return false;

    }
    if (!/[a-z]/.test(value)) {
        showError(passwordInput, passwordError, "Password must include an lowercase.");
        return false;

    } if (!/[0-9]/.test(value)) {
        showError(passwordInput, passwordError, "Password must include a number.");
        return false;
    }
    clearError(passwordInput, passwordError);
    return true;
}

emailInp.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

form.addEventListener("submit", function (ent) {
    ent.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        formStatus.textContent = "Account created successfully."
        formStatus.classList.add("success");
        formStatus.classList.remove("error");

        form.reset();

        emailInp.classList.remove("valid", "invalid");
        passwordInput.classList.remove("valid", "invalid");
    } else {
        formStatus.textContent = "Please fix the errors above."
        formStatus.classList.add("error");
        formStatus.classList.remove("success");
    }
});