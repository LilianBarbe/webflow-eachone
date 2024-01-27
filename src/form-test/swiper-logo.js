// Importer la bibliothèque Swiper
import "swiper/swiper-bundle.css";

import Swiper from "swiper";

// Créer une instance de Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  width: "auto",
  spaceBetween: 50,
});
