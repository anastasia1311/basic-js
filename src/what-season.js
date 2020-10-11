const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'; 

  if (isNaN(Number(date)))  throw new "Error"(); 

const mon = date.getMonth();

return (mon == 11 || mon == 0 || mon == 1) ? 'winter' : (mon == 2 || mon == 3 || mon == 4) ? 'spring' : (mon == 5 || mon == 6 || mon == 7) ? 'summer' : 'autumn';

};
