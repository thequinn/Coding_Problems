/*
55. Jump Game
*/
public class Solution_1 {
  public boolean canJumpFromPos(int pos, int[] nums) {
    if (pos == nums.length - 1) {
      return true;
    }

    int furthestJump = Math.min(pos + nums[pos], nums.length - 1);

    for (int nextPos = pos + 1; nextPos <= furthestJump; nextPos++) {
      if (canJumpFromPos(nextPos, nums)) {
        return true;
      }
    }
    return false;
  }

  public boolean canJump(int[] nums) {
    return canJumpFromPos(0, nums);
  }
}


