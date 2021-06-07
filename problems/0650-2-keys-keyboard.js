// 650. 2 Keys Keyboard
// Difficulty: Medium

/* Description */
// There is only one character 'A' on the screen of a notepad. You can perform two operations on this notepad for each step:

// Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
// Paste: You can paste the characters which are copied last time.
// Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.

/* Constraints */
// 1 <= n <= 1000

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    for (let j = i - 1; j > 0; j--) {
      if (i % j === 0) {
        dp[i] = dp[j] + 1 + (i / j - 1);
        break;
      }
    }
  }
  return dp[n];
};

var minSteps = function (n) {
  let res = 0;
  for (let i = 2; i <= n; i++) {
    while (n % i == 0) {
      res += i;
      n = n / i;
    }
  }
  return res;
};
