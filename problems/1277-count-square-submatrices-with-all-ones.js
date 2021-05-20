// 1277. Count Square Submatrices with All Ones
// Difficulty: Medium

/* Description */
// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

/* Constraints */
// 1 <= arr.length <= 300
// 1 <= arr[0].length <= 300
// 0 <= arr[i][j] <= 1

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const n1 = matrix.length;
  const n2 = matrix[0].length;
  const dp = new Array(n1).fill(0).map((_) => new Array(n2).fill(0));
  let count = 0;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (i === 0 || j === 0) dp[i][j] = matrix[i][j];
      else if (matrix[i][j] === 0) dp[i][j] = 0;
      else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
      count += dp[i][j];
    }
  }
  return count;
};
