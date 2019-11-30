/*
73. Set Matrix Zeroes

*/

var setZeroes = function(matrix) {
  let R =  matrix.length;
  let C =  matrix[0].length;
  const MODIFIED = -1000000;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] === 0) {

        for (let k = 0; k < C; k++) {
          if (matrix[i][k] != 0) {
            matrix[i][k] = MODIFIED;
          }
        }
        for (let k = 0; k < R; k++) {
          if (matrix[k][j] != 0) {
            matrix[k][j] = MODIFIED;
          }
        }

      }
    }
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (matrix[i][j] == MODIFIED) {
        matrix[i][j] = 0;
      }
    }
  }
};

let matrix = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log("\nmatrix:", matrix);
