/*
91. Decode Ways

*/
class Solution {
  public int numDecodings(String s) {
    if (s == null || s.length() == 0)   return 0;
    return decode(0, s);
  }

  private int decode(int index, String s) {
    if (index == s.length())    return 1;

    if (s.charAt(index) == '0') return 0;

    int count = decode(index + 1, s);
      if (index + 2 <= s.length() && Integer.parseInt(s.substring(index, index+2)) <= 26) {
       count += decode(index+2, s);
     }

    return count;
  }
}


