
// take data from json file
fetch('js/items.json')
    .then(response => response.json())
    .then(data => {

        let swiperItemsSalesWrapper = document.querySelector('#swiper_items_sale');

        // slide products_slide

        let products_all = document.getElementById('products_all');
        // for add to cart steps
        all_product_json = data;

        data.forEach(product => {

            let oldPriceProduct = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";

            // Math.floor((product.old_price - product.price) / product.old_price * 100) 

            let newPercentDiscount = product.old_price ? `   <span class ="sale_present">${Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` : "" ;
            
            //product Discount
            let percentDiscount = Math.floor((product.old_price - product.price) / product.old_price * 100);

            products_all.innerHTML += `  <div class="product swiper-slide">
                        <div class="product_icon">
                            <span><i onclick="addToCart(${product.id},this)"  class="icon fa-solid fa-cart-plus"></i></span>
                            <span><i class="icon fa-solid fa-share"></i></span>
                            <span><i class="icon fa-solid fa-heart"></i></span>
                        </div>
                        ${newPercentDiscount}
                        <div class="prod_img">
                            <img src="${product.img}" alt="product-1">
                            <img class="hover_image" src="${product.img_hover}" alt="product1">
                        </div>

                        <h4 class="product_name">${product.name}<a href="#"></a></h4>
                        <div class="product_stars">
                            <i class="star fa fa-solid fa-star"></i>
                            <i class="star fa fa-solid fa-star"></i>
                            <i class="star fa fa-solid fa-star"></i>
                            <i class="star fa fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                             ${oldPriceProduct}
                        </div>
                    </div>`

        });



    })



