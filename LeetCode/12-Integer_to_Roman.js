/*
- Roman numerals are represented by seven different symbols:
-- I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


- Roman numeral rules: 6 instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

==> So cases like IIV, XXL, CCD are not right forms of Roman numerals.
*/

// Wrong tbl to use:
// - b/c we need the for-in loop to loop from M -> I (largest to smallest #'s)
var tbl_1 = {
  'I' : 1,
  'IV': 4,
  'V' : 5,
  'IX': 9,
  'X' : 10,
  'XL': 40,
  'L' : 50,
  'XC': 90,
  'C' : 100,
  'CD': 400,
  'D' : 500,
  'CM': 900,
  'M' : 1000
};
// Correct tbl to use
var tbl_2 = {
  'M' : 1000,
  'CM': 900,
  'D' : 500,
  'CD': 400,
  'C' : 100,
  'XC': 90,
  'L' : 50,
  'XL': 40,
  'X' : 10,
  'IX': 9,
  'V' : 5,
  'IV': 4,
  'I' : 1,
};

// Approach #1
var intToRoman_1 = function(num) {
  var result = '';

  // Subtract num until 0
  for (var key in tbl_2) {
    // For cases like 3 ('III')
    while (num >= tbl_2[key]) {
      num -= tbl_2[key];
      result += key;
    }
  }
  return result;
};

// Approach #2
var intToRoman_2 = function(num) {
  var result = '';

  var M = ["", "M", "MM", "MMM"];
  var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  //console.log("M[num/1000]:", M[Math.floor(num/1000)]);
  //console.log("C[(num%1000)/100]:", C[ Math.floor((num%1000)/100) ]);
  //console.log("X[(num%100)/10]:",  X[ Math.floor((num%100)/10) ]);
  //console.log("I[num%10]:", I[num%10]);

  // Don't forget to use "Math.floor()" for 除法in JS, or we get undefined for
  // M[] and C[] when num is 58.
  // Remember JS uses var instead of int to declare a var !!
  result = M[Math.floor(num/1000)] + C[ Math.floor((num%1000)/100) ] + X[ Math.floor((num%100)/10) ] + I[num%10];
  return result;
}

var num_1 = 58;
var num_2 = 3958;
var result = intToRoman_2(num_1);
console.log("result:", result);
