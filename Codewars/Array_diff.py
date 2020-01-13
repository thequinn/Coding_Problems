
def array_diff(a, b):
  b = set(b)

  return [c for c in a if c not in b]


print(array_diff([1,2],[1])) # [2]
print(array_diff([1,2,2,2,3],[2])) # [1,3]

print(array_diff([1,2,2], [])) # [1,2,2]
print(array_diff([], [1,2])) # []

print(array_diff([0, -4, 14, -10, -19, 10],[-11, 10])) # [0, -4, 14, -10, -19]
