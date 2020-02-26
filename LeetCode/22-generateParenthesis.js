/*
22. Generate Parentheses
*/

class Solution(object):

    def generateParenthesis(self, n):

        def generate(A = []):
            print(*A)  # Print curr paren combo

            if len(A) == 2*n:
                print("A[]'s length: %d" % (2*n))
                if valid(A):
                    ans.append("".join(A))
                    print("--> ans[]:", end=" ")
                    print(*ans)
            else:
                A.append('(')
                generate(A)
                pop1 = A.pop()
                print("pop1: %s" % pop1)

                A.append(')')
                generate(A)
                pop2 = A.pop()
                print("pop2: %s" % pop2)

        def valid(A):
            bal = 0
            for c in A:
                if c == '(': bal += 1
                else: bal -= 1

                if bal < 0:
                  print("bal: %d, False" % bal)
                  return False
            return bal == 0

        ans = []
        generate()
        return ans


