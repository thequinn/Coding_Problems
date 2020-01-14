
def comp(array1, array2):
  if None in (array1, array2):
        return False

  return sorted(a ** 2 for a in array1) == sorted(array2)


a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
print(comp(a, b))  # T

a2 = [121, 144, 19, 161, 19, 144, 19, 11]
b2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
print(comp(a2, b2))  # F
