// 1139. Largest 1-Bordered Square
// Difficulty: Medium

/* Description */
// Given a 2D grid of 0s and 1s, return the number of elements in the largest square subgrid that has all 1s on its border, or 0 if such a subgrid doesn't exist in the grid.

/* Constraints */
// 1 <= grid.length <= 100
// 1 <= grid[0].length <= 100
// grid[i][j] is 0 or 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let max = 0;

  const hor = new Array(n).fill(null).map((_) => new Array(m).fill(0));
  const ver = new Array(n).fill(null).map((_) => new Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) {
        hor[i][j] = j === 0 ? 1 : hor[i][j - 1] + 1;
        ver[i][j] = i === 0 ? 1 : ver[i - 1][j] + 1;
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      let small = Math.min(hor[i][j], ver[i][j]);

      while (small > max) {
        if (ver[i][j - small + 1] >= small && hor[i - small + 1][j] >= small) {
          max = small;
        }
        small--;
      }
    }
  }
  return max * max;
};
