// 357. Count Numbers with Unique Digits
// Difficulty: Medium

/* Description */
// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10^n.

/* Constraints */
// 0 <= n <= 8

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;
  let res = 10;
  let uniqueDigit = 9;
  let availableNumber = 9;

  while (n-- > 1 && availableNumber > 0) {
    uniqueDigit = uniqueDigit * availableNumber;
    res += uniqueDigit;
    availableNumber--;
  }

  return res;
};
