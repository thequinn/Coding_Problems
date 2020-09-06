/*
136. Single Number
*/

var singleNumber = function(nums) {
  var result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}

var nums_1 = [2,2,1];
var nums_2 = [4,1,2,1,2];
var result = singleNumber(nums_2);
console.log(result);
