document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const PasswordFiled = document.getElementById('user-password');
    const Password = PasswordFiled.value;

    if (email === 'mdnasir@gmail.com' && Password === 'nasir1234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user')
    }
})