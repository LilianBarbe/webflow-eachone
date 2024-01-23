// SWIPER VIDEO
$(document).ready(function () {
  $("[slider-component]").each(function (index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {
      spaceBetween: "3%",
      navigation: {
        nextEl: $(this).find('[swiper-arrow="right"]')[0],
        prevEl: $(this).find('[swiper-arrow="left"]')[0],
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: "3%",
        },
        // tablet
        768: {
          slidesPerView: 2,
          spaceBetween: "4%",
        },
        // desktop
        992: {
          slidesPerView: 3,
          spaceBetween: "4%",
        },
      },
    });
  });
});
