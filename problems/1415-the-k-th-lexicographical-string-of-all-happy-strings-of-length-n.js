// 1415. The k-th Lexicographical String of All Happy Strings of Length n
// Difficulty: Medium

/* Description */
// A happy string is a string that:

// consists only of letters of the set ['a', 'b', 'c'].
// s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
// For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

// Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

// Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

/* Constraints */
// 1 <= n <= 10
// 1 <= k <= 100

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  const happyStrings = [];

  const dfs = (s) => {
    if (s.length === n) {
      return happyStrings.push(s);
    }

    if (s[s.length - 1] !== 'a') dfs(s + 'a');
    if (s[s.length - 1] !== 'b') dfs(s + 'b');
    if (s[s.length - 1] !== 'c') dfs(s + 'c');
  };

  dfs('a');
  dfs('b');
  dfs('c');
  return happyStrings[k - 1] || '';
};
