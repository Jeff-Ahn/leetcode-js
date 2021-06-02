// 1405. Longest Happy String
// Difficulty: Medium

/* Description */
// A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.

// Given three integers a, b and c, return any string s, which satisfies following conditions:

// s is happy and longest possible.
// s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
// s will only contain 'a', 'b' and 'c' letters.
// If there is no such string s return the empty string "".

/* Constraints */
// 0 <= a, b, c <= 100
// a + b + c > 0

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  const len = a + b + c;
  const chars = [
    ['a', a],
    ['b', b],
    ['c', c],
  ];
  let result = '';
  while (result.length < len) {
    const i = result.length;
    chars.sort(([c1, c1count], [c2, c2count]) => c2count - c1count);
    const char =
      result[i - 1] === result[i - 2] && result[i - 1] === chars[0][0]
        ? chars[1]
        : chars[0];
    if (char[1] === 0) break;
    result = result + char[0];
    char[1]--;
  }
  return result;
};
