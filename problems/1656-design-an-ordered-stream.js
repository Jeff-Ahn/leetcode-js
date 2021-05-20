// 1656. Design an Ordered Stream
// Difficulty: Easy

/* Description */
// There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

// Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

// Implement the OrderedStream class:

// OrderedStream(int n) Constructs the stream to take n values.
// String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.

/* Constraints */
// 1 <= n <= 1000
// 1 <= id <= n
// value.length == 5
// value consists only of lowercase letters.
// Each call to insert will have a unique id.
// Exactly n calls will be made to insert.

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.n = n;
  this.stream = new Map();
  for (let i = 1; i <= n; i++) {
    this.stream.set(i, null);
  }
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  const returnArr = [];
  this.stream.set(idKey, value);

  if (
    idKey === 1 ||
    [...this.stream.keys()]
      .slice(0, idKey)
      .every((key) => this.stream.get(key) !== null)
  ) {
    while (this.stream.get(idKey) !== null && idKey <= this.n) {
      returnArr.push(this.stream.get(idKey));
      idKey++;
    }
  }
  return returnArr;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.index = 0;
  this.arr = [];
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.arr[idKey - 1] = value;

  const results = [];
  if (this.index === idKey - 1) {
    while (this.arr[this.index] !== undefined) {
      let data = this.arr[this.index];
      results.push(data);
      this.index++;
    }
  }
  return results;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
