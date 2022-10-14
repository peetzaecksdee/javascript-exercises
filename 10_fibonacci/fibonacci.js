const fibonacci = function (number) {
  if (number < 0) return "OOPS";
  let fib = [0, 1];
  let temp = 0;
  for (let i = 0; i < number; i++) {
    temp = fib[0] + fib[1];
    fib[0] = fib[1];
    fib[1] = temp;
  }
  return fib[0];
};

// Do not edit below this line
module.exports = fibonacci;
