// 1837. Sum of Digits in Base K
// Difficulty: Easy

/* Description */
// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

/* Constraints */
// 1 <= n <= 100
// 2 <= k <= 10

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  return n
    .toString(k)
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
};
