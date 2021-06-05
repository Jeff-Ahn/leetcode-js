// 740. Delete and Earn
// Difficulty: Medium

/* Description */
// Given an array nums of integers, you can perform operations on the array.

// In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.

// You start with 0 points. Return the maximum number of points you can earn by applying such operations.

/* Constraints */
// 1 <= nums.length <= 2 * 10^4
// 1 <= nums[i] <= 10^4

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = {};
  for (const num of nums) {
    if (!(num in map)) map[num] = 0;
    map[num]++;
  }

  let prevSum = 0;
  let currSum = 0;
  let prevKey = -1;

  for (let key in map) {
    const m = Math.max(prevSum, currSum);
    key = parseInt(key);
    if (key - 1 !== prevKey) {
      currSum = key * map[key] + m;
      prevSum = m;
    } else {
      currSum = key * map[key] + prevSum;
      prevSum = m;
    }
    prevKey = key;
  }

  return Math.max(prevSum, currSum);
};
