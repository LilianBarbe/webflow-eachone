// import
import { paramsSearch } from "$utils/findParams.ts";
import { redirectLinks } from "$utils/redirectWithParams.ts";
import { setupVideoSwiper } from "$utils/swiper/video.js";

// construct
setupVideoSwiper();
paramsSearch();
redirectLinks();

// functions

//// inclure society
document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll("[offre-general]");
  elements.forEach(function (element) {
    // replace 'attribute-name' with the name of the attribute you want to check
    if (element.getAttribute("society-first") === "true") {
      let relatedEl = document.querySelector("[offre-society]");
      if (relatedEl && element.firstChild) {
        element.insertBefore(relatedEl, element.firstChild);
      } else if (relatedEl) {
        element.appendChild(relatedEl);
      }
    }
  });
});
