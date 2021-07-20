// 384. Shuffle an Array
// Difficulty: Medium

/* Description */
// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

/* Constraints */
// 1 <= nums.length <= 200
// -106 <= nums[i] <= 10^6
// All the elements of nums are unique.
// At most 5 * 10^4 calls in total will be made to reset and shuffle.

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return [...this.nums];
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const tmpArr = [...this.nums];

  for (let i = 0; i < tmpArr.length; i++) {
    swap(tmpArr, i, Math.floor(Math.random() * tmpArr.length));
  }
  return tmpArr;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
