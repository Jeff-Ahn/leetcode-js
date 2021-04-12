// 1286. Iterator for Combination
// Difficulty: Medium

/* Description */
// Design the CombinationIterator class:

// CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
// next() Returns the next combination of length combinationLength in lexicographical order.
// hasNext() Returns true if and only if there exists a next combination.

/* Constraints */
// 1 <= combinationLength <= characters.length <= 15
// All the characters of characters are unique.
// At most 10^4 calls will be made to next and hasNext.
// It's guaranteed that all calls of the function next are valid.

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.characters = characters;
  this.combinationLength = combinationLength;
  this.cur = 0;
  this.combinations = [];

  const check = new Array(characters.length).fill(false);
  const dfs = (depth, s, check, start) => {
    if (depth === combinationLength) {
      this.combinations.push(s);
    } else {
      for (let i = start; i < check.length; i++) {
        if (check[i]) continue;
        check[i] = true;
        s += characters[i];
        dfs(depth + 1, s, check, i);
        s = s.slice(0, s.length - 1);
        check[i] = false;
      }
    }
  };
  dfs(0, '', check, 0);
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.combinations[this.cur++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.cur < this.combinations.length;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
