/*
62. Unique Paths

Task:
- A robot is located at the top-left corner of a m x n grid.  The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.  How many possible unique paths are there?   Note: m and n will be at most 100.
*/

var uniquePaths = function(m, n) {

  let currentRow = new Array(n).fill(1);
    
  for (let row = 1; row < m; row++) {     
    for (let i = 1; i < n; i++) {
      currentRow[i] += currentRow[i - 1];
    }
  }
  return currentRow[n - 1];
};

