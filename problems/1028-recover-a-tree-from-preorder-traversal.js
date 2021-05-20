// 1028. Recover a Tree From Preorder Traversal
// Difficulty: Hard

/* Description */
// We run a preorder depth-first search (DFS) on the root of a binary tree.

// At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.  If the depth of a node is D, the depth of its immediate child is D + 1.  The depth of the root node is 0.

// If a node has only one child, that child is guaranteed to be the left child.

// Given the output S of this traversal, recover the tree and return its root.

/* Constraints */
// The number of nodes in the original tree is in the range [1, 1000].
// 1 <= Node.val <= 10^9

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  let i = 0;
  let hash = {};

  while (i < S.length) {
    let numDash = 0;
    let numStr = '';

    while (S[i] == '-' && i < S.length) {
      i++;
      numDash++;
    }
    while (S[i] != '-' && i < S.length) {
      numStr += S[i];
      i++;
    }
    let nextNum = parseInt(numStr);

    //insert in tree
    let newNode = new TreeNode(nextNum);
    let parentNode = hash[numDash];

    if (parentNode != undefined) {
      if (parentNode.left == null) {
        parentNode.left = newNode;
      } else {
        parentNode.right = newNode;
      }
    }

    //insert in hash
    hash[numDash + 1] = newNode;
  }

  return hash[1];
};
