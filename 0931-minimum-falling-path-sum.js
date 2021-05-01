// 931. Minimum Falling Path Sum
// Difficulty: Medium

/* Description */
// Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

// A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

/* Constraints */
// n == matrix.length
// n == matrix[i].length
// 1 <= n <= 100
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;

  const dp = new Array(n).fill(0).map((_) => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] =
        matrix[i][j] +
        Math.min(
          dp[i - 1][j - 1] ?? Infinity,
          dp[i - 1][j],
          dp[i - 1][j + 1] ?? Infinity
        );
    }
  }

  return Math.min(...dp[n - 1]);
};
