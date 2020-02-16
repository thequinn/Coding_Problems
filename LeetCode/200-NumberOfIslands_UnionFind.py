"""
200: Number of Islands

"""

from array import *

class Solution(object):

  def numIslands(self, grid):
    if len(grid) == 0: return 0

    row = len(grid); col = len(grid[0])

    # Nested list comprehension
    self.count = sum(grid[i][j]=='1' for i in range(row) for j in range(col))

    parent = [i for i in range(row * col)]

    def find(x):
      if parent[x] != x:
        return find(parent[x])
      return parent[x]

    def union(x,y):
      xroot, yroot = find(x),find(y)

      if xroot == yroot: return

      parent[xroot] = yroot

      self.count -= 1

    for i in range(row):
      for j in range(col):
        if grid[i][j] == '0':
          continue

        index = i*col + j

        if j < col-1 and grid[i][j+1] == '1':
          union(index, index+1)

        if i < row-1 and grid[i+1][j] == '1':
          union(index, index+col)

    return self.count

#----------------------------------------------
# Testing

grid = [
      ['1','1','1','1','0'],
      ['1','1','0','1','0'],
      ['1','1','0','0','0'],
      ['0','0','0','0','0']
    ];
#print(grid)

sol = Solution()
count = sol.numIslands(grid)
print("count: %d" % count)
