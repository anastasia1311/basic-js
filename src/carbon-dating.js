const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const validator = /^[a-zA-Z\s]{2,}$/;

module.exports = function dateSample( sampleActivity ) {

  if (sampleActivity !== undefined && sampleActivity > 0 && sampleActivity < 14.9 && sampleActivity !== null && 
    sampleActivity.toString().indexOf('.') !== -1  && typeof sampleActivity !== 'number' && !validator.test(sampleActivity))
  {
    var num = parseFloat(sampleActivity);
    var k = 0.693/HALF_LIFE_PERIOD;
    return Math.floor((Math.log(MODERN_ACTIVITY / num)) / k);
  }
  else return false;
};
