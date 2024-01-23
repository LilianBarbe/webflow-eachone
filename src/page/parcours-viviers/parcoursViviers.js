console.log("viviers");

function setupRadioButtons(groupName) {
  let radioInputs = document.querySelectorAll(
    `input[type=radio][lb-choice-form='${groupName}']`
  );
  let responseDiv = document.querySelector(
    `div[lb-choice-form='${groupName}']`
  );

  radioInputs.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (this.nextSibling.textContent === "Oui") {
        responseDiv.classList.remove("hidden");
        /*        responseDiv.querySelector("input").required = true
         */
      } else if (this.nextSibling.textContent === "Non") {
        responseDiv.classList.add("hidden");
        /*        responseDiv.querySelector("input").required = false
         */
      }
    });
  });
}

setupRadioButtons("numero");

//////// Attention au params
const currentParams = new URLSearchParams(window.location.search); // Paramètres de l'URL actuelle

const searchPrescribing = () => {
  if (currentParams.has("application_prescribing_organisation")) {
    const prescribingVal = currentParams.get(
      "application_prescribing_organisation"
    );
    const inputElement = document.querySelector(
      'input[application_prescribing_organisation="msf"]'
    );
    const inputWrap = document.querySelector("div[data-hidden-prescribing]");
    console.log(
      `la valeur de application_prescribing_organisation est ${prescribingVal}`
    );

    inputElement.value = prescribingVal;
    inputWrap.classList.add("hidden");
    document.querySelector("input[lb-prescribing-mirror]").value =
      prescribingVal;
  } else {
    console.log(
      "Élément input pour application_prescribing_organisation non trouvé."
    );
    document.querySelector("input[lb-prescribing-mirror]").value =
      "Non renseigné";
    setupRadioButtons("organisation");
    setTimeout(function () {
      // A mettre sous une certaine condition
      $("[champ='search']").on("click", function () {
        $(".combox_wrap").show();
        $(".combox_bg").show();
      });

      $(".combox_cms-item").on("click", function () {
        let organisationCombox = $(this).find(".combox-val").text();
        let valCombox = $(this).find(".combox-val").attr("valeur");
        $("[application_prescribing_organisation='msf']").val(valCombox);
        $("[champ='search']").val(organisationCombox);
        console.log(valCombox);
        $(".combox_wrap").hide();
        $(".combox_bg").hide();
      });

      $(".combox_bg").on("click", function () {
        $(".combox_wrap").hide();
        $(this).hide();
      });
    }, 5000);
  }
};

const searchCampaign = () => {
  let campaignVal;
  const campInput = document.querySelectorAll("input[data-campagne]");
  if (currentParams.has("acquisition_campaign")) {
    campaignVal = currentParams.get("acquisition_campaign");
    console.log(`valeur trouvée : ${campaignVal}`);

    campInput.forEach(function (camp) {
      camp.value = campaignVal;
    });
    document
      .querySelectorAll('input[lb-mirror-target="campagne"]')
      .forEach((input) => {
        input.value = campaignVal;
      });
  } else {
    campaignVal = "rec16RmAqTs4deUnW";
    campInput.forEach(function (camp) {
      camp.value = campaignVal;
    });
    document
      .querySelectorAll('input[lb-mirror-target="campagne"]')
      .forEach((input) => {
        input.value = campaignVal;
      });
  }
};

const mirrorTriggers = document.querySelectorAll("[lb-mirror-trigger]");
const mirrorTargets = document.querySelectorAll("[lb-mirror-target]");
const submitBtnTrigger = document.querySelector("[lb-mirror-submit='trigger']");
const submitBtnTarget = document.querySelector("[lb-mirror-submit='target']");

const groups = {};

// Création des groupes
mirrorTriggers.forEach(function (trigger) {
  const triggerValue = trigger.getAttribute("lb-mirror-trigger");
  if (!groups[triggerValue]) {
    groups[triggerValue] = {
      trigger: trigger,
      targets: [],
    };
  }
});

mirrorTargets.forEach(function (target) {
  const targetValue = target.getAttribute("lb-mirror-target");
  if (groups[targetValue]) {
    groups[targetValue].targets.push(target);
  }
});

// Fonction pour mettre à jour les targets
const updateTargets = function (triggerValue) {
  const group = groups[triggerValue];
  if (group && group.targets.length > 0) {
    group.targets.forEach(function (target) {
      target.value = group.trigger.value;
    });
  }
};

// Ajout d'un écouteur d'événements unique
document.addEventListener("input", function (event) {
  const triggerValue = event.target.getAttribute("lb-mirror-trigger");
  if (triggerValue) {
    updateTargets(triggerValue);
  }
});

// Initialisation des valeurs
Object.keys(groups).forEach(function (triggerValue) {
  updateTargets(triggerValue);
});

submitBtnTrigger.addEventListener("click", function () {
  submitBtnTarget.click();
});

//
//
//

$(document).ready(function () {
  searchCampaign();
  searchPrescribing();
});

///////// Surveiller les params et les renvoyer vers la formation

//// URL de test : https://eachone-escadrille.webflow.io/nos-offres-en-cours?prescribing_organisation=recordID&acquisition_campaign=campagne

// Liste des paramètres à surveiller
var paramsToKeep = [
  "application_prescribing_organisation",
  "acquisition_campaign",
];

// Fonction pour ajouter des paramètres à une URL
function addParamsToUrl(url) {
  var currentParams = new URLSearchParams(window.location.search); // Paramètres de l'URL actuelle
  var urlObj = new URL(url); // Créer un objet URL pour l'URL du lien

  paramsToKeep.forEach(function (param) {
    if (currentParams.has(param)) {
      urlObj.searchParams.set(param, currentParams.get(param));
    }
  });

  return urlObj.href;
}

// Obtenir tous les liens avec la classe .formation
var formationLinks = document.querySelectorAll("a[lb-keep-params]");

// Attacher un gestionnaire d'événements à chaque lien
formationLinks.forEach(function (formation) {
  formation.addEventListener("click", function (event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Ajouter les paramètres à l'URL du lien et naviguer vers cette URL
    window.location.href = addParamsToUrl(formation.href);
  });
});
