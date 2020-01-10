
def toJadenCase(s):
  return " ".join([ w.capitalize() for w in s.split() ])


quote = "How can mirrors be real if our eyes aren't real"
res = toJadenCase(quote) # "How Can Mirrors Be Real If Our Eyes Aren't Real")
print(res)
