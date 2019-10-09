/*
217. Contains Duplicate
*/

var containsDuplicate = function(nums) {
  let map = {};
  let n = 0;

  for (let i = 0; i < nums.length; i++) {
    n = nums[i];

    if (!map[n]) {
      map[n] = 1;
    }
    else if (++map[n] === 2){
        return true;
    }
  };
  return false;
};

let nums;
nums = [0];         // F
//nums = [1,2,3,1]; // T
//nums = [1,2,3,4]; // F
console.log(containsDuplicate(nums));


