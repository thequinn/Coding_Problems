/*
26. Remove Duplicates from Sorted Array
*/

var removeDuplicates = function(nums) {
  if (nums.length == 0)   return 0;

  let i = 0;  // i is slow ptr
  for (let j = 1; j < nums.length; j++) {  // j is fast ptr
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
    //console.log("nums[]:", nums);
  }

  return ++i;
};

let nums = [];  // 0
//let nums = [1,1,2];                // 2, b/c [1,2]
//let nums = [1,2,2,2,3]             // 3, b/c [1,2,3]
//let nums = [0,0,1,1,1,2,2,3,3,4];  // 5, b/c [0,1,2,3,4]
console.log(removeDuplicates(nums));
