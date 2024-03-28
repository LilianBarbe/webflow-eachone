import "node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css";

import autoComplete from "@tarekraafat/autocomplete.js";

import { getAdress } from "$test/getAdressApi.js";

const auto = document.getElementById("autoComplete");
let adress;

document.querySelector(".adress_list").style.display = "none";

// à l'input, renvoie un array de propositions
auto.addEventListener("input", function () {
  adress = auto.value;
  getAdress(adress);
  document.querySelector(".adress_list").style.display = "flex";
});
