import re
import collections

class Solution(object):

  def countOfAtoms(self, formula):

    parse = re.findall(r"([A-Z][a-z]*)(\d*)|(\()|(\))(\d*)", formula)

    stack = [collections.Counter()]

    for name, m1, left_open, right_open, m2 in parse:
      if name:
        stack[-1][name] += int(m1 or 1)

      if left_open:
        stack.append(collections.Counter())

      if right_open:
        top = stack.pop()
        for k in top:
          stack[-1][k] += top[k] * int(m2 or 1)

    return "".join(name + (str(stack[-1][name]) if stack[-1][name] > 1 else '')
                     for name in sorted(stack[-1]))


#formula = "K4(ON(SO3)2)2"   # "K4N2O14S4", {'K': 4, 'N': 2, 'O': 14, 'S': 4}
formula = "Mg(OH)2"         # "H2MgO2", {'H': 2, 'Mg': 1, 'O': 2}
#formula = "Fe16H2O"
#formula = "FeH2O"
#formula = "H2O"             # "H2O", {'H': 2, 'O': 1}
#formula = "H"

sol = Solution()
re = sol.countOfAtoms(formula)
print("\nre: ", re)
