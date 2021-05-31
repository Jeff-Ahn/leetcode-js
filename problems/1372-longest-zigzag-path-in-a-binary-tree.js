// 1372. Longest ZigZag Path in a Binary Tree
// Difficulty: Medium

/* Description */
// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.

/* Constraints */
// The number of nodes in the tree is in the range [1, 5 * 10^4].
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
var longestZigZag = function (root) {
  let max = 0;

  const dfs = (node, prevDirection, count = 0) => {
    if (count > max) max = count;
    if (prevDirection === 'left') {
      node.right && dfs(node.right, 'right', count + 1);
      node.left && dfs(node.left, 'left', 1);
    } else {
      node.left && dfs(node.left, 'left', count + 1);
      node.right && dfs(node.right, 'right', 1);
    }
  };

  dfs(root, 'left');
  dfs(root, 'right');

  return max;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  let max = 0;

  const helper = (root) => {
    if (!root) return [0, 0];

    let [l1, r1] = helper(root.left);
    let [l2, r2] = helper(root.right);

    let [l, r] = [root.left ? r1 + 1 : 0, root.right ? l2 + 1 : 0];
    max = Math.max(max, Math.max(l, r));
    return [l, r];
  };

  helper(root);
  return max;
};
