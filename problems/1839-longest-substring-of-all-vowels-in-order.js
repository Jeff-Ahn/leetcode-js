// 1839. Longest Substring Of All Vowels in Order
// Difficulty: Medium

/* Description */
// A string is considered beautiful if it satisfies the following conditions:

// Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
// The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
// For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

// Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

// A substring is a contiguous sequence of characters in a string.

/* Constraints */
// 1 <= word.length <= 5 * 10^5
// word consists of characters 'a', 'e', 'i', 'o', and 'u'.

/**
 * @param {string} word
 * @return {number}
 */
function longestBeautifulSubstring(word) {
  let res = 0,
    cur = 'a',
    cnt = 0;
  const set = new Set();
  for (let ch of word) {
    if (ch < cur) {
      set.clear();
      cnt = 0;
      cur = 'a';
      if (ch === cur) {
        cnt++;
        set.add(cur);
      }
    } else {
      cnt++;
      set.add(ch);
      cur = ch;
      if (set.size === 5) res = Math.max(res, cnt);
    }
  }
  return res;
}
