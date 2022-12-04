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
let cart = localStorage.getItem("cart");
    let arr = JSON.parse(cart)
    console.log(cart)
    var table = document.getElementById("order_list");
    var deleteBtn = document.getElementById("deleteBtn");
    var buyAllbtn = document.getElementById("buyAllbtn");
    console.log(table.childNodes.length);
    for(i=0;i<arr.length;i++) {
        var tr = document.createElement("tr");
        var td0 = document.createElement("td");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var img = document.createElement("img");
        var node0 = document.createTextNode(i+1)
        var node1 = document.createTextNode(arr[i].name)
        img.setAttribute("src",arr[i].img);
        var node3 = document.createTextNode(arr[i].price + "$")
        img.width = 200;
        // button.appendChild(button_contain)
        td0.appendChild(node0);
        td1.appendChild(img);
        td2.appendChild(node1);
        td3.appendChild(node3);
        table.appendChild(tr)
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    }
    console.log(table.childNodes.length);

    deleteBtn.addEventListener("click", function() {
        table.style.display = "none"
    })
    sum = 0;
    for(i=0;i<arr.length;i++) {
        sum+=arr[i].price
    }
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var tr4 = document.createElement("tr");
    var node4 = document.createTextNode("Total")
    var node5 = document.createTextNode(sum + "$")
    td4.setAttribute("colspan",3)
    td4.appendChild(node4)
    td5.appendChild(node5)
    tr4.appendChild(td4)
    tr4.appendChild(td5)
    table.appendChild(tr4)
    