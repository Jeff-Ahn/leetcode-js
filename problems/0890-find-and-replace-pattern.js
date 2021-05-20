// 890. Find and Replace Pattern
// Difficulty: Medium

/* Description */
// You have a list of words and a pattern, and you want to know which words in words matches the pattern.
// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
// (Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)
// Return a list of the words in words that match the given pattern.
// You may return the answer in any order.

/* Note */
// 1 <= words.length <= 50
// 1 <= pattern.length = words[i].length <= 20

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  function f(s) {
    const map = new Map();
    let res = '';
    for (let c of s) {
      if (!map.has(c)) map.set(c, map.size);
      res += map.get(c);
    }
    return res;
  }

  const p = f(pattern);
  return words.filter((w) => p === f(w));
};
