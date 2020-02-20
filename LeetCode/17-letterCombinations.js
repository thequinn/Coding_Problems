/*
17. Letter Combinations of a Phone Number


注意!!!!!
- 這個 Backtracking 寫法對於初學者比较不清楚.
  可以參考較易了解的 Backtracking 寫法 letterCombinations_Backtrack_1.js


Tip:
(1) 先畫畫 Tree 再 Code
(2) 原來 Backtracking 就是 DFS !!!


解題思路 Video (Also in my cloud): --> 必看!!
- https://www.youtube.com/watch?v=uMmFXWs_ZMY
- Analysis (Time & Space): @22:20


Solution Code:
- https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/475695/JavaScript-Recursive

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

    //-------------------------------------------
    // 法一: --> My PC works, but LeetCode doesn't work w/ "values[]" here
    /*let ch = digits[idx];
    let values = mapper[ch];
    for (let char of values) {
      getCombos(idx + 1, current + char, output);
    }*/

    //-------------------------------------------
    // 法二: --> My PC works, but LeetCode doesn't work w/ "values[]" here
    /*let ch = digits[idx];
    let values = mapper[ch];
    values.forEach((char, i) => {
      getCombos(idx + 1, current + char, output);
    })*/

    //-------------------------------------------
    // 法三: (若看不懂就看法一)
    //       --> My PC works, but LeetCode doesn't work w/ "values[]" here
    for (let char of mapper[digits[idx]]) {
      getCombos(idx + 1, current + char, output);
      // Note: This method already include backtracking
    }

    return output;
  }

  return getCombos();
};

let digits = "23"
let res = letterCombinations(digits)
console.log(res)
