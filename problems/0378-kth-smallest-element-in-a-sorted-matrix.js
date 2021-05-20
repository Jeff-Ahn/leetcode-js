// 378. Kth Smallest Element in a Sorted Matrix
// Difficulty: Medium

/* Description */
// Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

/* Constraints */
// n == matrix.length
// n == matrix[i].length
// 1 <= n <= 300
// -10^9 <= matrix[i][j] <= 10^9
// All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
// 1 <= k <= n^2

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  return matrix.flat().sort((a, b) => a - b)[k - 1];
};
