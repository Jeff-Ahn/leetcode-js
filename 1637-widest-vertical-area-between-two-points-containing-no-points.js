// 1637. Widest Vertical Area Between Two Points Containing No Points
// Difficulty: Medium

/* Description */
// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

// A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

// Note that points on the edge of a vertical area are not considered included in the area.

/* Constraints */
// n == points.length
// 2 <= n <= 10^5
// points[i].length == 2
// 0 <= xi, yi <= 10^9

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let max = 0;
  points.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < points.length - 1; i++) {
    max = Math.max(max, points[i + 1][0] - points[i][0]);
  }

  return max;
};
