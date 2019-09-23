/*
Reference:
https://leetcode.com/problems/single-number/solution/

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


// Approach #1: List Operation
// - If an elem is new to nums[], append it, otherwise remove it
var singleNumber_1 = function(nums) {
  var tmp = [];
  for (var i = 0; i < nums.length; i++) {
    var indexOfElem = tmp.indexOf(nums[i]);
    if (indexOfElem == -1) {
      tmp.push(nums[i]);
    }
    else {
      tmp.splice(indexOfElem, 1);
    }
  }
  // The only elem left in nums[] is the single num
  return tmp.pop();
}

// Approach #2: Hash Table
// - If our hash tbl doesn't have the elem, add it, otherwise remvoe it.
var singleNumber_2 = function(nums) {
  var hashTbl = {};
  for (var i = 0; i < nums.length; i++) {
    // If nums[i] key doesn't exist in hashTbl obj
    if ( !(nums[i] in hashTbl) ) {
      hashTbl[ nums[i] ] = nums[i];
    }
    else {
      delete hashTbl[ nums[i] ];
    }
  }
  // The only elem left in nums[] is the single num
  for (var key in hashTbl) {
    return hashTbl[key];
  }
}

// Approach #3: Using Math and Set
// - Concept: 2*(a+b+c) − (a+a+b+b+c) = c
var singleNumber_3 = function(nums) {
  var sumOfNums = 0, sumOfSet = 0;

  // Get unique values of nums[] and transform the arr to a set
  var mySet = new Set(nums);

  mySet.forEach(function(elem) {
    sumOfSet += elem;
  });

  for (var i = 0; i < nums.length; i++) {
    sumOfNums += nums[i];
  }

  return (2 * sumOfSet) - sumOfNums ;
}

// Approach #4: Bitwise Manupulation
// - Hint: a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
var singleNumber_4 = function(nums) {
  var result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}

var nums_1 = [2,2,1];
var nums_2 = [4,1,2,1,2];
var result = singleNumber_3(nums_2);
console.log(result);
