// const.js
// Fonctions pour trouver des éléments DOM spécifiques dans un parent donné

export function findInputHabitationFull(parent) {
  return parent.querySelector("[data-address='full']");
}

export function findAddressList(parent) {
  return parent.querySelector("[data-address-list]");
}

export function findInputVille(parent) {
  return parent.querySelector("[data-empty-ville]");
}

export function findInputCodePostal(parent) {
  return parent.querySelector("[data-empty-codepostal]");
}

export function findInputNumberStreet(parent) {
  return parent.querySelector("[data-empty-numberstreet]");
}

export function findTextAddress(parent) {
  return parent.querySelector("[data-address-item]");
}

export function findParentElement(parent) {
  return findTextAddress(parent).parentNode; // Utilise findTextAddress pour déduire le parent
}

export function addressTextSelector() {
  return "[data-adress-label]"; // Retourne le sélecteur plutôt qu'un élément
}

export function addressPostalTextSelector() {
  return "[data-adress-postal]"; // Retourne le sélecteur plutôt qu'un élément
}
