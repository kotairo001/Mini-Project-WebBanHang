var email = document.getElementById("email");
var message = document.getElementById("alert");
var password = document.getElementById("password");
var warnMessage = document.getElementById("warnMessage");
let keyid = false;
let storage = localStorage.getItem("listUser");
let arr = JSON.parse(storage);
let arrLoginAccount = [];
let LoginAccount = function (id,psw,status) {
    this.id = id;
    this.psw = psw;
    this.status = status;
}
// console.log(arr)
function showPassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function checkEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        email.focus();
        message.innerHTML = "";
        keyid = true;
    } else {
        email.focus();
        message.innerHTML = "Your email is not right!";
        message.style.color = "red"
        message.style.fontSize = 13 + "px"
    }
}
// console.log(email.value)

function checkLogin() {
let loginaccount = new LoginAccount(email.value,password.value,true);
    for (i = 0; i < arr.length; i++) {
        if (email.value == arr[i].email && password.value == arr[i].password) {
            arrLoginAccount.push(loginaccount)
            localStorage.setItem("login", JSON.stringify(arrLoginAccount))
            window.location = "./index.html"
        } else {
            warnMessage.innerHTML = "Your email or password is wrong";
            warnMessage.style.color = "red";
            warnMessage.style.fontSize = 15 + "px"

        }
    }
}