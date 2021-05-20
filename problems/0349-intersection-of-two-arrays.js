// 349. Intersection of Two Arrays
// Difficulty: Easy

/* Description */
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

/* Constraints */
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const n1 = nums1.length;
  const n2 = nums2.length;
  let p1 = 0;
  let p2 = 0;
  const answer = new Set();

  while (p1 < n1 && p2 < n2) {
    if (nums1[p1] === nums2[p2]) {
      answer.add(nums1[p1]);
      p1++;
      p2++;
    } else {
      if (nums1[p1] > nums2[p2]) {
        p2++;
      } else {
        p1++;
      }
    }
  }
  return [...answer];
};
