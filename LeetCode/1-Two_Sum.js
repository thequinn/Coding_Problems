/*
2. Two Sum
*/

var twoSum = function(nums, target) {
    var result = [];
    var numsList = {};

    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (numsList.hasOwnProperty(complement) && i != numsList[complement]) {
            result.push(i, numsList[complement]);
            return result;
        }

        numsList[ nums[i] ] = i;
    }
}


//var nums = [2,7,11,15];
//var target = 9;

var nums = [3,2,4];
var target = 6;

var testResult = twoSum(nums, target);
console.log(testResult);
