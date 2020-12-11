window.onload = function() {
    let submitButton = document.getElementById('submit');
    submitButton.onclick = submitClick;
};

function submitClick() {
    // Completes validation when sumbit button is clicked
    let firstValid = validateName('firstNameInput');
    let lastValid = validateName('lastNameInput');
    let emailValid = validateEmail('emailInput');
    if (firstValid && lastValid && emailValid) {
        return true;
    }
    else {
        return false;
    }
}

function validateName(nameText) {
    // Validates names are min 2 letters and only Alpha characters
    name = document.getElementById(nameText).value;
    let myRegEx = /^[a-zA-Z]*$/;
    if (name.length >= 2 && myRegEx.test(name)) {
        document.getElementById(nameText).style.borderColor = "black";
        if (nameText == 'firstName') {
            document.getElementById('firstNameWarning').textContent = '';
        }
        else {
            document.getElementById('lastNameWarning').textContent = '';
        }
        return true;
    }
    else {
        document.getElementById(nameText).focus();
        document.getElementById(nameText).style.borderColor = "red";
        console.log('invalid');
        warningMessage(nameText);
        return false;
    }
}

function validateEmail(emailText) {
    // Validates that users only enter three facilitator names
    text = document.getElementById(emailText).value;
    let facRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (facRegEx.test(text)) {
        document.getElementById(emailText).style.borderColor = "black";
        document.getElementById('emailWarning').textContent = '';
        return true;
    }
    else {
        document.getElementById(emailText).focus();
        document.getElementById(emailText).style.borderColor = "red";
        console.log('Invalid Email Address');
        warningMessage(emailText);
        return false;
    }
}

function warningMessage(name) {
    // Procuces warning messages for validation
    if (name == 'firstNameInput') {
        document.getElementById('firstNameWarning').textContent = 'First Name must be at least 2 characters';
    }

    else if ( name == 'lastNameInput') {
        document.getElementById('firstNameWarning').textContent = 'Last Name must be at least 2 characters';
    }

    else {
        document.getElementById('emailWarning').textContent = 'Must be standard email address';
    }
}
