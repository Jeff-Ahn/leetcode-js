// 199. Binary Tree Right Side View
// Difficulty: Medium

/* Description */
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

/* Constraints */
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  const queue = [[root, 0]];
  const answer = [];
  const depthMap = new Map();

  while (queue.length) {
    const [node, depth] = queue.shift();
    if (!depthMap.get(depth)) depthMap.set(depth, []);

    depthMap.get(depth).push(node.val);
    node.left && queue.push([node.left, depth + 1]);
    node.right && queue.push([node.right, depth + 1]);
  }

  for (const nodes of depthMap.values()) {
    answer.push(nodes.pop());
  }
  return answer;
};
