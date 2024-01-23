// SWIPER VIDEO
$(document).ready(function () {
  $("[slider-component]").each(function (index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {
      spaceBetween: "3%",
      navigation: {
        nextEl: $(this).find('[swiper-arrow="right"]')[0],
        prevEl: $(this).find('[swiper-arrow="left"]')[0],
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: "3%",
        },
        // tablet
        768: {
          slidesPerView: 2,
          spaceBetween: "4%",
        },
        // desktop
        992: {
          slidesPerView: 3,
          spaceBetween: "4%",
        },
      },
    });
  });
});

// ?prescribing_organisation
// ?

const params = new URLSearchParams(window.location.search);
//
// APP CREA CHANNEL
let inputContactCreationChannel = $("[champ='contact_creation_channel']");
let valContactCreationChannel = inputContactCreationChannel.val();
//
//
// PRESCRIBING
let inputAppPrescribingOrga = $(
  '[champ="application_prescribing_organisation"]'
);
const paramPrescribing = $(
  '[champ="application_prescribing_organisation"]'
).attr("name");

let valPrescribing = params.get(paramPrescribing);
inputAppPrescribingOrga.val(valPrescribing);

// FILTER //
const urlPrescribing = params.has(paramPrescribing);

// PARAMS DE REDIRECTION
let paramsRedirect = "";

// On Page Load Parcours Partenaires
function pageLoad() {
  // Fonction pour rediriger avec les params
  if (urlPrescribing) {
    console.log("urlPrescribing");
    $(".form-question-wrapper.is-prescribing").hide();
    paramsRedirect = `?application_creation_channel=${valContactCreationChannel}&prescribing_organisation=${valPrescribing}`;
  } else {
    console.log("urlNothing");
    paramsRedirect = `?application_creation_channel=${valContactCreationChannel}`;
    $("[champ='search']")
      .attr("required", "required")
      .on("click", function () {
        $(".combox_wrap").show();
        $(".combox_bg").show();
      });

    $(".combox_link").on("click", function () {
      console.log("click");
      let organisationCombox = $(this).find(".combox-val").text();
      let valCombox = $(this).find(".combox-val").attr("valeur");
      $("[champ='application_prescribing_organisation']").val(valCombox);
      $("[champ='search']").val(organisationCombox);
      $(".combox_wrap").hide();
      $(".combox_bg").hide();
      console.log(valCombox);
    });

    $(".combox_bg").on("click", function () {
      $(".combox_wrap").hide();
      $(this).hide();
    });
  }

  // Fonction de redirection
  let newLink;

  function redirect() {
    setTimeout(function () {
      window.location.href = newLink;
    }, 0);
  }

  // REDIRECTION DES CARDS FORMATIONS AVEC PARAMS //
  let card = $(".formations_card");
  card.click(function (e) {
    e.preventDefault(); // empêche le comportement par défaut du lien (redirection)
    var link = $(this).attr("slug"); // récupère l'URL du lien cliqué
    var localhost = window.location.origin;
    newLink = encodeURI(localhost + "/formations/" + link + paramsRedirect);
    console.log(`Lien vers qui il doit aller = ${newLink}`);
    redirect();
  });
}

setTimeout(function () {
  pageLoad();
}, 2000);

function escaCount() {
  // sélectionnez tous les éléments avec la classe "combox_link"
  $(".combox-val").each(function () {
    // obtenez la valeur de l'attribut nommé "valeur"
    const text = $(this).text();
    const valeur = $(this).attr("valeur");
    // affichez la valeur dans la console
    console.log(text + " : " + valeur);
  });

  console.log("Nombre de valeurs : " + $(".combox-val").length);
}
