// 303. Range Sum Query - Immutable
// Difficulty: Easy

/* Description */
// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

/* Constraints */
// 1 <= nums.length <= 10^4
// -10^5 <= nums[i] <= 10^5
// 0 <= left <= right < nums.length
// At most 10^4 calls will be made to sumRange.

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.arr = [];
  this.arr[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    this.arr[i] = this.arr[i - 1] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.arr[right] - (this.arr[left - 1] ?? 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
