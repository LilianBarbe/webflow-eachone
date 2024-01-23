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
        keys: ["Name", "recordID"],
        cache: true,
      },

      resultsList: {
        element: (list, data) => {
          if (!data.results.length) {
            // Create "No Results" message element
            const message = document.createElement("div");
            // Add class to the created element
            message.setAttribute("class", "no_result");
            // Add message text content
            message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
            // Append message element to the results list
            list.prepend(message);
          }
        },
        noResults: true,
      },
      resultItem: {
        highlight: true,
        tag: "li",
        class: "autoComplete_result",
      },
      events: {
        input: {
          selection: (event) => {
            const selection = event.detail.selection.value.Name;
            const recordIDInput = document.querySelectorAll("input[data-prescribing='id']");
            autoCompleteJS.input.value = selection;
            recordIDInput.value = event.detail.selection.value.recordID;
            recordIDInput.forEach(function (input) {
              input.value = recordIDInput.value;
            });
          },
        },
      },
    });
  });
};
