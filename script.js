const form = document.querySelector('form');
const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');
const message = document.querySelector('.message');
const inputConfirmPwd = document.querySelector('#pwd-confirm');

form.addEventListener('submit', function(event) {
    if(pwdConfirm.value !== pwd.value) {
        event.preventDefault();
        inputConfirmPwd.style.color = 'var(--red)';
        message.textContent = 'Passwords do not match :(';
    }
});

pwdConfirm.addEventListener('input', (event) => {
    if(pwdConfirm.value === pwd.value) {
        message.textContent = '';
        inputConfirmPwd.style.color = 'var(--black)';
    }
});