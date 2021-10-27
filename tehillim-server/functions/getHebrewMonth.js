/**calculates hebrew month according to current date to update correct db column. called by students.js db table functions */
function getHebrewMonth() {
  console.log("gethebrewmotnh");
  const monthsObj = {
    tishrei: new Date("2021/09/07"),
    cheshvan: new Date("2021/10/07"),
    kislev: new Date("2021/11/05"),
    teves: new Date("2021/12/05"),
    shvat: new Date("2022/01/03"),
    adarA: new Date("2022/02/02"),
    adarB: new Date("2022/03/04"),
    nissan: new Date("2022/04/02"),
    iyar: new Date("2022/05/02"),
    sivan: new Date("2022/06/31"),
    tammuz: new Date("2022/07/30"),
    av: new Date("2022/08/29"),
    elul: new Date("2022/09/28"),
  };
  let date = new Date();
  console.log(
    date >= monthsObj.cheshvan.getTime() && date <= monthsObj.kislev.getTime()
  );
  if (
    date >= monthsObj.tishrei.getTime() &&
    date <= monthsObj.cheshvan.getTime()
  ) {
    return "tishrei";
  } else if (
    date >= monthsObj.cheshvan.getTime() &&
    date <= monthsObj.kislev.getTime()
  ) {
    return "cheshvan";
  } else if (
    date >= monthsObj.kislev.getTime() &&
    date <= monthsObj.teves.getTime()
  ) {
    return "kislev";
  } else if (
    date >= monthsObj.teves.getTime() &&
    date <= monthsObj.shvat.getTime()
  ) {
    return "teves";
  } else if (
    date >= monthsObj.shvat.getTime() &&
    date <= monthsObj.adarA.getTime()
  ) {
    return "shvat";
  } else if (
    date >= monthsObj.adarA.getTime() &&
    date <= monthsObj.adarB.getTime()
  ) {
    return "adarA";
  } else if (
    date >= monthsObj.adarB.getTime() &&
    date <= monthsObj.nissan.getTime()
  ) {
    return "adarB";
  } else if (
    date >= monthsObj.nissan.getTime() &&
    date <= monthsObj.iyar.getTime()
  ) {
    return "nissan";
  } else if (
    date >= monthsObj.iyar.getTime() &&
    date <= monthsObj.sivan.getTime()
  ) {
    return "iyar";
  } else if (
    date >= monthsObj.sivan.getTime() &&
    date <= monthsObj.tammuz.getTime()
  ) {
    return "sivan";
  } else if (
    date >= monthsObj.tammuz.getTime() &&
    date <= monthsObj.av.getTime()
  ) {
    return "tammuz";
  } else if (
    date >= monthsObj.av.getTime() &&
    date <= monthsObj.elul.getTime()
  ) {
    return "av";
  } else if (date >= monthsObj.elul.getTime()) {
    return "elul";
  }
}

module.exports = getHebrewMonth;
