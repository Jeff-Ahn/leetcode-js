// 688. Knight Probability in Chessboard
// Difficulty: Medium

/* Description */
// On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).

// A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.

// Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

// The knight continues moving until it has made exactly k moves or has moved off the chessboard.

// Return the probability that the knight remains on the board after it has stopped moving.

/* Constraints */
// 1 <= n <= 25
// 0 <= k <= 100
// 0 <= row, column <= n

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  const possibleMove = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];
  const cache = {};
  const helper = (x, y, k) => {
    const key = `${x},${y},${k}`;
    if (cache[key]) return cache[key];

    if (k === 0) {
      if (0 <= x && x < n && 0 <= y && y < n) return 1;
      return 0;
    }

    let sum = 0;

    for (let i = 0; i < 8; i++) {
      const [tmpX, tmpY] = possibleMove[i];
      if (0 <= x + tmpX && x + tmpX < n && 0 <= y + tmpY && y + tmpY < n) {
        sum += helper(x + tmpX, y + tmpY, k - 1);
      }
    }
    cache[key] = sum;
    return cache[key];
  };

  return helper(row, column, k) / 8 ** k;
};
