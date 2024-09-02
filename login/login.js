document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Replace this with actual authentication logic
        if (email && password) {
            // Mock login success
            localStorage.setItem('authenticated', true); // Mock authentication state
            window.location.href = 'index.html'; // Redirect to main page
        } else {
            alert('Please enter email and password.');
        }
    });
});
