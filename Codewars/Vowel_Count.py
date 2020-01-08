def getCount(string):
  return sum(c in 'aeiou' for c in string.lower())

count = getCount("Abracadabra")  # 5
print(count)
