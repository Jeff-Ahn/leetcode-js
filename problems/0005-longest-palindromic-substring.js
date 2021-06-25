// 5. Longest Palindromic Substring
// Difficulty: Medium

/* Description */
// Given a string s, return the longest palindromic substring in s.

/* Constraints */
// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  let res = null;

  const dp = new Array(n).fill(null).map((_) => new Array(n).fill(false));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && (res === null || j - i + 1 > res.length)) {
        res = s.slice(i, j + 1);
      }
    }
  }
  return res;
};
