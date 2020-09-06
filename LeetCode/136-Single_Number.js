/*
136. Single Number
*/

var singleNumber = function(nums) {
  var tmp = [];
  for (var i = 0; i < nums.length; i++) {
    var idx = tmp.indexOf(nums[i]);
    if (idx == -1) {
      tmp.push(nums[i]);
    } else {
      tmp.splice(idx, 1);
    }
  }
  return tmp.pop();
};

//var nums = [2,2,1];
var nums = [2,2,1,3,1];
//var nums = [4,1,2,1,2];
var result = singleNumber(nums);
console.log(result);
