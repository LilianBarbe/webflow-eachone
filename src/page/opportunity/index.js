//import
import { redirectLinks } from "$utils/redirectWithParams.ts";
import { setupForms } from "$utils/setupForms.js";
import { setupVideoSwiper } from "$utils/swiper/video.js";

// construct
setupVideoSwiper();
setupForms();
redirectLinks();
//

// const
const sectionStep1and2 = document.querySelector('[section="lead-aio"]');
const sectionStep2 = document.querySelector('[section="step-2"]');
const btnPostuler = document.querySelectorAll('[btn-postuler="true"]');

// functions
//// savoir si un param est présent
const checkIfQueryParamExists = function (queryParam) {
  const currentURL = new URL(window.location.href);
  return currentURL.searchParams.has(queryParam);
};

// Button Postuler
document.addEventListener("DOMContentLoaded", function () {
  btnPostuler.forEach(function (button) {
    button.addEventListener("click", function () {
      const sectionContact = document.querySelector(".section_contact");
      window.scrollTo({
        top: sectionContact.offsetTop,
        behavior: "smooth",
      });
    });
  });
});

//
function displayAppropriateSection() {
  sectionStep1and2.style.display = "none";
  sectionStep2.style.display = "none";
  if (checkIfQueryParamExists("application_mail_address")) {
    // La variable valEmail est actualisée
    sectionStep2.style.display = "block";
    const step2 = document.querySelectorAll('[fieldset="step2"]');
    step2.forEach(function (step) {
      step.classList.remove("display-none");
    });
  } else {
    sectionStep1and2.style.display = "block";
  }
}

displayAppropriateSection();
