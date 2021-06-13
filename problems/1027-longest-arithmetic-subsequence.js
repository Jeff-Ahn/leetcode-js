// 1027. Longest Arithmetic Subsequence
// Difficulty: Medium

/* Description */
// Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.

// Recall that a subsequence of an array nums is a list nums[i1], nums[i2], ..., nums[ik] with 0 <= i1 < i2 < ... < ik <= nums.length - 1, and that a sequence seq is arithmetic if seq[i+1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).

/* Constraints */
// 2 <= nums.length <= 1000
// 0 <= nums[i] <= 500

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const dp = new Array(nums.length);
  let max = 2;

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Map();
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      let diff = nums[i] - nums[j];
      dp[i].set(diff, dp[j].get(diff) + 1 || 2);
      max = Math.max(max, dp[i].get(diff));
    }
  }
  return max;
};
