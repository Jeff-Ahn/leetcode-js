// 1395. Count Number of Teams
// Difficulty: Medium

/* Description */
// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

/* Constraints */
// n == rating.length
// 3 <= n <= 1000
// 1 <= rating[i] <= 105
// All the integers in rating are unique.

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let res = 0;
  for (let j = 1; j < rating.length; j++) {
    // i < j < k
    let leftSmaller = 0;
    let rightLarger = 0;
    // i > j > k
    let leftLarger = 0;
    let rightSmaller = 0;

    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) {
        leftSmaller++;
      } else if (rating[i] > rating[j]) {
        leftLarger++;
      }
    }

    for (let k = j + 1; k < rating.length; k++) {
      if (rating[k] > rating[j]) {
        rightLarger++;
      } else if (rating[k] < rating[j]) {
        rightSmaller++;
      }
    }

    res += leftSmaller * rightLarger + leftLarger * rightSmaller;
  }

  return res;
};
