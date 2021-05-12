// 784. Letter Case Permutation
// Difficulty: Medium

/* Description */
// Given a string s, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.

/* Constraints */
// s will be a string with length between 1 and 12.
// s will consist only of letters or digits.

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const stringSet = new Set();

  const dfs = (idx, result = '') => {
    if (result.length === s.length) return stringSet.add(result);
    let ch = s[idx];
    dfs(idx + 1, result + ch);
    if (/[A-Z]/.test(ch)) {
      ch = ch.toLowerCase();
    } else if (/[a-z]/.test(ch)) {
      ch = ch.toUpperCase();
    }
    dfs(idx + 1, result + ch);
  };

  dfs(0);

  return [...stringSet];
};

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  result = [];

  fill_blanks(S, '', 0, result);
  return result;
};

function fill_blanks(S, slate, idx, result) {
  if (idx === S.length) {
    result.push(slate);
    return;
  }

  if (!isNaN(+S[idx])) {
    fill_blanks(S, slate + S[idx], idx + 1, result);
  } else {
    fill_blanks(S, slate + S[idx].toUpperCase(), idx + 1, result);
    fill_blanks(S, slate + S[idx].toLowerCase(), idx + 1, result);
  }
}
