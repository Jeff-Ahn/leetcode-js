// 413. Arithmetic Slices
// Difficulty: Medium

/* Description */
// An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
// Given an integer array nums, return the number of arithmetic subarrays of nums.

// A subarray is a contiguous subsequence of the array.

/* Constraints */
// 1 <= nums.length <= 5000
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let sum = 0;
  const n = nums.length;
  const dp = Array(n).fill(0);

  for (let i = 2; i <= n - 1; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = 1 + dp[i - 1];
      sum += dp[i];
    }
  }

  return sum;
};
