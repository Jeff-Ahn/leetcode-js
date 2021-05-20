// 669. Trim a Binary Search Tree
// Difficulty: Medium

/* Description */
// Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.

// Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.

/* Constraints */
// The number of nodes in the tree in the range [1, 10^4].
// 0 <= Node.val <= 10^4
// The value of each node in the tree is unique.
// root is guaranteed to be a valid binary search tree.
// 0 <= low <= high <= 10^4

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return root;

  if (root.val > high) return trimBST(root.left, low, high);
  else if (root.val < low) return trimBST(root.right, low, high);

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
