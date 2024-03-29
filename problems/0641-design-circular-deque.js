// 641. Design Circular Deque
// Difficulty: Medium

/* Description */
// Design your implementation of the circular double-ended queue (deque).

// Your implementation should support following operations:

// MyCircularDeque(k): Constructor, set the size of the deque to be k.
// insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
// insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
// deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
// deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
// getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
// getRear(): Gets the last item from Deque. If the deque is empty, return -1.
// isEmpty(): Checks whether Deque is empty or not.
// isFull(): Checks whether Deque is full or not.

/* Note */
// All values will be in the range of [0, 1000].
// The number of operations will be in the range of [1, 1000].
// Please do not use the built-in Deque library.

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.circularDeque = [];
  this.maxSize = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.circularDeque.length < this.maxSize) {
    this.circularDeque.unshift(value);
    return true;
  }
  return false;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.circularDeque.length < this.maxSize) {
    this.circularDeque.push(value);
    return true;
  }
  return false;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.circularDeque.length !== 0) {
    this.circularDeque.shift();
    return true;
  }
  return false;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.circularDeque.length !== 0) {
    this.circularDeque.pop();
    return true;
  }
  return false;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.circularDeque.length !== 0 ? this.circularDeque[0] : -1;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  const length = this.circularDeque.length;
  return length !== 0 ? this.circularDeque[length - 1] : -1;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.circularDeque.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.circularDeque.length === this.maxSize;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
