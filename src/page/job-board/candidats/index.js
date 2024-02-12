// import

import { paramsSearch } from "$utils/findParams.ts";
import { redirectLinks } from "$utils/redirectWithParams.ts";
import { setupVideoSwiper } from "$utils/swiper/video.js";

// construct
setupVideoSwiper();
paramsSearch();
redirectLinks();

// functions

//// inclure society
document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll("[offre-general]");
  elements.forEach(function (element) {
    // replace 'attribute-name' with the name of the attribute you want to check
    if (element.getAttribute("society-first") === "true") {
      let relatedEl = document.querySelector("[offre-society]");
      if (relatedEl && element.firstChild) {
        element.insertBefore(relatedEl, element.firstChild);
      } else if (relatedEl) {
        element.appendChild(relatedEl);
      }
    }
  });
});

console.log("WORK");

// functions
//// verifier les params
const currentURL = new URL(window.location.href);
function paramsHas(param) {
  return currentURL.searchParams.has(param);
}

// modifier la question prescribing
if (paramsHas("contact_mail_address")) {
  document.querySelectorAll('input[name="contact_mail_address"]').forEach(function (mail) {
    mail.value = currentURL.searchParams.get("contact_mail_address");
  });
} else {
  //
}

function setupForms() {
  paramsSearch();

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

  const formID = document.querySelector("form[form-element]").id;

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
      contact_mail_address: {
        required: true,
        customEmail: true,
      },
      select: {
        required: true,
      },
      contact_habitation_postcode: {
        required: true,
        customPostalCode: true,
        maxlength: 5,
      },
      contact_birth_date: {
        customDate: true,
        maxlength: 10,
      },
      contact_whatsapp_phone_number: {
        required: true,
        customPhoneNumberWhatsApp: true,
      },
      contact_phone_number: {
        required: true,
        customPhoneNumber: true,
        minlength: 10,
        maxlength: 10,
      },
    },
  });
}

setupForms();
