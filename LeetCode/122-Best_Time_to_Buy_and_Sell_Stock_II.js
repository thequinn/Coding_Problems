/*
122. Best Time to Buy and Sell Stock II
*/

let maxProfit = function(prices) {
  let i = 0, maxProfit = 0;
  let valley = prices[0], peak = prices[0];

  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];

    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];

    maxProfit += peak - valley;
  }

  return maxProfit;
}



let prices = [7,1,5,3,6,4];
let result = maxProfit(prices);
console.log("result:", result);

