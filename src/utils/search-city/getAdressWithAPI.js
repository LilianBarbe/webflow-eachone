// Dans getAdressWithAPI.js
import {
  addressPostalTextSelector,
  addressTextSelector,
  findAddressList,
  findInputCodePostal,
  findInputHabitationFull,
  findInputNumberStreet,
  findInputVille,
  findParentElement,
  findTextAddress,
} from "$utils/search-city/const.js";

export const getAdress = async (search, parent) => {
  try {
    const addressList = findAddressList(parent);
    const textAddress = findTextAddress(parent);
    const parentNode = findParentElement(parent);

    // Nettoyer le contenu précédent
    while (parentNode.children.length > 1) {
      parentNode.removeChild(parentNode.lastChild);
    }

    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${search}`);
    const data = await response.json();
    addressList.style.display = "flex";

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
      const cloneLabel = clone.querySelector(addressTextSelector());
      const clonePostal = clone.querySelector(addressPostalTextSelector());
      cloneLabel.textContent = address.label;
      clonePostal.textContent = address.context;
      clone.style.display = ""; // S'assurer que le clone est visible

      clone.addEventListener("click", () => {
        findInputVille(parent).value = address.city;
        findInputCodePostal(parent).value = address.postcode;
        findInputNumberStreet(parent).value = address.nom;
        findInputHabitationFull(parent).value = address.label;
        addressList.style.display = "none";
      });

      document.addEventListener("click", function (event) {
        if (!addressList.contains(event.target)) {
          addressList.style.display = "none";
        }
      });

      parentNode.appendChild(clone);
    });

    textAddress.style.display = "none";
    return addresses;
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
};
