// 1130. Minimum Cost Tree From Leaf Values
// Difficulty: Medium

/* Description */
// Given an array arr of positive integers, consider all binary trees such that:

// Each node has either 0 or 2 children;
// The values of arr correspond to the values of each leaf in an in-order traversal of the tree.  (Recall that a node is a leaf if and only if it has 0 children.)
// The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.
// Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.

/* Constraints */
// 2 <= arr.length <= 40
// 1 <= arr[i] <= 15
// It is guaranteed that the answer fits into a 32-bit signed integer (ie. it is less than 2^31).

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let sum = 0;
  while (arr.length !== 1) {
    let min = Number.MAX_SAFE_INTEGER;
    let cur = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let product = arr[i] * arr[i + 1];
      if (product < min) {
        min = product;
        cur = i;
      }
    }
    sum += min;
    let maxInPair = Math.max(arr[cur], arr[cur + 1]);
    arr.splice(cur, 2, maxInPair);
  }

  return sum;
};
