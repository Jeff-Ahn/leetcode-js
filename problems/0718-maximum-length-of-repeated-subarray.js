// 718. Maximum Length of Repeated Subarray
// Difficulty: Medium

/* Description */
// Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

/* Constraints */
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 100

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;

  const dp = new Array(n1 + 1).fill(null).map((_) => new Array(n2 + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      max = Math.max(max, dp[i][j]);
    }
  }

  return max;
};
