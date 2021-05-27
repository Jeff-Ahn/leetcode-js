// 714. Best Time to Buy and Sell Stock with Transaction Fee
// Difficulty: Medium

/* Description */
// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/* Constraints */
// 1 <= prices.length <= 5 * 10^4
// 1 <= prices[i] < 5 * 10^4
// 0 <= fee < 5 * 10^4

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // dp[i][0]: maximum profit we can get if there's no stock left at day i
  // dp[i][1]: maximum profut we can get if there's stock left at day i
  const dp = [];
  dp[0] = [];
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [];
    // didn't sell any stocks at day i and has no stock
    dp[i][0] = dp[i - 1][0];
    // or sell the stocks at day i
    dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] + prices[i] - fee);
    // didn't buy any stocks at day i but has stock
    dp[i][1] = dp[i - 1][1];
    // or buys the stock at day i
    dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] - prices[i]);
  }
  // Cannot have stocks left at the last day
  return dp[prices.length - 1][0];
};

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (!prices || !prices.length) {
    return 0;
  }

  const n = prices.length;
  let a = 0;
  let b = -prices[0];

  for (let i = 1; i < n; i++) {
    const t = a;
    a = Math.max(a, b + prices[i] - fee);
    b = Math.max(b, a - prices[i]);
  }

  return a;
};
