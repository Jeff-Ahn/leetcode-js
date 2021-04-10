// 169. Majority Element
// Difficulty: Easy

/* Description */
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/* Constraints */
// n == nums.length
// 1 <= n <= 5 * 104
// -2^31 <= nums[i] <= 2^31 - 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const k = Math.floor(nums.length / 2);
  const count = new Map();

  nums.forEach((num) => count.set(num, count.get(num) + 1 || 1));

  for (let [key, value] of count) {
    if (value > k) return key;
  }
};
