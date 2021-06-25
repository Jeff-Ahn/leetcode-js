// 792. Number of Matching Subsequences
// Difficulty: Medium

/* Description */
// Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

/* Constraints */
// 1 <= s.length <= 5 * 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 50
// s and words[i] consist of only lowercase English letters.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const wordsCount = words.reduce((count, word) => {
    count.set(word, (count.get(word) ?? 0) + 1);
    return count;
  }, new Map());
  function isSubsequence(s, word) {
    let index = -1;
    for (let ch of word) {
      index = s.indexOf(ch, index + 1);
      if (index < 0) return false;
    }
    return true;
  }

  return Array.from(new Set(words)).reduce((count, word) => {
    return count + (isSubsequence(s, word) ? wordsCount.get(word) : 0);
  }, 0);
};
