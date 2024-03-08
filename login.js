
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');

function login() {
    var email = emailInput.value;
    var password = passwordInput.value;

    var usersData = JSON.parse(localStorage.getItem('Data')) || [];

    var loginuser = usersData.find(function(user){
       return  user.email == email & user.password == password
    })
    if(loginuser){
        alert("Successful Login" + " " +  loginuser.fullname)
    }
    else{
        alert("Incorrect email or password")
    }

    emailInput.value = ""
    passwordInput.value = ""

}
