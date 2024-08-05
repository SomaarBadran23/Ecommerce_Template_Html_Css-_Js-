
// take data from json file
fetch('js/items.json')
    .then(response => response.json())
    .then(data => {

        let swiperItemsSalesWrapper = document.querySelector('#swiper_items_sale');

        // slide products_slide

        let other_product_swiper = document.getElementById('other_product_swiper');
        // for add to cart steps
        all_product_json = data;

        data.forEach(product => {
            if (product.old_price) {

                //product Discount
                let percentDiscount = Math.floor((product.old_price - product.price) / product.old_price * 100);

                swiperItemsSalesWrapper.innerHTML += `  <div class="product swiper-slide">
                        <div class="product_icon">
                            <span><i onclick="addToCart(${product.id},this)"  class="icon fa-solid fa-cart-plus"></i></span>
                            <span><i class="icon fa-solid fa-share"></i></span>
                            <span><i class="icon fa-solid fa-heart"></i></span>
                        </div>
                        <span class ="sale_present">${percentDiscount}%</span>
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
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                    </div>`
            }
        });

        data.forEach(product => {

            other_product_swiper.innerHTML += `  <div class="product swiper-slide">
                        <div class="product_icon">
                            <span><i onclick="addToCart(${product.id},this)"  class="icon fa-solid fa-cart-plus"></i></span>
                            <span><i class="icon fa-solid fa-share"></i></span>
                            <span><i class="icon fa-solid fa-heart"></i></span>
                        </div>
                       
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
                         
                        </div>
                    </div>`

        });

    })



