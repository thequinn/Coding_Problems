/*
724. Find Pivot Index
*/

var pivotIndex = function(nums) {
  let leftSum = 0;
  let sum = nums.reduce((accu, curr) => accu+curr, 0);
  for (let i = 0; i < nums.length; i++) {
    if ((sum - nums[i] - leftSum) == leftSum)
      return i;
    leftSum += nums[i];
  }
  return -1;
};

//-----Test Case-----
let nums = [1,7,3,6,5,6]; // 3
//let nums = [1,2,3]; // -1
