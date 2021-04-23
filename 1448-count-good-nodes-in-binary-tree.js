// 1448. Count Good Nodes in Binary Tree
// Difficulty: Medium

/* Description */
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

/* Constraints */
// The number of nodes in the binary tree is in the range [1, 10^5].
// Each node's value is between [-10^4, 10^4].

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
var goodNodes = function (root) {
  if (!root) return 0;

  let result = 0;
  const dfs = (r, max) => {
    if (r.val >= max) {
      max = r.val;
      ++result;
    }
    if (r.left) {
      dfs(r.left, max);
    }
    if (r.right) {
      dfs(r.right, max);
    }
  };

  dfs(root, root.val);

  return result;
};
