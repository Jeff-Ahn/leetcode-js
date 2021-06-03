// 343. Integer Break
// Difficulty: Medium

/* Description */
// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.

/* Constraints */
// 2 <= n <= 58

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;

  let numOfTwo = Math.floor(n / 2);
  let numOfThree = 0;
  const rest = n % 2;
  if (rest === 1) {
    numOfTwo--;
    numOfThree++;
  }
  while (numOfTwo >= 3) {
    numOfTwo -= 3;
    numOfThree += 2;
  }

  return 2 ** numOfTwo * 3 ** numOfThree;
};
