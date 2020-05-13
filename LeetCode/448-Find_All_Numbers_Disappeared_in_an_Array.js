/*
448. Find All Numbers Disappeared in an Array

*/

let findDisappearedNumbers = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let j = Math.abs(nums[i]) - 1;
    nums[j] = Math.abs(nums[j]) * -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

//---------- Testing ----------
let nums = [4,3,2,7,8,2,3,1];  // [5,6]
let res = findDisappearedNumbers(nums);
console.log("res:", res);
