

def parse_IPv6_1(iPv6):
  return ''.join(str(sum(int(c, 16) for c in s)) for s in iPv6.split(iPv6[4]))


#-----Test Case-----
s = "ABCD_1111_ABCD_1111_ABCD_1111_ABCD_1111"
# => "46" + "4" + "46" + "4" + "46" + "4" + "46" + "4" => 464464464464

res = parse_IPv6_2(s)
print("Final res:", res)
