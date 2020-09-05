/*
300. Longest Increasing Subsequence

*/

var lengthOfLIS = function(nums) {
  if (nums.length == 0)
    return 0;

  let maxLen = new Array(nums.length);
  maxLen.fill(1);

  let max = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxLen[i] = Math.max(maxLen[i], maxLen[j]+1);
      }
    }
    max = Math.max(max, maxLen[i]);
  }

  return max;
};
