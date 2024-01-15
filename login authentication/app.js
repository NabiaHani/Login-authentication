function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    clearMessages();
}

function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    clearMessages();
}

function clearMessages() {
    document.getElementById("loginErrorMessage").style.display = "none";
    document.getElementById("loginSuccessMessage").style.display = "none";
    document.getElementById("registerErrorMessage").style.display = "none";
}

function register() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[newUsername]) {
        document.getElementById("registerErrorMessage").style.display = "block";
        document.getElementById("registerErrorMessage").textContent = "Username already exists. Please choose a different username.";
    } else {
        users[newUsername] = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("loginSuccessMessage").style.display = "block";
        document.getElementById("loginSuccessMessage").textContent = "Registration successful! Please log in.";
    }
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username] === password) {
        localStorage.setItem("loggedInUser", username);
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("securedPage").style.display = "block";
        document.getElementById("loggedInUser").innerText = username;
    } else {
        document.getElementById("loginErrorMessage").style.display = "block";
        document.getElementById("loginErrorMessage").textContent = "Invalid username or password. Please try again.";
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    document.getElementById("securedPage").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
    document.getElementById("securedPage").style.display = "block";
    document.getElementById("loggedInUser").innerText = loggedInUser;
} else {
    document.getElementById("loginForm").style.display = "block";
}