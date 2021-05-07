// 1004. Max Consecutive Ones III
// Difficulty: Medium

/* Description */
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/* Constraints */
// 1 <= nums.length <= 10^5
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (A, K) {
  let longest = 0;
  let zeroCount = 0;
  let start = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) zeroCount++;

    if (zeroCount > K) {
      if (A[start] === 0) zeroCount--;
      start++;
    }

    longest = Math.max(longest, i - start + 1);
  }

  return longest;
};
