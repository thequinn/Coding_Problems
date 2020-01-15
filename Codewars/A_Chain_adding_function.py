def add(x):
    class Add(int):
        def __call__(self, x):
            return Add(self + x)

    return Add(x)


print(add(1)) # 1
print(add(1)(2)) # 3
print(add(1)(2)(3)) # 6
print(add(1)(2)(3)(4)) # 10
print(add(1)(2)(3)(4)(5)) # 15
