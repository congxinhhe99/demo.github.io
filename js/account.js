// js cho account form
var LoginForm = document.getElementById('LoginForm');
var RegForm = document.getElementById('RegForm');
var Indicator = document.getElementById('Indicator');

function btnregister() {
    RegForm.style.transform = "translateX(0px)"
    LoginForm.style.transform = "translateX(0px)"
    Indicator.style.transform = "translateX(100px)"
};


function btnlogin() {
    RegForm.style.transform = "translateX(300px)"
    LoginForm.style.transform = "translateX(300px)"
    Indicator.style.transform = "translateX(0px)"
}
function checkValidate() {
    let name = document.register.username.value;
    let pws = document.register.password.value;
    let email = document.register.email.value;
    let atposition = email.indexOf("@");
    let dotposition = email.lastIndexOf(".");


    if (name == null || name == "") {
        alert("username can't be blank ")
        return false;
    }
    if (pws == null || pws == "") {
        alert("password can't be blank ")
        return false;
    }
    if (pws.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    if (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= email.length) {
        alert("Please enter a valid e-mail address.");
        return false;
    }

}