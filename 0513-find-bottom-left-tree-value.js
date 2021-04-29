// 513. Find Bottom Left Tree Value
// Difficulty: Medium

/* Description */
// Given the root of a binary tree, return the leftmost value in the last row of the tree.

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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  const queue = [[root, 0]];
  const leftmostNodes = [];
  while (queue.length) {
    const [node, depth] = queue.shift();

    if (!leftmostNodes[depth]) leftmostNodes[depth] = node;

    node.left && queue.push([node.left, depth + 1]);
    node.right && queue.push([node.right, depth + 1]);
  }

  return leftmostNodes[leftmostNodes.length - 1].val;
};
