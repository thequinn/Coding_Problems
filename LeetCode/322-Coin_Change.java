public class Coin_Change {

  public static void main(String[] args) {
    int[] coins = {1, 5};    int amount = 6;    // 3
    //int[] coins = {1, 2, 5};    int amount = 11;    // 3
    //int[] coins = {2};          int amount = 3;     // -1

    Solution_1 sol = new Solution_1();
    int res = sol.coinChange(coins, amount);
    System.out.println("\nres:" + res);
  }
}

