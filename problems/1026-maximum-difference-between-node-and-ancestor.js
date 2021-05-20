// 1026. Maximum Difference Between Node and Ancestor
// Difficulty: Medium

/* Description */
// Given the root of a binary tree, find the maximum value V for which there exist different nodes A and B where V = |A.val - B.val| and A is an ancestor of B.

// A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.

/* Constraints */
// The number of nodes in the tree is in the range [2, 5000].
// 0 <= Node.val <= 10^5

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
var maxAncestorDiff = function (root) {
  const result = [];
  const dfs = (node, min = 100001, max = -1) => {
    const { val, left, right } = node;
    if (min > val) min = val;
    if (max < val) max = val;
    if (!left && !right) result.push(Math.abs(max - min));
    left && dfs(left, min, max);
    right && dfs(right, min, max);
  };
  dfs(root);
  return Math.max(...result);
};
