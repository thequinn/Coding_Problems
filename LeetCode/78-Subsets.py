"""
78. Subsets

"""

class Solution:
    def subsets(self, nums):
        all_subsets = [[]]

        if not nums:
            return all_subsets

        for num in nums:
            for idx in range(len(all_subsets)):
                all_subsets.append(all_subsets[idx]+[num])

        return all_subsets

#---------- Testing ----------
nums = [1,2,3]
s = Solution()
res = s.subsets(nums)

