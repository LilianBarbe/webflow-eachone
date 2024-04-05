import { inputHabitationFull } from "$utils/search-city/const.js";
import { addressList } from "$utils/search-city/const.js";
import { getAdress } from "$utils/search-city/getAdressWithAPI.js";

addressList.style.display = "none";

const makeAPIsearch = function (event) {
  let address = event.target.value;
  if (address.length > 3) {
    getAdress(address);
  }
};

export const searchCity = inputHabitationFull.addEventListener("input", makeAPIsearch);
