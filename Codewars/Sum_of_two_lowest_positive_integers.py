
def sum_two_smallest_numbers(numbers):
  numbers2 = sorted(numbers)
  return numbers2[0] + numbers2[1]

print(sum_two_smallest_numbers([8, 5, 12, 18, 22])) # 13
