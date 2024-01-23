import "swiper/css";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const setupVideoSwiper = function () {
  document.querySelectorAll("[slider-component]").forEach(function (element, index) {
    const swiper = new Swiper(element.querySelector(".swiper"), {
      modules: [Navigation],
      spaceBetween: "3%",
      navigation: {
        nextEl: element.querySelector('[swiper-arrow="right"]'),
        prevEl: element.querySelector('[swiper-arrow="left"]'),
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
};
