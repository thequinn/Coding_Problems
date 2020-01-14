
def create_phone_number(n):
  res = '('

  for i, num in enumerate(n):
    if i < 3:
      res += str(num)
    if i == 2:
      res += ') '
    if i >= 3:
      res += str(num)
    if i == 5:
      res += '-'
  return res


print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) # "(123) 456-7890"
