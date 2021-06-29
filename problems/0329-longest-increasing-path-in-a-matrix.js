// 329. Longest Increasing Path in a Matrix
// Difficulty: Hard

/* Description */
// Given an m x n integers matrix, return the length of the longest increasing path in matrix.

// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

/* Constraints */
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// 0 <= matrix[i][j] <= 2^31 - 1

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const move = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const cache = {};
  let max = 1;

  const dfs = (current) => {
    const [x, y] = current;
    const key = `${x},${y}`;

    if (cache[key]) return cache[key];

    let max = 1;
    for (let i = 0; i < 4; i++) {
      const [tmpX, tmpY] = move[i];
      const [xx, yy] = [x + tmpX, y + tmpY];

      if (
        xx < 0 ||
        xx >= n ||
        yy < 0 ||
        yy >= m ||
        matrix[x][y] >= matrix[xx][yy]
      )
        continue;
      max = Math.max(max, 1 + dfs([xx, yy]));
    }

    cache[key] = max;
    return cache[key];
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      max = Math.max(max, dfs([i, j]));
    }
  }

  return max;
};
