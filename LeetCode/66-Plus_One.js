/*
66. Plus One
*/

var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;

    if (digits[i]) {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};


let digits = [1,2,3];  // [1,2,4]
let digits = [3,4,5];
plusOne(digits);

