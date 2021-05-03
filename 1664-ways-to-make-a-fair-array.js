// 1664. Ways to Make a Fair Array
// Difficulty: Medium

/* Description */
// You are given an integer array nums. You can choose exactly one index (0-indexed) and remove the element. Notice that the index of the elements may change after the removal.

// For example, if nums = [6,1,7,4,1]:

// Choosing to remove index 1 results in nums = [6,7,4,1].
// Choosing to remove index 2 results in nums = [6,1,4,1].
// Choosing to remove index 4 results in nums = [6,1,7,4].
// An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values.

// Return the number of indices that you could choose such that after the removal, nums is fair.

/* Constraints */
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  let even = 0;
  let odd = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      even += nums[i];
    } else {
      odd += nums[i];
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (j % 2 == 0) {
      even -= nums[j];

      if (even == odd) {
        count++;
      }

      odd += nums[j];
    } else {
      odd -= nums[j];
      if (even == odd) {
        count++;
      }
      even += nums[j];
    }
  }

  return count;
};
