// 1302. Deepest Leaves Sum
// Difficulty: Medium

/* Description */
// Given the root of a binary tree, return the sum of values of its deepest leaves.

/* Constraints */
// The number of nodes in the tree is in the range [1, 10^4].
// 1 <= Node.val <= 100

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
var deepestLeavesSum = function (root) {
  const nodeMap = new Map();
  let max = 0;

  const dfs = (node, depth) => {
    if (!node.left && !node.right) {
      if (!nodeMap.get(depth)) {
        nodeMap.set(depth, []);
      }
      nodeMap.get(depth).push(node.val);
      max = Math.max(max, depth);
    }
    if (node.left) dfs(node.left, depth + 1);
    if (node.right) dfs(node.right, depth + 1);
  };
  dfs(root, 0);

  return nodeMap.get(max).reduce((acc, cur) => acc + cur, 0);
};
