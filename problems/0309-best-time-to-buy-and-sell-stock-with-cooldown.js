// 309. Best Time to Buy and Sell Stock with Cooldown
// Difficulty: Medium

/* Description */
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/* Constraints */
// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/75931/Easiest-JAVA-solution-with-explanations
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let b0 = -prices[0];
  let b1 = -prices[0];
  let s0 = 0;
  let s1 = 0;
  let s2 = 0;

  for (let i = 1; i < prices.length; i++) {
    b0 = Math.max(b1, s2 - prices[i]);
    s0 = Math.max(s1, b1 + prices[i]);
    b1 = b0;
    s2 = s1;
    s1 = s0;
  }

  return s0;
};
