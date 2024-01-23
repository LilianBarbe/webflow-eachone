// REGLES APPLICABLES A TOUS LES FORMULAIRES
// Les select doivent avoir au moins un choix
// Les phone doivent contenir au moins 10 caractères

$(document).ready(function () {
  function validateForms() {
    $("form").each(function () {
      var select = $("select");
      var phone = $('input[champ="phone"]');
      var input = $('input[type="text"]');
      var datePicker = $('[date="date-picker"]');
      var codePostal = $('[champ="code-postal"]');

      input.attr("minlength", "2");
      phone.attr("minlength", "8");
      codePostal.attr("maxlength", "5");

      function chiffresSeulementSansCollage(element) {
        // Autoriser uniquement la saisie de chiffres

        phone.on("input", function () {
          // Remplacer tous les caractères non autorisés
          this.value = this.value.replace(/[^0-9]/g, "");

          // S'assurer que le signe + ne soit présent qu'une seule fois en début de chaîne
          this.value = this.value.replace(/^\++/, "+").replace(/[+]/g, "");
        });

        // Empêcher le copier-coller
        element.on("paste", function (e) {
          e.preventDefault();
        });
      }

      chiffresSeulementSansCollage(phone);
      chiffresSeulementSansCollage(codePostal);

      datePicker.on("keydown paste", function (e) {
        e.preventDefault();
      });

      function moveErrorUnderParent(error, element) {
        if (element.is(":checkbox")) {
          error.appendTo(element.parents(".form-field-wrapper"));
        } else {
          error.insertAfter(element);
        }
      }

      $.validator.addMethod(
        // Fonction pour forcer le Select à avoir au moins une valeur
        "selectOneValue",
        function (value) {
          return value !== "0";
        },
        "Veuillez choisir une option"
      );

      $(this).validate({
        errorPlacement: moveErrorUnderParent,
        highlight: function (element) {
          $(element).addClass("error");
        },
        unhighlight: function (element) {
          $(element).removeClass("error");
        },

        rules: {
          [select]: {
            // pour l'input à ce nom, on applique un choix obligatoire
            selectOneValue: true,
          },
        },
      });

      select.each(function () {
        $(this).find("option:first").prop("disabled", true);
      });
    });
  }
  validateForms();
});
