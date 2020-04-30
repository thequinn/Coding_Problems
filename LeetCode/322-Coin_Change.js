/*
322. Coin Change
*/

const coinChange = function(coins, amount) {
  coins.sort((a, b) => b-a);

  let count = 0;
  for (let i = 0; i < coins.length; i++) {
    count = count + Math.floor(amount / coins[i]);
    amount = amount % coins[i];

    if (amount == 0)
      return count;
  }
  return -1;
}

//---------- Testing ----------
let coins = [1, 2, 5];    let amount = 11;
let min = coinChange(coins, amount);
console.log("\nmin:", min);
