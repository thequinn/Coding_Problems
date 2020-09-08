
/*
523. Continuous Subarray Sum

*/
const checkSubarraySum = (nums, k) => {
  let map = {};
  map[0] = -1;

  let sum = 0

  for (let i=0; i<nums.length; i++) {
    sum += nums[i];

    if (k!=0)
      sum = sum % k;

    if (sum in map) {
      if (i-map[sum] > 1)
        return true;
    }
    else  map[sum] = i;
  }

  return false;
}

let nums = [23,2,4,6,7], key = 6;
console.log(checkSubarraySum(nums, key));
