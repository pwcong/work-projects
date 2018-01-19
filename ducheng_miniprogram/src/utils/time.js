function timeSpace(future) {

  return future - Date.parse(new Date());

}

function checkTimeout(dateTime, timeout) {

  if (!dateTime || !timeout) {
    return false;
  }

  let t = Date.parse(dateTime);

  return new Date() - t >= timeout;

}


export default {

  timeSpace,
  checkTimeout

}
