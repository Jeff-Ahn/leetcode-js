// 1347. Minimum Number of Steps to Make Two Strings Anagram
// Difficulty: Medium

/* Description */
// Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

/* Constraints */
// 1 <= s.length <= 50000
// s.length == t.length
// s and t contain lower-case English letters only.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const charsOfS = {};
  const charsOfT = {};
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    charsOfS[s[i]] ? charsOfS[s[i]]++ : (charsOfS[s[i]] = 1);
    charsOfT[t[i]] ? charsOfT[t[i]]++ : (charsOfT[t[i]] = 1);
  }

  for (let key of Object.keys(charsOfS)) {
    const tCount = charsOfT[key] || 0;
    answer += charsOfS[key] - tCount > 0 ? charsOfS[key] - tCount : 0;
  }
  return answer;
};
