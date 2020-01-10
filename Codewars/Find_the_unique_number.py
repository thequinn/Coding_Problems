
def find_uniq(arr):
  a, b = set(arr)
  return a if arr.count(a) == 1 else b

arr = (2,1,2,2,2)
print(find_uniq(arr))
