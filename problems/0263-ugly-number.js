// 263. Ugly Number
// Difficulty: Easy

/* Description */
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

/* Constraints */
// -2^31 <= n <= 2^31 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 0) return false;

  while (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
    if (n % 2 === 0) n = n / 2;
    if (n % 3 === 0) n = n / 3;
    if (n % 5 === 0) n = n / 5;
  }
  return n === 1;
};
