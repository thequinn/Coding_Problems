"""
78. Subsets

LeetCode Std Solution:
- https://leetcode.com/problems/subsets/solution/

"""

# Approach #1: Recursion ==> Should be called DP (Bottom Up) Approach
# - See LeetCode Std Sol's explanation with image, very good!!
#
from typing import List

class Solution:
  def subsets(self, nums: List[int]) -> List[List[int]]:
    n = len(nums)
    output = [[]]
    print(*output)

    for num in nums:
      # 注意! Python uses "+" operator to concatenate 2 lists
      # ex. In 1st iteration, curr is [] and [num] is 1. So curr+[num] is [1]
      #     - ln-22 equals to ln-23~31
      output += [curr + [num] for curr in output]
      """
      tmp = [curr + [num] for curr in output]
      print("\ntmp:", end = '')
      print(*tmp)

      output += tmp
      print("output:", end = '')
      print(*output)
      """
    return output


#---------- Testing ----------
nums = [1,2,3]
s = Solution()
res = s.subsets(nums)
print(*res)

