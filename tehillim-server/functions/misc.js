const getHebrewMonth = require("../functions/getHebrewMonth");

const currentMonthObj = {};
currentMonthObj[getHebrewMonth()] = true;

module.exports = { currentMonthObj };
