// displayAddress.js
import { findAddressList, findInputHabitationFull } from "$utils/search-city/const.js";
import { getAdress } from "$utils/search-city/getAdressWithAPI.js"; // Correct import path for getAdress

const parent = document.querySelector(".parent-selector");

const inputHabitationFull = findInputHabitationFull(parent);
const addressList = findAddressList(parent);

addressList.style.display = "none"; // Initially hide the address list

const makeAPIsearch = function (event) {
  let address = event.target.value;
  if (address.length > 3) {
    getAdress(address, parent);
  }
};

inputHabitationFull.addEventListener("input", makeAPIsearch);

export { makeAPIsearch };
