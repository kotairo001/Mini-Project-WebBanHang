var menuButton = document.getElementById("menuBtn");
var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");
var orderHeader = document.getElementById("header");
var orderPart = document.getElementById("favourite");
signInBtn.addEventListener("click", function () {
    window.location.href = "/page/Register.html"
});
signUpBtn.addEventListener("click", function () {
    window.location.href = "/page/Login.html"
})
menuButton.addEventListener("click", function () {
    if (menuList.style.display === "none") {
        menuList.style.display = "block"
    } else {
        menuList.style.display = "none"

    }
})
let cart = localStorage.getItem("cart");
let arr = JSON.parse(cart)
// console.log(cart)
var table = document.getElementById("order_list");
// console.log(buyAllbtn)
// console.log(table.childNodes.length);
if(arr!=null) {
for (i = 0; i < arr.length; i++) {
    var tr = document.createElement("tr");
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var img = document.createElement("img");
    var node0 = document.createTextNode(i + 1)
    var node1 = document.createTextNode(arr[i].name)
    img.setAttribute("src", arr[i].img);
    var node3 = document.createTextNode(arr[i].price + "$")
    img.width = 200;
    td0.appendChild(node0);
    td1.appendChild(img);
    td2.appendChild(node1);
    td3.appendChild(node3);
    table.appendChild(tr)
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
}}
sum = 0;
if(arr!=null) {
for (i = 0; i < arr.length; i++) {
    sum += arr[i].price
}}
var td4 = document.createElement("td");
var td5 = document.createElement("td");
var tr4 = document.createElement("tr");
var node4 = document.createTextNode("Total")
var node5 = document.createTextNode(sum + "$")
td4.setAttribute("colspan", 3)
td4.appendChild(node4)
td5.appendChild(node5)
tr4.appendChild(td4)
tr4.appendChild(td5)
table.appendChild(tr4)

var deleteBtn = document.getElementById("deleteBtn");
var buyAllbtn = document.getElementById("buyAllbtn");
// console.log(sum)
buyAllbtn.addEventListener("click", function () {
    // console.log("!!")
    table.style.display = "none";
    deleteBtn.style.display = "none";
    buyAllbtn.style.display = "none";
    orderHeader.innerHTML = "Order Total";
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.setAttribute("src", "/img/payment.png") 
    img2.setAttribute("src", "/img/bank.png") 
    let divContent;
    if(arr!=null) {
        divContent = document.createTextNode(sum + "$");
    } else {
        divContent = document.createTextNode(0 + "$");
    }
    let div2Content = document.createTextNode("You can pay through paypal or bank account:");
    let div4Content = document.createTextNode("Thank you for ordering at Mõm's House!");

    //content
    div.appendChild(divContent);
    div2.appendChild(div2Content);
    div3.appendChild(img1)
    div3.appendChild(img2)
    div4.appendChild(div4Content);

    //style
    div.style.color = "black";
    div.style.fontWeight= 500;
    div.style.fontSize = 40 + "px";
    div.style.textAlign = "center";
    div.style.marginBottom = 10 + "px";
    div2.style.color = "black";
    div2.style.fontSize = 30 + "px";
    div2.style.textAlign = "center";
    div2.style.marginBottom = 30 + "px";
    img1.style.width = 70 + "px";
    img1.style.marginLeft = 170 + "px";
    img2.style.width = 70 + "px";
    img2.style.marginLeft = 20 + "px";
    div3.style.width = 30 + "%";
    div3.style.margin = "auto";
    div4.style.color = "black";
    div4.style.fontSize = 30 + "px";
    div4.style.color = "rgb(170,135,142)";
    div4.style.textAlign = "center";
    div4.style.marginTop = 30 + "px";

    //append
    orderPart.appendChild(div);
    orderPart.appendChild(div2);
    orderPart.appendChild(div3);
    orderPart.appendChild(div4);
})
deleteBtn.addEventListener("click", function () {
    table.style.display = "none";
    localStorage.removeItem('cart');
})