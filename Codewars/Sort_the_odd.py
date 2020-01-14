
def sort_array(source):
  odds = sorted(filter(lambda a: a % 2 == 1, source))
  return [odds.pop(0) if num % 2 == 1 else num for num in source]


print(sort_array([5, 3, 2, 8, 1, 4])) # [1, 3, 2, 8, 5, 4]

