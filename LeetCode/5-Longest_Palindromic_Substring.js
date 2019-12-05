/*
5. Longest Palindromic Substring

*/


let x=0, y=0, max=1;

var longestPalindrome = function(s) {
  let memo =  Array(s.length).fill(0).map(()=>Array(s.length).fill(0));

  if (s.length == 0) {
    return s;
  }

  helper(s, 0, s.length-1, memo);
  console.log("x:", x, ", y:", y, ", max:", max);
  return s.substring(x, y+1);
};

var helper = function(s, i, j, memo) {
  if (memo[i][j] != 0) {
    return memo[i][j]==1 ? true : false;
  }

  if (i == j) {
    memo[i][j] = 1;
    return true;
  }
  
  if (s[i] == s[j] && i+1 == j) {
    if (max < j-i+1) {
      x = i;    y = j;    max = j-i+1;
    }
    memo[i][j] = 1;
    return true;
  }

  if (s[i] == s[j] && helper(s, i+1, j-1, memo)) {
    if (max < j-i+1) {
      x = i;    y = j;    max = j-i+1;
    }
    memo[i][j] = 1;
    return true;
  }

  memo[i][j] = -1;
  helper(s, i, j-1, memo);
  helper(s, i+1, j, memo);
  return false;  
}

let str = "cbbd";
let res = longestPalindrome(str);
console.log(res);


