// 121. Best Time to Buy and Sell Stock
// Difficulty: Easy

/* Description */
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/* Constraints */
// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  const dp = new Array(n).fill(null);
  dp[n - 1] = [0, prices[n - 1]];
  for (let i = n - 2; i > -1; i--) {
    const max = Math.max(dp[i + 1][1] - prices[i], 0);
    if (max === 0) {
      dp[i] = [dp[i + 1][0], prices[i]];
    } else {
      dp[i] = [Math.max(max, dp[i + 1][0]), dp[i + 1][1]];
    }
  }
  return dp[0][0];
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      if (profit < prices[i] - min) {
        profit = prices[i] - min;
      }
    }
  }
  return profit;
};
