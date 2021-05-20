// 1314. Matrix Block Sum
// Difficulty: Medium

/* Description */
// Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

// i - k <= r <= i + k,
// j - k <= c <= j + k, and
// (r, c) is a valid position in the matrix.

/* Constraints */
// m == mat.length
// n == mat[i].length
// 1 <= m, n, k <= 100
// 1 <= mat[i][j] <= 100

/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
  // create DP Table matrix (m+1 * n+1)
  const dp = Array(mat.length + 1);
  // set first row value as 0
  dp[0] = Array(mat[0].length + 1).fill(0);

  // fill dp table with cumulative sum from (0,0) to (i,j)
  for (let i = 0; i < mat.length; i++) {
    dp[i + 1] = [0];
    for (let j = 0; j < mat[0].length; j++) {
      dp[i + 1][j + 1] = mat[i][j] + dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
    }
  }
  // find sum of r, c cells (cells in square) using DP table (inclusion/exclusion)
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      let r1 = Math.max(0, i - K),
        r2 = Math.min(mat.length - 1, i + K);
      let c1 = Math.max(0, j - K),
        c2 = Math.min(mat[0].length - 1, j + K);
      // r1++; r2++; c1++; c2++;
      mat[i][j] =
        dp[r2 + 1][c2 + 1] - dp[r1][c2 + 1] - dp[r2 + 1][c1] + dp[r1][c1];
    }
  }
  // used mat as result matrix
  return mat;
};
