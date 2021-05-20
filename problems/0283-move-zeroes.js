// 283. Move Zeroes
// Difficulty: Easy

/* Description */
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/* Constraints */
// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;
  let left = 0;
  let right;

  while (left < nums.length) {
    while (nums[left] && left < nums.length) left++;
    if (left === nums.length) break;
    right = left + 1;
    while (!nums[right] && right < nums.length) right++;
    if (right === nums.length) break;
    nums[left] = nums[right];
    nums[right] = 0;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroCount = 0;
  for (i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      zeroCount += 1;
    } else {
      [nums[i - zeroCount], nums[i]] = [nums[i], nums[i - zeroCount]];
    }
  }
};
