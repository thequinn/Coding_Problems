/*
240. Search a 2D Matrix II

*/

const searchMatrix = function(matrix, target) {
  if (matrix == null || matrix.length < 1 || matrix[0].length < 1)
    return false;

  let col = 0;
  let row = matrix.length - 1;

  while (col <= matrix[0].length - 1 && row >= 0) {
    if (target == matrix[row][col])
      return true;
    else if (target < matrix[row][col])
      row--;
    else if (target > matrix[row][col])
      col++;
  }
  return false;
}


//---------- Testing ----------
let A = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

let target = 5; // T
let target = 20; // F


