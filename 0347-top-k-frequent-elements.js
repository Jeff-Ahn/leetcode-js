// 347. Top K Frequent Elements
// Difficulty: Medium

/* Description */
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/* Constraints */
// 1 <= nums.legth <= 10^5
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numsMap = new Map();

  nums.forEach((num) => numsMap.set(num, numsMap.get(num) + 1 || 1));

  return [...numsMap.keys(numsMap)]
    .sort((a, b) => numsMap.get(b) - numsMap.get(a))
    .slice(0, k);
};
