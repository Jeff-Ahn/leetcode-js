// 813. Largest Sum of Averages
// Difficulty: Medium

/* Description */
// We partition a row of numbers nums into at most k adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

// Note that our partition must use every number in nums, and that scores are not necessarily integers.

/* Constraints */
// 1 <= nums.length <= 100.
// 1 <= nums[i] <= 10000.
// 1 <= k <= nums.length.
// Answers within 10^-6 of the correct answer will be accepted as correct.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, K) {
  const N = nums.length;

  const prefixSum = new Array(N + 1).fill(0);

  for (let i = 0; i < N; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  const dp = new Array(N);

  for (let i = 0; i < N; i++) {
    dp[i] = (prefixSum[N] - prefixSum[i]) / (N - i);
  }

  for (let k = 0; k < K - 1; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const sumWithPartition =
          (prefixSum[j] - prefixSum[i]) / (j - i) + dp[j];

        dp[i] = Math.max(dp[i], sumWithPartition);
      }
    }
  }

  return dp[0];
};
