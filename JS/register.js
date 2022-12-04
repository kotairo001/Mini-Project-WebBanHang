var email = document.getElementById("email");
var message = document.getElementById("alert");
var password = document.getElementById("password");
var invalidpsw = document.getElementById("invalidpsw");
var cfpassword = document.getElementById("cfpassword");
var condition = document.getElementById("condition");
var eye1 = document.getElementById("eye_01");
var eye2 = document.getElementById("eye_02");
var btn = document.getElementById("summit");
let arr = [];
let keyid = false;
let keypsw = false;
let keycf = false;
let Account = function (id,psw) {
    this.id = id;
    this.psw = psw
}
function showPassword () {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function showCfPassword () {
    if (cfpassword.type === "password") {
        cfpassword.type = "text";
    } else {
        cfpassword.type = "password";
    }
}
    btn.addEventListener("click", function() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value.match(mailformat) && email.value!="") {
            email.focus();
            message.innerHTML = ""
            keyid = true
            console.log(keyid)
        } else {
            email.focus();
            message.innerHTML = "Your email is invalid";
            message.style.color = "red";
            message.style.fontSize = 12 + "px";
            // event.preventDefault()
        }
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if (password.value.match(passw)&&password.value!="") {
            invalidpsw.innerHTML = "";
            password.focus();
            keypsw = true
            console.log(keypsw)
        } else {
            password.focus();
            invalidpsw.innerHTML = "Your password has to have an Uppercase and a Number";
            invalidpsw.style.color = "red";
            invalidpsw.style.fontSize = 12 + "px";
            // event.preventDefault()
        }
        if(password.value === cfpassword.value) {
            cfpassword.focus();   
            cfmessage.innerHTML = "";
            keycf = true
            console.log(keycf)
        } else {
            cfpassword.focus();
            cfmessage.innerHTML = "Your password is not right!";
            cfmessage.style.color = "red";
            cfmessage.style.fontSize = 12 + "px";
            // event.preventDefault()
        }
        let account = new Account(email.value,password.value)
        arr.push(account);
        if (email.value!="" && password.value!="" && keyid === true&&keypsw === true&&keycf === true) {
            localStorage.setItem("account", JSON.stringify(arr))
            window.location.href="/page/Login.html"}
    })
