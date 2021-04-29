// 515. Find Largest Value in Each Tree Row
// Difficulty: Medium

/* Description */
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

/* Constraints */
// The number of nodes in the tree is in the range [1, 10^4].
// -2^31 <= Node.val <= 2^31 - 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  const queue = [[root, 0]];
  const maxRowValues = [];

  while (queue.length) {
    const [node, depth] = queue.shift();
    if (maxRowValues[depth] === undefined || maxRowValues[depth] < node.val)
      maxRowValues[depth] = node.val;

    node.left && queue.push([node.left, depth + 1]);
    node.right && queue.push([node.right, depth + 1]);
  }

  return maxRowValues;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let count = queue.length;
    let max = -Infinity;
    for (let i = 0; i < count; i++) {
      let curr = queue.shift();
      max = Math.max(max, curr.val);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }

    result.push(max);
  }

  return result;
};
