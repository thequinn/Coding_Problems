"""
78. Subsets

"""

from typing import List

class Solution:
  def subsets(self, nums: List[int]) -> List[List[int]]:
    n = len(nums)
    output = [[]]

    for num in nums:
      output += [curr + [num] for curr in output]

    return output

#---------- Testing ----------
nums = [1,2,3]
s = Solution()
res = s.subsets(nums)

