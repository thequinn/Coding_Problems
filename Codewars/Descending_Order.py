
def descending_order(num):
  num_reverse_sorted = sorted(str(num), reverse=True)

  return int("".join(num_reverse_sorted))


print(descending_order(15))  # 51
