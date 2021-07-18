// 3. Longest Substring Without Repeating Characters
// Difficulty: Medium

/* Description */
// Given a string s, find the length of the longest substring without repeating characters.

/* Constraints */
// 0 <= s.length <= 5 * 10^4
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let longest = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      longest = Math.max(longest, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return longest;
};
