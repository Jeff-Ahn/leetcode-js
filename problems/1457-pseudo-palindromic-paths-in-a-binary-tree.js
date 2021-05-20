// 1457. Pseudo-Palindromic Paths in a Binary Tree
// Difficulty: Medium

/* Description */
// Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

// Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

/* Constraints */
// The number of nodes in the tree is in the range [1, 10^5].
// 1 <= Node.val <= 9

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
var pseudoPalindromicPaths = function (root) {
  const arr = new Array(9).fill(0);

  let res = 0;
  const dfs = function (node) {
    if (!node) return;

    arr[node.val - 1]++;
    if (!node.left && !node.right) {
      //leaf node
      let oddCount = 0,
        isPalin = true;
      for (const count of arr) {
        if (count % 2 == 1) oddCount++;
        if (oddCount > 1) {
          isPalin = false;
          break;
        }
      }

      if (isPalin) res++;
    }
    dfs(node.left);
    dfs(node.right);
    arr[node.val - 1]--;
  };

  dfs(root);
  return res;
};
