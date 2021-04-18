// 865. Smallest Subtree with all the Deepest Nodes
// Difficulty: Medium

/* Description */
// Given the root of a binary tree, the depth of each node is the shortest distance to the root.

// Return the smallest subtree such that it contains all the deepest nodes in the original tree.

// A node is called the deepest if it has the largest depth possible among any node in the entire tree.

// The subtree of a node is tree consisting of that node, plus the set of all descendants of that node.

// Note: This question is the same as 1123: https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/

/* Constraints */
// The number of nodes in the tree will be in the range [1, 500].
// 0 <= Node.val <= 500
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
var subtreeWithAllDeepest = function (root) {
  const traverse = (node, depth) => {
    let subtreeL, subtreeR;
    let depthL = depth;
    let depthR = depth;

    if (node.left) [subtreeL, depthL] = traverse(node.left, depth + 1);
    if (node.right) [subtreeR, depthR] = traverse(node.right, depth + 1);
    if (depthL === depthR) return [node, depthL];
    else return depthL > depthR ? [subtreeL, depthL] : [subtreeR, depthR];
  };
  return traverse(root, 0)[0];
};
