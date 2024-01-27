// import Swiper bundle with all modules installed
// import styles bundle
import "swiper/css/bundle";

import Swiper from "swiper/bundle";

export const stepUpSwiperLogo = function () {
  document.addEventListener("DOMContentLoaded", function () {
    const swiperComponent = document.querySelectorAll("[swiper-component]");
    swiperComponent.forEach((component) => {
      let swiper = new Swiper(component.querySelector(".swiper"), {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 5, // Set the number of slides per view to 5
      });
      // Initialiser le swiper
      swiper.init();
    });
  });
};
