/*
Reference:
https://leetcode.com/problems/pascals-triangle/solution/

Approach #1: Dynamic Programming
- Although the algorithm is very simple, the iterative approach to constructing Pascal's triangle can be classified as dynamic programming because we construct each row based on the previous row.

-- Time complexity : O(numRows^2)
The outer loop obviously runs numRows times, but for each iteration of the outer loop, the inner loop runs j times. Therefore, the overall number of triangle updates that occur is 1 + 2 + 3 + ... + numRows, which according to Gauss' formula
  numRows (numRows + 1) / 2 ~ O(numRows^2)

-- Space complexity: O(numRows^2)
*/

var generate = function(numRows) {
  if (numRows === 0)   return [];
  if (numRows === 1)   return [[1]];

  // Pre-set 1st row in Pascal's Triangle
  var outterArr = [[1]];

  for (var i = 1; i < numRows; i++) {
    var innerArr = [];
    innerArr.push(1);  // Add 1 at left-most of each row
    for (var j = 1; j < i; j++) {
      /*
      Note!! 
      - Access 2-D array in JS is same as in other languages!!
      - UNFAMILIAR SYNTAX of using 2-D array in JS

      ==> Pascal's Triangle 2-D Array:
          var outerArr = [  
            [1],
            [1,1],
            [1,2,1],
            [1,3,3,1],
            [1,4,6,4,1]
          ]
      */
      //var upperLeftIndex = outterArr[ [i - 1][j - 1] ]; // WRONG !!!
      var upperLeftIndex = outterArr[i - 1][j - 1];  
      var upperRightIndex = outterArr[i - 1][j - 0];
      innerArr.push(upperLeftIndex + upperRightIndex);
    }
    innerArr.push(1);  // Add 1 at right-most of each row
    outterArr.push(innerArr);
  }
  return outterArr;
}

var result = generate(5);
console.log("\nresult:", result);