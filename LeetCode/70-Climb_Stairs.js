/*
70. Climbing Stairs

Task:
- Each time you can either climb 1 or 2 steps. 
  How many distinct ways can you climb to the top of n steps of a stair case?
- Note: Given n will be a positive integer.

*/

var climbStairs = function(n) {
  var answer = 0;

  var recurse = function(num) {
    if (num === 0) {
      answer++;
    } 
    else if (num > 0) {
      recurse(num - 1);
      recurse(num - 2);
    }
  };
  
  recurse(n);
  return answer;
};

console.log(climbStairs(1));  // 1
console.log(climbStairs(2));  // 2
console.log(climbStairs(3));  // 3
console.log(climbStairs(4));  // 5

