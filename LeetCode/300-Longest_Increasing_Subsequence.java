public class Longest_Increasing_Subsequence {

  public static void main(String[] args) {

    int[] nums = {10,9,2,5,3,7,101,18};  // 4

    Solution_1 sol = new Solution_1();

    int res = sol.lengthOfLIS(nums);
    System.out.println("res:" + res);

  }

}
