/*
79. Word Search

思路:
- Since it's obvious that there will be a lot of repetitive work, such as checking up, down, left, right for lots of characters, we can use recusion to simplify our code.
Our base case will need to check:

    are we getting out of boundary? if yes, get out.
    are we getting a wrong character? If yes, get out.
    did we find every character from the work? If yes, great, we have found this word.
    Otherwise keep exploring characters for all directions.


Solution + Explanation:
- https://leetcode.com/problems/word-search/discuss/408943/JavaScript-Recursive-Solution-w-Explanation

*/

var exist = function(board, word) {
  if (word.length == 0)   return false;

  let found = false;
  let count = 0;

  // If first letter NOT found in board, return false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0][j]; j++) {

      if (board[i][j] == word[0]) {
        found = helper(board, word.slice(1), i, j, count);

        if (found == true)    return found;
      }
    }
  }
  return found;
};

var helper = function(board, word, i, j, count) {
  if (board[i][j] != word[count])   return false;

  count++;
  if (count == word.length - 1)


  // See if curr char's adjacent cells has the curr letter's next letter
  // - 下,上,左,右
  if (i+1 < board.length && board[i+1][j] == word[0]) {
    return helper(board, word, i+1, j, count);
  }

  if (j-1 >= 0 && board[i][j-1] == word[0]) {
    return helper(board, word, i, j-1, count);
  }

  if (i-1 >= 0 && board[i-1][j] == word[0]) {
    return helper(board, word, i-1, j, count);
  }

  if (j+1 < board[i].length && board[i][j+1] == word[0]) {
    return helper(board, word, i, j+1, count);
  }

  return false;
}

//---------- Testing ----------
let board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

word = "ABC";   // T
//word = "SEE";    // T
//word = "ABCCED"; // T
//word = "ABCB";   // F

let res = exist(board, word);
console.log("res:", res);

/*var exist = function(board, word) {
  let result = false;
  var check = function(r, c, i) {
    if (!result) {
      if (r < 0 || c < 0 || r >= board.length || c >= board[0].length)
        return; // out of boundary
      if (board[r][c] != word[i])
        return; // wrong character
      if (i == word.length - 1) { // found a correct path
        result = true;
        return;
      }

      board[r][c] = null; // mark our path so we dont go back and forth
      // try all directions
      check(r+1,c,i+1)
      check(r-1,c,i+1)
      check(r,c+1,i+1)
      check(r,c-1,i+1)
      board[r][c] = word[i] // reset our board , very important
    }
  }

  for (let i=0;i<board.length;i++) {
    for (let j=0;j<board[0].length;j++) {
      if (board[i][j] == word[0]) {
        check(i, j, 0)
        if (result) return result;
      }
    }
  }

  return result;
};
*/

