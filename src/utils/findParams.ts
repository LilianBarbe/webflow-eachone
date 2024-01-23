class ParamsToSearch {
  currentURL: URL;
  name: string;
  inputAttr: string;
  constructor(name: string, inputAttr: string) {
    this.currentURL = new URL(window.location.href);
    this.name = name;
    this.inputAttr = inputAttr;
  }
  search() {
    const input = document.querySelectorAll<HTMLInputElement>(`[${this.inputAttr}]`);
    const val = this.currentURL.searchParams.get(this.name);
    input.forEach((i) => {
      if (val) i.value = val;
    });
  }
}

const paramsToSearchArr = [
  new ParamsToSearch("application_mail_address", "data-email"),
  new ParamsToSearch("prescribing_organisation", "data-orga"),
  new ParamsToSearch("acquisition_campaign", "data-campaign"),
];

export const paramsSearch = function () {
  paramsToSearchArr.forEach((param) => {
    param.search();
  });
};
