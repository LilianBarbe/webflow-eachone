console.log("test society 2.0");

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

const params = new URLSearchParams(window.location.search);

// EMAIL
let valEmail;
let inputApplicationMailAdress = $("[champ='application_mail_address']");
inputApplicationMailAdress.on("keyup change", function () {
  valEmail = $(this).val();
});
const paramEmail = $("[champ='application_mail_address']").attr("name");
let myURL;
//
// CrÃ©ation de la fonction de redirection nommÃ©e "redirect"
// elle redirige vers myURL aprÃ¨s submit

// OPPORTUNITY
// let inputOpportunity = $("[champ='opportunity']");
const valOpportunity = $("#opportunity").val();
console.log(valOpportunity);
// inputOpportunity.val(valOpportunity);

let submitBtn = $("input[type=submit]");

// Lorsque l'utilisateur clique sur un bouton de type "submit"
submitBtn.each(function (index) {
  $(this).on("click", function () {
    console.log("click");
    let form = $(this).closest("form");
    let inputApplicationMailAdress = $(form).find("input[name='application_mail_adress']");
    // let valEmail = inputApplicationMailAdress.val();
    if (form.valid() === true) {
      form.submit();
      // Soumission form
      myURL = encodeURI(
        `https://${location.host}/inscription-programme?${paramEmail}=${valEmail}&opportunity=${valOpportunity}&society`
      );
      console.log(myURL);
      setTimeout(function () {
        window.location.href = myURL;
      }, 2000);
      console.log("redirect");
    } else if (form.valid() !== true) {
      console.log("no valid");
    }
    return true;
  });
});

let ProgrammApplication = $("[program_application_choice]");
let selectVille = $("[select-ville]");
let resultatVille;
let resultat;

selectVille.on("change", function () {
  console.log("program_application_choice = " + $(this).val());
  resultatVille = $(this).val();
  ProgrammApplication.val(resultatVille);
  coursDiv.hide();
  typeCours.removeAttr("required");
  selectCours.val("");
});

// Ne pas avoir à choisir ville si c'est One Network
console.log($("#program_type_application_choice").val());
if ($("#program_type_application_choice").val() == "One Network") {
  console.log("ok no ville");
  $("[select-ville]").removeAttr("required");
}
