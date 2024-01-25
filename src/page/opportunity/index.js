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

// functions
//// savoir si un param est présent
const checkIfQueryParamExists = function (queryParam) {
  const currentURL = new URL(window.location.href);
  return currentURL.searchParams.has(queryParam);
};

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
