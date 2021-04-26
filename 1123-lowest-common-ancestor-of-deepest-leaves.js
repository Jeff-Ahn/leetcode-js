// 1123. Lowest Common Ancestor of Deepest Leaves
// Difficulty: Medium

/* Description */
// Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

// Recall that:

// The node of a binary tree is a leaf if and only if it has no children
// The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
// The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.
// Note: This question is the same as 865: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/

/* Constraints */
// The number of nodes in the tree will be in the range [1, 1000].
// 0 <= Node.val <= 1000
// The values of the nodes in the tree are unique.

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
var lcaDeepestLeaves = function (root) {
  if (!root.left && !root.right) return root;

  const result = [];
  let max = 0;

  const dfs = (node, depth, path = '') => {
    if (max < depth) max = depth;
    node.left && dfs(node.left, depth + 1, path + 'L');
    node.right && dfs(node.right, depth + 1, path + 'R');

    if (!node.left && !node.right) result.push([node, depth, path]);
  };

  dfs(root, 0);
  const leaves = result.filter(([_, depth]) => depth === max);
  if (leaves.length === 1) return leaves[0][0];

  let answerPath = '';

  for (let i = 0; i < leaves[0][2].length; i++) {
    let path = leaves[0][2][i];
    if (leaves.every((leave) => leave[2][i] === path)) answerPath += path;
    else break;
  }

  let answer = root;

  for (let path of answerPath) {
    if (path === 'L') answer = answer.left;
    else answer = answer.right;
  }

  return answer;
};
