export const translateDate = $(document).ready(function () {
  function translateDate(o, n, l) {
    let { DateTime } = luxon;
    let x = document.getElementsByClassName("luxon");
    let i;
    for (i = 0; i < x.length; i++) {
      x[i].innerText = DateTime.fromFormat(x[i].innerText, o).setLocale(l).toFormat(n);
    }
  }
  Webflow.push(function () {
    translateDate("LLL dd, yyyy", "dd LLLL yyyy", "fr");
  });
});
