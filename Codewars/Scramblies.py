
from collections import Counter

def scramble(s1, s2):
  x = Counter(s2) - Counter(s1)
  return len(x) == 0


print(scramble('katas', 'steak')) # False
print(scramble('rkqodlw', 'world')) # True
