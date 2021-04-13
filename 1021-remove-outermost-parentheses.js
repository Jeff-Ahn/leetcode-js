// 1021. Remove Outermost Parentheses
// Difficulty: Easy

/* Description */
// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

/* Note */
// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  const getPrimitiveOfS = (s) => {
    let count = 0;
    const primitives = [];
    let start = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') count++;
      else count--;
      if (count === 0) {
        primitives.push(s.slice(start + 1, i));
        start = i + 1;
      }
    }
    return primitives;
  };

  return getPrimitiveOfS(S).join('');
};
