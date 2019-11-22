/*
268. Missing Number
*/

var missingNumber = function(nums) {
  var res = nums.length;

  for(var i = 0; i < nums.length; i++){
    res ^= i ^ nums[i];
  }
  return res;
};

let nums = [0];
let res = missingNumber(nums);
console.log(res);
