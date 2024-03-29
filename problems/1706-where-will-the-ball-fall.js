// 1706. Where Will the Ball Fall
// Difficulty: Medium

/* Description */
// You have a 2-D grid of size m x n representing a box, and you have n balls. The box is open on the top and bottom sides.

// Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left.

// A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as 1.
// A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as -1.
// We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a "V" shaped pattern between two boards or if a board redirects the ball into either wall of the box.

// Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box.

/* Constraints */
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// grid[i][j] is 1 or -1.

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const ans = [];
  for (let start = 0; start < n; start++) {
    let j = start;
    for (let i = 0; i < m; i++) {
      let dir = grid[i][j];
      if (dir === grid[i][j + dir]) j += dir;
      else (i = m), (j = -1);
    }
    ans[start] = j;
  }
  return ans;
};
