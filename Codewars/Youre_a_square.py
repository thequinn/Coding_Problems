import math

def is_square(n):
  return n > -1 and math.sqrt(n) % 1 == 0

print(is_square(-1)) # false
print(is_square(0)) # true
print(is_square(3)) # false
print(is_square(4)) # true
