

def validBraces(s):
  l = []

  for c in s:
    if c == '(':
      l.append(c)
    elif c == ')' and '(' in l:
      l.remove('(')

    elif c == '{':
      l.append(c)
    elif c == '}' and '{' in l:
      l.remove('{')

    elif c == '[':
      l.append(c)
    elif c == ']' and '[' in l:
      l.remove('[')

  if len(l) == 0:
    return True
  return False

print(validBraces("(){}[]"))  #T
print(validBraces("("))  # F
print(validBraces("[(])"))  # T
