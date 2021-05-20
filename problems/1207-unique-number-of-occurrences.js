// 1207. Unique Number of Occurrences
// Difficulty: Easy

/* Description */
// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

/* Constraints */
// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const numMap = new Map();
  arr.forEach((num) => numMap.set(num, numMap.get(num) + 1 || 1));

  const n = [...numMap.values()].length;
  const setN = new Set(numMap.values()).size;

  return n === setN;
};
