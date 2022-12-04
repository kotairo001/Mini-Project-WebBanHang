var email = document.getElementById("email");
        var message = document.getElementById("alert");
        var password = document.getElementById("password");
        var warnMessage = document.getElementById("warnMessage");
        let keyid = false;
        let storage = localStorage.getItem("account");
        // console.log(storage)
        let arr = JSON.parse(storage);
        // console.log(arr)
        function showPassword () {
            if (password.type === "password") {
                password.type = "text";
                eye1.classList.remove("fa-eye-slash");
                eye1.classList.add("fa-eye");
            } else {
                eye1.classList.remove("fa-eye");
                eye1.classList.add("fa-eye-slash");
                password.type = "password";
            }
        }
        function checkEmail () {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
            if(email.value.match(mailformat)) {
                email.focus();
                message.innerHTML="";
                keyid = true;
            } else {
                email.focus();
                message.innerHTML="Your email is not right!";
                message.style.color ="red"
                message.style.fontSize = 13 + "px"

            }
        }
        function checkLogin () {
            for(i=0;i<arr.length;i++) {
                if(email.value==arr[i].id && password.value==arr[i].psw) {
                    window.location = "./index.html"
                } else {
                    warnMessage.innerHTML = "Your email or password is wrong";
                    warnMessage.style.color = "red";
                    warnMessage.style.fontSize = 15 + "px"

                }
            }
        }