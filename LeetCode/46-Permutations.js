/*
46. Permutations

*/

var permute = function(nums) {
  const res = [];
  backtrack(nums, res);
  return res;
};

function backtrack(nums, res, n = 0) {
  if (n === nums.length - 1) {
    res.push(nums.slice(0));
    return;
  }
  for (let i = n; i < nums.length; i++) {
    [nums[i], nums[n]] = [nums[n], nums[i]]; // Swap 2 vars
    backtrack(nums, res, n + 1);
    [nums[i], nums[n]] = [nums[n], nums[i]]; // Swap the 2 vars back
  }
}

//---------- Testing ----------
arr = [1,2,3]
sol = Solution()
res = sol.permute(arr) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
print(*res)
