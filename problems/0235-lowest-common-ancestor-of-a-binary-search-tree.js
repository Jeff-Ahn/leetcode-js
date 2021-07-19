// 235. Lowest Common Ancestor of a Binary Search Tree
// Difficulty: Easy

/* Description */
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

/* Constraints */
// The number of nodes in the tree is in the range [2, 10^5].
// -10^9 <= Node.val <= 10^9
// All Node.val are unique.
// p != q
// p and q will exist in the BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > q.val) [p, q] = [q, p];
  let node = root;
  while (node) {
    const { left, right, val } = node;
    if (p.val < val && q.val < val) {
      node = left;
    } else if (p.val <= val && val <= q.val) {
      return node;
    } else {
      node = right;
    }
  }
};
