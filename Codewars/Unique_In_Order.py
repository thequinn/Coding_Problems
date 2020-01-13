

def unique_in_order(iterable):
  res = []
  prev = None

  for curr in iterable:
    if curr != prev:
      res.append(curr)
      prev = curr
  return res


print(unique_in_order('AAABBCCD')) # ['A', 'B', 'C', 'D']
print(unique_in_order('AAABBCCDD')) # ['A', 'B', 'C', 'D']

print(unique_in_order('ABBCcAD'))         # ['A', 'B', 'C', 'c', 'A', 'D']
print(unique_in_order([1,2,2,3,3]))       # [1,2,3]
