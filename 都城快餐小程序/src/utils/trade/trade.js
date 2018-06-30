function checkAmount(amount) {

  let dotIndex = amount.indexOf('.');

  if (dotIndex > -1) {

    if (dotIndex == 0) {
      return false;
    }

    if (amount.split('.').length > 2) {
      return false;
    }

    return dotIndex >= amount.length - 3;
  }

  return true;

}

function formatAmount(amount) {

  return parseInt(parseFloat(amount) * 100);
}

export default {
  checkAmount,
  formatAmount
}
