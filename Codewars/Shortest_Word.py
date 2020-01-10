
def find_short(s):

  return min( len(word) for word in s.split(" ") )


s = "bitcoin take over the world"
res = find_short(s)
print(res)
