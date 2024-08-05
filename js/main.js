// Open && Close Cart

let cart = document.querySelector('.cart');

let cart_icon = document.querySelector('.cart_icon');

let close_cart = document.querySelector('.close_cart');

// for top cart 
let count_item_cart = document.querySelector('.count_item_cart');
// bottom cart
let price_cart_total = document.querySelector('.price_cart_total');



// OpenCart Function 

function openCart() {
    cart.classList.add('active');
}

cart_icon.addEventListener("click", openCart);

//closeCart Function

function closeCart() {
    cart.classList.remove('active');
    console.log("test good");
}

close_cart.addEventListener("click", closeCart);


// for add to cart steps

let all_product_json;

let itemsInCart = document.querySelector('.items_in_cart');

let product_cart = [];

function addToCart(id, btn) {
    product_cart.push(all_product_json[id]);
    btn.classList.add('active');
    console.log(id);
    getItems();
}


// collect price of product that added to cart 
let countItem = document.querySelector('.count_item');

let priceCartHead = document.querySelector('.price_cart_head');


// get items to put it in cart 

function getItems() {
    let totalPrice = 0;

    let itemesCreate = "";
    for (let i = 0; i < product_cart.length; i++) {
        itemesCreate += `     <div class="item_cart">
                <img src=" ${product_cart[i].img} " alt="product-1">
                <div class="item_content">
                    <h3> ${product_cart[i].name} </h3>
                    <p class="price_cart">$${product_cart[i].price}</p>
                    <button class="del_item">
                        <i onclick="remove_items_cart(${i})" class=" del_icon fa fa-solid fa-trash-can-arrow-up"></i>
                    </button>
                </div>
            </div>`
        totalPrice += product_cart[i].price;

        console.log("FOR IS WEEL");
    }

    itemsInCart.innerHTML = itemesCreate;

    priceCartHead.innerHTML = `$ ${totalPrice}`;

    countItem.innerHTML = product_cart.length;
    // for top cart 
    count_item_cart.innerHTML = ` ( ${product_cart.length} item in cart )`;
    // for bottom cart
    price_cart_total.innerHTML = "$" + totalPrice;
}




// Remove Items From Cart
function remove_items_cart(index) {
    product_cart.splice(index, 1);
    getItems();

    // add product again after i delete it from cart by remove active class and add active class after remove product from cart 

    let addToCartButtons = document.querySelectorAll('.fa-cart-plus');
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active");

        product_cart.forEach(product => {
            if (product.id == i) {
                addToCartButtons[i].classList.add("active");
            }
        })
    }


}


// Change Item Img

let main_image = document.querySelector('.main_image img');

function changeItemImg(el) {
    main_image.src = el;
}



