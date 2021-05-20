// 429. N-ary Tree Level Order Traversal
// Difficulty: Medium

/* Description */
// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples)

/* Constraints */
// The height of the n-ary tree is less than or equal to 1000
// The total number of nodes is between [0, 10^4]

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const answer = [];

  const queue = [root];
  let level = 0;

  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      const { children } = node;
      for (let cNode of children) {
        queue.push(cNode);
      }
      if (!answer[level]) answer[level] = [];
      answer[level].push(node.val);
    }
    level++;
  }

  return answer;
};
