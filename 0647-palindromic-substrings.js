// 647. Palindromic Substrings
// Difficulty: Medium

/* Description */
// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

/* Constraints */
// 1 <= s.length <= 1000
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < i + 2; j++) {
      let l = i;
      let r = j;

      while (l >= 0 && r < s.length && s[l] === s[r]) {
        count++;
        l--;
        r++;
      }
    }
  }

  return count;
};

var countSubstrings = function (s) {
  const n = s.length;
  const dp = [...Array(n)].map(() => Array(n).fill(false));
  let count = 0;
  // Base case: single letter substrings
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }

  // Base case: double letter substrings
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    dp[i][i + 1] && count++;
  }

  // substrings longer than 2 chars
  for (let len = 3; len <= n; len++) {
    let start = 0,
      end = start + len - 1;

    while (end < n) {
      dp[start][end] = dp[start + 1][end - 1] && s[start] === s[end];
      dp[start][end] && count++;
      start++;
      end++;
    }
  }
  return count;
};
