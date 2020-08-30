/*
17. Letter Combinations of a Phone Number
*/

function letterCombinations(digits) {
  let mapper = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  function getCombos(idx = 0, current = '', output = []) {
    if (idx === digits.length) {
      output.push(current);
      return [];
    }

    for (let char of mapper[digits[idx]]) {
      getCombos(idx + 1, current + char, output);
    }

    return output;
  }

  return getCombos();
};

let digits = "23"
let res = letterCombinations(digits)
console.log(res)
