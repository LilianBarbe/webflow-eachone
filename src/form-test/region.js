import "node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css";

import autoComplete from "@tarekraafat/autocomplete.js";

// const select = document.querySelector("select[number]");
// const setPays = async function () {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
//   await data.forEach((pays) => {
//     const e = document.createElement("option");
//     e.value = `name : ${pays.name.common}`;
//     e.text = `${pays.name.common}`;
//     // select.appendChild(e);
//   });
// };

// setPays();

const autoCompleteJS = new autoComplete({
  placeHolder: "Chercher une ville",
  data: {
    src: async (query) => {
      try {
        const source = await fetch(`https://vicopo.selfbuild.fr/cherche/${query}`);
        const data = await source.json();
        // Flatten the cities array to be directly usable by the autocomplete.
        return data.cities;
      } catch (error) {
        return error;
      }
    },
    keys: ["city", "code"],
  },
  resultItem: {
    highlight: true,
    element: (item, data) => {
      item.style = "display: flex; justify-content: space-between;";
      item.innerHTML = `
      <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        ${data.value.city}
      </span>
      <span style="display: flex; align-items: center; font-size: 13px; font-weight: 100; text-transform: uppercase; color: rgba(0,0,0,.3);">
        ${data.value.code}
      </span>`;
    },
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = `${selection.city} (${selection.code})`;
      },
    },
  },
});
