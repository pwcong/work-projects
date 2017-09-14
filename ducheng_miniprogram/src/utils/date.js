function format(num) {

  if (num < 10) {
    return '0' + num;
  }

  return num + '';

}

function today(split) {

  let date = new Date();

  if (!split) {
    return date.getFullYear() + '年' + format(date.getMonth() + 1) + '月' + date.getDate() + '日';
  }

  return date.getFullYear() + split + format(date.getMonth() + 1) + split + date.getDate();


}

function check(year, month, date) {

  if (month < 0 || date < 0) {
    return false;
  }

  switch (month) {


    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:

      if (date > 31) {
        return false;
      }

      return true;

    case 4:
    case 6:
    case 9:
    case 11:
      if (date > 30) {
        return false;
      }
      return true;
    case 2:
      if (year % 4 == 0 || year % 400 == 0) {
        if (date > 29)
          return false;
        return true;
      } else if (date > 28) {
        return false;
      }

      return true;

    default:
      return false;


  }



}

function maxDate(year, month) {


  switch (month) {

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:

      return 31;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (year % 4 == 0 || year % 400 == 0) {
        return 29;
      }
      return 28;

    default:
      return 0;


  }


}

export default {
  format,
  today,
  check,
  maxDate
}
