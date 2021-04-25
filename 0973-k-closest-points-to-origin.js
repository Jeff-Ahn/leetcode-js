// 973. K Closest Points to Origin
// Difficulty: Medium

/* Description */
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

/* Constraints */
// 1 <= k <= points.length <= 10^4
// -10^4 < xi, yi < 10^4

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const answer = [];
  const distances = points.map((point, idx) => [
    idx,
    getDistance(point[0], point[1]),
  ]);
  distances.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < k; i++) {
    const index = distances[i][0];
    answer.push(points[index]);
  }
  return answer;
};

const getDistance = (p1, p2) => {
  return Math.sqrt(p1 ** 2 + p2 ** 2);
};
