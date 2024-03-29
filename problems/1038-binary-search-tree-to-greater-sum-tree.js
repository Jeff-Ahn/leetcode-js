// 1038. Binary Search Tree to Greater Sum Tree
// Difficulty: Medium

/* Description */
// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Note: This question is the same as 538: https://leetcode.com/problems/convert-bst-to-greater-tree/

/* Constraints */
// The number of nodes in the tree is in the range [1, 100].
// 0 <= Node.val <= 100
// All the values in the tree are unique.
// root is guaranteed to be a valid binary search tree.

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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let sum = 0;

  const inOrder = (node) => {
    node.right && inOrder(node.right);
    sum += node.val;
    node.val = sum;
    node.left && inOrder(node.left);
  };

  inOrder(root);
  return root;
};
