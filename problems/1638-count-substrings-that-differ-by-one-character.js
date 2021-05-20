// 1638. Count Substrings That Differ by One Character
// Difficulty: Medium

/* Description */
// Given two strings s and t, find the number of ways you can choose a non-empty substring of s and replace a single character by a different character such that the resulting substring is a substring of t. In other words, find the number of substrings in s that differ from some substring in t by exactly one character.

// For example, the underlined substrings in "computer" and "computation" only differ by the 'e'/'a', so this is a valid way.

// Return the number of substrings that satisfy the condition above.

// A substring is a contiguous sequence of characters within a string.

/* Constraints */
// 1 <= s.length, t.length <= 100
// s and t consist of lowercase English letters only.
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  const counts = new Map();
  function countSimilar(sub) {
    if (counts.has(sub)) {
      return counts.get(sub);
    }
    // we only go as far as we can still fit a substring
    // of the desired length
    const slen = sub.length;
    let match = 0;
    for (let i = 0; i <= t.length - slen; i++) {
      let diff = 0;

      for (let pos = 0; pos < slen; pos++) {
        if (sub[pos] !== t[i + pos]) {
          diff++;
        }
        if (diff > 1) {
          break;
        }
      }

      if (diff === 1) {
        // found a match
        match++;
      }
    }
    counts.set(sub, match);
    return match;
  }

  let count = 0;
  // we have to check all lengths from 1 to s.length
  for (let len = 1; len <= s.length; len++) {
    // grab all "windows" in the string
    for (let start = 0; start + len <= s.length; start++) {
      const sub = s.substring(start, start + len);
      count += countSimilar(sub);
    }
  }

  return count;
};
