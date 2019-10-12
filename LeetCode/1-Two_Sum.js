/*
2. Two Sum
*/

var twoSum = function(nums, target) {
  let re = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        re.push(i, j);
        return re;    
      }
    }
  }
}

let nums = [2, 7, 11, 15], target = 9;  // [0, 1]
console.log( twoSum(nums, target) );
