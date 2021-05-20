// 215. Kth Largest Element in an Array
// Difficulty: Medium

/* Description */
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

/* Constraints */
// 1 <= k <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};
