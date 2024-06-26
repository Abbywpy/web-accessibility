/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var emailError = false;
    var passError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        emailError = true;
        hasError = true;
    } else {
        setInvalid(email);
        emailError = true;
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password);
        passError = true;
        hasError = true;
    } else {
        setValid(password);
    }

    if (emailError && passError) {
        document.getElementById('login-error').innerHTML = 'Please check the email and password';
    } else if (!passError) {
        document.getElementById('login-error').innerHTML = 'Please check the email';
    } else {
        document.getElementById('login-error').innerHTML = 'Please check the password';
    }

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
    } else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
        document.getElementById('login-error').innerHTML = 'Please check the email';
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;
    var nameError = false;
    var emailError = false;
    var passError = false;
    var progError = false;

    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        hasError = true;
        nameError = true;
    } else if (firstName.validity.valid) {
        setValid(firstName);
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        hasError = true;
        nameError = true;
    } else if (lastName.validity.valid) {
        setValid(lastName);
    }

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
        emailError = true;
    } else {
        setInvalid(email);
        hasError = true;
        emailError = true;
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        hasError = true;
        passError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        hasError = true;
        passError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        hasError = true;
        passError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        hasError = true;
        passError = true;
    } else {
        setValid(password);
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        hasError = true;
        progError = true;
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        hasError = true;
        progError = true;
    } else {
        setValid(programme);
    }

    var msg = '';
    if (nameError) {
        msg = msg + ' name';
    }
    if (emailError) {
        msg = msg + ' email';
    }
    if (passError) {
        msg = msg + ' password';
    }
    if (progError) {
        msg = msg + ' program';
    }

    if (hasError) {
        document.getElementById('register-error').classList.remove('d-none');
        document.getElementById('register-error').innerHTML = 'Please check the' + msg;
    } else {
        document.getElementById('register-error').classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);
