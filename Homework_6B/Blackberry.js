function onLoad() {
    localStorage.setItem('glazing', 'Glazing');
    localStorage.setItem('quantity', 'Quantity');
    localStorage.setItem('current', 'Blackberry');
    if (!JSON.parse(localStorage.getItem("cart"))) {
        let cart = [];
        cart = JSON.stringify(cart);
        localStorage.setItem('cart', cart);
    }
    else setTotalNum();
}


function onLoad_Cart() {
setTotalNum()
   var cart=JSON.parse(localStorage.getItem("cart"));
   var begin="";
   var price=0;
   var count = 0;
   for (var element of cart) {
    var bubble=`<div id=${count} class="productBubble_Shopping_Cart">
    <img id="Remove_Icon_Shopping_Cart" src="Remove_Icon.png" onclick="remove(${count})">
    <svg class="bubble_Shopping_Cart">
        <rect id="Rectangle_4" rx="30" ry="30" x="0" y="0" width="665" height="178">
        </rect>
    </svg>
    <div id="bubbleText_Shopping_Cart">
        <span id="Name">${element.name}</span><br/><span id="Price_Glazing_Quantity" style="font-style:normal;font-weight:normal;">${element.price}<br/>${element.glazing}<br/>Qty: ${element.quantity}</span>
    </div>
    <!-- make image change -->
    <img id="Bubble_Image_Shopping_Cart" alt="product added to basket" src="cinnamon.png">
    <div id="bubbleText_Total">
        <span id="SubTotal" style="text-decoration:underline;">$${(Number(element.price.replace("$",""))*Number(element.quantity)).toFixed(2)}</span>
    </div>
    </div>`
    begin=begin+bubble;
    price=price+(Number(element.price.replace("$",""))*Number(element.quantity));
    count += 1
   }
   document.getElementById("cart_list").innerHTML = begin;
   document.getElementById("Amount").innerHTML = "$"+price.toFixed(2);
}


function remove(id){
    console.log(document.getElementById(id))
    document.getElementById(id).remove();
    var cart_original = JSON.parse(localStorage.getItem("cart"));
    var cart_update = cart_original.splice(Number (id), 1);
    localStorage.setItem("cart",JSON.stringify(cart_update));
}


function clickDropdown(event, dropdown, cinnabon) {
    let value = event.target.value;
    let current = localStorage.getItem("current")
    if (current == cinnabon) {
        localStorage.setItem(dropdown, event.target.value)
    }
    else {
        localStorage.setItem('current', event.target.id.split("_")[0]);
        reset()
        document.getElementById(event.target.id).value = value;
        localStorage.setItem(dropdown, value);
    }
    if (localStorage.getItem("glazing") != "Glazing" && localStorage.getItem("quantity") != "Quantity") makeAddAvailable(event); 
    else document.getElementById(cinnabon + "_Add_Basket").style.color = 'rgb(9, 179, 153)';
}


function makeAddAvailable(event) {
    let id = event.target.id.split("_")[0] + "_Add_Basket"
    document.getElementById(id).style.color = 'rgb(255,255,255)';
}


function addToBasket_Hover(event) {
    if (event.target.id.split("_")[0] == localStorage.getItem("current") && (localStorage.getItem("glazing") != "Glazing" && localStorage.getItem("quantity") != "Quantity")) {
        let id = event.target.id.split("_")[0] + "_Add_Basket"
        document.getElementById(id).style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    }
}


function mouseOff(event) {
    document.getElementById(event.target.id).style.boxShadow = "none"
}


function addToBasket(cinnabon, price) {
    console.log(cinnabon, price)
    if (cinnabon == localStorage.getItem("current") && (localStorage.getItem("glazing") != "Glazing" && localStorage.getItem("quantity") != "Quantity")) {
        document.getElementById('Home').style.opacity = '.6';
        document.getElementById('productBubble').style.display = 'block';
        setTimeout(function(){ 
            document.getElementById("productBubble").style.display = "none" 
            document.getElementById ('Home').style.opacity = '1'
        }, 3000);
        var item = {"name": cinnabon, "price": price, "glazing": localStorage.getItem('glazing'), "quantity": localStorage.getItem('quantity')}
        var cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(item);
        cart = JSON.stringify(cart);
        localStorage.setItem('cart', cart);
        document.getElementById("Name").innerHTML = cinnabon;
        document.getElementById("Price_Glazing_Quantity").innerHTML = `${price}<br/>${localStorage.getItem ('glazing')}<br/>Qty: ${localStorage.getItem ('quantity')}`;
        setShoppingCartNum();
        reset();
    }
}


function reset() {
    localStorage.setItem('glazing', 'Glazing');
    localStorage.setItem('quantity', 'Quantity');
    let allDropdowns = document.getElementsByTagName("select");
    for (let menu of allDropdowns) {
        cinnabon_atIndex = menu.id.split("_")[0]
        let id = cinnabon_atIndex + "_Add_Basket"
        document.getElementById(id).style.color = 'rgb(9, 179, 153)';

        dropdown_atIndex = menu.id.split("_")[1]
        if (dropdown_atIndex == "Glazing") menu.value = "Glazing";
        if (dropdown_atIndex == "Quantity") menu.value = "Quantity";
    }
}


function setShoppingCartNum() {
    let count = localStorage.getItem("quantity")
    var cartQuantity = Number(document.getElementById ("Shopping_Cart_Number").innerHTML);
    cartQuantity += Number(count);
    document.getElementById("Shopping_Cart_Number").innerHTML = cartQuantity;
}

function setTotalNum() {
    let cart = JSON.parse(localStorage.getItem("cart"))
    let total = 0
    for (var element of cart) {
        total += Number(element.quantity)
    }
    document.getElementById("Shopping_Cart_Number").innerHTML = total;
}