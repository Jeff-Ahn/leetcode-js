// 1696. Jump Game VI
// Difficulty: Medium

/* Description */
// You are given a 0-indexed integer array nums and an integer k.

// You are initially standing at index 0. In one move, you can jump at most k steps forward without going outside the boundaries of the array. That is, you can jump from index i to any index in the range [i + 1, min(n - 1, i + k)] inclusive.

// You want to reach the last index of the array (index n - 1). Your score is the sum of all nums[j] for each index j you visited in the array.

// Return the maximum score you can get.

/* Constraints */
// 1 <= nums.length, k <= 10^5
// -10^4 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  if (nums.length == 1) return nums[0];

  let dp = new Array(nums.length);
  let queue = [];
  queue.push(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    while (queue.length > 0 && queue[0] < i - k) {
      queue.shift();
    }
    dp[i] = dp[queue[0]] + nums[i];

    while (queue.length > 0 && dp[i] >= dp[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }
  return dp[nums.length - 1];
};
