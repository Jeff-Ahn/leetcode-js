// 1048. Longest String Chain
// Difficulty: Medium

/* Description */
// You are given an array of words where each word consists of lowercase English letters.

// wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

// For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

// Return the length of the longest possible word chain with words chosen from the given list of words.

/* Constraints */
// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] only consists of lowercase English letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((a, b) => a.length - b.length);

  const map = new Map();

  let res = 1;

  for (const word of words) {
    const n = word.length;
    let max = 1;

    for (let i = 0; i < n; i++) {
      const front = word.slice(0, i);
      const back = word.slice(i + 1);

      const removed = front + back;

      if (map.has(removed)) {
        max = Math.max(max, map.get(removed) + 1);
      }
    }

    map.set(word, max);

    res = Math.max(res, max);
  }

  return res;
};
