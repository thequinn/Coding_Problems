
def to_camel_case(text):
    cap = False
    newText = ''
    for t in text:
        if t == '_' or t == '-':
            cap = True
            continue
        else:
            if cap == True:
                t = t.upper()
            newText = newText + t
            cap = False
    return newText

print(to_camel_case("the-stealth-warrior")) # returns "theStealthWarrior"
print(to_camel_case("The_Stealth_Warrior")) # returns "TheStealthWarrior"
