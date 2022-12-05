var email = document.getElementById("email");
var message = document.getElementById("alert");
var password = document.getElementById("password");
var invalidpsw = document.getElementById("invalidpsw");
var cfpassword = document.getElementById("cfpassword");
var condition = document.getElementById("condition");
var eye1 = document.getElementById("eye_01");
var eye2 = document.getElementById("eye_02");
var btn = document.getElementById("summit");
let listMember = localStorage.getItem("listUser");
let keyid = false;
let keypsw = false;
let keycf = false;


function showPassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function showCfPassword() {
    if (cfpassword.type === "password") {
        cfpassword.type = "text";
    } else {
        cfpassword.type = "password";
    }
}
btn.addEventListener("click", function () {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat) && email.value != "") {
        email.focus();
        message.innerHTML = ""
        keyid = true
        console.log(keyid)
    } else {
        email.focus();
        message.innerHTML = "Your email is invalid";
        message.style.color = "red";
        message.style.fontSize = 12 + "px";
        btn.onsubmit = function (e) {
            e.preventDefault()

        }
    }
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (password.value.match(passw) && password.value != "") {
        invalidpsw.innerHTML = "";
        password.focus();
        keypsw = true
        console.log(keypsw)
    } else {
        password.focus();
        invalidpsw.innerHTML = "Your password has to have an Uppercase and a Number";
        invalidpsw.style.color = "red";
        invalidpsw.style.fontSize = 12 + "px";
        btn.onsubmit = function (e) {
            e.preventDefault()
        }
    }
    if (password.value === cfpassword.value) {
        cfpassword.focus();
        cfmessage.innerHTML = "";
        keycf = true
        console.log(keycf)
    } else {
        cfpassword.focus();
        cfmessage.innerHTML = "Your password is not right!";
        cfmessage.style.color = "red";
        cfmessage.style.fontSize = 12 + "px";
        btn.onsubmit = function (e) {
            e.preventDefault()
        }
    }
   let flag=false;
   let listUser=localStorage.getItem("listUser");
   let obj={
    email:email.value,
    password:password.value
   }
   if (listUser==null&&keycf == true&&keypsw == true&&keyid == true&&email.value!=""&&password.value!="") {
    listUser=[];
    listUser.push(obj);
    localStorage.setItem("listUser",JSON.stringify(listUser));
    window.location.href="Login.html";
   }else if (listUser!=null&&keycf == true&&keypsw == true&&keyid == true&&email.value!=""&&password.value!=""){
     listUser=JSON.parse(listUser);
     for (let i = 0; i < listUser.length; i++) {
       if(listUser[i].email == obj.email){
        flag=true;
        break;
       }
     }
     if(flag!=true){
        listUser.push(obj);
        // console.log("777777777777");
        localStorage.setItem("listUser",JSON.stringify(listUser));
        window.location.href="Login.html"
     }else{
        message.innerHTML = "Your email has already been register";
        message.style.color = "red";
        message.style.fontSize = 12 + "px";
     }
   }
    // if (flag==true) {
    //     // window.location.href = "/page/Login.html"
    //     console.log("Yeah")
    // }
})
