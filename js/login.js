document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-mail');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'email' && password === 'password') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid Password');
    }
})

