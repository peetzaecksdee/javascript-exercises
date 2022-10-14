const ftoc = function(temp) {
  // (x − 32) × 5/9 °C 
  return Math.round(((temp - 32) * 5/9) * 10) / 10
};

const ctof = function(temp) {
  //(x × 9/5 + 32) °F 
  return Math.round((temp * 9/5 + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
