/*
53. Maximum Subarray
*/

var maxSubArray = function(nums) {
  
  let maxSum = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
   
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSum = Math.max(maxSum, maxEndingHere);  
  }

  return maxSum;
}


//let nums = [-1];  // Corner Case: -1
let nums = [1,-3,4,-1,2,1,-5,4];  // 6
console.log(maxSubArray(nums));


