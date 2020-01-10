
def square_digits(num):
  res = "".join(str(int(c) ** 2) for c in str(num))

  return int(res)


print(square_digits(9119)) # 811181
