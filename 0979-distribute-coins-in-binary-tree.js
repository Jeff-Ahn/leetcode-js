// 979. Distribute Coins in Binary Tree
// Difficulty: Medium

/* Description */
// You are given the root of a binary tree with n nodes where each node in the tree has node.val coins and there are n coins total.

// In one move, we may choose two adjacent nodes and move one coin from one node to another. (A move may be from parent to child, or from child to parent.)

// Return the number of moves required to make every node have exactly one coin.

/* Constraints */
// The number of nodes in the tree is n.
// 1 <= n <= 100
// 0 <= Node.val <= n
// The sum of Node.val is n.

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
var distributeCoins = function (root) {
  let answer = 0;
  const dfs = (node) => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    answer += Math.abs(left) + Math.abs(right);
    return node.val + left + right - 1;
  };
  dfs(root);
  return answer;
};
