// 1043. Partition Array for Maximum Sum
// Difficulty: Medium

/* Description */
// Given an integer array arr, you should partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

// Return the largest sum of the given array after partitioning.

/* Constraints */
// 1 <= arr.length <= 500
// 0 <= arr[i] <= 10^9
// 1 <= k <= arr.length

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const maxSumAfterPartitioning = function (A, K) {
  const N = A.length;
  const dp = new Array(N).fill(0);
  for (let i = 0; i < N; ++i) {
    let curMax = 0;
    for (let j = 1; j <= K && i - j + 1 >= 0; j++) {
      curMax = Math.max(curMax, A[i - j + 1]);
      dp[i] = Math.max(dp[i], (i >= j ? dp[i - j] : 0) + curMax * j);
    }
  }
  return dp[N - 1];
};
