/*
Reference:

- Approach #0: Writing 2 loops
-- Run-time: O(n^2)


- Approach #1: Kadane’s Algorithm
-- Key idea:
  The local max subarray is either the curr elem, or the curr elem combined w/ the previous max subarray

-- The video from CS Dojo explains the algorithm:
  https://www.youtube.com/watch?v=86CQq3pKSUw
  (More: https://www.youtube.com/watch?v=qX6U6--RL74)

  Java Code:
  class Solution {
    public int maxSubArray(int[] a) {
        int max_so_far = a[0];
        int curr_max = a[0];

        for (int i = 1; i < a.length; i++){
            curr_max = Math.max(a[i], curr_max+a[i]);
            max_so_far = Math.max(max_so_far, curr_max);
        }
        return max_so_far;
    }
  }

More info:
  https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

-- Run-time: O(n)
-- Algorithmic Paradigm: Dynamic Programming


- Approach #2: Divide and Conquer
-- Note:
  This approach over complicated the problem.  See Kadane's algorithm instead.
-- https://www.geeksforgeeks.org/divide-and-conquer-maximum-sum-subarray/
*/


// Approach #1: Kadane’s Algorithm
var maxSubArray = function(nums) {
    var max = nums[0];//var localMax = nums[0];
    var globalMax = nums[0];

    if (nums.length === 1)  return nums[0];

    for (var i = 1; i < nums.length; i++) {
        localMax = localMax + nums[i];
        var max = Math.max(nums[i], localMax);

        if (max > globalMax) {
            globalMax = max;
        }
        // If localMax < current num, reset localMax to start at nums[i]
        if (localMax < nums[i]) {
            localMax = nums[i];
        }
    }
    return globalMax;
}

// Approach #2: Divide and Conquer
// - See 53-maximumSubarray.java


//var nums = [1];
//var nums = [1, 2];

// The contiguous subarray [4,-1,2,1] has the largest sum = 6
var nums = [-2,1,-3,4,-1,2,1,-5,4];

// The contiguous subarray [1,3,4,-1,2,1] has the largest sum = 10
//var nums = [-2,1,3,4,-1,2,1,-5,4];

// Corner case:
//var nums = [8,-19,5,-4,20];  // 21

var nums = [-1];
console.log(maxSubArray(nums));


