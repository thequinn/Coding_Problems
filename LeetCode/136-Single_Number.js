/*
136. Single Number

LeetCode Std Solution:
- https://leetcode.com/problems/single-number/solution/

- Approach #1: List Operation
-- Time complexity : O(n^2)
  We iterate through nums[], taking O(n) time. We search the whole list to find whether there is duplicate number, taking O(n) time. => O(n^2)
-- Space complexity: O(n)
  The tmp[] used to contain at least size of n elements in nums[].

- Approach #2: Hash Table
-- Time complexity : O(n * 1) = O(n)
-- Space complexity: O(n)

- Approach #3: Using Math and Set
-- Time complexity : O(n + n) = O(n)
-- Space complexity: O(n)
  mySet needs space for elements in nums[]

- Approach #4: Bitwise Manupulation
-- Time complexity : O(n)
-- Space complexity: O(1)
*/

// - Approach #1:
// - 思路：If an elem is new to nums[], append it, otherwise remove it
/*var singleNumber = function(nums) {
  var tmp = [];
  for (var i = 0; i < nums.length; i++) {
    var idx = tmp.indexOf(nums[i]);
    if (idx == -1) {
      tmp.push(nums[i]);
    } else {
      tmp.splice(idx, 1);  // Remove 1 elem at idx
    }
  }
  // The only elem left in nums[] is the single num
  return tmp.pop();
};*/

// Approach #2: Hash Table
// - If our hash tbl doesn't have the elem, add it, otherwise remove it.
/*var singleNumber = function(nums) {
  var hashTbl = {};
  for (var i = 0; i < nums.length; i++) {
    // If nums[i] key doesn't exist in hashTbl obj
    if ( ! (nums[i] in hashTbl) ) {
      hashTbl[ nums[i] ] = nums[i];
    } else {
      delete hashTbl[ nums[i] ];
    }
  }
  // The only elem left in nums[] is the single num
  for (var key in hashTbl) {
    return hashTbl[key];
  }
}*/

// Approach #3: Using Math and Set
// - Concept: 2*(a+b+c) − (a+a+b+b+c) = c
var singleNumber = function(nums) {

  // Get unique values of nums[] and transform the arr to a set
  let mySet = new Set(nums);
  let sumOfSet = 0;
  mySet.forEach(num => sumOfSet += num);

  let sumOfNums = nums.reduce((acc, cur) => acc + cur);

  return (2 * sumOfSet) - sumOfNums;
}

// Approach #4: Bitwise Manupulation
// - Hint: a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
//
// - 技巧！！ 
// -- Bitwise XOR: 
// (1）outputs true only when inputs differ
// (2) ex 1 ^ 3 = 2  (別忘記轉變十進位到二進位：01 ^ 11 = 10)
//
var singleNumber = function(nums) {
  var result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    console.log(result, " ^ ", nums[i], " = ", result ^ nums[i]);
    result = result ^ nums[i];
  }
  return result;
}

//var nums = [2,2,1];
var nums = [2,2,1,3,1];
//var nums = [4,1,2,1,2];
var result = singleNumber(nums);
console.log(result);
