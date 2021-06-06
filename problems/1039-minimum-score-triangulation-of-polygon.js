// 1039. Minimum Score Triangulation of Polygon
// Difficulty: Medium

/* Description */
// You have a convex n-sided polygon where each vertex has an integer value. You are given an integer array values where values[i] is the value of the ith vertex (i.e., clockwise order).

// You will triangulate the polygon into n - 2 triangles. For each triangle, the value of that triangle is the product of the values of its vertices, and the total score of the triangulation is the sum of these values over all n - 2 triangles in the triangulation.

// Return the smallest possible total score that you can achieve with some triangulation of the polygon.

/* Constraints */
// n == values.length
// 3 <= n <= 50
// 1 <= values[i] <= 100

/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
  const n = values.length;
  const dp = new Array(n).fill(null).map((_) => new Array(n).fill(0));

  for (let d = 2; d < n; d++) {
    for (let left = 0; left + d < n; left++) {
      let right = left + d;
      dp[left][right] = Infinity;
      for (let k = left + 1; k < right; k++) {
        dp[left][right] = Math.min(
          dp[left][right],
          dp[left][k] + dp[k][right] + values[left] * values[right] * values[k]
        );
      }
    }
  }

  return dp[0][n - 1];
};
