import math

def get_middle(s):
  i = (len(s) - 1) // 2

  return s[i:-i] or s


#res = get_middle("A")        # "A"
#res = get_middle("of")        # "of"

#res = get_middle("test")        # "es"
res = get_middle("testing")     # "t"
print(res)
