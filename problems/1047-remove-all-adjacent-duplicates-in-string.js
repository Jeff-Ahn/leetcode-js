// 1047. Remove All Adjacent Duplicates In String
// Difficulty: Easy

/* Description */
// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

/* Note */
// 1 <= S.length <= 20000
// S consists only of English lowercase letters.

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === S[i + 1]) {
      return removeDuplicates(S.slice(0, i) + S.slice(i + 2));
    }
  }
  return S;
};

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }
  return stack.join('');
};
