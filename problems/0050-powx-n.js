// 50. Pow(x, n)
// Difficulty: Medium

/* Description */
// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

/* Constraints */
// -100.0 < x < 100.0
// -2^31 <= n <= 2^31-1
// -10^4 <= xn <= 10^4

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (x === 0) return 0;

  if (n > 0) {
    return (n % 2 === 1 ? x : 1) * myPow(x * x, Math.floor(n / 2));
  } else {
    return myPow(1 / x, -n);
  }
};
