// class ParamsToAdd {
//   currentURL: URL;
//   name: string;
//   inputAttr: string;
//   constructor(name: string, inputAttr: string) {
//     this.currentURL = new URL(window.location.href);
//     this.name = name;
//     this.inputAttr = inputAttr;
//   }
//   add() {
//     const input = document.querySelector<HTMLInputElement>(`[${this.inputAttr}]`);
//     if (input && input.value) this.currentURL.searchParams.set(this.name, input.value);
//   }
// }

// const paramsToAddArr = [
//   new ParamsToAdd("application_mail_address", "data-email"),
//   new ParamsToAdd("prescribing_organisation", "data-orga"),
//   new ParamsToAdd("acquisition_campaign", "data-campaign"),
// ];

// export const paramsAdd = function () {
//   paramsToAddArr.forEach((param) => {
//     param.add();
//   });
//   window.location.href = paramsToAddArr[0].currentURL.toString();
// };
