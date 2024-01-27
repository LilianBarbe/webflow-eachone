import "node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css";

import autoComplete from "@tarekraafat/autocomplete.js";
import { dataPrescribers } from "src/data/prescribersArr.js";

const selectors = document.querySelectorAll("input[autocomplete]");
export const setupAutoComplete = function () {
  selectors.forEach(function (selector) {
    const selectorID = "#" + selector.id;
    const autoCompleteJS = new autoComplete({
      selector: `${selectorID}`,
      placeHolder: "Chercher un organisme...",
      data: {
        src: dataPrescribers,
        keys: ["Name"],
        cache: true,
      },
      threshold: 1,
      resultItem: {
        highlight: true,
        tag: "li",
        class: "autoComplete_result",
      },

      resultsList: {
        element: (list, data) => {
          if (!data.results.length) {
            const message = document.createElement("li");
            message.setAttribute("class", "autoComplete_result");
            let errorMsg = "Je ne trouve pas ou n'ai pas d'organisation";
            message.innerHTML = `<span>${errorMsg}</span>`;
            list.prepend(message);
            message.addEventListener("click", () => {
              list.style.display = "none"; // Fix: Set the display property to "none" for the message element
              const selection = { value: { Name: errorMsg } };
              autoCompleteJS.input.value = selection.value.Name;
              const recordIDInput = document.querySelectorAll("input[data-prescribing='id']");
              recordIDInput.value = "";
              recordIDInput.forEach(function (input) {
                input.value = recordIDInput.value;
              });
            });
          }
        },
        noResults: true,
      },
      events: {
        input: {
          selection: (event) => {
            const selection = event.detail.selection.value.Name;
            autoCompleteJS.input.value = selection;
            const recordIDInput = document.querySelectorAll("input[data-prescribing='id']");
            recordIDInput.value = event.detail.selection.value.recordID;
            // const simulatedEvent = new Event("input", { bubbles: true });
            // autoCompleteJS.input.dispatchEvent(simulatedEvent);
            recordIDInput.forEach(function (input) {
              input.value = recordIDInput.value;
            });
          },
        },
      },
    });
  });
};
