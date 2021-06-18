// 1895. Largest Magic Square
// Difficulty: Medium

/* Description */
// A k x k magic square is a k x k grid filled with integers such that every row sum, every column sum, and both diagonal sums are all equal. The integers in the magic square do not have to be distinct. Every 1 x 1 grid is trivially a magic square.

// Given an m x n integer grid, return the size (i.e., the side length k) of the largest magic square that can be found within this grid.

/* Constraints */
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// 1 <= grid[i][j] <= 10^6

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
  let res = 1;
  const m = grid.length,
    n = grid[0].length;
  const minMN = Math.min(m, n);

  const checkMagic = (y, x, k) => {
    let sum = 0;
    for (let i = 0; i < k; ++i) {
      sum += grid[y][x + i];
    }

    // row
    for (let i = 0; i < k; ++i) {
      let total = 0;
      for (let j = 0; j < k; ++j) {
        total += grid[y + i][x + j];
      }

      if (total !== sum) {
        return false;
      }
    }

    // column
    for (let i = 0; i < k; ++i) {
      let total = 0;
      for (let j = 0; j < k; ++j) {
        total += grid[y + j][x + i];
      }

      if (total !== sum) {
        return false;
      }
    }

    // diagonal - 1
    let total = 0;
    for (let i = 0; i < k; ++i) {
      total += grid[y + i][x + i];
    }
    if (total !== sum) {
      return false;
    }

    // diagonal - 2
    total = 0;
    let j = k - 1;
    for (let i = 0; i < k; ++i) {
      total += grid[y + i][x + j];
      --j;
    }
    if (total !== sum) {
      return false;
    }

    return true;
  };

  for (let k = minMN; k >= 2; --k) {
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        if (i + k > m || j + k > n) {
          continue;
        }

        const isMagic = checkMagic(i, j, k);
        if (isMagic) {
          return k;
        }
      }
    }
  }

  return 1;
};
