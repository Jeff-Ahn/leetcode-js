// 1315. Sum of Nodes with Even-Valued Grandparent
// Difficulty: Medium

/* Description */
// Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

// If there are no nodes with an even-valued grandparent, return 0.

/* Constraints */
// The number of nodes in the tree is between 1 and 10^4.
// The value of nodes is between 1 and 100.

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
var sumEvenGrandparent = function (root) {
  let answer = 0;

  const dfs = (node) => {
    if (!node.left && !node.right) return;
    if (node.val % 2 === 0) {
      const llv = node?.left?.left?.val || 0;
      const lrv = node?.left?.right?.val || 0;
      const rlv = node?.right?.left?.val || 0;
      const rrv = node?.right?.right?.val || 0;
      answer += llv + lrv + rlv + rrv;
    }
    node.left && dfs(node.left);
    node.right && dfs(node.right);
  };

  dfs(root);
  return answer;
};
