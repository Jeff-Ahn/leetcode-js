// 712. Minimum ASCII Delete Sum for Two Strings
// Difficulty: Medium

/* Description */
// Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

/* Constraints */
// 0 < s1.length, s2.length <= 1000.
// All elements of each string will have an ASCII value in [97, 122].

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  // Solution 1: Bottom Up
  const len1 = s1.length;
  const len2 = s2.length;
  const dp = new Array(len1 + 1)
    .fill(null)
    .map((_) => new Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }

  for (let j = 1; j <= len2; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] == s2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else {
        const del1 = s1.charCodeAt(i - 1) + dp[i - 1][j];
        const del2 = s2.charCodeAt(j - 1) + dp[i][j - 1];
        dp[i][j] = Math.min(del1, del2);
      }
    }
  }
  return dp[len1][len2];
};

var minimumDeleteSum = function (s1, s2) {
  // Solution 2: Top Down
  const memo = [...Array(s1.length)].map(() => Array(s2.length).fill(0));

  function delChar(i1, i2) {
    if (i1 == s1.length) return sumOfChars(s2.slice(i2));
    if (i2 == s2.length) return sumOfChars(s1.slice(i1));
    if (memo[i1][i2]) return memo[i1][i2];

    let res;

    if (s1[i1] == s2[i2]) res = delChar(i1 + 1, i2 + 1);
    else {
      const del1 = s1.charCodeAt(i1) + delChar(i1 + 1, i2);
      const del2 = s2.charCodeAt(i2) + delChar(i1, i2 + 1);
      res = Math.min(del1, del2);
    }
    memo[i1][i2] = res;
    return res;
  }

  function sumOfChars(str) {
    let sum = 0;
    for (let c of str) sum += c.charCodeAt();
    return sum;
  }
  return delChar(0, 0);
};
