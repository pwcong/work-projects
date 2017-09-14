export function getQueryParams(url) {
  let t = url.split('?');

  if (!t[1]) {
    return null;
  }

  let res = {};
  let qps = t[1].split('&');

  qps.forEach(function (qp, index) {
    let qpt = qp.split('=');
    if (qpt.length > 1) {
      res[qpt[0]] = qpt[1];
    }
  });

  return res;
}

export function formatQueryParams(params){

  let res = '';

  for(let key in params){

    if(params[key]){
      res += key + '=' + params[key] + '&';
    }

  }

  return res.slice(0, res.length - 1);

}
