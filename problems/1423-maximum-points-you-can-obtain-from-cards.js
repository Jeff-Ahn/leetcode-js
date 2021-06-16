// 1423. Maximum Points You Can Obtain from Cards
// Difficulty: Medium

/* Description */
// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

/* Constraints */
// 1 <= cardPoints.length <= 10^5
// 1 <= cardPoints[i] <= 10^4
// 1 <= k <= cardPoints.length

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  const n = cardPoints.length;

  let point = n - k;
  let total = cardPoints.slice(point).reduce((acc, cur) => acc + cur, 0);
  let max = total;
  let i = 0;
  while (k--) {
    max = Math.max(max, (total += cardPoints[i] - cardPoints[point + i]));
    i++;
  }
  return max;
};
