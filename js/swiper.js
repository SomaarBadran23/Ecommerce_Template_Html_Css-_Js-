/* Swiper Slide Side-bar */

var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamic: true,
        clickable: true,
    },
    autoplay: {
        delay: 1500,
    },
    loop: true,
});

/* Swiper Slide Slide Sale */

var swiper = new Swiper(".sale_wrapper", {
    pagination: {
        el: ".swiper-pagination",
        dynamic: true,
        clickable: true,
    },
    //بتجيب المنتجات جنب بعض يعني 5 منتجات 
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
        delay: 1500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});


/* Swiper Slide Slide Products */

var swiper = new Swiper(".swiper-wrapper ", {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 1500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // حتى يعمل السلايدر تم وضع فولس
    loop: false,
});

