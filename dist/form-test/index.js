"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/findParams.ts
  var ParamsToSearch = class {
    constructor(name, inputAttr) {
      this.currentURL = new URL(window.location.href);
      this.name = name;
      this.inputAttr = inputAttr;
    }
    search() {
      const input = document.querySelectorAll(`[${this.inputAttr}]`);
      const val = this.currentURL.searchParams.get(this.name);
      input.forEach((i) => {
        if (val)
          i.value = val;
      });
    }
  };
  var paramsToSearchArr = [
    new ParamsToSearch("application_mail_address", "data-email"),
    new ParamsToSearch("application_prescribing_organisation", "data-orga"),
    new ParamsToSearch("campaign", "data-campaign")
  ];
  var paramsSearch = function() {
    paramsToSearchArr.forEach((param) => {
      param.search();
    });
  };

  // src/utils/inputsMirror.js
  var inputMirror = class {
    constructor() {
      this.inputsA = Array.from(document.querySelectorAll("[data-mirror-a]"));
      this.inputsB = Array.from(document.querySelectorAll("[data-mirror-b]"));
      this.registerEvents();
    }
    // Register events
    registerEvents() {
      this.inputsA.forEach((input, index) => {
        input.addEventListener("input", (e) => {
          this.inputsB[index].value = e.target.value;
        });
      });
    }
  };
  var inputsMirror = new inputMirror();

  // src/utils/redirectWithParams.ts
  var currentURL = new URL(window.location.href);
  var paramsToKepp = currentURL.search;
  var linkKeppParams = document.querySelectorAll("[rel='keep-params']");
  var redirectLinksTest = function() {
    linkKeppParams.forEach((link) => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        this.href = this.href + paramsToKepp;
        console.log(this.href);
      });
    });
  };

  // src/utils/showHiddenFields.ts
  var hiddenInputs = document.querySelectorAll("div[data-hidden]");
  var showHiddenInputs = function(decision) {
    if (!decision) {
      hiddenInputs.forEach(function(input) {
        input.classList.add("display-none");
      });
    }
  };

  // src/form-test/index.js
  function setupForms() {
    inputsMirror.registerEvents();
    redirectLinksTest();
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
      maxlength: jQuery.validator.format("Maximum {0} caract\xE8res."),
      minlength: jQuery.validator.format("Au moins {0} caract\xE8res."),
      rangelength: jQuery.validator.format("votre message  entre {0} et {1} caract\xE9res."),
      range: jQuery.validator.format("votre message  entre {0} et {1}."),
      max: jQuery.validator.format("Votre message est inf\xE9rieur ou \xE9gal \xE0 {0}."),
      min: jQuery.validator.format("Votre message est sup\xE9rieur ou \xE9gal \xE0 {0}.")
    });
    jQuery.validator.addMethod(
      "customPostalCode",
      function(value, element) {
        return this.optional(element) || /^[0-9]{1,5}$/gm.test(value);
      },
      "Veuillez fournir un code postal valide."
    );
    jQuery.validator.addMethod(
      "customDate",
      function(value, element) {
        return this.optional(element) || /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/gm.test(
          value
        );
      },
      "Veuillez fournir une date au format JJ/MM/AAAA."
    );
    jQuery.validator.addMethod(
      "customPhoneNumberWhatsApp",
      function(value, element) {
        return this.optional(element) || /^\s*\+?((\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
          value
        );
      },
      "Veuillez fournir un num\xE9ro de t\xE9l\xE9phone valide commen\xE7ant par '+'"
    );
    jQuery.validator.addMethod(
      "customPhoneNumber",
      function(value, element) {
        return this.optional(element) || /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
          value
        );
      },
      "Veuillez fournir un num\xE9ro de t\xE9l\xE9phone valide"
    );
    jQuery.validator.addMethod(
      "customEmail",
      function(value, element) {
        return this.optional(element) || /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm.test(
          value
        );
      },
      "Veuillez fournir une adresse e-mail valide."
    );
    document.addEventListener("DOMContentLoaded", function() {
      const sectionForm = document.querySelectorAll("[form-component]");
      sectionForm.forEach(function(section) {
        const form = section.querySelector("form[form-element]");
        const formID = section.querySelector("form[form-element]").id;
        const inputsStep1 = form.querySelectorAll(".fieldset.is-1 input");
        const step1 = form.querySelector(".fieldset.is-1");
        const inputsStep2 = form.querySelectorAll(".fieldset.is-2 input, .fieldset.is-2 select");
        const step2 = form.querySelector(".fieldset.is-2");
        const btnStep1 = form.querySelector(".msf-button");
        const btnStep2 = form.querySelector(".msf-button.is-submit");
        const btnSubmit = form.querySelector("[submit-btn]");
        const btnSubmitMirror = document.querySelector("[data-submit-mirror]");
        var validator = $(`#${formID}`).validate({
          debug: false,
          rules: {
            application_form_mail_address: {
              required: true,
              customEmail: true
            },
            select: {
              // applique la règle à tous les selects
              required: true
            },
            application_form_habitation_postcode: {
              //Assumer que "postalCode" est le name de votre champ code postal
              required: true,
              customPostalCode: true,
              maxlength: 5
            },
            application_form_birth_date: {
              customDate: true,
              maxlength: 10
            },
            application_form_whatsapp_phone_number: {
              required: true,
              customPhoneNumberWhatsApp: true
            },
            application_form_phone_number: {
              required: true,
              customPhoneNumber: true,
              minlength: 10
            }
          }
        });
        const verifyInputs = function(inputs) {
          let allValid = true;
          inputs.forEach(function(input) {
            let result = validator.element(input);
            if (!result) {
              allValid = false;
            }
          });
          return allValid;
        };
        inputsStep1.forEach(function(input) {
          input.value = "sthsrythsrthsr@luigh";
        });
        const displayStep2 = function() {
          step1.classList.add("display-none");
          step2.classList.remove("display-none");
          btnStep1.classList.add("display-none");
          btnStep2.classList.remove("display-none");
        };
        const displayStep1 = function() {
          step1.classList.remove("display-none");
          step2.classList.add("display-none");
          btnStep1.classList.remove("display-none");
          btnStep2.classList.add("display-none");
        };
        step2.classList.add("display-none");
        btnStep1.addEventListener("click", function() {
          let isStepOneValid = verifyInputs(inputsStep1);
          if (isStepOneValid) {
            displayStep2();
            btnSubmitMirror.click();
          }
        });
        btnStep2.addEventListener("click", function() {
          let isStepTwoValid = verifyInputs(inputsStep2);
          if (isStepTwoValid) {
            btnSubmit.click();
          }
        });
      });
    });
    paramsSearch();
    showHiddenInputs(false);
    function paramsHas(param) {
      const currentURL2 = new URL(window.location.href);
      return currentURL2.searchParams.has(param);
    }
  }
})();
//# sourceMappingURL=index.js.map
