/*
34. Find First and Last Position of Element in Sorted Array

*/

var searchRange = function(nums, target) {
  let left = -1, right = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      left = i;
      break;
    }
  }
  if (left === -1)    return  [-1, -1];

  for (let i = nums.length - 1; i >= left; i--) {
    if (nums[i] === target) {
      right = i;
      break;
    }
  }

  return [left, right];
};


let nums = [5,7,7,8,8,10], target = 6;  // Output: [-1,-1]
let res = searchRange(nums, target);
console.log("\nres:", res);
