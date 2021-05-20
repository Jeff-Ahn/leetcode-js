// 1261. Find Elements in a Contaminated Binary Tree
// Difficulty: Medium

/* Description */
// Given a binary tree with the following rules:

// root.val == 0
// If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
// If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
// Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

// You need to first recover the binary tree and then implement the FindElements class:

// FindElements(TreeNode* root) Initializes the object with a contamined binary tree, you need to recover it first.
// bool find(int target) Return if the target value exists in the recovered binary tree.

/* Constraints */
// TreeNode.val == -1
// The height of the binary tree is less than or equal to 20
// The total number of nodes is between [1, 10^4]
// Total calls of find() is between [1, 10^4]
// 0 <= target <= 10^6

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
 */
var FindElements = function (root) {
  this.root = root;
  this.root.val = 0;
  this.values = [0];
  this.recover(this.root);
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.values.indexOf(target) !== -1;
};

FindElements.prototype.recover = function (node) {
  const { left, right, val } = node;
  if (left) {
    left.val = 2 * val + 1;
    this.values.push(left.val);
    this.recover(left);
  }
  if (right) {
    right.val = 2 * val + 2;
    this.values.push(right.val);
    this.recover(right);
  }
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
