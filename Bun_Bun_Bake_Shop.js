function onLoad (){
    localStorage.setItem ('glazing','Glazing');
    localStorage.setItem ('quantity','Quantity');
    let cart=[];
    cart=JSON.stringify (cart);
    localStorage.setItem ('cart',cart);
}

function glazingInput(event) {
    localStorage.setItem ('glazing',event.target.value);
    var glazing = localStorage.getItem ('glazing');
    var quantity = localStorage.getItem ('quantity');
    if (glazing != 'Glazing' && quantity != 'Quantity') {
        var addToBasket = document.getElementById ('Add_Basket');
        addToBasket.style.color = 'rgb(255,255,255';
}}

function quantityInput(event) {
    localStorage.setItem ('quantity',event.target.value)
    var glazing = localStorage.getItem ('glazing');
    var quantity = localStorage.getItem ('quantity');
    if (glazing != 'Glazing' && quantity != 'Quantity') {
        var addToBasket = document.getElementById ('Add_Basket');
        addToBasket.style.color = 'rgb(255,255,255';
}}

 function addToBasket_Hover() {
    var glazing = localStorage.getItem ('glazing');
    var quantity = localStorage.getItem ('quantity');
    console.log(glazing, quantity);
    if (glazing != 'Glazing' && quantity != 'Quantity') {
        var addToBasket = document.getElementById ('Add_Basket');
        addToBasket.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }}

function mouseOff() {
    var addToBasket = document.getElementById ('Add_Basket');
    console.log(addToBasket);
    addToBasket.style.boxShadow = 'none';
    }

function addToBasket(name,price) {
    var addToBasket = document.getElementById ('Home');
    addToBasket.style.opacity = '.6';
    var productBubble = document.getElementById ('productBubble');
    productBubble.style.display='block';
    setTimeout(function(){ 
        document.getElementById("productBubble").style.display = "none" 
        document.getElementById ('Home').style.opacity = '1'
    }, 3000);
    var item={"name":name, "price":price, "glazing":localStorage.getItem ('glazing'),"quantity":localStorage.getItem ('quantity')}
    var cart=JSON.parse(localStorage.getItem ('cart'));
    cart.push (item);
    cart=JSON.stringify (cart);
    localStorage.setItem('cart',cart);
    console.log(cart);
    document.getElementById("Name").innerHTML=name;
    document.getElementById("Price_Glazing_Quantity").innerHTML=`${price}<br/>${localStorage.getItem ('glazing')}<br/>Qty: ${localStorage.getItem ('quantity')}`;
    document.getElementById("Glazing").value = "Glazing"
    document.getElementById("Quantity").value = "Quantity"
    reset ();
    Shopping_Cart_Number (localStorage.getItem ('quantity'));
}

function reset () {
        document.getElementById ("Add_Basket").style.color = 'rgb(9, 179, 153';
    }

function Shopping_Cart_Number (count) {
    var cartQuantity = Number(document.getElementById ("Shopping_Cart_Number").innerHTML);
    cartQuantity += Number(count);
    document.getElementById("Shopping_Cart_Number").innerHTML = cartQuantity;
}
