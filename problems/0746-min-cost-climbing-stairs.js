// 746. Min Cost Climbing Stairs
// Difficulty: Easy

/* Description */
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

/* Constraints */
// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] ?? 0);
  }

  return dp[n];
};
