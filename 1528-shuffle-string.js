// 1528. Shuffle String
// Difficulty: Easy

/* Description */
// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

/* Constraints */
// s.length == indices.length == n
// 1 <= n <= 100
// s contains only lower-case English letters.
// 0 <= indices[i] < n
// All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const newString = [];

  indices.forEach((moveIdx, currentIdx) => {
    newString[moveIdx] = s[currentIdx];
  });

  return newString.join('');
};
