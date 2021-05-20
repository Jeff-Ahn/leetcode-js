// 1504. Count Submatrices With All Ones
// Difficulty: Medium

/* Description */
// Given a rows * columns matrix mat of ones and zeros, return how many submatrices have all ones.

/* Constraints */
// 1 <= rows <= 150
// 1 <= columns <= 150
// 0 <= mat[i][j] <= 1

let numSubmat = function (mat) {
  const Y = mat.length;
  const X = mat[0].length;
  let sum = 0;
  for (let y = 0; y < Y; y++) {
    for (let x = 0; x < X; x++) {
      if (x > 0 && mat[y][x] == 1) {
        mat[y][x] = mat[y][x - 1] + 1;
      }

      let maxWidth = Infinity;
      for (let _y = y; _y >= 0 && mat[y][x] > 0; _y--) {
        maxWidth = Math.min(maxWidth, mat[_y][x]);
        sum += maxWidth;
      }
    }
  }
  return sum;
};
