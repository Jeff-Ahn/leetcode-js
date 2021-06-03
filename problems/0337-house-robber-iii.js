// 337. House Robber III
// Difficulty: Medium

/* Description */
// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

// Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

/* Constraints */
// The number of nodes in the tree is in the range [1, 10^4].
// 0 <= Node.val <= 10^4

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
var rob = function (root) {
  return Math.max(...helper(root));
};

const helper = (node) => {
  if (!node) return [0, 0];
  const left = helper(node.left);
  const right = helper(node.right);

  const childMax = left[0] + right[0];
  const curMax = Math.max(childMax, node.val + left[1] + right[1]);

  return [curMax, childMax];
};
