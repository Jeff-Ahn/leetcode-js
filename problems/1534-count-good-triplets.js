// 1534. Count Good Triplets
// Difficulty: Easy

/* Description */
// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

/* Constraints */
// 3 <= arr.length <= 100
// 0 <= arr[i] <= 1000
// 0 <= a, b, c <= 1000

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let answer = 0;
  const n = arr.length;

  const isValid = (n1, n2, n3) => {
    return (
      Math.abs(arr[n1] - arr[n2]) <= a &&
      Math.abs(arr[n2] - arr[n3]) <= b &&
      Math.abs(arr[n3] - arr[n1]) <= c
    );
  };

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (isValid(i, j, k)) answer++;
      }
    }
  }

  return answer;
};
