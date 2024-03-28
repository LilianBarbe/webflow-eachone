export const getAdress = async (search) => {
  try {
    const inputVille = document.getElementById("ville");
    const inputCodePostal = document.getElementById("codepostal");
    const inputNumberStreet = document.getElementById("numberStreet");
    const textAddress = document.querySelector(".address_item");
    // Sélectionner le parent une seule fois
    const parent = textAddress.parentNode;
    // Nettoyer le contenu précédent
    while (parent.children.length > 1) {
      parent.removeChild(parent.lastChild);
    }

    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${search}`);
    const data = await response.json();

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
      const cloneLabel = clone.querySelector("[adress-label]");
      // const cloneCity = clone.querySelector("[adress-city]");
      const clonePostal = clone.querySelector("[adress-postal]");
      cloneLabel.textContent = address.label;
      // cloneCity.textContent = address.city;
      clonePostal.textContent = address.context;
      clone.style.display = ""; // S'assurer que le clone est visible

      // Ajouter un écouteur d'événements pour chaque clone
      clone.addEventListener("click", () => {
        inputVille.value = address.city;
        inputCodePostal.value = address.postcode;
        inputNumberStreet.value = address.nom;
        document.getElementById("autoComplete").value = address.label;
        document.querySelector(".adress_list").style.display = "none";
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
