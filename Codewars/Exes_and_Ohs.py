
def xo(s):
  exes = 0
  ohs = 0

  for c in s.lower():
    if c == 'x':
      exes += 1
    elif c == 'o':
      ohs += 1

  return exes == ohs


print(xo("ooxx")) # => true
print(xo("xooxx")) # => false
print(xo("ooxXm")) # => true
print(xo("zpzpzpp")) # => true // when no 'x' and 'o' is present should return true
print(xo("zzoo")) # => false
