#!/usr/bin/python

def minor(matrix, x, y):
  arr = []
  for i in range(1, len(matrix)):
    if i != x:
      arr_y = []
      for j in range(0, len(matrix[i])):
        if j != y: 
          arr_y.append(matrix[i][j])
    arr.append(arr_y)

  return arr

def determinant(matrix):
  # Find which column it is to follow each sign multiplier. 
  sign = 1

  if len(matrix) < 2:       # Base Case
    return matrix[0][0]
  
  while len(matrix) >= 2:   # Recursive Case
    if len(matrix) == 2:
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    else:
      tmp = 0
      for y in range(0, len(matrix[0])):
        tmp += sign * (matrix[0][y]) * determinant(minor(matrix, 0, y))        
        sign = -sign;  # Terms are to be added with alternate sign
      return tmp
 
#lst = [[], []]                             # Not a working case
#lst = [[1,2], [3,4]]                       # -2
#lst = [ [2,5,3], [1,-2,-1], [1, 3, 4] ]    # -20
lst = [ [1, 0, 2, -1], [3, 0, 0, 5], [2, 1, 4, -3], [1, 0, 5, 0] ]    # 30
re = determinant(lst)
print(re)
