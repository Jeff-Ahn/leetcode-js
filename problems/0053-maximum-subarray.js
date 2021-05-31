// 53. Maximum Subarray
// Difficulty: Easy

/* Description */
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

/* Constraints */
// 1 <= nums.length <= 3 * 10^4
// -10^5 <= nums[i] <= 10^5

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  const dp = new Array(n);
  dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i];
  }
  return Math.max(...dp);
};
