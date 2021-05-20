// 980. Unique Paths III
// Difficulty: Hard

/* Description */
// On a 2-dimensional grid, there are 4 types of squares:

// 1 represents the starting square.  There is exactly one starting square.
// 2 represents the ending square.  There is exactly one ending square.
// 0 represents empty squares we can walk over.
// -1 represents obstacles that we cannot walk over.
// Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

/* Note */
// 1 <= grid.length * grid[0].length <= 20

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const n1 = grid.length;
  const n2 = grid[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let answer = 0;
  let remain = 0;
  let start = null;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (grid[i][j] === 0) remain++;
      if (grid[i][j] === 1) start = [i, j];
    }
  }

  const dfs = (i, j, remain) => {
    if (grid[i][j] === 2) {
      if (remain === 0) answer++;
      return;
    } else {
      grid[i][j] = -1;
      for (let d = 0; d < 4; d++) {
        let x = i + dir[d][0];
        let y = j + dir[d][1];
        if (x >= 0 && x < n1 && y >= 0 && y < n2 && grid[x][y] >= 0) {
          dfs(x, y, remain - 1);
        }
      }
      grid[i][j] = 0;
    }
  };

  dfs(start[0], start[1], remain + 1);

  return answer;
};
