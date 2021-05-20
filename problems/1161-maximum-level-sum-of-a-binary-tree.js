// 1161. Maximum Level Sum of a Binary Tree
// Difficulty: Medium

/* Description */
// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

/* Constraints */
// The number of nodes in the tree is in the range [1, 10^4].
// -10^5 <= Node.val <= 10^5

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
var maxLevelSum = function (root) {
  const sumArrOfLevel = [-Infinity];

  const dfs = (node, level) => {
    if (!sumArrOfLevel[level]) sumArrOfLevel[level] = 0;
    sumArrOfLevel[level] += node.val;

    node.left && dfs(node.left, level + 1);
    node.right && dfs(node.right, level + 1);
  };

  dfs(root, 1);
  const max = Math.max(...sumArrOfLevel);
  return sumArrOfLevel.indexOf(max);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let queue = [root];
  let sum = root.val;
  let level = 1;
  let ans = 1;
  while (queue.length) {
    let newQ = [];
    let localSum = 0;
    for (let i = 0; i < queue.length; i++) {
      localSum += queue[i].val;
      queue[i].left && newQ.push(queue[i].left);
      queue[i].right && newQ.push(queue[i].right);
    }
    if (localSum > sum) {
      ans = level;
    }
    level++;
    sum = Math.max(localSum, sum);
    queue = newQ;
  }
  return ans;
};
