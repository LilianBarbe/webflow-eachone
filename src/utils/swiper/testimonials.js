import "swiper/css";

import Swiper from "swiper";

export const setupSwiper = function () {
  sliderComponents.forEach((component) => {
    const swiperCandidat = new Swiper(component.querySelector(".swiper.is-candidat"), {
      slidesPerView: "auto",
      speed: 700,
      keyboard: true,
      mousewheel: { forceToAxis: true },
      freeMode: false,
      slideToClickedSlide: true,
      followFinder: false,
      loop: false,
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
      navigation: {
        nextEl: component.querySelector(".testimonial_btn.is-right"),
        prevEl: component.querySelector(".testimonial_btn.is-left"),
        disabledClass: "is-disabled",
      },
      breakpoints: { 480: { slidesPerview: 1, spaceBetween: "4%" } },
    });

    const swiperEntreprise = new Swiper(component.querySelector(".swiper.is-entreprise"), {
      slidesPerView: "auto",
      speed: 700,
      keyboard: true,
      mousewheel: { forceToAxis: true },
      freeMode: false,
      slideToClickedSlide: true,
      followFinder: false,
      loop: false,
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
      navigation: {
        nextEl: component.querySelector(".testimonial_btn.is-right.is-entreprise"),
        prevEl: component.querySelector(".testimonial_btn.is-left.is-entreprise"),
        disabledClass: "is-disabled",
      },
    });

    document.querySelectorAll(".testimonial_button-radio").forEach((element) => {
      element.addEventListener("click", function () {
        this.closest(".testimonial_button").classList.toggle("is-active");
        this.closest(".testimonial_button").nextElementSibling.classList.remove("is-active");

        let choice = this.nextElementSibling.textContent;
        if (choice === "Entreprises") {
          document.querySelector(".swiper.is-entreprise").style.display = "block";
          document.querySelector(".swiper.is-candidat").style.display = "none";
          document
            .querySelector(".testimonial_btn-wrap.is-entreprise")
            .classList.add("active-slide");
          document
            .querySelector(".testimonial_btn-wrap.is-candidat")
            .classList.remove("active-slide");
        } else {
          document.querySelector(".swiper.is-entreprise").style.display = "none";
          document.querySelector(".swiper.is-candidat").style.display = "block";
          document.querySelector(".testimonial_btn-wrap.is-candidat").classList.add("active-slide");
          document
            .querySelector(".testimonial_btn-wrap.is-entreprise")
            .classList.remove("active-slide");
        }
      });
    });
    document.querySelector(".testimonial_btn-wrap.is-candidat").classList.add("active-slide");
  });
};
