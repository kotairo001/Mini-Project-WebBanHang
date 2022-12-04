var menuList = document.getElementById("menuList");
    var menuButton = document.getElementById("menuBtn");
    var signInBtn = document.getElementById("signInBtn");
    var signUpBtn = document.getElementById("signUpBtn");
    var favBtn = document.getElementsByClassName("favBtn");
    var cartBtn = document.getElementsByClassName("cartBtn");
    var productContain = document.getElementsByClassName("content-product");
    var contentImg = document.getElementsByClassName("content-img");
    var arrPrice = [20,30,10,5,50,10,15,5,15,10]
    var arrProduct = []
    var arrToCart = []
    menuButton.addEventListener("click", function(){
        if(menuList.style.display === "none") {
            menuList.style.display = "block"
        } else {
            menuList.style.display = "none"

        }
    })
    signInBtn.addEventListener("click", function(){
        window.location.href = "/page/Register.html"
    });
    signUpBtn.addEventListener("click", function(){
        window.location.href = "/page/Login.html"
    })
    let Favorite = function (img,name) {
            this.img = img;
            this.name = name;
        }
    let Cart = function (img,name, price) {
            this.img = img;
            this.name = name;
            this.price = price;

        }
    let count = 0

    for(let i=0;i<favBtn.length;i++){
        favBtn[i].addEventListener("click",function(){
        let favourite = new Favorite(contentImg[i].src,productContain[i].innerHTML);
        arrProduct.push(favourite);
        localStorage.setItem("favourite", JSON.stringify(arrProduct));
        alert("You have added " + (count+=1) + " product(s) to favourite")
        })}

    let count1 = 0
    for(let i=0;i<cartBtn.length;i++){
        cartBtn[i].addEventListener("click",function(){
        let cartProduct = new Cart(contentImg[i].src,productContain[i].innerHTML,arrPrice[i]);
        arrToCart.push(cartProduct);
        localStorage.setItem("cart", JSON.stringify(arrToCart))
        alert("You have added " + (count1+=1) + " product(s) to cart")
        })} 