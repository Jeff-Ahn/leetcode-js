// 264. Ugly Number II
// Difficulty: Medium

/* Description */
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

/* Constraints */
// 1 <= n <= 1690

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = [1];

  let t2 = 0;
  let t3 = 0;
  let t5 = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[t2] * 2, Math.min(dp[t3] * 3, dp[t5] * 5));
    if (dp[i] === dp[t2] * 2) t2++;
    if (dp[i] === dp[t3] * 3) t3++;
    if (dp[i] === dp[t5] * 5) t5++;
  }
  return dp[n - 1];
};
