// 1329. Sort the Matrix Diagonally
// Difficulty: Medium

/* Description */
// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

/* Constraints */
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// 1 <= mat[i][j] <= 100

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  const n = mat.length;
  const m = mat[0].length;

  if (n === 1 || m === 1) return mat;

  const sortLine = (i, j) => {
    let temp = [];
    let k = 0;
    for (let offset = 0; i + offset < n && j + offset < m; offset++)
      temp[k++] = mat[i + offset][j + offset];

    temp.sort((a, b) => a - b);
    k = 0;
    for (let offset = 0; i + offset < n && j + offset < m; offset++)
      mat[i + offset][j + offset] = temp[k++];
  };

  for (let i = 0; i < n - 1; i++) sortLine(i, 0);

  for (let j = 1; j < m - 1; j++) sortLine(0, j);

  return mat;
};

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  let map = new Map();

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      let d = i - j;

      if (!map.has(d)) {
        map.set(d, []);
      }

      map.get(d).push(mat[i][j]);
    }
  }

  map.forEach((val, key) => {
    map.set(
      key,
      val.sort((a, b) => a - b)
    );
  });

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      let d = i - j;

      mat[i][j] = map.get(d).shift();
    }
  }

  return mat;
};
