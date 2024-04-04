import { inputVille } from "$utils/search-city/const.js";
import { inputCodePostal } from "$utils/search-city/const.js";
import { inputNumberStreet } from "$utils/search-city/const.js";
import { textAddress } from "$utils/search-city/const.js";
import { parent } from "$utils/search-city/const.js";
import { addressText } from "$utils/search-city/const.js";
import { addressPostalText } from "$utils/search-city/const.js";
import { inputHabitationCity } from "$utils/search-city/const.js";
import { addressList } from "$utils/search-city/const.js";

export const getAdress = async (search) => {
  try {
    // Nettoyer le contenu précédent
    while (parent.children.length > 1) {
      parent.removeChild(parent.lastChild);
    }

    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${search}`);
    const data = await response.json();

    // afficher list quand resultats
    addressList.style.display = "flex";

    // Utiliser un format d'objet pour stocker plus d'infos sur chaque adresse
    const addresses = data.features.map((feature) => ({
      label: feature.properties.label,
      city: feature.properties.city,
      postcode: feature.properties.postcode,
      context: feature.properties.context,
      numero: feature.properties.housenumber,
      nom: feature.properties.name,
    }));

    addresses.forEach((address) => {
      const clone = textAddress.cloneNode(true);
      const cloneLabel = clone.querySelector(addressText);
      const clonePostal = clone.querySelector(addressPostalText);
      cloneLabel.textContent = address.label;
      clonePostal.textContent = address.context;
      clone.style.display = ""; // S'assurer que le clone est visible

      // Ajouter un écouteur d'événements pour chaque clone
      clone.addEventListener("click", () => {
        inputVille.value = address.city;
        inputCodePostal.value = address.postcode;
        inputNumberStreet.value = address.nom;
        inputHabitationCity.value = address.label;
        addressList.style.display = "none";
      });

      // Adding click event listener to the whole document
      document.addEventListener("click", function (event) {
        // Checking if the clicked element is not the address list or any of its children
        if (!addressList.contains(event.target)) {
          addressList.style.display = "none";
        }
      });

      parent.appendChild(clone);
    });

    // Cacher l'élément d'origine après avoir cloné pour la première adresse
    textAddress.style.display = "none";

    return addresses; // Retourner les adresses pourrait ne pas être nécessaire si elles sont déjà gérées.
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
};
