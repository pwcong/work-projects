function formatPrice(price, n = 2) {

  if (price === 0) {

    let res = '0.';

    for (let i = 0; i < n; i++) {
      res += '0';
    }

    return res;

  }

  let flag_1 = price < 0;
  let t = Math.abs(price);
  let flag_2 = t < 1;

  let res = parseInt(t * Math.pow(10, n)) + '';

  return (flag_1 ? '-' : '') + (flag_2 ? '0' : '') + res.substring(0, res.length - n) + '.' + res.substring(res.length - n, res.length);

}

export default {
  formatPrice
}
