// 894. All Possible Full Binary Trees
// Difficulty: Medium

/* Description */
// Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

// Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

// A full binary tree is a binary tree where each node has exactly 0 or 2 children.

/* Constraints */
// 1 <= n <= 20

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  if (n === 1) return [new TreeNode(0)];
  const res = [];
  for (let i = 1; i < n; i += 2) {
    const left = allPossibleFBT(i);
    const right = allPossibleFBT(n - i - 1);
    for (let l of left)
      for (let r of right) {
        const root = new TreeNode(0);
        root.left = l;
        root.right = r;
        res.push(root);
      }
  }
  return res;
};

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (N) {
  if (N % 2 === 0) return [];
  const cache = new Map();
  for (let i = 1; i <= N; i += 2) {
    if (i === 1) cache.set(i, [new TreeNode(0)]);
    else {
      const arr = [];
      for (let j = 1; j < i; j += 2) {
        const leftList = cache.get(j);
        const rightList = cache.get(i - j - 1);
        for (let left of leftList) {
          for (let right of rightList) {
            arr.push(new TreeNode(0, left, right));
          }
        }
      }
      cache.set(i, arr);
    }
  }
  return cache.get(N);
};
