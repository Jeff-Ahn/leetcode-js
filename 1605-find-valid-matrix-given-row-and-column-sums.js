// 1605. Find Valid Matrix Given Row and Column Sums
// Difficulty: Medium

/* Description */
// You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.

// Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies the rowSum and colSum requirements.

// Return a 2D array representing any matrix that fulfills the requirements. It's guaranteed that at least one matrix that fulfills the requirements exists.

/* Constraints */
// 1 <= rowSum.length, colSum.length <= 500
// 0 <= rowSum[i], colSum[i] <= 10^8
// sum(rows) == sum(columns)

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const n1 = rowSum.length;
  const n2 = colSum.length;

  const matrix = new Array(n1).fill(0).map((_) => new Array(n2).fill(0));

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      const ret = Math.min(rowSum[i], colSum[j]);
      rowSum[i] -= ret;
      colSum[j] -= ret;
      matrix[i][j] = ret;
    }
  }
  return matrix;
};
