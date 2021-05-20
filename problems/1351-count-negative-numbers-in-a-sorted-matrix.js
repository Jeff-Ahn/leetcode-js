// 1351. Count Negative Numbers in a Sorted Matrix
// Difficulty: Easy

/* Description */
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

/* Constraints */
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const getFirstNegativeValueIndex = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] >= 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };

  return grid.reduce(
    (acc, cur) => acc + cur.length - getFirstNegativeValueIndex(cur),
    0
  );
};
