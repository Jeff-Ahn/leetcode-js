// 1588. Sum of All Odd Length Subarrays
// Difficulty: Easy

/* Description */
// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

/* Constraints */
// 1 <= arr.length <= 100
// 1 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let result = 0;
  let j = 1;
  while (j <= arr.length) {
    let i = 0;
    while (i + j <= arr.length) {
      result += sumFromTo(arr, i, i + j);
      i++;
    }
    j += 2;
  }

  return result;
};

const sumFromTo = (arr, from, to) => {
  let sum = 0;
  for (let i = from; i < to; i++) {
    sum += arr[i];
  }
  return sum;
};
