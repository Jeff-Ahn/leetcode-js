// 1684. Count the Number of Consistent Strings
// Difficulty: Easy

/* Description */
// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

/* Constraints */
// 1 <= words.length <= 10^4
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  return words.filter((word) => {
    word = word.split('');
    return word.every((w) => allowed.includes(w));
  }).length;
};
