'''
91. Decode Ways

'''
class Solution:
  def numDecodings(self, s: str) -> int:
    if not s:  return 0
    return self.helper(0, s)

  def helper(self, index, s) -> int:
    if index == len(s): return 1

    if s[index] == '0': return 0

    if index == len(s)-1: return 1



    ans = self.helper(index+1, s) \
        + (self.helper(index+2, s) if (int(s[index : index+2]) <= 26) else 0)
    return ans

