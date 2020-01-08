
def high_and_low(numbers):
  results = map(int, numbers.split(" "))
  return "%s %s" %(max(results), min(results))


res = high_and_low("4 0 -214 542 -64 -12") # "542 -214"
print(res)
