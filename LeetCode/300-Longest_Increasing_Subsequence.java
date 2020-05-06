public class Longest_Increasing_Subsequence {

  public int lengthOfLIS(int[] nums) {
    if (nums.length == 0) {
      return 0;
    }

    int[] maxLen = new int[nums.length];
    Arrays.fill(maxLen , 1);

    int max = 1;

    for (int i = 1; i < nums.length; i++) {
      for (int j = 0; j < i; j++){
        if (nums[i] > nums[j]) {
          maxLen[i] = Math.max(maxLen[i], maxLen[j] + 1);
        }
      }

      max = Math.max(max, maxLen[i]);
    }

    return max;
  }


}

