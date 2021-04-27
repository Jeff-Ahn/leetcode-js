// 1486. XOR Operation in an Array
// Difficulty: Easy

/* Description */
// Given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.

/* Constraints */
// 1 <= n <= 1000
// 0 <= start <= 1000
// n == nums.length

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  const nums = new Array(n).fill(start).map((num, idx) => num + 2 * idx);
  return nums.reduce((acc, cur) => acc ^ cur, 0);
};
