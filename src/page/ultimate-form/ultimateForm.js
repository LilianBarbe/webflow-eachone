// ?application_mail_address=test@gmail.com

console.log("yeees");

let adminStatutsNon = $('[msf="administrative_status_no"]');
let adminStatutsOui = $('[msf="administrative_status_yes"]');
let finalAdmin = $('[msf="administrative_status"]');

let value = null; // Déclarer la variable value en dehors des fonctions de modification

adminStatutsNon.on("change", function () {
  value = $(this).val(); // Mettre à jour la valeur de value
  console.log("admin non : click ; valeur" + value);
  updateFinalAdminValue();
});

adminStatutsOui.on("change", function () {
  value = $(this).val(); // Mettre à jour la valeur de value
  console.log("admin oui : click" + value);
  updateFinalAdminValue();
});

function updateFinalAdminValue() {
  finalAdmin.val(value); // Définir la nouvelle valeur
  console.log("admin : " + finalAdmin.val());
}

// Variables
let params = new URLSearchParams(window.location.search);
const thankYouPage = params.has("society")
  ? encodeURI(`https://${location.host}/programmes-society-thank-you-page`)
  : encodeURI(`https://${location.host}/programmes-all-in-one-thank-you-page`);

// Fonctions

function handleSocietyCase() {
  const traduction = $(".msf_label-traduction");
  const societyLastQuestionWrap = $('[msf="society"]');
  const educationLevelSociety = $('[msf="etudes-society"]');
  const noSocietyWraps = $('[msf="no-society"]');
  const noSocietyQuestion1 = $('[msf="society-permis"]');
  const noSocietyQuestion2 = $('[msf="society-mobility"]');
  const educationLevelNormal = $('[msf="etudes"]');

  if (params.has("society")) {
    traduction.show();
    societyLastQuestionWrap.show();
    educationLevelSociety.attr("required", true);
    noSocietyWraps.hide();
    noSocietyQuestion1.removeAttr("required");
    noSocietyQuestion2.removeAttr("required");
    educationLevelNormal.removeAttr("required");
  } else {
    educationLevelSociety.removeAttr("required");
    societyLastQuestionWrap.hide();
    noSocietyQuestion1.attr("required");
    noSocietyQuestion2.attr("required");
  }
}

function setEmail() {
  if (params.has("application_mail_address")) {
    console.log("application_mail_address");
    const email = params.get("application_mail_address");
    $("input[msf='email']").val(email);
    console.log(email);
  }
}

function setOpportunity() {
  if (params.has("opportunity")) {
    console.log("opportunity");
    const opportunityVal = params.get("opportunity");
    $("input[msf='opportunity']").val(opportunityVal);
    console.log(opportunityVal);
  }
}

function redirect() {
  window.location.href = thankYouPage;
  // On redirige vers la variable thankYouPage
}

function handleAdmin() {
  const educationLevelNormal = $('[msf="etudes-society"]');
  const educationLevelSociety = $('[msf="etudes"]');
  const educationLevelFinal = $('[msf="education-level"]');
  const thankYouPage = params.has("society")
    ? encodeURI(`https://${location.host}/programmes-society-thank-you-page`)
    : encodeURI(
        `https://${location.host}/programmes-all-in-one-thank-you-page`
      );

  $("form").on("submit", function () {
    setTimeout(redirect, 1500);
    educationLevelFinal.val(
      educationLevelNormal.val() + educationLevelSociety.val()
    );
    setTimeout(redirect, 1500);
  });
}

function handleCodePostalInput() {
  const codePostal = $('[champ="code-postal"]');
  codePostal.on("keypress", function (event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  });

  codePostal.on("paste", function (e) {
    e.preventDefault();
  });
}

function handleDatePickerInput() {
  const datePicker = $('[data-toggle="datepicker"]');
  datePicker.on("keydown", function (e) {
    e.preventDefault();
  });

  datePicker.on("paste", function (e) {
    e.preventDefault();
  });
}

// Exécution
$(document).ready(function () {
  setTimeout(function () {
    $("input[msf='email']").attr("disabled", true);
    setOpportunity();
    handleSocietyCase();
    handleAdmin();
    handleCodePostalInput();
    handleDatePickerInput();
    setEmail();
  }, 100);
});
