function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Perform login logic (you can customize this part)
    console.log(`Login with username: ${username} and password: ${password}`);
}

function signup() {
    const name = document.getElementById('signupName').value;
    const age = document.getElementById('signupAge').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Perform signup logic (you can customize this part)
    console.log(`Signup with name: ${name}, age: ${age}, phone: ${phone}, password: ${password}`);

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
    }
}

function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}
