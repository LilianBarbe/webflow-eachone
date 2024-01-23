// Objet URL
const currentURL: URL = new URL(window.location.href);
// Params à transporter
const paramsToKepp: string = currentURL.search;
// Lien qui doivent conserver
const linkKeppParams = document.querySelectorAll<HTMLLinkElement>("[lb-keep-params]");

// Fonction de redirection
export const redirectLinks = function () {
  linkKeppParams.forEach((link) => {
    link.href = link.href + paramsToKepp;
  });
};

// Fonction de redirection TEST
export const redirectLinksTest = function () {
  // pour chaque lien
  linkKeppParams.forEach((link) => {
    // au click
    link.addEventListener("click", function (e) {
      // on ne redirige pas
      e.preventDefault();
      // on inclue les params dans le lien
      const href = "/inscription-programme" + paramsToKepp;
      // on log le lien
      // eslint-disable-next-line no-console
      console.log(href);
    });
  });
};
