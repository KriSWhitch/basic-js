const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = Math.log(2)/HALF_LIFE_PERIOD;
  if(sampleActivity == undefined || typeof(sampleActivity) != 'string' ||
    /[a-z]/i.test(sampleActivity) || (Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY)){
    return false;
  }
  return (Math.log(MODERN_ACTIVITY/sampleActivity))/k;
};
