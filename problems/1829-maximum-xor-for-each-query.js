// 1829. Maximum XOR for Each Query
// Difficulty: Medium

/* Description */
// You are given a sorted array nums of n non-negative integers and an integer maximumBit. You want to perform the following query n times:

// Find a non-negative integer k < 2maximumBit such that nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k is maximized. k is the answer to the ith query.
// Remove the last element from the current array nums.
// Return an array answer, where answer[i] is the answer to the ith query.

/* Constraints */
// nums.length == n
// 1 <= n <= 10^5
// 1 <= maximumBit <= 20
// 0 <= nums[i] < 2^maximumBit
// nums​​​ is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  const max = (2 << (maximumBit - 1)) - 1;
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] ^ nums[i - 1];
  }
  return nums.map((num) => max ^ num).reverse();
};
