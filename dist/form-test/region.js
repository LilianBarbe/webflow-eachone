"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/form-test/getAdressApi.js
  var getAdress = async (search) => {
    try {
      const inputVille = document.getElementById("ville");
      const inputCodePostal = document.getElementById("codepostal");
      const inputNumberStreet = document.getElementById("numberStreet");
      const textAddress = document.querySelector(".address_item");
      const parent = textAddress.parentNode;
      while (parent.children.length > 1) {
        parent.removeChild(parent.lastChild);
      }
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${search}`);
      const data = await response.json();
      const addresses = data.features.map((feature) => ({
        label: feature.properties.label,
        city: feature.properties.city,
        postcode: feature.properties.postcode,
        context: feature.properties.context,
        numero: feature.properties.housenumber,
        nom: feature.properties.name
      }));
      addresses.forEach((address) => {
        const clone = textAddress.cloneNode(true);
        const cloneLabel = clone.querySelector("[adress-label]");
        const clonePostal = clone.querySelector("[adress-postal]");
        cloneLabel.textContent = address.label;
        clonePostal.textContent = address.context;
        clone.style.display = "";
        clone.addEventListener("click", () => {
          inputVille.value = address.city;
          inputCodePostal.value = address.postcode;
          inputNumberStreet.value = address.nom;
          document.getElementById("autoComplete").value = address.label;
          document.querySelector(".adress_list").style.display = "none";
        });
        parent.appendChild(clone);
      });
      textAddress.style.display = "none";
      return addresses;
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  };

  // src/form-test/region.js
  var autoCompleteInput = document.getElementById("autoComplete");
  var adress;
  document.querySelector(".adress_list").style.display = "none";
  autoCompleteInput.addEventListener("input", function() {
    adress = autoCompleteInput.value;
    getAdress(adress);
    document.querySelector(".adress_list").style.display = "flex";
  });
})();
//# sourceMappingURL=region.js.map
