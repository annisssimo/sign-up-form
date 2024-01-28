const form = document.querySelector('form');
const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');
const message = document.querySelector('.message');

form.addEventListener('submit', function (event) {
    if (pwd.value !== pwdConfirm.value) {
        message.textContent = 'Passwords do not match. Please try again.';
        event.preventDefault();
    }
});