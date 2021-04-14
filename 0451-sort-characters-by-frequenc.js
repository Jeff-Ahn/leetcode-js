// 451. Sort Characters By Frequency
// Difficulty: Medium

/* Description */
// Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

/* Constraints */
// 1 <= s.length <= 5 * 10^5
// s consists of English letters and digits.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();
  for (let ch of s) {
    map.set(ch, map.get(ch) + 1 || 1);
  }
  return s
    .split('')
    .sort((a, b) =>
      map.get(b) === map.get(a) ? a.localeCompare(b) : map.get(b) - map.get(a)
    )
    .join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var stringArray = s.split('');
  var stringMap = new Map();
  // Get the character frequency in map
  stringArray.forEach((character) => {
    stringMap.set(character, (stringMap.get(character) || 0) + 1);
  });
  var sortedArray = [...stringMap.keys()].sort(
    (a, b) => stringMap.get(b) - stringMap.get(a)
  );
  var finalString = '';
  sortedArray.forEach((character) => {
    finalString += character.repeat(stringMap.get(character));
  });
  return finalString;
};
