// import
// import { paramsAdd } from "$utils/addParams.ts";
import { setupAutoComplete } from "$utils/autoCompleteOrganisations.js";
import { paramsSearch } from "$utils/findParams.ts";
import { inputsMirror } from "$utils/inputsMirror.js";
import { showHiddenInputs } from "$utils/showHiddenFields.ts";

// constuct
inputsMirror.registerEvents();
setupAutoComplete();

// const & let
const sectionForm = document.querySelectorAll("[form-component]");
const prescribingWraps = document.querySelectorAll("[prescribing-wrap]");
const prescribingInputs = document.querySelectorAll("input[prescribing-wrap]");

// functions
//// verifier les params
function paramsHas(param) {
  const currentURL = new URL(window.location.href);
  return currentURL.searchParams.has(param);
}

const prescribingOrNot = paramsHas("prescribing_organisation");

//// setup le form
export function setupForms() {
  paramsSearch();
  showHiddenInputs(false);

  // modifier la question prescribing
  if (!paramsHas("prescribing_organisation")) {
    prescribingWraps.forEach(function (precribingWrap) {
      precribingWrap.style.display = "block";
    });
    prescribingInputs.forEach(function (input) {
      input.rules("add", {
        required: true,
      });
    });
  } else {
    prescribingWraps.forEach(function (precribingWrap) {
      precribingWrap.style.display = "none";
    });
  }

  jQuery.extend(jQuery.validator.messages, {
    required: "Ce champ est requis",
    remote: "votre message",
    email: "Remplissez votre adresse email",
    url: "votre message",
    date: "Remplissez une date valide",
    dateISO: "votre message",
    number: "votre message",
    digits: "votre message",
    creditcard: "votre message",
    equalTo: "votre message",
    accept: "votre message",
    maxlength: jQuery.validator.format("Maximum {0} caractères."),
    minlength: jQuery.validator.format("Au moins {0} caractères."),
    rangelength: jQuery.validator.format("votre message  entre {0} et {1} caractéres."),
    range: jQuery.validator.format("votre message  entre {0} et {1}."),
    max: jQuery.validator.format("Votre message est inférieur ou égal à {0}."),
    min: jQuery.validator.format("Votre message est supérieur ou égal à {0}."),
  });

  // method pour le code postal
  jQuery.validator.addMethod(
    "customPostalCode",
    function (value, element) {
      return this.optional(element) || /^[0-9]{5}$/gm.test(value);
    },
    "Veuillez fournir un code postal valide."
  );

  // method pour la date
  jQuery.validator.addMethod(
    "customDate",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/gm.test(
          value
        )
      );
    },
    "Veuillez fournir une date au format JJ/MM/AAAA."
  );

  // method pour le tel
  // Ajout de la méthode pour le champ numéro de téléphone
  jQuery.validator.addMethod(
    "customPhoneNumberWhatsApp",
    function (value, element) {
      return (
        this.optional(element) ||
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
          value
        )
      );
    },
    "Veuillez fournir un numéro de téléphone valide commençant par '+'"
  );

  // Ajout de la méthode pour le champ numéro de téléphone
  jQuery.validator.addMethod(
    "customPhoneNumber",
    function (value, element) {
      return (
        this.optional(element) ||
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
          value
        )
      );
    },
    "Veuillez fournir un numéro de téléphone valide"
  );

  // Ajout de la méthode pour le champ email
  jQuery.validator.addMethod(
    "customEmail",
    function (value, element) {
      return (
        this.optional(element) ||
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm.test(
          value
        )
      );
    },
    "Veuillez fournir une adresse e-mail valide."
  );

  sectionForm.forEach(function (section) {
    const form = section.querySelector("form[form-element]");
    const formID = section.querySelector("form[form-element]").id;
    const inputsStep1 = form.querySelectorAll(".fieldset.is-1 input");
    const step1 = form.querySelectorAll("[fieldset='step1']");
    const inputsStep2 = form.querySelectorAll(".fieldset.is-2 input, .fieldset.is-2 select");
    const step2 = form.querySelector(".fieldset.is-2");
    const btnStep1 = form.querySelector(".msf-button");
    const btnStep2 = form.querySelector(".msf-button.is-submit");
    const btnSubmit = form.querySelector("[submit-btn]");
    const btnSubmitMirror = section.querySelector("[data-submit-mirror]");
    const textStep = form.querySelectorAll(".text-step");

    var validator = $(`#${formID}`).validate({
      errorPlacement: function (error, element) {
        // si l'élément est de type radio
        if (element.attr("type") === "radio") {
          // place l'erreur dans le dernier enfant du .form-question-wrapper
          error.appendTo(element.closest(".form-question-wrapper"));
        } else {
          // sinon, laissez le comportement par défaut.
          error.insertAfter(element);
        }
      },
      rules: {
        application_mail_address: {
          required: true,
          customEmail: true,
        },
        select: {
          required: true,
        },
        application_habitation_postcode: {
          required: true,
          customPostalCode: true,
          maxlength: 5,
        },
        application_birth_date: {
          customDate: true,
          maxlength: 10,
        },
        application_whatsapp_phone_number: {
          required: true,
          customPhoneNumberWhatsApp: true,
        },
        application_phone_number: {
          required: true,
          customPhoneNumber: true,
          minlength: 10,
          maxlength: 10,
        },
        prescribing_name: {
          required: !prescribingOrNot,
        },
      },
    });

    // verifier les inputs
    const verifyInputs = function (inputs) {
      let allValid = true;
      inputs.forEach(function (input) {
        let result = validator.element(input);
        if (!result) {
          allValid = false;
        }
      });
      return allValid;
    };

    // display step 2
    const displayStep2 = function () {
      step1.forEach(function (step) {
        step.childNodes.forEach(function (child) {
          child.classList.add("display-none");
        });
      });
      step2.classList.remove("display-none");
      btnStep1.classList.add("display-none");
      btnStep2.classList.remove("display-none");
      if (textStep) {
        textStep.forEach(function (text) {
          text.textContent = "Étape 2/2";
        });
      }
    };

    // step 1
    step2.classList.add("display-none");
    btnStep1.addEventListener("click", function () {
      let isStepOneValid = verifyInputs(inputsStep1);
      if (isStepOneValid) {
        displayStep2();
        if (btnSubmitMirror) {
          btnSubmitMirror.click();
        }
      }
    });

    // step 2
    btnStep2.addEventListener("click", function () {
      let isStepTwoValid = verifyInputs(inputsStep2);
      if (isStepTwoValid) {
        btnSubmit.click();
      }
    });
  });
}
