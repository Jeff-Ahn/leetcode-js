// 461. Hamming Distance
// Difficulty: Easy

/* Description */
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

/* Constraints */
// 0 <= x, y <= 2^31 - 1

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y;
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
};
