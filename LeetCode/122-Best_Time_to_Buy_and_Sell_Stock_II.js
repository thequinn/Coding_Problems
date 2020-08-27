/*
122. Best Time to Buy and Sell Stock II
*/

var maxProfit = function(prices) {
  let i = 0, profit = 0;

  for (let j = i+1; j < prices.length; ) {

    if (prices[i] > prices[j]) {
      i = j; j++;
    }

    if (prices[i] < prices[j]) {
      profit = profit + prices[j] - prices[i];
      console.log("profit:", profit);
      i = j + 1;
      j = i + 1;
    }
  }
  return profit;
};

let prices = [7,1,5,3,6,4];
let result = maxProfit(prices);
console.log("result:", result);

