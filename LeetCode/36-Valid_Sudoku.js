/*
36. Valid Sudoku

*/

var isValidSudoku = function(board) {

  const rowRules = new Array(9).fill().map(() => new Set())
  const colRules = new Array(9).fill().map(() => new Set())
  const mixedRules = new Array(9).fill().map(() => new Set())

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const curr = board[row][col];

      const mixedIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (curr === ".")   continue

      const a = rowRules[row].has(curr);
      const b = colRules[col].has(curr);
      const c = mixedRules[mixedIdx].has(curr);
      if (a || b || c)    return false;

      rowRules[row].add(curr);
      colRules[col].add(curr);
      mixedRules[mixedIdx].add(curr);
    }
  }

  return true;
};

let board_1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

let board_2 = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log( isValidSudoku(board_1) ); // T
console.log( isValidSudoku(board_2) ); // F
