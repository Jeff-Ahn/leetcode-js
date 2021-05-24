// 1356. Sort Integers by The Number of 1 Bits
// Difficulty: Easy

/* Description */
// Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the sorted array.

/* Constraints */
// 1 <= arr.length <= 500
// 0 <= arr[i] <= 10^4

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const count1BitMap = new Map();

  arr.forEach((num) => {
    let key = num;
    let count = 0;
    while (num !== 0) {
      num = num & (num - 1);
      count++;
    }
    count1BitMap.set(key, count);
  });

  return arr.sort((a, b) =>
    count1BitMap.get(a) !== count1BitMap.get(b)
      ? count1BitMap.get(a) - count1BitMap.get(b)
      : a - b
  );
};
