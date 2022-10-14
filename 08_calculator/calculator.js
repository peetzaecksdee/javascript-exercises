const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  su = 0
  for (const number of array) su += number
  return su
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i    
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
