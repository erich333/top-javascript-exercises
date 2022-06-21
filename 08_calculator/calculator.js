const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	if(a.length === 0) return 0;
  return a.reduce((element1, element2) => element1 + element2);
};

const multiply = function(a) {
  return a.reduce((element1, element2) => element1 * element2);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if(a === 0 || a === 1) return 1;
  return a*factorial(a-1);
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
