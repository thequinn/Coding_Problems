"""
75. Sort Colors

"""

# Approach #1: One Pass
function sortColors (nums) {
  let low = 0, high = nums.length - 1;

  for (let i = 0; i <= high;i++) {
    if (nums[i] === 0) {
      if (i !== low) {
        [nums[i], nums[low]] = [nums[low], nums[i]];
      }
      low++;
    } else if (nums[i] == 2) {
       [nums[i], nums[high]] = [nums[high], nums[i]];
       high--;
       i--;
    }
  }
};

