"""
46. Permutations

"""

class Solution:
  def permute(self, nums):
    self.res = []
    self.dfs(nums, [])
    return self.res

  def dfs(self, nums, temp):
    if len(nums) == len(temp):
      self.res.append(temp[:])
      return

    for i in range(len(nums)):
      if nums[i] in temp:
        continue
      temp.append(nums[i])
      self.dfs(nums, temp)


#---------- Testing ----------
arr = [1,2,3]
sol = Solution()
res = sol.permute(arr) # [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

