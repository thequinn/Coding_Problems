public class Coin_Change {

  public static void main(String[] args) {
    //int[] coins = {1, 2, 5};  int amount = 11;    // 3
    //int[] coins = {2};        int amount = 3;     // -1
    int[] coins = {2,3,4};    int amount = 7;

    Solution_1 sol_1 = new Solution_1();
    int res = sol_1.coinChange(coins, amount);
    System.out.println("\nres:" + res);
  }
}

