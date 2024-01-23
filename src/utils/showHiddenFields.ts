const hiddenInputs = document.querySelectorAll("[fieldset='hidden']");

export const showHiddenInputs = function (decision: boolean) {
  if (!decision) {
    hiddenInputs.forEach(function (input) {
      input.classList.add("display-none");
    });
  }
};
