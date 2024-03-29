// 1780. Check if Number is a Sum of Powers of Three
// Difficulty: Medium

/* Description */
// Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

// An integer y is a power of three if there exists an integer x such that y == 3^x.

/* Constraints */
// 1 <= n <= 10^7

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  return !n.toString(3).includes(2);
};
