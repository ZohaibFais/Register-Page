var emailInput = document.getElementById('email');
var fullNameInput = document.getElementById('fullName');
var countrySelect = document.getElementById('countryName');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirmPassword');
var contactNumberInput = document.getElementById('contactNumber');
var termsCheckbox = document.getElementById('termsCheckbox');
var updatesCheckbox = document.getElementById('updatesCheckbox');
var submitButton = document.getElementById('submitButton');


var usersData = [];

function formSubmit() {

    if (!emailInput.value || !fullNameInput.value || !countrySelect.value || !passwordInput.value || !confirmPasswordInput.value || !contactNumberInput.value || !termsCheckbox.checked) 
    {
        alert('Fill in all Fields and accept the terms.');
        
    }
    else if (passwordInput.value != confirmPasswordInput.value){
        alert("Password does not match")
    }
    else{
        var userData = {
            email : emailInput.value,
            fullname : fullNameInput.value,
            country : countrySelect.value,
            password: passwordInput.value,
            number: contactNumberInput.value,
            update : updatesCheckbox.checked
        }
         var userData = JSON.stringify(userData)
        usersData.push(userData)
        localStorage.setItem("Data", usersData )
        alert("Your account has been registered")
    
        emailInput.value = ""
        fullNameInput.value = ""
        countrySelect.value = ""
        passwordInput.value = ""
        confirmPasswordInput.value = ""
        contactNumberInput.value = ""

    }
 
}

