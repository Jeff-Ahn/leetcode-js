// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
// Difficulty: Medium

/* Description */
// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

/* Constraints */
// 1 <= n.length <= 10^5
// n consists of only digits.
// n does not contain any leading zeros and represents a positive integer.

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max(...n.split('').map((num) => Number(num)));
};
