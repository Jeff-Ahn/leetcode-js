// 791. Custom Sort String
// Difficulty: Medium

/* Description */
// order and str are strings composed of lowercase letters. In order, no letter occurs more than once.

// order was sorted in some custom order previously. We want to permute the characters of str so that they match the order that order was sorted. More specifically, if x occurs before y in order, then x should occur before y in the returned string.

// Return any permutation of str (as a string) that satisfies this property.

/* Note */
// order has length at most 26, and no character is repeated in order.
// str has length at most 200.
// order and str consist of lowercase letters only.

/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function (order, str) {
  return [...str].sort((a, b) => order.indexOf(a) - order.indexOf(b)).join('');
};
