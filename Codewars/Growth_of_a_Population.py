
def nb_year(p0, percent, aug, p):
  year = 0

  while p0 < p:
    p0 = p0 * (1 + percent/100) + aug
    year += 1

  return year

print(nb_year(1500, 5, 100, 5000)) # 15
print(nb_year(1500000, 2.5, 10000, 2000000)) # 10
