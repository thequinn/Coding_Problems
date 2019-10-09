// Reference:
// https://leetcode.com/problems/two-sum/solution/


// Approach #1 (Brute Force) [Accepted]
/*
var twoSum = function(nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                return result;
            }
        }
    }
};
*/

// Approach #2 (Two-pass Hash Table) [Accepted]
/*
var twoSum = function(nums, target) {
    var result = [];
    var numsList = {};

    for (var i = 0; i < nums.length; i++) {
        numsList[ nums[i] ] = i; // key: val in nums[]
                                 // val: index in nums[]
    }
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (numsList.hasOwnProperty(complement) && i !== numsList[complement]) {
            result.push(i, numsList[complement]);
            return result;
        }
    }

}
*/

// Approach #3 (One-pass Hash Table) [Accepted]
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
