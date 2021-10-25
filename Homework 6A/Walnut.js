function onLoad(){
    localStorage.setItem ('Walnut_glazing','Glazing');
    localStorage.setItem ('Walnut_quantity','Quantity');
    let cart=[];
    cart=JSON.stringify (cart);
    localStorage.setItem ('cart',cart);
}

//Check Glazing and Quantity before turning Add To Basket - White
function walnut_glazingInput(event) {
    localStorage.setItem ('Walnut_glazing',event.target.value);
    var glazing = localStorage.getItem ('Walnut_glazing');
    var quantity = localStorage.getItem ('Walnut_quantity');
    if (glazing != 'Glazing' && quantity != 'Quantity') {
        var addToBasket = document.getElementById ('Walnut_Add_Basket');
        addToBasket.style.color = 'rgb(255,255,255)';
}}

//Check Glazing and Quantity before turning Add To Basket - White
function walnut_quantityInput(event) {
    localStorage.setItem ('Walnut_quantity',event.target.value)
    var glazing = localStorage.getItem ('Walnut_glazing');
    var quantity = localStorage.getItem ('Walnut_quantity');
    if (glazing != 'Glazing' && quantity != 'Quantity') {
        var addToBasket = document.getElementById ('Walnut_Add_Basket');
        addToBasket.style.color = 'rgb(255,255,255)';
}}

//Check Glazing and Quantity before OnHover Add To Basket - Drop Shadow
 function walnut_addToBasket_Hover() {
    var glazing = localStorage.getItem ('Walnut_glazing');
    var quantity = localStorage.getItem ('Walnut_quantity');
    console.log(glazing, quantity);
    if (glazing != 'Glazing' && quantity != 'Quantity') {
        var addToBasket = document.getElementById ('Walnut_Add_Basket');
        addToBasket.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }}

//When MouseOff Add To Basket - No Drop Shadow
function walnut_mouseOff() {
    var addToBasket = document.getElementById ('Walnut_Add_Basket');
    console.log(addToBasket);
    addToBasket.style.boxShadow = 'none';
    }

function walnut_addToBasket(name,price) {
    //When OnClick Add To Basket - Opacity 60%
    var addToBasket = document.getElementById ('Home');
    addToBasket.style.opacity = '.6';
    //When OnClick Add To Basket - Display Product Bubble
    var productBubble = document.getElementById ('productBubble');
    productBubble.style.display='block';
    setTimeout(function(){ 
        document.getElementById("productBubble").style.display = "none" 
        document.getElementById ('Home').style.opacity = '1'
    }, 3000);
    //When OnClick Add To Basket - Add Item to Cart[]
    var item={"name":name, "price":price, "glazing":localStorage.getItem ('Walnut_glazing'),"quantity":localStorage.getItem ('Walnut_quantity')}
    var cart=JSON.parse(localStorage.getItem ('cart'));
    cart.push (item);
    cart=JSON.stringify (cart);
    localStorage.setItem('cart',cart);
    console.log(cart);
    document.getElementById("Name").innerHTML=name;
    document.getElementById("Price_Glazing_Quantity").innerHTML=`${price}<br/>${localStorage.getItem ('Walnut_glazing')}<br/>Qty: ${localStorage.getItem ('Walnut_quantity')}`;
    document.getElementById("Walnut_Glazing").value = "Glazing"
    document.getElementById("Walnut_Quantity").value = "Quantity"
    //When OnClick Add To Basket - Trigger Reset and Shopping Cart Number Functions
    Walnut_reset ();
    Walnut_Shopping_Cart_Number (localStorage.getItem ('Walnut_quantity'));
}

//After Confirmation - Reset Color of Add To Basket Button
function Walnut_reset () {
        document.getElementById ("Walnut_Add_Basket").style.color = 'rgb(9, 179, 153';
    }

//After Confirmation - Add Up Quantities
function Walnut_Shopping_Cart_Number (count) {
    var cartQuantity = Number(document.getElementById ("Shopping_Cart_Number").innerHTML);
    cartQuantity += Number(count);
    document.getElementById("Shopping_Cart_Number").innerHTML = cartQuantity;
}
