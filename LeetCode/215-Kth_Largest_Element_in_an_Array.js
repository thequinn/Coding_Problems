/*
215. Kth Largest Element in an Array

*/

var findKthLargest_1 = function(nums, k) {
  nums.sort((a, b) => b - a);

  return nums[k - 1];
};

//---------- Testing ----------
let nums = [3,2,1,5,6,4], k = 2; // Output: 5

let res = findKthLargest(nums, k);
console.log("res:", res);
