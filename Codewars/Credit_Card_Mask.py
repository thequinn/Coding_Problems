
def maskify(cc):
  if len(cc) <= 4:
    return cc
  return "#" * (len(cc) - 4) + cc[-4:]



print(maskify("4556364607935616")) # "############5616"
print(maskify(     "64607935616")) #      "#######5616"
print(maskify(               "1")) #                "1"
print(maskify(                "")) #                 ""
