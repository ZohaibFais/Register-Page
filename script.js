
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

function login() {
    var email = emailInput.value;
    var password = passwordInput.value;

    var usersData = JSON.parse(localStorage.getItem('Data')) || [];

    var loginuser = usersData.find(function(activeuser){
       return  activeuser.email == email & activeuser.password == password
    })
    var loggedInUser = usersData.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (loggedInUser) {
        alert("Login successful. Welcome, " + loggedInUser.fullname + "!");
        emailInput.value = "";
        passwordInput.value = "";
        window.location.href = "http://127.0.0.1:5500/app.html"
    } else {
        alert("Invalid email or password. Please try again.");


    }
    
}


var emailInput = document.getElementById('email');
var fullNameInput = document.getElementById('fullName');
var countrySelect = document.getElementById('countryName');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirmPassword');
var contactNumberInput = document.getElementById('contactNumber');
var termsCheckbox = document.getElementById('termsCheckbox');
var updatesCheckbox = document.getElementById('updatesCheckbox');
var submitButton = document.getElementById('submitButton');

function formSubmit()  {
    if (!emailInput.value || !fullNameInput.value || !countrySelect.value || !passwordInput.value || !confirmPasswordInput.value || !contactNumberInput.value || !termsCheckbox.checked) {
        alert('Fill in all Fields and accept the terms.');
    } else if (passwordInput.value != confirmPasswordInput.value){
        alert("Password does not match");
    } else {
        
        var usersData = JSON.parse(localStorage.getItem('Data')) || [];

        var userData = {
            email: emailInput.value,
            fullname: fullNameInput.value,
            country: countrySelect.value,
            password: passwordInput.value,
            number: contactNumberInput.value,
            update: updatesCheckbox.checked
        };


        usersData.push(userData);

        localStorage.setItem('Data', JSON.stringify(usersData));

        emailInput.value = "";
        fullNameInput.value = "";
        countrySelect.value = "";
        passwordInput.value = "";
        confirmPasswordInput.value = "";
        contactNumberInput.value = "";
        termsCheckbox.checked = false;
        updatesCheckbox.checked = false;

        alert("Your account has been registered.");
    }
}