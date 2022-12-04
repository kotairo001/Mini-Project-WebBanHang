let fav = localStorage.getItem("favourite");
let arr = JSON.parse(fav)
var menuButton = document.getElementById("menuBtn");
var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");
signInBtn.addEventListener("click", function(){
    window.location.href = "/page/Register.html"
});
signUpBtn.addEventListener("click", function(){
    window.location.href = "/page/Login.html"
})
menuButton.addEventListener("click", function(){
    if(menuList.style.display === "none") {
        menuList.style.display = "block"
    } else {
        menuList.style.display = "none"

    }
})
console.log(arr[0])
var table = document.getElementById("favourite_list");
var deleteBtn = document.getElementById("deleteBtn");
for(i=0;i<arr.length;i++) {
    var tr = document.createElement("tr");
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    // var td3 = document.createElement("td");
    var img = document.createElement("img");
    var node0 = document.createTextNode(i+1)
    var node1 = document.createTextNode(arr[i].name)
    img.setAttribute("src",arr[i].img);
    img.width = 200;
    td0.appendChild(node0);
    td1.appendChild(img);
    td2.appendChild(node1);
    table.appendChild(tr)
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
}
deleteBtn.addEventListener("click", function() {
    table.style.display = "none"
})