/*
162. Find Peak Element

*/

var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1])
      return i;
  }

  return nums.length - 1;
}

//---------- Testing ----------
let nums = [1,2,3,2];
let res = findPeakElement(nums);
console.log("res:", res);
