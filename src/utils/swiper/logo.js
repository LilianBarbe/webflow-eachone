import "swiper/css";

import Swiper from "swiper";

export const sliderComponents = document.querySelectorAll(".slider-logo_component");
sliderComponents.forEach((component) => {
  const swiperLogo = new Swiper(component.querySelector(".swiper.is-logo"), {
    autoplay: true,
    speed: 1800,
    delay: 1000,
    loop: true,
    breakpoints: {
      240: { slidesPerView: 3, spaceBetween: "0%" },
      480: { slidesPerView: 3, spaceBetween: "2%" },
      992: { slidesPerView: 5, spaceBetween: 40 },
    },
  });
});
