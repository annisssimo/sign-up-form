const form = document.querySelector('form');

//Inputs
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');

//Error messages for each input
const firstNameErrMessage = document.querySelector('#first-name + .error-message');
const lastNameErrMessage = document.querySelector('#last-name + .error-message');
const emailErrMessage = document.querySelector('#email + .error-message');
const phoneErrMessage = document.querySelector('#phone + .error-message');
const pwdErrMessage = document.querySelector('#pwd + .error-message');
const pwdConfirmErrMessage = document.querySelector('#pwd-confirm + .error-message');


form.addEventListener('submit', function(event) {
    if(firstName.value === '') {
        event.preventDefault();
        firstName.classList.add('error');
        firstNameErrMessage.textContent = 'First name is required';
    }

    if(lastName.value === '') {
        event.preventDefault();
        lastNameErrMessage.textContent = 'Last name is required';
    }

    if(email.value === '') {
        event.preventDefault();
        emailErrMessage.textContent = 'Email name is required';
    } else if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        event.preventDefault();
        emailErrMessage.textContent = 'Enter a valid email. Ex: anya04@gmail.com';
    }

    if(phone.value === '') {
        event.preventDefault();
        phoneErrMessage.textContent = 'Phone is required';
    } else if(!phone.value.match(/^\+?(?:[0-9] ?){6,14}[0-9]$/)) {
        event.preventDefault();
        phoneErrMessage.textContent = 'Phone number consists of 6 to 14 digits';
    }

    if(pwd.value === '') {
        event.preventDefault();
        pwdErrMessage.textContent = 'Password is required';
    }

    if(pwdConfirm.value === '') {
        event.preventDefault();
        pwdConfirmErrMessage.textContent = 'Please, confirm your password';
    }

    if(pwdConfirm.value !== pwd.value) {
        event.preventDefault();
        pwdConfirm.style.color = 'var(--red)';
        pwdConfirmErrMessage.textContent = 'Passwords do not match :(';
    }
});

firstName.addEventListener('input', (event) => {
    if(firstName.value != '') {
        firstNameErrMessage.textContent = '';
    }
});

lastName.addEventListener('input', (event) => {
    if(lastName.value != '') {
        lastNameErrMessage.textContent = '';
    }
});

email.addEventListener('input', (event) => {
    if(email.value != '') {
        emailErrMessage.textContent = '';
    }
});

phone.addEventListener('input', (event) => {
    if(phone.value != '') {
        phoneErrMessage.textContent = '';
    }
});

pwd.addEventListener('input', (event) => {
    if(pwd.value != '') {
        pwdErrMessage.textContent = '';
    }
});

pwdConfirm.addEventListener('input', (event) => {
    if(pwdConfirm.value != '') {
        pwdConfirmErrMessage.textContent = '';
    }
});


pwdConfirm.addEventListener('input', (event) => {
    if(pwdConfirm.value === pwd.value) {
        pwdConfirmErrMessage.textContent = '';
        pwdConfirm.style.color = 'var(--black)';
    }
});

