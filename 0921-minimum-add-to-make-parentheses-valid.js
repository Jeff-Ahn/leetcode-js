// 921. Minimum Add to Make Parentheses Valid
// Difficulty: Medium

/* Description */
// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

/* Note */
// S.length <= 1000
// S only consists of '(' and ')' characters.

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let answer = 0;
  let count = 0;

  for (let ch of S) {
    if (ch === '(') {
      if (count < 0) {
        answer += -count;
        count = 0;
      }
      count++;
    } else {
      count--;
    }
  }
  return Math.abs(count) + answer;
};
