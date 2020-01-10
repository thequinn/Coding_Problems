
def is_isogram(s):
  s = s.lower()
  return len(set(s)) == len(s)


print(is_isogram("Dermatoglyphics" )) # true
print(is_isogram("aba" )) # false
print(is_isogram("moOse" )) # false # -- ignore letter case
