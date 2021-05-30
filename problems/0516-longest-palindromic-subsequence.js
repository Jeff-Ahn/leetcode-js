// 516. Longest Palindromic Subsequence
// Difficulty: Medium

/* Description */
// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

/* Constraints */
// 1 <= s.length <= 1000
// s consists only of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(null).map((_) => new Array(n).fill(0));

  for (let start = n - 1; start >= 0; start--) {
    for (let end = 0; end < n; end++) {
      if (start > end) {
        dp[start][end] = 0;
      } else if (start === end) {
        dp[start][end] = 1;
      } else if (s[start] === s[end]) {
        dp[start][end] = 2 + dp[start + 1][end - 1];
      } else {
        dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
      }
    }
  }

  return dp[0][n - 1];
};
