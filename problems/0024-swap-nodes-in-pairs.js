// 24. Swap Nodes in Pairs
// Difficulty: Medium

/* Description */
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

/* Constraints */
// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  const tmp = head.next;
  head.next = swapPairs(head.next.next);
  tmp.next = head;
  return tmp;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) {
    return head;
  }

  let left = head;
  let right = left.next;
  let prev = null;

  let newHead = head;

  while (right) {
    left.next = right.next;
    right.next = left;
    if (newHead === head) {
      newHead = right;
    }
    if (prev) {
      prev.next = right;
    }

    prev = left;

    left = left.next;
    right = left ? left.next : null;
  }

  return newHead;
};
