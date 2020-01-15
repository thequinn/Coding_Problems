
def move_zeros(arr):
    l = [i for i in arr if isinstance(i, bool) or i!=0]
    return l+[0]*(len(arr)-len(l))


print(move_zeros([False,1,0,2])) # [False,1,2,0]
print(move_zeros([False,1,0,1,2,0,1,3,"a"])) # [False,1,1,2,1,3,"a",0,0]

print(move_zeros([9, 0, 9, 0, 0, 9, 0, 0.0, 0, 0.0, 0, 0, 0]))
               # [9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
