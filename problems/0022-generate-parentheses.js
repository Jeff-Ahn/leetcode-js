// 22. Generate Parentheses
// Difficulty: Medium

/* Description */
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/* Constraints */
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answer = [];

  const helper = (level, stack = '', state = 0) => {
    if (level === n) {
      for (let i = 0; i < state; i++) {
        stack += ')';
      }
      return answer.push(stack);
    }

    helper(level + 1, stack + '(', state + 1);
    if (state > 0) {
      helper(level, stack + ')', state - 1);
    }
  };

  helper(0);
  return answer;
};
