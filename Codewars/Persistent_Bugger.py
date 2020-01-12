from functools import reduce

def persistence(n):
  count = 0

  while n >= 10:
    n = reduce( lambda a, b: a * b, (int(c) for c in str(n)) )
    count += 1

  return count

print(persistence(39))  # 3
