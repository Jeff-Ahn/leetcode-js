// 1262. Greatest Sum Divisible by Three
// Difficulty: Medium

/* Description */
// Given an array nums of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

/* Constraints */
// 1 <= nums.length <= 4 * 10^4
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  let dp = Array(3).fill(0);
  for (const num of nums) {
    for (const i of [...dp]) {
      dp[(num + i) % 3] = Math.max(dp[(num + i) % 3], num + i);
    }
  }
  return dp[0];
};
