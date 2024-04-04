import { getAdress } from "$test/getAdressApi.js";

const autoCompleteInput = document.getElementById("autoComplete");
let adress;

document.querySelector(".adress_list").style.display = "none";

// à l'input, renvoie un array de propositions
autoCompleteInput.addEventListener("input", function () {
  adress = autoCompleteInput.value;
  getAdress(adress);
  document.querySelector(".adress_list").style.display = "flex";
});
