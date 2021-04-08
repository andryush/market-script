const samsungParams =
  "/offers?cpa=0&how=aprice&grhow=supplier&manufacturer_warranty=1&onstock=1&local-offers-first=1";
const lowPriceParams =
  "/offers?cpa=0&how=aprice&grhow=supplier&onstock=1&local-offers-first=1";

const startURL = window.location.href;

if (startURL.indexOf("aprice") === -1) {
  if (startURL.indexOf("product--") !== -1) {
    let secondURL = window.location.href;
    let lastIndex = null;
    let final = null;

    if (secondURL.indexOf("samsung") !== -1) {
      if (secondURL.indexOf("track") === -1) {
        final =
          secondURL.slice(0, secondURL.indexOf("text") - 1) + samsungParams;
        window.location.replace(final);
      } else {
        lastIndex = secondURL.lastIndexOf("/");
        final = secondURL.slice(0, lastIndex) + samsungParams;
        window.location.replace(final);
      }
    } else {
      if (secondURL.indexOf("track") === -1) {
        final =
          secondURL.slice(0, secondURL.indexOf("text") - 1) + lowPriceParams;
        window.location.replace(final);
      } else {
        lastIndex = secondURL.lastIndexOf("/");
        final = secondURL.slice(0, lastIndex) + lowPriceParams;
        window.location.replace(final);
      }
    }
  }
}
