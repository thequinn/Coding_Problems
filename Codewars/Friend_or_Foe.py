
def filterFriends(name):
    return len(name)==4

def friend(names):
    return list(filter(filterFriends, names))


names = ["Ryan", "Kieran", "Mark"]    # ["Ryan", "Mark"]
res = friend(names)

print(*res, sep = ", ")
